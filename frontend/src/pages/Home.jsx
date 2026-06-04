import { useEffect, useState } from "react";
import AuthPanel from "../components/AuthPanel.jsx";
import Dashboard, { getRouteByPath } from "../components/Dashboard.jsx";
import {
  breakdownTask,
  createGoal,
  createInterview,
  createNote,
  createPdfAssistant,
  createPlanner,
  createTask,
  getOverview,
  login,
  register,
  setAuthToken,
  smartSearch,
  uploadPdfDocument
} from "../services/appService.js";
import { screenResume } from "../services/resumeService.js";
import { defaultRole, defaultRoleCategory } from "../components/ResumeUpload.jsx";

const initialAuthForm = { name: "", email: "", password: "" };
const initialTaskForm = { title: "", description: "", deadline: "", importance: "Medium" };

export default function Home() {
  const [route, setRoute] = useState(() => getRouteByPath(window.location.pathname));
  const savedToken = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");
  const [token, setToken] = useState(savedToken || "");
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState(initialAuthForm);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [taskForm, setTaskForm] = useState(initialTaskForm);
  const [breakdownTaskId, setBreakdownTaskId] = useState("");
  const [plannerForm, setPlannerForm] = useState({ availableMinutes: 240 });
  const [noteForm, setNoteForm] = useState({ title: "", content: "" });
  const [goalForm, setGoalForm] = useState({ title: "", targetDate: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [interviewForm, setInterviewForm] = useState({ role: "Software Engineer", answer: "" });
  const [pdfForm, setPdfForm] = useState({ title: "", content: "", question: "" });
  const [pdfUpload, setPdfUpload] = useState({ file: null, status: "" });
  const [outputs, setOutputs] = useState({
    subtasks: [],
    schedule: [],
    searchResults: [],
    goalTargets: [],
    interviewQuestions: [],
    interviewFeedback: "",
    pdfAnswer: ""
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeRoleCategory, setResumeRoleCategory] = useState(defaultRoleCategory);
  const [resumeRole, setResumeRole] = useState(defaultRole);
  const [resumeResult, setResumeResult] = useState(null);
  const [resumeLoading, setResumeLoading] = useState(false);

  useEffect(() => {
    setAuthToken(token);
    if (token) refreshOverview();
  }, [token]);

  useEffect(() => {
    function syncRoute() {
      setRoute(getRouteByPath(window.location.pathname));
    }

    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", "/dashboard");
      syncRoute();
    }

    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  async function refreshOverview() {
    const overview = await getOverview();
    setData(overview);
  }

  async function handleAuthSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const auth = authMode === "login" ? await login(authForm) : await register(authForm);
      setToken(auth.token);
      setUser(auth.user);
      localStorage.setItem("token", auth.token);
      localStorage.setItem("user", JSON.stringify(auth.user));
      setAuthForm(initialAuthForm);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthToken("");
  }

  function navigate(path) {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setRoute(getRouteByPath(path));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function runAction(action) {
    setLoading(true);
    setError("");
    try {
      await action();
      await refreshOverview();
    } catch (err) {
      setError(err.response?.data?.message || "Action failed");
    } finally {
      setLoading(false);
    }
  }

  async function addTask(event) {
    event.preventDefault();
    await runAction(async () => {
      await createTask(taskForm);
      setTaskForm(initialTaskForm);
    });
  }

  async function breakdownSelectedTask() {
    if (!breakdownTaskId) return;
    await runAction(async () => {
      const response = await breakdownTask(breakdownTaskId);
      setOutputs((current) => ({ ...current, subtasks: response.subtasks }));
    });
  }

  async function buildPlanner(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await createPlanner(plannerForm);
      setOutputs((current) => ({ ...current, schedule: response.schedule }));
    });
  }

  async function addNote(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await createNote(noteForm);
      setOutputs((current) => ({
        ...current,
        searchResults: [{ type: "summary", title: response.summary }]
      }));
      setNoteForm({ title: "", content: "" });
    });
  }

  async function addGoal(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await createGoal(goalForm);
      setOutputs((current) => ({ ...current, goalTargets: response.targets }));
      setGoalForm({ title: "", targetDate: "" });
    });
  }

  async function search(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await smartSearch(searchQuery);
      setOutputs((current) => ({ ...current, searchResults: response.results }));
    });
  }

  async function prepareInterview(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await createInterview(interviewForm);
      setOutputs((current) => ({
        ...current,
        interviewQuestions: response.questions,
        interviewFeedback: response.feedback
      }));
    });
  }

  async function askPdf(event) {
    event.preventDefault();
    await runAction(async () => {
      const response = await createPdfAssistant(pdfForm);
      setOutputs((current) => ({ ...current, pdfAnswer: response.answer || response.summary }));
    });
  }

  async function handlePdfUpload(file) {
    if (!file) {
      setPdfUpload({ file: null, status: "" });
      return;
    }

    setLoading(true);
    setError("");
    setPdfUpload({ file, status: "Extracting document text..." });

    try {
      const response = await uploadPdfDocument(file);
      setPdfForm((current) => ({
        ...current,
        title: current.title || response.fileName || file.name,
        content: response.content || current.content
      }));
      setPdfUpload({
        file,
        status: `Uploaded ${response.fileName || file.name} and extracted ${response.wordCount || 0} words.`
      });
    } catch (err) {
      setPdfUpload({
        file,
        status: err.response?.data?.message || "Could not extract this file. Try another PDF/DOCX/TXT or paste text manually."
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleResumeSubmit(event) {
    event.preventDefault();
    if (!resumeFile) return;
    setResumeLoading(true);
    setError("");

    try {
      const response = await screenResume({ file: resumeFile, jobRole: resumeRole });
      setResumeResult(response);
    } catch (err) {
      setError(err.response?.data?.message || "Resume screening failed");
    } finally {
      setResumeLoading(false);
    }
  }

  if (!user) {
    return (
      <AuthPanel
        mode={authMode}
        form={authForm}
        error={error}
        onModeChange={() => setAuthMode(authMode === "login" ? "register" : "login")}
        onChange={(event) => setAuthForm({ ...authForm, [event.target.name]: event.target.value })}
        onSubmit={handleAuthSubmit}
      />
    );
  }

  return (
    <Dashboard
      user={user}
      data={data}
      loading={loading}
      error={error}
      forms={{
        task: taskForm,
        breakdownTaskId,
        planner: plannerForm,
        note: noteForm,
        goal: goalForm,
        search: searchQuery,
        interview: interviewForm,
        pdf: pdfForm
      }}
      resume={{
        file: resumeFile,
        roleCategory: resumeRoleCategory,
        jobRole: resumeRole,
        loading: resumeLoading,
        result: resumeResult
      }}
      outputs={outputs}
      handlers={{
        logout,
        addTask,
        changeTask: (event) => setTaskForm({ ...taskForm, [event.target.name]: event.target.value }),
        changeBreakdownTask: (event) => setBreakdownTaskId(event.target.value),
        breakdownSelectedTask,
        createPlanner: buildPlanner,
        changePlanner: (event) => setPlannerForm({ ...plannerForm, [event.target.name]: event.target.value }),
        addNote,
        changeNote: (event) => setNoteForm({ ...noteForm, [event.target.name]: event.target.value }),
        addGoal,
        changeGoal: (event) => setGoalForm({ ...goalForm, [event.target.name]: event.target.value }),
        search,
        changeSearch: (event) => setSearchQuery(event.target.value),
        createInterview: prepareInterview,
        changeInterview: (event) => setInterviewForm({ ...interviewForm, [event.target.name]: event.target.value }),
        askPdf,
        changePdf: (event) => setPdfForm({ ...pdfForm, [event.target.name]: event.target.value }),
        uploadPdf: (event) => handlePdfUpload(event.target.files?.[0] || null),
        setResumeFile,
        setResumeRoleCategory,
        setResumeRole,
        screenResume: handleResumeSubmit
      }}
      pdfUpload={pdfUpload}
      onNavigate={navigate}
      route={route}
    />
  );
}
