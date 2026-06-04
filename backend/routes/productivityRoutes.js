import express from "express";
import {
  breakdownTask,
  chatWithAssistant,
  createGoal,
  createInterviewSession,
  createNote,
  createPdfDocument,
  createPlanner,
  createTask,
  extractPdfDocument,
  getOverview,
  getScore,
  smartSearch,
  toggleSubtask
} from "../controllers/productivityController.js";
import { uploadResume } from "../config/upload.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.use(requireAuth);

router.get("/overview", getOverview);
router.post("/tasks", createTask);
router.post("/tasks/:id/breakdown", breakdownTask);
router.patch("/subtasks/:id/toggle", toggleSubtask);
router.post("/planner", createPlanner);
router.post("/notes", createNote);
router.post("/goals", createGoal);
router.get("/search", smartSearch);
router.get("/score", getScore);
router.post("/assistant/chat", chatWithAssistant);
router.post("/interview", createInterviewSession);
router.post("/pdf/upload", uploadResume.single("document"), extractPdfDocument);
router.post("/pdf", createPdfDocument);

export default router;
