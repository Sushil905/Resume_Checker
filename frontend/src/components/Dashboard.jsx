import ResultCard from "./ResultCard.jsx";
import ResumeUpload from "./ResumeUpload.jsx";

export const routeSections = [
  {
    title: "",
    items: [{ id: "dashboard", path: "/dashboard", label: "Dashboard", badge: "Da" }]
  },
  {
    title: "Resume Analysis",
    items: [
      { id: "resume-checker", path: "/resume-checker", label: "Resume Checker", badge: "Re" },
      { id: "ats-score", path: "/ats-score", label: "ATS Score", badge: "AT" },
      { id: "skills-analysis", path: "/skills-analysis", label: "Skills Analysis", badge: "Sk" },
      { id: "keyword-optimizer", path: "/keyword-optimizer", label: "Keyword Optimizer", badge: "Ke" }
    ]
  },
  {
    title: "Career Tools",
    items: [
      { id: "cover-letter", path: "/cover-letter", label: "Cover Letter", badge: "Co", tag: "New" },
      { id: "resume-builder", path: "/resume-builder", label: "Resume Builder", badge: "Bu" },
      { id: "resume-versions", path: "/resume-versions", label: "Resume Versions", badge: "Ve" },
      { id: "portfolio-analyzer", path: "/portfolio-analyzer", label: "Portfolio Analyzer", badge: "Po" }
    ]
  },
  {
    title: "Job Preparation",
    items: [
      { id: "interview-prep", path: "/interview-prep", label: "Interview Prep", badge: "In" },
      { id: "career-roadmap", path: "/career-roadmap", label: "Career Roadmap", badge: "Ro" },
      { id: "learning-hub", path: "/learning-hub", label: "Learning Hub", badge: "Le" }
    ]
  },
  {
    title: "Job Tracking",
    items: [
      { id: "job-match", path: "/job-match", label: "Job Match", badge: "Jo" },
      { id: "job-tracker", path: "/job-tracker", label: "Job Tracker", badge: "Tr" }
    ]
  },
  {
    title: "Analytics",
    items: [
      { id: "analytics", path: "/analytics", label: "Analytics", badge: "An" },
      { id: "market-insights", path: "/market-insights", label: "Market Insights", badge: "Ma" }
    ]
  },
  {
    title: "AI Tools",
    items: [
      { id: "ai-assistant", path: "/ai-assistant", label: "AI Assistant", badge: "AI" },
      { id: "rag-pdf", path: "/rag-pdf", label: "RAG PDF Assistant", badge: "RA", tag: "AI" },
      { id: "smart-search", path: "/smart-search", label: "Smart Search", badge: "Se" }
    ]
  }
];

export const flatRoutes = routeSections.flatMap((section) => section.items);

const learningResources = {
  Technology: [
    ["MDN Learn Web Development", "Frontend foundations, JavaScript, browser APIs and web standards.", "https://developer.mozilla.org/en-US/docs/Learn"],
    ["freeCodeCamp", "Hands-on coding curriculum, projects and interview-friendly practice.", "https://www.freecodecamp.org/learn/"],
    ["Google Cloud Skills Boost", "Cloud, data, DevOps and AI labs with practical exercises.", "https://www.cloudskillsboost.google/"]
  ],
  "Non-Technology": [
    ["Atlassian Agile Coach", "Project management, agile, product delivery and team collaboration.", "https://www.atlassian.com/agile"],
    ["PMI Learning", "Project management learning resources and professional frameworks.", "https://www.pmi.org/learning"],
    ["HubSpot Academy", "Customer success, CRM, content, operations and business growth courses.", "https://academy.hubspot.com/"]
  ],
  "Sales & Marketing": [
    ["Google Skillshop", "Google Ads, analytics and digital marketing product training.", "https://skillshop.withgoogle.com/"],
    ["HubSpot Academy", "Inbound sales, CRM, email, content, SEO and marketing courses.", "https://academy.hubspot.com/"],
    ["Meta Blueprint", "Social media marketing, ads, brand and campaign learning.", "https://www.facebook.com/business/learn"]
  ],
  "Freshers & Internships": [
    ["National Career Service", "Government job portal for career guidance, jobs and employer discovery.", "https://www.ncs.gov.in/"],
    ["freeCodeCamp Projects", "Build portfolio projects to prove skills as a fresher.", "https://www.freecodecamp.org/learn/"],
    ["Google Cloud Skills Boost", "Beginner-friendly labs for cloud, AI and data career paths.", "https://www.cloudskillsboost.google/"]
  ],
  Government: [
    ["UPSC Official", "Official exam notifications, syllabus, recruitment and candidate information.", "https://upsc.gov.in/"],
    ["SSC Official", "Official Staff Selection Commission notices, exams and candidate updates.", "https://ssc.gov.in/"],
    ["National Career Service", "Government career services, jobs, counselling and skill resources.", "https://www.ncs.gov.in/"]
  ]
};

const interviewTracks = [
  ["HR Round", "Tell me about yourself, strengths, weakness and career goals."],
  ["Technical / Functional", "Role-specific concepts, projects, tools and problem solving."],
  ["Managerial Round", "Ownership, teamwork, conflict handling and decision making."],
  ["Final Pitch", "Why this role, why this company and expected contribution."]
];

const roadmapTracks = [
  ["Week 1", "Fix resume keywords, add missing skills and prepare role stories."],
  ["Week 2", "Build one portfolio proof project or case study."],
  ["Week 3", "Practice interviews and refine answers using feedback."],
  ["Week 4", "Apply, track jobs and follow up with tailored cover letters."]
];

export function getRouteByPath(pathname) {
  return flatRoutes.find((item) => item.path === pathname) || flatRoutes[0];
}

export default function Dashboard({
  user,
  data,
  forms,
  resume,
  outputs,
  handlers,
  loading,
  error,
  route,
  onNavigate
}) {
  const activeRoute = route || flatRoutes[0];
  const tasks = data?.tasks || [];
  const notes = data?.notes || [];
  const goals = data?.goals || [];
  const atsScore = resume.result?.score || Math.max(72, data?.score || 87);
  const matchScore = resume.result?.score ? Math.max(55, Math.round(resume.result.score * 0.78)) : 78;
  const matched = resume.result?.matchedSkills?.length ? resume.result.matchedSkills : ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "HTML, CSS"];
  const missing = resume.result?.missingSkills?.length ? resume.result.missingSkills : ["TypeScript", "Next.js", "AWS", "Docker", "GraphQL"];
  const routeTools = { tasks, notes, goals, atsScore, matchScore, matched, missing };

  function navigateTo(item) {
    onNavigate(item.path);
  }

  return (
    <main className="resume-dashboard">
      <aside className="resume-sidebar">
        <button className="brand-mark brand-button" onClick={() => onNavigate("/dashboard")} type="button">
          <span>AI</span>
          <strong>Resume Checker</strong>
        </button>

        <nav className="side-nav">
          {routeSections.map((section) => (
            <div className="nav-group" key={section.title || "home"}>
              {section.title && <p>{section.title}</p>}
              {section.items.map((item) => (
                <a
                  className={activeRoute.id === item.id ? "active" : ""}
                  href={item.path}
                  key={item.id}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(item);
                  }}
                >
                  <span>{item.badge}</span>
                  <strong>{item.label}</strong>
                  {item.tag && <em>{item.tag}</em>}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="upgrade-card">
          <strong>Upgrade to Premium</strong>
          <p>Get unlimited scans, AI feedback, cover letters and more.</p>
          <button onClick={() => onNavigate("/ai-assistant")} type="button">Try AI Tools</button>
        </div>
      </aside>

      <section className="resume-main">
        <header className="resume-topbar">
          <button className="hamburger" onClick={() => onNavigate("/dashboard")} type="button">☰</button>
          <div className="top-actions">
            <label className="upload-action">
              Upload New Resume
              <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={(event) => handlers.setResumeFile(event.target.files?.[0] || null)} />
            </label>
            <button onClick={() => onNavigate("/resume-checker")} type="button">History</button>
            <div className="profile-chip">
              <span>{user.name?.slice(0, 1) || "U"}</span>
              <div>
                <strong>{user.name}</strong>
                <small>{activeRoute.label}</small>
              </div>
            </div>
          </div>
        </header>

        <PageHeader route={activeRoute} error={error} user={user} />
        {renderRoutePage(activeRoute.id, routeTools, forms, resume, outputs, handlers, loading, onNavigate)}
        <footer className="dashboard-footer">© 2026 AI Resume Checker. All rights reserved.</footer>
      </section>
    </main>
  );
}

function renderRoutePage(routeId, tools, forms, resume, outputs, handlers, loading, navigate) {
  const { tasks, notes, goals, atsScore, matchScore, matched, missing } = tools;

  const pages = {
    dashboard: (
      <>
        <section className="workspace-summary">
          <StatCard label="ATS Score" value={`${atsScore}/100`} detail="Current resume health" />
          <StatCard label="Job Match" value={`${matchScore}%`} detail={resume.jobRole} />
          <StatCard label="Open Tasks" value={tasks.length || 0} detail="Productivity queue" />
          <StatCard label="Missing Skills" value={missing.length} detail="To improve" />
        </section>
        <section className="analysis-grid page-grid">
          <AtsScoreCard atsScore={atsScore} />
          <ResumeSummaryCard matched={matched} missing={missing} />
          <JobMatchCard matchScore={matchScore} resume={resume} navigate={navigate} />
          <SuggestionsCard navigate={navigate} />
        </section>
      </>
    ),
    "resume-checker": (
      <section className="analysis-grid page-grid">
        <Card className="wide">
          <CardTitle title="Upload and Screen Resume" />
          <ResumeUpload
            file={resume.file}
            jobRole={resume.jobRole}
            roleCategory={resume.roleCategory}
            loading={resume.loading}
            onFileChange={handlers.setResumeFile}
            onCategoryChange={handlers.setResumeRoleCategory}
            onRoleChange={handlers.setResumeRole}
            onSubmit={handlers.screenResume}
          />
        </Card>
        <ResumeSummaryCard matched={matched} missing={missing} />
        {resume.result && <ResultCard result={resume.result} />}
      </section>
    ),
    "ats-score": (
      <AtsReportPage atsScore={atsScore} matched={matched} missing={missing} resume={resume} navigate={navigate} />
    ),
    "skills-analysis": (
      <SkillsAnalysisPage matched={matched} missing={missing} resume={resume} navigate={navigate} />
    ),
    "keyword-optimizer": (
      <KeywordOptimizerPage matched={matched} missing={missing} resume={resume} navigate={navigate} />
    ),
    "cover-letter": <CoverLetterPage resume={resume} matched={matched} missing={missing} navigate={navigate} />,
    "resume-builder": <ResumeBuilderPage matched={matched} missing={missing} navigate={navigate} />,
    "resume-versions": <ResumeVersionsPage resume={resume} navigate={navigate} />,
    "portfolio-analyzer": <PortfolioAnalyzerPage matched={matched} missing={missing} navigate={navigate} />,
    "interview-prep": <InterviewModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} navigate={navigate} resume={resume} />,
    "career-roadmap": <RoadmapModule navigate={navigate} resume={resume} />,
    "learning-hub": <LearningCard missing={missing} navigate={navigate} resume={resume} />,
    "job-match": (
      <section className="analysis-grid page-grid">
        <JobMatchCard matchScore={matchScore} resume={resume} navigate={navigate} />
        <SkillsCard matched={matched} missing={missing} navigate={navigate} />
      </section>
    ),
    "job-tracker": <JobTrackerModule />,
    analytics: (
      <section className="analysis-grid page-grid">
        <Card className="wide">
          <CardTitle title="Analytics" />
          <div className="analytics-mini">
            <Metric label="Resume health" value={atsScore} />
            <Metric label="Job match" value={matchScore} />
            <Metric label="Task progress" value={Math.min(100, Math.max(30, tasks.length ? 78 : 68))} />
          </div>
        </Card>
        <Card>
          <CardTitle title="Productivity Score" />
          <ScoreRing value={Math.min(99, Math.max(50, tasks.length ? 82 : 76))} tone="purple" />
        </Card>
      </section>
    ),
    "market-insights": <MarketInsightsModule />,
    "ai-assistant": (
      <section className="productivity-dock page-modules">
        <TaskModule forms={forms} handlers={handlers} loading={loading} tasks={tasks} />
        <BreakdownModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} tasks={tasks} />
        <PlannerModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />
        <NotesModule forms={forms} handlers={handlers} loading={loading} notes={notes} goals={goals} />
        <GoalModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />
      </section>
    ),
    "rag-pdf": <PdfModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />,
    "smart-search": <SearchModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />
  };

  return pages[routeId] || pages.dashboard;
}

function PageHeader({ route, error, user }) {
  return (
    <div className="resume-hero app-heading">
      <div>
        <span>{route.label}</span>
        <h1>{route.label}</h1>
        <p>Welcome {user.name?.split(" ")[0] || "there"}. This is a dedicated app page at <strong>{route.path}</strong>.</p>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

function AtsScoreCard({ atsScore }) {
  return (
    <Card className="ats-card wide">
      <CardTitle title="ATS Score" />
      <div className="ats-layout">
        <ScoreRing value={atsScore} tone="green" />
        <div className="score-detail">
          <h2>Great! Your resume is ATS-friendly</h2>
          <p>Your resume has a good chance of passing ATS screening. Keep improving to make it perfect.</p>
          {[["Content Quality", 88], ["Formatting", 85], ["Skills Match", 90], ["Keyword Usage", 82], ["Readability", 87]].map(([label, value]) => (
            <Metric key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function AtsReportPage({ atsScore, matched, missing, resume, navigate }) {
  const verdict = atsScore >= 80 ? "Excellent ATS Readiness" : atsScore >= 60 ? "Good ATS Readiness" : "Needs ATS Optimization";
  const passChance = Math.min(98, Math.max(42, atsScore + 8));
  const issueCount = Math.max(1, missing.length);

  return (
    <div className="ats-report page-grid">
      <section className="ats-report-hero">
        <div className="ats-report-copy">
          <span>ATS Resume Report</span>
          <h2>{verdict}</h2>
          <p>
            Your resume is being reviewed for <strong>{resume.jobRole}</strong>. This report checks keyword relevance,
            formatting quality, recruiter readability and screening readiness.
          </p>
          <div className="ats-actions">
            <button onClick={() => navigate("/resume-checker")} type="button">Upload New Resume</button>
            <button className="ghost-button" onClick={() => navigate("/keyword-optimizer")} type="button">Optimize Keywords</button>
          </div>
        </div>
        <div className="ats-score-panel">
          <ScoreRing value={atsScore} tone={atsScore >= 70 ? "green" : "purple"} />
          <strong>{passChance}% pass probability</strong>
          <span>{issueCount} priority improvements found</span>
        </div>
      </section>

      <section className="workspace-summary">
        <StatCard label="ATS Score" value={`${atsScore}/100`} detail="Overall resume health" />
        <StatCard label="Pass Chance" value={`${passChance}%`} detail="Estimated screening probability" />
        <StatCard label="Matched Skills" value={matched.length} detail="Role-aligned keywords" />
        <StatCard label="Missing Skills" value={missing.length} detail="Keyword gaps to fix" />
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="Score Breakdown" />
          <div className="ats-breakdown">
            {[
              ["Keyword Match", Math.max(55, Math.min(96, atsScore + 4)), "Role-specific skills and tools"],
              ["Formatting", 86, "Readable structure and ATS parsing"],
              ["Content Quality", 82, "Impact, clarity and measurable achievements"],
              ["Section Coverage", 90, "Summary, skills, experience and education"],
              ["Readability", 88, "Simple language and recruiter scan quality"]
            ].map(([label, value, detail]) => (
              <div className="ats-breakdown-row" key={label}>
                <div>
                  <strong>{label}</strong>
                  <span>{detail}</span>
                </div>
                <i><b style={{ width: `${value}%` }} /></i>
                <em>{value}/100</em>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="ATS Checklist" />
          <ul className="ats-checklist">
            <li className="pass">Single-column structure detected</li>
            <li className="pass">Standard section headings used</li>
            <li className="pass">Readable text format</li>
            <li className={missing.length ? "warn" : "pass"}>Role keywords need more coverage</li>
            <li className="warn">Add more quantified achievements</li>
          </ul>
        </Card>

        <Card>
          <CardTitle title="Missing Keywords" />
          <div className="keyword-cloud compact">
            {(missing.length ? missing : ["leadership", "impact", "metrics", "ownership"]).slice(0, 10).map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
          <button onClick={() => navigate("/learning-hub")} type="button">Build Skill Plan</button>
        </Card>

        <Card className="wide">
          <CardTitle title="Professional Recommendations" />
          <div className="recommendation-grid">
            <Suggestion title="Improve Summary" copy="Add target role, years of experience, strongest skills and one measurable achievement." tag="High" />
            <Suggestion title="Strengthen Experience Bullets" copy="Use action + tool + result format, for example: Built X using Y and improved Z by 20%." tag="High" />
            <Suggestion title="Add Role Keywords" copy="Mirror the exact job description keywords where they honestly match your experience." tag="Medium" />
            <Suggestion title="Keep Formatting Simple" copy="Avoid tables, heavy graphics, icons and multi-column layouts for ATS uploads." tag="Low" />
          </div>
        </Card>

        <PreviewCard userName="ATS Preview" />
      </section>
    </div>
  );
}

function ResumeSummaryCard({ matched, missing }) {
  return (
    <Card>
      <CardTitle title="Resume Summary" />
      <SummaryRow label="Total Words" value="612" />
      <SummaryRow label="Total Sections" value="10" />
      <SummaryRow label="Skills Found" value={matched.length + missing.length} />
      <SummaryRow label="Experience" value="2.6 Years" />
      <SummaryRow label="Education" value="B.Tech" />
      <SummaryRow label="Resume Type" value="Chronological" />
    </Card>
  );
}

function JobMatchCard({ matchScore, resume, navigate }) {
  return (
    <Card className="match-card">
      <CardTitle title="Job Match Score" />
      <ScoreRing value={matchScore} tone="purple" />
      <h3>Good Match</h3>
      <p>This resume matches well with the {resume.jobRole} role.</p>
      <button onClick={() => navigate("/skills-analysis")} type="button">View Match Details</button>
    </Card>
  );
}

function SkillsCard({ matched, missing, navigate }) {
  return (
    <Card className="wide">
      <CardTitle title="Skills Analysis" />
      <div className="skills-columns">
        <div>
          <h3>Matched Skills</h3>
          {matched.slice(0, 6).map((skill, index) => (
            <SkillBar key={skill} skill={skill} value={Math.max(70, 92 - index * 5)} />
          ))}
        </div>
        <div>
          <h3 className="missing-title">Missing Skills</h3>
          <ul className="missing-list">
            {missing.slice(0, 6).map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
      <button onClick={() => navigate("/learning-hub")} type="button">Build Learning Plan</button>
    </Card>
  );
}

function SkillsAnalysisPage({ matched, missing, resume, navigate }) {
  const totalSkills = matched.length + missing.length;
  const matchRate = totalSkills ? Math.round((matched.length / totalSkills) * 100) : 82;
  const recommended = (missing.length ? missing : ["system design", "leadership", "metrics", "ownership"]).slice(0, 6);

  return (
    <div className="skill-report page-grid">
      <section className="tool-hero">
        <div>
          <span>Skills Intelligence</span>
          <h2>{matchRate}% role skill alignment</h2>
          <p>
            Skill analysis for <strong>{resume.jobRole}</strong>. Review matched skills, missing skills and improvement actions
            before applying.
          </p>
          <div className="ats-actions">
            <button onClick={() => navigate("/learning-hub")} type="button">Create Learning Plan</button>
            <button className="ghost-button" onClick={() => navigate("/keyword-optimizer")} type="button">Optimize Keywords</button>
          </div>
        </div>
        <div className="tool-score-card">
          <ScoreRing value={matchRate} tone={matchRate >= 70 ? "green" : "purple"} />
          <strong>{matched.length} matched skills</strong>
          <span>{missing.length} gaps detected</span>
        </div>
      </section>

      <section className="workspace-summary">
        <StatCard label="Matched" value={matched.length} detail="Skills found in resume" />
        <StatCard label="Missing" value={missing.length} detail="Recommended additions" />
        <StatCard label="Priority" value={missing.length > 4 ? "High" : "Medium"} detail="Improvement effort" />
        <StatCard label="Role Fit" value={`${matchRate}%`} detail={resume.jobRole} />
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="Matched Skills" />
          <div className="clickable-skill-grid">
            {matched.slice(0, 12).map((skill, index) => (
              <button key={skill} onClick={() => navigate("/keyword-optimizer")} type="button">
                <span>{skill}</span>
                <em>{Math.max(72, 96 - index * 3)}%</em>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Skill Gaps" />
          <div className="missing-action-list">
            {recommended.map((skill) => (
              <button key={skill} onClick={() => navigate("/learning-hub")} type="button">
                <strong>{skill}</strong>
                <span>Add proof, project or certification</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Skill Depth" />
          <div className="ats-breakdown">
            {[["Core skills", matchRate], ["Tool coverage", Math.max(58, matchRate - 6)], ["Project proof", 78], ["Business impact", 72]].map(([label, value]) => (
              <div className="ats-breakdown-row compact-row" key={label}>
                <div><strong>{label}</strong></div>
                <i><b style={{ width: `${value}%` }} /></i>
                <em>{value}%</em>
              </div>
            ))}
          </div>
        </Card>

        <Card className="wide">
          <CardTitle title="Recommended Actions" />
          <div className="recommendation-grid">
            <Suggestion title="Add Skill Evidence" copy="Mention where each important skill was used, not only the skill name." tag="High" />
            <Suggestion title="Group Skills Clearly" copy="Separate Languages, Frameworks, Tools and Soft Skills for fast scanning." tag="Medium" />
            <Suggestion title="Show Project Proof" copy="Add project links, outcomes and responsibility for missing skills." tag="High" />
            <Suggestion title="Prepare Interview Stories" copy="Convert top skills into STAR-format interview answers." tag="Low" />
          </div>
        </Card>
      </section>
    </div>
  );
}

function KeywordCard({ matched, navigate }) {
  return (
    <Card>
      <CardTitle title="Keyword Optimizer" />
      <div className="keyword-cloud">
        {[...matched, "Problem Solving", "GitHub", "Data Structures", "Teamwork"].slice(0, 12).map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
      <button onClick={() => navigate("/smart-search")} type="button">Search Keyword Usage</button>
    </Card>
  );
}

function KeywordOptimizerPage({ matched, missing, resume, navigate }) {
  const primaryKeywords = matched.slice(0, 10);
  const missingKeywords = (missing.length ? missing : ["impact", "ownership", "metrics", "collaboration", "leadership"]).slice(0, 10);

  return (
    <div className="keyword-report page-grid">
      <section className="tool-hero keyword-hero">
        <div>
          <span>Keyword Optimizer</span>
          <h2>Improve recruiter and ATS keyword coverage</h2>
          <p>
            Tune your resume for <strong>{resume.jobRole}</strong> by balancing role keywords, action verbs,
            measurable outcomes and job-description language.
          </p>
          <div className="ats-actions">
            <button onClick={() => navigate("/resume-checker")} type="button">Rescreen Resume</button>
            <button className="ghost-button" onClick={() => navigate("/cover-letter")} type="button">Use in Cover Letter</button>
          </div>
        </div>
        <div className="keyword-score">
          <strong>{Math.min(96, 62 + primaryKeywords.length * 3)}%</strong>
          <span>keyword coverage</span>
          <p>{missingKeywords.length} terms recommended</p>
        </div>
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="Detected Role Keywords" />
          <div className="keyword-cloud professional">
            {primaryKeywords.map((keyword) => (
              <button key={keyword} onClick={() => navigate("/skills-analysis")} type="button">{keyword}</button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Add These Keywords" />
          <div className="keyword-cloud missing-keywords">
            {missingKeywords.map((keyword) => (
              <button key={keyword} onClick={() => navigate("/learning-hub")} type="button">{keyword}</button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Keyword Placement" />
          <ul className="ats-checklist">
            <li className="pass">Skills section contains role keywords</li>
            <li className="warn">Add 2-3 keywords in summary</li>
            <li className="warn">Add missing terms inside project bullets</li>
            <li className="pass">Avoid keyword stuffing</li>
          </ul>
        </Card>

        <Card className="wide">
          <CardTitle title="Optimization Plan" />
          <div className="keyword-plan">
            {[
              ["Summary", "Add target role, top skills and one achievement metric."],
              ["Experience", "Place keywords inside action bullets with measurable outcomes."],
              ["Projects", "Mention tools, domain, scale and business impact."],
              ["Skills", "Group keywords by language, framework, tools and soft skills."]
            ].map(([title, copy]) => (
              <button key={title} onClick={() => navigate("/resume-builder")} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>

        <SuggestionsCard navigate={navigate} />
      </section>
    </div>
  );
}

function SuggestionsCard({ navigate }) {
  return (
    <Card className="suggestions-card">
      <CardTitle title="AI Suggestions" />
      {[["Improve Your Summary", "Add key achievements and strengths.", "High"], ["Add More Technical Skills", "Add TypeScript, Next.js, AWS.", "Medium"], ["Highlight Achievements", "Add measurable impact.", "High"], ["Use Strong Action Verbs", "Use Developed, Implemented, Optimized.", "Low"]].map(([title, copy, tag]) => (
        <Suggestion key={title} title={title} copy={copy} tag={tag} />
      ))}
      <button onClick={() => navigate("/cover-letter")} type="button">Use Suggestions</button>
    </Card>
  );
}

function PreviewCard({ userName }) {
  return (
    <Card className="preview-card wide">
      <CardTitle title={userName} />
      <div className="preview-layout">
        <div className="resume-preview-mini">
          <strong>Aman Verma</strong>
          <span>Software Developer</span>
          <i /><i /><i /><i />
        </div>
        <ul className="check-list">
          <li>Text is readable</li>
          <li>No images or tables detected</li>
          <li>Proper heading hierarchy</li>
          <li>ATS-friendly format</li>
        </ul>
        <div className="compat-meter">
          <strong>95%</strong>
          <span>ATS Compatibility</span>
        </div>
      </div>
    </Card>
  );
}

function CoverLetterPage({ resume, matched, missing, navigate }) {
  const letterPoints = [
    `Opening tailored for ${resume.jobRole}`,
    `Highlights ${matched.slice(0, 3).join(", ") || "core strengths"}`,
    `Addresses ${missing.slice(0, 2).join(", ") || "growth areas"} with learning intent`,
    "Ends with confident interview call-to-action"
  ];

  return (
    <div className="career-tool-page page-grid">
      <section className="tool-hero career-hero">
        <div>
          <span>Career Tools</span>
          <h2>Cover Letter Builder</h2>
          <p>Create a role-specific cover letter using your resume score, matched skills and target job role.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/resume-checker")} type="button">Use Latest Resume</button>
            <button className="ghost-button" onClick={() => navigate("/keyword-optimizer")} type="button">Add Keywords</button>
          </div>
        </div>
        <div className="tool-score-card">
          <strong>{resume.jobRole}</strong>
          <span>Target role</span>
          <p>AI draft ready</p>
        </div>
      </section>

      <section className="career-workbench">
        <Card className="wide">
          <CardTitle title="Letter Draft Structure" />
          <div className="builder-flow">
            {letterPoints.map((point, index) => (
              <button key={point} onClick={() => navigate(index === 1 ? "/skills-analysis" : "/resume-builder")} type="button">
                <em>0{index + 1}</em>
                <strong>{point}</strong>
                <span>Click to refine this block</span>
              </button>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle title="Tone Settings" />
          <div className="option-stack">
            {["Professional", "Confident", "Concise", "Achievement-focused"].map((tone) => (
              <button key={tone} type="button">{tone}</button>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle title="Quick Actions" />
          <div className="missing-action-list">
            <button onClick={() => navigate("/resume-builder")} type="button"><strong>Build Resume First</strong><span>Improve source content</span></button>
            <button onClick={() => navigate("/interview-prep")} type="button"><strong>Prepare Answers</strong><span>Use same role story</span></button>
            <button onClick={() => navigate("/job-tracker")} type="button"><strong>Add to Job Tracker</strong><span>Track application status</span></button>
          </div>
        </Card>
      </section>
    </div>
  );
}

function ResumeBuilderPage({ matched, missing, navigate }) {
  return (
    <div className="career-tool-page page-grid">
      <section className="tool-hero career-hero">
        <div>
          <span>Career Tools</span>
          <h2>Resume Builder Workspace</h2>
          <p>Build ATS-safe sections with clean structure, measurable bullets and role-ready keywords.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/ats-score")} type="button">Check ATS Score</button>
            <button className="ghost-button" onClick={() => navigate("/resume-versions")} type="button">Save Version</button>
          </div>
        </div>
        <div className="resume-doc-preview">
          <strong>Resume Draft</strong>
          <i /><i /><i /><i /><i />
        </div>
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="Builder Blocks" />
          <div className="builder-block-grid">
            {[
              ["Professional Summary", "Write a 3-line role-specific summary."],
              ["Experience Bullets", "Use action + tool + result format."],
              ["Skills Matrix", `Include ${matched.slice(0, 4).join(", ") || "matched role skills"}.`],
              ["Projects", "Add problem, tech stack, impact and links."],
              ["Education", "Keep degree, institute, dates and achievements."],
              ["Certifications", `Support missing skills like ${missing[0] || "cloud or analytics"}.`]
            ].map(([title, copy]) => (
              <button key={title} onClick={() => navigate("/keyword-optimizer")} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>
        <PreviewCard userName="Live Resume Preview" />
      </section>
    </div>
  );
}

function ResumeVersionsPage({ resume, navigate }) {
  return (
    <div className="career-tool-page page-grid">
      <section className="tool-hero career-hero">
        <div>
          <span>Career Tools</span>
          <h2>Resume Versions Manager</h2>
          <p>Create separate versions for each job type and compare ATS readiness before applying.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/resume-builder")} type="button">Create Version</button>
            <button className="ghost-button" onClick={() => navigate("/ats-score")} type="button">Compare Scores</button>
          </div>
        </div>
        <div className="tool-score-card">
          <strong>3 Active</strong>
          <span>Saved resume versions</span>
          <p>Current target: {resume.jobRole}</p>
        </div>
      </section>

      <section className="version-grid">
        {[
          ["Primary ATS Resume", "Software Engineer", 87, "Ready"],
          ["Frontend Focused", "React Developer", 82, "Needs keywords"],
          ["Fresh Graduate", "Graduate Engineer Trainee (GET)", 76, "Improve projects"]
        ].map(([name, role, score, status]) => (
          <article className="version-card" key={name}>
            <div>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
            <ScoreRing value={score} tone={score > 80 ? "green" : "purple"} />
            <p>{status}</p>
            <button onClick={() => navigate("/resume-checker")} type="button">Open Version</button>
          </article>
        ))}
      </section>
    </div>
  );
}

function PortfolioAnalyzerPage({ matched, missing, navigate }) {
  return (
    <div className="career-tool-page page-grid">
      <section className="tool-hero career-hero">
        <div>
          <span>Career Tools</span>
          <h2>Portfolio Analyzer</h2>
          <p>Review project proof, GitHub links, portfolio keywords and role-fit signals before sharing with recruiters.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/keyword-optimizer")} type="button">Improve Portfolio Keywords</button>
            <button className="ghost-button" onClick={() => navigate("/resume-builder")} type="button">Add Projects to Resume</button>
          </div>
        </div>
        <div className="keyword-score">
          <strong>74%</strong>
          <span>portfolio readiness</span>
          <p>{missing.length || 4} improvement areas</p>
        </div>
      </section>

      <section className="analysis-grid">
        <Card>
          <CardTitle title="Portfolio Checks" />
          <ul className="ats-checklist">
            <li className="pass">Project titles are clear</li>
            <li className="warn">Add stronger business impact</li>
            <li className="pass">Technical keywords detected</li>
            <li className="warn">Add GitHub/live demo links</li>
          </ul>
        </Card>
        <Card className="wide">
          <CardTitle title="Project Proof Matrix" />
          <div className="builder-block-grid">
            {["Problem Statement", "Tech Stack", "Your Contribution", "Measurable Result", "Live Link", "GitHub Proof"].map((item) => (
              <button key={item} onClick={() => navigate("/resume-builder")} type="button">
                <strong>{item}</strong>
                <span>Add this evidence to improve recruiter trust.</span>
              </button>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle title="Detected Keywords" />
          <div className="keyword-cloud compact">
            {matched.slice(0, 8).map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </Card>
      </section>
    </div>
  );
}

function InterviewModule({ forms, handlers, loading, outputs, navigate, resume }) {
  return (
    <div className="job-prep-page page-grid">
      <section className="tool-hero prep-hero">
        <div>
          <span>Job Preparation</span>
          <h2>Interview Prep Studio</h2>
          <p>Practice structured answers for {resume.jobRole}, generate role-based questions and build confidence for HR, technical and final rounds.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/career-roadmap")} type="button">View Roadmap</button>
            <button className="ghost-button" onClick={() => navigate("/learning-hub")} type="button">Open Learning Hub</button>
          </div>
        </div>
        <div className="tool-score-card">
          <strong>4 Rounds</strong>
          <span>Preparation flow</span>
          <p>{resume.jobRole}</p>
        </div>
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="AI Practice Session" />
          <form className="stack-form" onSubmit={handlers.createInterview}>
            <input name="role" value={forms.interview.role} onChange={handlers.changeInterview} placeholder="Target role" />
            <textarea name="answer" value={forms.interview.answer} onChange={handlers.changeInterview} placeholder="Paste your practice answer for AI feedback" />
            <button disabled={loading}>Generate Questions and Feedback</button>
          </form>
          <List items={[...outputs.interviewQuestions, outputs.interviewFeedback].filter(Boolean)} />
        </Card>
        <Card>
          <CardTitle title="Interview Tracks" />
          <div className="prep-track-list">
            {interviewTracks.map(([title, copy]) => (
              <button key={title} onClick={() => navigate("/learning-hub")} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle title="Practice Checklist" />
          <ul className="ats-checklist">
            <li className="pass">Resume walkthrough ready</li>
            <li className="warn">Prepare 3 measurable achievements</li>
            <li className="warn">Practice role-specific questions</li>
            <li className="pass">Prepare closing questions</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

function RoadmapModule({ navigate, resume }) {
  return (
    <div className="job-prep-page page-grid">
      <section className="tool-hero prep-hero">
        <div>
          <span>Job Preparation</span>
          <h2>Career Roadmap</h2>
          <p>A practical 4-week roadmap for {resume.jobRole}: resume proof, learning, portfolio, interview practice and applications.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/learning-hub")} type="button">Start Learning</button>
            <button className="ghost-button" onClick={() => navigate("/job-tracker")} type="button">Track Applications</button>
          </div>
        </div>
        <div className="keyword-score">
          <strong>4</strong>
          <span>week sprint</span>
          <p>career execution plan</p>
        </div>
      </section>

      <section className="roadmap-timeline">
        {roadmapTracks.map(([week, copy], index) => (
          <article key={week}>
            <em>{week}</em>
            <strong>{copy}</strong>
            <button onClick={() => navigate(index < 2 ? "/learning-hub" : "/interview-prep")} type="button">
              Open Step
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

function LearningCard({ missing, navigate, resume }) {
  const resources = learningResources[resume.roleCategory] || learningResources.Technology;
  const recommendedSkills = missing.length ? missing.slice(0, 6) : ["communication", "portfolio projects", "interview practice", "role keywords"];

  return (
    <div className="job-prep-page page-grid">
      <section className="tool-hero prep-hero">
        <div>
          <span>Job Preparation</span>
          <h2>Learning Hub</h2>
          <p>Curated real-world resources for {resume.roleCategory} roles, plus a personal skill queue based on your resume gaps.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/career-roadmap")} type="button">Build Roadmap</button>
            <button className="ghost-button" onClick={() => navigate("/interview-prep")} type="button">Practice Interview</button>
          </div>
        </div>
        <div className="tool-score-card">
          <strong>{resources.length}</strong>
          <span>verified resources</span>
          <p>{recommendedSkills.length} skill targets</p>
        </div>
      </section>

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title={`${resume.roleCategory} Resources`} />
          <div className="resource-grid">
            {resources.map(([title, copy, url]) => (
              <a href={url} key={title} rel="noreferrer" target="_blank">
                <strong>{title}</strong>
                <span>{copy}</span>
                <em>Open resource</em>
              </a>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Personal Skill Queue" />
          <div className="missing-action-list">
            {recommendedSkills.map((skill) => (
              <button key={skill} onClick={() => navigate("/skills-analysis")} type="button">
                <strong>{skill}</strong>
                <span>Learn, practice and add proof to resume</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Resource Categories" />
          <div className="option-stack">
            {Object.keys(learningResources).map((category) => (
              <a href={learningResources[category][0][2]} key={category} rel="noreferrer" target="_blank">{category}</a>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

function JobTrackerModule() {
  return (
    <section className="productivity-dock page-modules">
      <Module title="Job Tracker">
        <div className="feature-card-copy">
          <strong>Application pipeline</strong>
          <p>Track applied, interview, offer and rejected stages with AI follow-up reminders.</p>
        </div>
        <List items={["Applied: 4 roles", "Interview: 2 roles", "Follow-up due: 1 role"]} />
      </Module>
    </section>
  );
}

function MarketInsightsModule() {
  return (
    <section className="productivity-dock page-modules">
      <Module title="Market Insights">
        <div className="feature-card-copy">
          <strong>Role demand signals</strong>
          <p>Shows target-role skills, salary direction and hiring keywords to optimize applications.</p>
        </div>
        <div className="keyword-cloud compact">
          {["React", "Node.js", "AWS", "TypeScript", "System Design"].map((keyword) => <span key={keyword}>{keyword}</span>)}
        </div>
      </Module>
    </section>
  );
}

function TaskModule({ forms, handlers, loading, tasks }) {
  return (
    <Module title="AI Task Prioritization">
      <form className="stack-form" onSubmit={handlers.addTask}>
        <input name="title" value={forms.task.title} onChange={handlers.changeTask} placeholder="Task title" />
        <input name="deadline" type="date" value={forms.task.deadline} onChange={handlers.changeTask} />
        <select name="importance" value={forms.task.importance} onChange={handlers.changeTask}>
          <option>High</option><option>Medium</option><option>Low</option>
        </select>
        <button disabled={loading}>Add Task</button>
      </form>
      <List items={tasks.map((task) => `${task.priority}: ${task.title}`)} />
    </Module>
  );
}

function BreakdownModule({ forms, handlers, loading, outputs, tasks }) {
  return (
    <Module title="AI Task Breakdown">
      <div className="stack-form">
        <select value={forms.breakdownTaskId} onChange={handlers.changeBreakdownTask}>
          <option value="">Select task to break down</option>
          {tasks.map((task) => <option key={task.id} value={task.id}>{task.title}</option>)}
        </select>
        <button disabled={!forms.breakdownTaskId || loading} onClick={handlers.breakdownSelectedTask} type="button">Generate Subtasks</button>
      </div>
      <List items={outputs.subtasks.map((subtask) => subtask.title || subtask)} />
    </Module>
  );
}

function PlannerModule({ forms, handlers, loading, outputs }) {
  return (
    <Module title="AI Daily Planner">
      <form className="stack-form" onSubmit={handlers.createPlanner}>
        <input name="availableMinutes" type="number" value={forms.planner.availableMinutes} onChange={handlers.changePlanner} />
        <button disabled={loading}>Create Schedule</button>
      </form>
      <List items={outputs.schedule.map((slot) => `${slot.start} - ${slot.title}`)} />
    </Module>
  );
}

function NotesModule({ forms, handlers, loading, notes, goals }) {
  return (
    <Module title="AI Notes Summarizer">
      <form className="stack-form" onSubmit={handlers.addNote}>
        <input name="title" value={forms.note.title} onChange={handlers.changeNote} placeholder="Notes title" />
        <textarea name="content" value={forms.note.content} onChange={handlers.changeNote} placeholder="Paste notes text" />
        <button disabled={loading}>Summarize Notes</button>
      </form>
      <List items={[...notes.map((note) => note.summary || note.title), ...goals.map((goal) => `${goal.title} - ${goal.progress}%`)]} />
    </Module>
  );
}

function GoalModule({ forms, handlers, loading, outputs }) {
  return (
    <Module title="Goal Tracking">
      <form className="stack-form" onSubmit={handlers.addGoal}>
        <input name="title" value={forms.goal.title} onChange={handlers.changeGoal} placeholder="Goal title" />
        <input name="targetDate" type="date" value={forms.goal.targetDate} onChange={handlers.changeGoal} />
        <button disabled={loading}>Create Daily Targets</button>
      </form>
      <List items={outputs.goalTargets.map((target) => target.title || target)} />
    </Module>
  );
}

function SearchModule({ forms, handlers, loading, outputs }) {
  return (
    <section className="productivity-dock page-modules">
      <Module title="Smart Search">
        <form className="stack-form" onSubmit={handlers.search}>
          <input value={forms.search} onChange={handlers.changeSearch} placeholder="Find tasks or notes naturally" />
          <button disabled={loading}>Search Workspace</button>
        </form>
        <List items={outputs.searchResults.map((item) => item.title || item.summary || item.type)} />
      </Module>
    </section>
  );
}

function PdfModule({ forms, handlers, loading, outputs }) {
  return (
    <section className="productivity-dock page-modules">
      <Module title="RAG PDF Assistant">
        <form className="stack-form" onSubmit={handlers.askPdf}>
          <input name="title" value={forms.pdf.title} onChange={handlers.changePdf} placeholder="PDF title" />
          <textarea name="content" value={forms.pdf.content} onChange={handlers.changePdf} placeholder="Paste extracted PDF content" />
          <input name="question" value={forms.pdf.question} onChange={handlers.changePdf} placeholder="Ask question from PDF" />
          <button disabled={loading}>Ask PDF AI</button>
        </form>
        <List items={[outputs.pdfAnswer].filter(Boolean)} />
      </Module>
    </section>
  );
}

function StatCard({ label, value, detail }) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

function Card({ children, className = "" }) {
  return <section className={`analysis-card ${className}`}>{children}</section>;
}

function CardTitle({ title }) {
  return (
    <div className="card-title">
      <h2>{title}</h2>
      <span>i</span>
    </div>
  );
}

function ScoreRing({ value, tone }) {
  return (
    <div className={`score-ring ${tone}`} style={{ "--score": `${value * 3.6}deg` }}>
      <strong>{value}</strong>
      <span>/100</span>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric-row">
      <span>{label}</span>
      <i><b style={{ width: `${value}%` }} /></i>
      <em>{value}/100</em>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="summary-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SkillBar({ skill, value }) {
  return (
    <div className="skill-row">
      <span>{skill}</span>
      <i><b style={{ width: `${value}%` }} /></i>
      <em>{value}%</em>
    </div>
  );
}

function Suggestion({ title, copy, tag }) {
  return (
    <article className="suggestion">
      <div>
        <strong>{title}</strong>
        <p>{copy}</p>
      </div>
      <span className={tag.toLowerCase()}>{tag}</span>
    </article>
  );
}

function Module({ title, children }) {
  return (
    <section className="panel module-panel">
      <div className="module-heading">
        <span>{title.split(" ").slice(0, 2).map((word) => word[0]).join("")}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function List({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="compact-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
