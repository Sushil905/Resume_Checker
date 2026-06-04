export default function AuthPanel({ mode, form, error, onModeChange, onChange, onSubmit }) {
  return (
    <section className="auth-shell">
      <div className="auth-showcase">
        <p className="eyebrow">Smart Workflow OS</p>
        <h1>Plan, analyze, prepare, and track everything from one AI dashboard.</h1>
        <div className="feature-rack">
          <span>AI Planner</span>
          <span>Resume ATS</span>
          <span>PDF Q&A</span>
          <span>Goal Coach</span>
        </div>
      </div>

      <div className="auth-card">
        <p className="eyebrow">AI Productivity Workspace</p>
        <h1>{mode === "login" ? "Login to your dashboard." : "Create your account."}</h1>

        <form className="stack-form" onSubmit={onSubmit}>
          {mode === "register" && (
            <label>
              Name
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            </label>
          )}

          <label>
            Email
            <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="At least 6 characters"
            />
          </label>

          {error && <div className="error">{error}</div>}

          <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
        </form>

        <button className="text-button" type="button" onClick={onModeChange}>
          {mode === "login" ? "Create a new account" : "Already have an account? Login"}
        </button>
      </div>
    </section>
  );
}
