import express from "express";
import {
  breakdownTask,
  createGoal,
  createInterviewSession,
  createNote,
  createPdfDocument,
  createPlanner,
  createTask,
  getOverview,
  getScore,
  smartSearch,
  toggleSubtask
} from "../controllers/productivityController.js";
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
router.post("/interview", createInterviewSession);
router.post("/pdf", createPdfDocument);

export default router;
