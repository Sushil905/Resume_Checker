import { useState } from "react";
import { screenResume } from "../services/resumeService.js";

export function useResumeScreening() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(payload) {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await screenResume(payload);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || "Resume screening failed");
    } finally {
      setLoading(false);
    }
  }

  return { result, error, loading, submit };
}
