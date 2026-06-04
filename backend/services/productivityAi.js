export function prioritizeTask({ deadline, importance = "Medium" }) {
  const daysLeft = deadline
    ? Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24))
    : 14;

  if (importance === "High" || daysLeft <= 2) {
    return {
      priority: "High",
      reason: "Deadline or importance indicates this should be handled first."
    };
  }

  if (importance === "Medium" || daysLeft <= 7) {
    return {
      priority: "Medium",
      reason: "This has moderate urgency and should be scheduled soon."
    };
  }

  return {
    priority: "Low",
    reason: "This can be handled after higher impact work is complete."
  };
}

export function breakTaskIntoSubtasks(title) {
  const cleanTitle = title || "Complete task";
  return [
    `Define success criteria for ${cleanTitle}`,
    `Collect resources needed for ${cleanTitle}`,
    `Finish the first working version`,
    "Review, improve, and mark complete"
  ];
}

export function buildDailySchedule(tasks, availableMinutes = 240) {
  const slots = [];
  const minutesPerTask = Math.max(30, Math.floor(availableMinutes / Math.max(tasks.length, 1)));
  let hour = 9;
  let minute = 0;

  tasks.slice(0, 8).forEach((task) => {
    const start = formatTime(hour, minute);
    minute += minutesPerTask;
    hour += Math.floor(minute / 60);
    minute %= 60;
    slots.push({
      taskId: task.id,
      title: task.title,
      priority: task.priority,
      start,
      durationMinutes: minutesPerTask
    });
  });

  return slots;
}

export function summarizeNotes(content) {
  const sentences = splitSentences(content);
  return {
    summary: sentences.slice(0, 2).join(" ") || "Notes saved. Add more content for a better summary.",
    keyPoints: sentences.slice(0, 5).map((sentence) => sentence.replace(/\.$/, "")),
    actionItems: inferActionItems(content)
  };
}

export function divideGoal(title) {
  return [
    `Day 1: Plan milestones for ${title}`,
    `Day 2-3: Complete the first measurable step`,
    `Midpoint: Review progress and remove blockers`,
    `Final stretch: Finish, revise, and document results`
  ];
}

export function calculateProductivityScore({ totalTasks, completedTasks, delayedTasks }) {
  if (!totalTasks) return 0;
  const completion = (completedTasks / totalTasks) * 80;
  const delayPenalty = Math.min(delayedTasks * 8, 30);
  return Math.max(0, Math.round(completion + 20 - delayPenalty));
}

export function generateInterviewQuestions(role) {
  return [
    `Tell me about a project that proves you are ready for a ${role} role.`,
    `Which technical decision from your resume would you improve today?`,
    `How do you handle deadlines when multiple important tasks overlap?`,
    `Explain one challenge you solved end-to-end.`
  ];
}

export function answerFromDocument(content, question) {
  const q = (question || "").toLowerCase();
  const sentences = splitSentences(content);
  const scored = sentences
    .map((sentence) => ({
      sentence,
      score: q.split(/\W+/).filter((word) => word && sentence.toLowerCase().includes(word)).length
    }))
    .sort((a, b) => b.score - a.score);

  return scored[0]?.score
    ? scored.slice(0, 3).map((item) => item.sentence).join(" ")
    : "I could not find a strong answer in the uploaded text yet.";
}

function inferActionItems(content) {
  const sentences = splitSentences(content);
  return sentences
    .filter((sentence) => /must|need|todo|action|submit|finish|complete|prepare/i.test(sentence))
    .slice(0, 5);
}

function splitSentences(content = "") {
  return content
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function formatTime(hour, minute) {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}
