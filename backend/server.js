import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { pingDatabase } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productivityRoutes from "./routes/productivityRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "backend" });
});

app.get("/health/db", async (_req, res, next) => {
  try {
    res.json({ status: (await pingDatabase()) ? "ok" : "error", service: "mysql" });
  } catch (error) {
    next(error);
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/productivity", productivityRoutes);
app.use("/api/resumes", resumeRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
