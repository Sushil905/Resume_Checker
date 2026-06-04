import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { buildGenAiInsights } from "../services/genAiService.js";

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

export async function screenResume(req, res, next) {
  try {
    const form = new FormData();
    form.append("resume", fs.createReadStream(req.file.path), req.file.originalname);
    form.append("jobRole", req.body.jobRole || "Software Engineer");

    const { data } = await axios.post(`${ML_SERVICE_URL}/predict`, form, {
      headers: form.getHeaders()
    });

    const genAiInsights = await buildGenAiInsights(data);

    res.json({
      fileName: req.file.originalname,
      ...data,
      genAiInsights
    });
  } catch (error) {
    if (error.response?.data) {
      res.status(error.response.status || 502).json(error.response.data);
      return;
    }
    next(error);
  }
}
