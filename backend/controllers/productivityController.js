import { db } from "../config/db.js";
import {
  answerFromDocument,
  breakTaskIntoSubtasks,
  buildDailySchedule,
  calculateProductivityScore,
  divideGoal,
  generateInterviewQuestions,
  prioritizeTask,
  summarizeNotes
} from "../services/productivityAi.js";

export async function getOverview(req, res, next) {
  try {
    const userId = req.user.id;
    const [[taskCounts]] = await db.execute(
      `SELECT
        COUNT(*) AS totalTasks,
        SUM(status = 'Completed') AS completedTasks,
        SUM(status = 'Pending' AND deadline < CURDATE()) AS delayedTasks
       FROM tasks WHERE user_id = ?`,
      [userId]
    );
    const [tasks] = await db.execute(
      "SELECT * FROM tasks WHERE user_id = ? ORDER BY FIELD(priority, 'High', 'Medium', 'Low'), created_at DESC LIMIT 8",
      [userId]
    );
    const [goals] = await db.execute(
      "SELECT * FROM goals WHERE user_id = ? ORDER BY created_at DESC LIMIT 5",
      [userId]
    );
    const [notes] = await db.execute(
      "SELECT id, title, summary, key_points, action_items, created_at FROM notes WHERE user_id = ? ORDER BY created_at DESC LIMIT 5",
      [userId]
    );

    res.json({
      tasks,
      goals,
      notes,
      score: calculateProductivityScore(taskCounts),
      stats: {
        totalTasks: Number(taskCounts.totalTasks || 0),
        completedTasks: Number(taskCounts.completedTasks || 0),
        delayedTasks: Number(taskCounts.delayedTasks || 0)
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, description = "", deadline = null, importance = "Medium" } = req.body;
    if (!title) {
      res.status(400).json({ message: "Task title is required" });
      return;
    }

    const ai = prioritizeTask({ deadline, importance });
    const [result] = await db.execute(
      `INSERT INTO tasks
        (user_id, title, description, deadline, importance, priority, ai_reason)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [req.user.id, title, description, deadline || null, importance, ai.priority, ai.reason]
    );

    res.status(201).json({ id: result.insertId, title, priority: ai.priority, aiReason: ai.reason });
  } catch (error) {
    next(error);
  }
}

export async function breakdownTask(req, res, next) {
  try {
    const [[task]] = await db.execute(
      "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
      [req.params.id, req.user.id]
    );

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    const subtasks = breakTaskIntoSubtasks(task.title);
    await Promise.all(
      subtasks.map((title) => db.execute("INSERT INTO subtasks (task_id, title) VALUES (?, ?)", [task.id, title]))
    );
    const [rows] = await db.execute("SELECT * FROM subtasks WHERE task_id = ?", [task.id]);
    res.json({ task, subtasks: rows });
  } catch (error) {
    next(error);
  }
}

export async function toggleSubtask(req, res, next) {
  try {
    await db.execute(
      `UPDATE subtasks s
       JOIN tasks t ON t.id = s.task_id
       SET s.status = IF(s.status = 'Completed', 'Pending', 'Completed')
       WHERE s.id = ? AND t.user_id = ?`,
      [req.params.id, req.user.id]
    );
    res.json({ status: "updated" });
  } catch (error) {
    next(error);
  }
}

export async function createPlanner(req, res, next) {
  try {
    const { availableMinutes = 240, planDate = new Date().toISOString().slice(0, 10) } = req.body;
    const [tasks] = await db.execute(
      "SELECT * FROM tasks WHERE user_id = ? AND status = 'Pending' ORDER BY FIELD(priority, 'High', 'Medium', 'Low'), deadline IS NULL, deadline ASC LIMIT 8",
      [req.user.id]
    );
    const schedule = buildDailySchedule(tasks, Number(availableMinutes));
    const [result] = await db.execute(
      "INSERT INTO planner_entries (user_id, plan_date, schedule) VALUES (?, ?, ?)",
      [req.user.id, planDate, JSON.stringify(schedule)]
    );
    res.status(201).json({ id: result.insertId, planDate, schedule });
  } catch (error) {
    next(error);
  }
}

export async function createNote(req, res, next) {
  try {
    const { title = "Untitled Note", content } = req.body;
    if (!content) {
      res.status(400).json({ message: "Note content is required" });
      return;
    }

    const ai = summarizeNotes(content);
    const [result] = await db.execute(
      "INSERT INTO notes (user_id, title, content, summary, key_points, action_items) VALUES (?, ?, ?, ?, ?, ?)",
      [req.user.id, title, content, ai.summary, JSON.stringify(ai.keyPoints), JSON.stringify(ai.actionItems)]
    );
    res.status(201).json({ id: result.insertId, title, ...ai });
  } catch (error) {
    next(error);
  }
}

export async function createGoal(req, res, next) {
  try {
    const { title, targetDate = null } = req.body;
    if (!title) {
      res.status(400).json({ message: "Goal title is required" });
      return;
    }

    const [goalResult] = await db.execute(
      "INSERT INTO goals (user_id, title, target_date) VALUES (?, ?, ?)",
      [req.user.id, title, targetDate || null]
    );
    const targets = divideGoal(title);
    await Promise.all(
      targets.map((target) => db.execute("INSERT INTO goal_targets (goal_id, target_text) VALUES (?, ?)", [goalResult.insertId, target]))
    );
    res.status(201).json({ id: goalResult.insertId, title, targets });
  } catch (error) {
    next(error);
  }
}

export async function smartSearch(req, res, next) {
  try {
    const q = `%${req.query.q || ""}%`;
    const [tasks] = await db.execute(
      "SELECT id, title, description, priority, 'task' AS type FROM tasks WHERE user_id = ? AND (title LIKE ? OR description LIKE ?) LIMIT 10",
      [req.user.id, q, q]
    );
    const [notes] = await db.execute(
      "SELECT id, title, summary AS description, 'note' AS type FROM notes WHERE user_id = ? AND (title LIKE ? OR content LIKE ? OR summary LIKE ?) LIMIT 10",
      [req.user.id, q, q, q]
    );
    res.json({ results: [...tasks, ...notes] });
  } catch (error) {
    next(error);
  }
}

export async function getScore(req, res, next) {
  try {
    const [[counts]] = await db.execute(
      `SELECT
        COUNT(*) AS totalTasks,
        SUM(status = 'Completed') AS completedTasks,
        SUM(status = 'Pending' AND deadline < CURDATE()) AS delayedTasks
       FROM tasks WHERE user_id = ?`,
      [req.user.id]
    );
    res.json({ score: calculateProductivityScore(counts), stats: counts });
  } catch (error) {
    next(error);
  }
}

export async function createInterviewSession(req, res, next) {
  try {
    const { role = "Software Engineer", answer = "" } = req.body;
    const questions = generateInterviewQuestions(role);
    const feedback = answer
      ? "Good start. Improve by adding measurable impact, clearer project context, and trade-offs."
      : "Practice answers using STAR format: situation, task, action, result.";
    const [result] = await db.execute(
      "INSERT INTO interview_sessions (user_id, role, questions, feedback) VALUES (?, ?, ?, ?)",
      [req.user.id, role, JSON.stringify(questions), feedback]
    );
    res.status(201).json({ id: result.insertId, role, questions, feedback });
  } catch (error) {
    next(error);
  }
}

export async function createPdfDocument(req, res, next) {
  try {
    const { title = "Uploaded PDF Notes", content, question = "" } = req.body;
    if (!content) {
      res.status(400).json({ message: "PDF text content is required for this demo endpoint" });
      return;
    }

    const summary = summarizeNotes(content).summary;
    const [result] = await db.execute(
      "INSERT INTO pdf_documents (user_id, title, content, summary) VALUES (?, ?, ?, ?)",
      [req.user.id, title, content, summary]
    );
    res.status(201).json({
      id: result.insertId,
      title,
      summary,
      answer: question ? answerFromDocument(content, question) : ""
    });
  } catch (error) {
    next(error);
  }
}
