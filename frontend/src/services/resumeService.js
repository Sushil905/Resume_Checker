import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5099/api"
});

export async function screenResume({ file, jobRole }) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("jobRole", jobRole);

  const { data } = await api.post("/resumes/screen", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });

  return data;
}
