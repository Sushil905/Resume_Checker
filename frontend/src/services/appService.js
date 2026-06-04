import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5099/api"
});

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

export async function login(payload) {
  const { data } = await api.post("/auth/login", payload);
  return data;
}

export async function register(payload) {
  const { data } = await api.post("/auth/register", payload);
  return data;
}

export async function getOverview() {
  const { data } = await api.get("/productivity/overview");
  return data;
}

export async function createTask(payload) {
  const { data } = await api.post("/productivity/tasks", payload);
  return data;
}

export async function breakdownTask(id) {
  const { data } = await api.post(`/productivity/tasks/${id}/breakdown`);
  return data;
}

export async function createPlanner(payload) {
  const { data } = await api.post("/productivity/planner", payload);
  return data;
}

export async function createNote(payload) {
  const { data } = await api.post("/productivity/notes", payload);
  return data;
}

export async function createGoal(payload) {
  const { data } = await api.post("/productivity/goals", payload);
  return data;
}

export async function smartSearch(query) {
  const { data } = await api.get("/productivity/search", { params: { q: query } });
  return data;
}

export async function createInterview(payload) {
  const { data } = await api.post("/productivity/interview", payload);
  return data;
}

export async function createPdfAssistant(payload) {
  const { data } = await api.post("/productivity/pdf", payload);
  return data;
}

export async function uploadPdfDocument(file) {
  const form = new FormData();
  form.append("document", file);
  const { data } = await api.post("/productivity/pdf/upload", form);
  return data;
}

export async function chatWithAssistant(message) {
  const { data } = await api.post("/productivity/assistant/chat", { message });
  return data;
}
