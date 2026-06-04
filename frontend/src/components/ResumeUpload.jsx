export const roleCategories = {
  Tech: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Go Developer",
    "Node.js Developer",
    "React Developer",
    "Angular Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer (SRE)",
    "Data Analyst",
    "Data Engineer",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning Engineer",
    "Cybersecurity Analyst",
    "QA Engineer",
    "Automation Tester",
    "System Administrator",
    "Network Engineer",
    "UI/UX Designer",
    "Product Designer",
    "Game Developer",
    "Blockchain Developer",
    "Embedded Engineer"
  ],
  "Non Tech": [
    "Business Analyst",
    "Product Manager",
    "Project Manager",
    "Operations Manager",
    "HR Executive",
    "HR Manager",
    "Talent Acquisition Specialist",
    "Recruiter",
    "Training Coordinator",
    "Customer Success Manager",
    "Administrative Assistant",
    "Executive Assistant",
    "Office Manager",
    "Content Writer",
    "Technical Writer",
    "Research Analyst",
    "Legal Associate",
    "Consultant",
    "Financial Analyst",
    "Accountant",
    "Auditor"
  ],
  "Sales and Marketing": [
    "Sales Executive",
    "Sales Manager",
    "Business Development Executive",
    "Business Development Manager",
    "Inside Sales Representative",
    "Account Executive",
    "Account Manager",
    "Marketing Executive",
    "Digital Marketing Specialist",
    "SEO Specialist",
    "SEM Specialist",
    "Social Media Manager",
    "Brand Manager",
    "Growth Marketer",
    "Email Marketing Specialist",
    "Market Research Analyst",
    "Advertising Specialist"
  ]
};

export const defaultRoleCategory = "Tech";
export const defaultRole = roleCategories[defaultRoleCategory][0];

export default function ResumeUpload({
  file,
  jobRole,
  roleCategory = defaultRoleCategory,
  loading,
  onFileChange,
  onRoleChange,
  onCategoryChange,
  onSubmit
}) {
  const roles = roleCategories[roleCategory] || roleCategories[defaultRoleCategory];

  function handleCategoryChange(event) {
    const nextCategory = event.target.value;
    const firstRole = roleCategories[nextCategory][0];
    onCategoryChange?.(nextCategory);
    onRoleChange(firstRole);
  }

  return (
    <form className="panel upload-form" onSubmit={onSubmit}>
      <div className="role-picker">
        <label>
          Resume category
          <select value={roleCategory} onChange={handleCategoryChange}>
            {Object.keys(roleCategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

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
      </div>

      <label>
        Resume file
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(event) => onFileChange(event.target.files?.[0] || null)}
        />
      </label>

      <div className="file-line">
        {file ? file.name : `Upload resume for ${roleCategory} roles. PDF, DOCX, or TXT up to 5 MB.`}
      </div>

      <button type="submit" disabled={!file || loading}>
        {loading ? "Screening..." : "Screen Resume"}
      </button>
    </form>
  );
}
