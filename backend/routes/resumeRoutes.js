import express from "express";
import { screenResume } from "../controllers/resumeController.js";
import { uploadResume } from "../config/upload.js";
import { requireResumeFile } from "../middleware/validateResume.js";

const router = express.Router();

router.post("/screen", uploadResume.single("resume"), requireResumeFile, screenResume);

export default router;
