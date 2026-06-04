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

export function buildAssistantReply({ message = "", tasks = [], notes = [], goals = [], pdfDocuments = [] }) {
  const cleanMessage = message.trim();
  const lower = cleanMessage.toLowerCase();
  const pendingTasks = tasks.filter((task) => task.status !== "Completed");
  const highPriority = pendingTasks.filter((task) => task.priority === "High");
  const latestNote = notes[0];
  const latestGoal = goals[0];
  const latestPdf = pdfDocuments[0];

  if (!cleanMessage) {
    return "Ask me about your resume, tasks, goals, notes, PDFs, interview prep, or job search plan.";
  }

  if (/task|priority|today|plan|schedule/.test(lower)) {
    const focus = highPriority[0] || pendingTasks[0];
    return focus
      ? `Start with "${focus.title}" because it is marked ${focus.priority}. After that, create subtasks and block focused time in the daily planner.`
      : "You do not have pending tasks yet. Add a goal or task and I can prioritize it into a daily plan.";
  }

  if (/goal|roadmap|progress/.test(lower)) {
    return latestGoal
      ? `Your latest goal is "${latestGoal.title}" at ${latestGoal.progress || 0}% progress. Break it into daily targets, then review progress every evening.`
      : "Add a career goal first, and I will divide it into daily targets with progress tracking.";
  }

  if (/note|summary|summarize/.test(lower)) {
    return latestNote
      ? `Your latest note says: ${latestNote.summary || latestNote.title}. Convert the key points into tasks so they do not stay passive.`
      : "Paste notes in the Notes Summarizer and I will extract key points plus action items.";
  }

  if (/pdf|document|rag/.test(lower)) {
    return latestPdf
      ? `I found "${latestPdf.title}". Ask a specific question from that PDF for the strongest document-grounded answer.`
      : "Upload a PDF/DOCX/TXT in RAG PDF Assistant first, then ask a precise question from the document.";
  }

  if (/resume|ats|job|interview|skill/.test(lower)) {
    return "For resume improvement: optimize missing keywords, add measurable project impact, keep ATS-friendly formatting, then practice interview stories using STAR format.";
  }

  return `Here is a practical next step: turn "${cleanMessage}" into one task, one measurable outcome, and one deadline. I can then prioritize it and build a daily plan.`;
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
