const roles = ["Software Engineer", "Data Scientist", "Frontend Developer"];

export default function ResumeUpload({
  file,
  jobRole,
  loading,
  onFileChange,
  onRoleChange,
  onSubmit
}) {
  return (
    <form className="panel upload-form" onSubmit={onSubmit}>
      <label>
        Target role
        <select value={jobRole} onChange={(event) => onRoleChange(event.target.value)}>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <label>
        Resume file
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(event) => onFileChange(event.target.files?.[0] || null)}
        />
      </label>

      <div className="file-line">{file ? file.name : "PDF, DOCX, or TXT up to 5 MB"}</div>

      <button type="submit" disabled={!file || loading}>
        {loading ? "Screening..." : "Screen Resume"}
      </button>
    </form>
  );
}
