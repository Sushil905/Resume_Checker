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
      { id: "job-match", path: "/job-match", label: "Job Match", badge: "Jo", tag: "AI", copy: "Role fit, gaps and actions" },
      { id: "job-tracker", path: "/job-tracker", label: "Job Tracker", badge: "Tr", tag: "CRM", copy: "Pipeline, follow-ups and status" }
    ]
  },
  {
    title: "Analytics",
    items: [
      { id: "analytics", path: "/analytics", label: "Analytics", badge: "An", tag: "Live", copy: "Scores, trends and progress" },
      { id: "market-insights", path: "/market-insights", label: "Market Insights", badge: "Ma", tag: "Trend", copy: "Hiring signals and skill demand" }
    ]
  },
  {
    title: "AI Tools",
    items: [
      { id: "ai-assistant", path: "/ai-assistant", label: "AI Assistant", badge: "AI", tag: "GenAI", copy: "Plan, summarize and decide" },
      { id: "rag-pdf", path: "/rag-pdf", label: "RAG PDF Assistant", badge: "RA", tag: "AI", copy: "Ask answers from documents" },
      { id: "smart-search", path: "/smart-search", label: "Smart Search", badge: "Se", tag: "NLQ", copy: "Find anything naturally" }
    ]
  }
];

export const flatRoutes = routeSections.flatMap((section) => section.items);

const learningHubSections = [
  {
    title: "Tech",
    badge: "TC",
    resources: [
      ["Python Docs Tutorial", "Official Python tutorial for fundamentals, data structures and modules.", "https://docs.python.org/3/tutorial/"],
      ["JavaScript MDN Guide", "Modern JavaScript concepts, browser APIs and language reference.", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"],
      ["Java Tutorials", "Official Oracle Java tutorials for core language and OOP concepts.", "https://dev.java/learn/"],
      ["Go by Example", "Practical Go examples for syntax, concurrency and standard library usage.", "https://gobyexample.com/"],
      ["NeetCode Roadmap", "Structured DSA roadmap with patterns for coding interviews.", "https://neetcode.io/roadmap"],
      ["LeetCode Explore", "Topic-wise practice for arrays, strings, trees, graphs and DP.", "https://leetcode.com/explore/"],
      ["HackerRank Interview Prep", "Interview practice kits for problem solving and data structures.", "https://www.hackerrank.com/interview/interview-preparation-kit"],
      ["CP-Algorithms", "Algorithm explanations for graph, DP, strings, math and advanced topics.", "https://cp-algorithms.com/"],
      ["Operating Systems: Three Easy Pieces", "Free OS book covering processes, memory, concurrency and persistence.", "https://pages.cs.wisc.edu/~remzi/OSTEP/"],
      ["Computer Networking: A Top-Down Approach", "Companion resources for networking fundamentals and protocols.", "https://gaia.cs.umass.edu/kurose_ross/"],
      ["Database System Concepts", "Database learning resources around SQL, design and transactions.", "https://www.db-book.com/"],
      ["Nand2Tetris", "Build a computer from logic gates to software for deep CS foundations.", "https://www.nand2tetris.org/"],
      ["roadmap.sh", "Role-based roadmaps for frontend, backend, DevOps, AI and more.", "https://roadmap.sh/"],
      ["MDN Learn Web Development", "Frontend foundations, HTML, CSS, JavaScript and web app basics.", "https://developer.mozilla.org/en-US/docs/Learn"],
      ["freeCodeCamp", "Hands-on full-stack, data, backend and responsive web projects.", "https://www.freecodecamp.org/learn/"],
      ["GitHub Skills", "Interactive GitHub courses for portfolio workflows and collaboration.", "https://skills.github.com/"],
      ["Frontend Mentor", "Realistic frontend projects for UI and portfolio building.", "https://www.frontendmentor.io/challenges"],
      ["Kaggle Learn", "Data science and ML micro-courses with notebooks and projects.", "https://www.kaggle.com/learn"],
      ["Build your own X", "Open-source project ideas for building real systems from scratch.", "https://github.com/codecrafters-io/build-your-own-x"],
      ["Hugging Face Learn", "Open-source machine learning, NLP and transformer learning resources.", "https://huggingface.co/learn"]
    ]
  },
  {
    title: "Non-Tech",
    badge: "NT",
    resources: [
      ["Business Analyst", "Business analysis standards, role practices and certification path from IIBA.", "https://www.iiba.org/business-analysis-certifications/"],
      ["Product Management", "Product strategy, roadmaps, discovery and product team practices.", "https://www.atlassian.com/agile/product-management"],
      ["Project Management", "PMI learning resources for project planning, execution and delivery.", "https://www.pmi.org/learning"],
      ["HR", "Human resources learning, people operations and workplace practices.", "https://www.shrm.org/resourcesandtools/tools-and-samples"],
      ["Recruitment", "Recruiting strategy, hiring pipeline and talent acquisition learning.", "https://www.linkedin.com/business/talent/blog"],
      ["Operations", "Operations management basics, process improvement and business execution.", "https://www.coursera.org/browse/business/business-strategy"],
      ["Consulting", "Case interview preparation and consulting problem-solving practice.", "https://www.casecoach.com/"],
      ["Finance", "Corporate finance, valuation, accounting and Excel learning paths.", "https://corporatefinanceinstitute.com/resources/"],
      ["Accounting", "Accounting career resources, standards and professional development.", "https://www.aicpa-cima.com/resources"],
      ["Content Writing", "Content marketing, writing strategy and editorial skill development.", "https://academy.hubspot.com/courses/content-marketing"],
      ["Technical Writing", "Google technical writing courses for clear documentation.", "https://developers.google.com/tech-writing"],
      ["Research Analyst", "Research discovery, academic search and source evaluation practice.", "https://scholar.google.com/"]
    ]
  },
  {
    title: "Sales & Marketing",
    badge: "SM",
    resources: [
      ["Sales Executive", "Sales training, pipeline management and prospecting fundamentals.", "https://academy.hubspot.com/courses/sales-training"],
      ["Business Development", "Business development, partnerships and growth strategy resources.", "https://www.linkedin.com/learning/topics/business-development"],
      ["Digital Marketing", "Google digital marketing and ecommerce career certificate.", "https://grow.google/certificates/digital-marketing-ecommerce/"],
      ["SEO", "Beginner-friendly SEO guide from Moz for search fundamentals.", "https://moz.com/beginners-guide-to-seo"],
      ["SEM", "Google Ads learning and search engine marketing certifications.", "https://skillshop.withgoogle.com/"],
      ["Social Media Marketing", "Meta Blueprint courses for social media and paid campaigns.", "https://www.facebook.com/business/learn"],
      ["Brand Management", "Brand strategy and marketing learning resources.", "https://www.coursera.org/browse/business/marketing"],
      ["Growth Marketing", "Growth, acquisition, conversion and experimentation learning.", "https://academy.hubspot.com/"],
      ["Email Marketing", "Email marketing strategy, segmentation and automation resources.", "https://mailchimp.com/resources/email-marketing-field-guide/"],
      ["Market Research", "Market research fundamentals, customer insights and survey methods.", "https://www.qualtrics.com/experience-management/research/market-research-guide/"]
    ]
  },
  {
    title: "Government Exams",
    badge: "GE",
    resources: [
      ["UPSC", "Official UPSC notifications, syllabus, exam calendar and candidate updates.", "https://upsc.gov.in/"],
      ["SSC", "Official Staff Selection Commission exam notices and candidate portal.", "https://ssc.gov.in/"],
      ["Banking", "IBPS official recruitment and banking exam updates.", "https://www.ibps.in/"],
      ["IBPS", "Official IBPS exams, notifications and recruitment information.", "https://www.ibps.in/"],
      ["Railways", "Indian Railways recruitment and official career information.", "https://indianrailways.gov.in/"],
      ["Police", "Ministry of Home Affairs resources and police service information.", "https://www.mha.gov.in/"],
      ["Defence", "Official Indian Army career and officer entry information.", "https://joinindianarmy.nic.in/"],
      ["State PSC", "State public service commission preparation and notifications tracker.", "https://www.ncs.gov.in/"],
      ["Teaching Exams", "NTA official exam information for teaching and eligibility exams.", "https://nta.ac.in/"],
      ["PSU Exams", "GATE official portal, commonly used for PSU technical recruitment.", "https://gate2026.iitg.ac.in/"]
    ]
  },
  {
    title: "Certifications",
    badge: "CR",
    resources: [
      ["Microsoft Learn", "Microsoft certification paths for Azure, data, AI and business apps.", "https://learn.microsoft.com/en-us/training/"],
      ["AWS Skill Builder", "AWS cloud learning plans, labs and certification preparation.", "https://skillbuilder.aws/"],
      ["Google Cloud Skills Boost", "Google Cloud certification learning paths and hands-on labs.", "https://www.cloudskillsboost.google/"],
      ["Cisco Networking Academy", "Networking, cybersecurity and IT certification-aligned learning.", "https://www.netacad.com/"],
      ["Google Skillshop", "Official Google Ads, Analytics and marketing certification training.", "https://skillshop.withgoogle.com/"],
      ["HubSpot Academy", "Free certifications for sales, marketing, CRM and content.", "https://academy.hubspot.com/"],
      ["Meta Blueprint", "Meta certification learning for social media and paid campaigns.", "https://www.facebook.com/business/learn"],
      ["PMI Learning", "Project management certification resources and professional learning.", "https://www.pmi.org/learning"],
      ["Google AI Essentials", "Beginner-friendly AI productivity and career upskilling course.", "https://grow.google/ai-essentials/"],
      ["OpenAI Prompt Engineering Guide", "Prompting patterns for building AI-assisted workflows.", "https://platform.openai.com/docs/guides/prompt-engineering"]
    ]
  },
  {
    title: "Interview Prep",
    badge: "IP",
    resources: [
      ["Technical Interviews", "Coding interview preparation with algorithms and company-style problems.", "https://leetcode.com/problemset/"],
      ["HR Interviews", "Google Interview Warmup for practicing answers and communication.", "https://grow.google/certificates/interview-warmup/"],
      ["Group Discussion", "Communication and public speaking practice for discussions.", "https://www.toastmasters.org/resources/public-speaking-tips"],
      ["Mock Interviews", "Peer mock interviews for coding, behavioral and product roles.", "https://www.pramp.com/"],
      ["Aptitude", "Quantitative aptitude and placement-style practice questions.", "https://www.indiabix.com/aptitude/questions-and-answers/"],
      ["Reasoning", "Logical reasoning and analytical practice for exams and placements.", "https://www.indiabix.com/logical-reasoning/questions-and-answers/"],
      ["Communication Skills", "Business communication courses and professional speaking practice.", "https://www.coursera.org/browse/business/business-essentials"],
      ["National Career Service", "Government career portal for jobs, counselling and employability resources.", "https://www.ncs.gov.in/"],
      ["HackerRank Jobs and Skills", "Practice coding and skill assessments used in hiring.", "https://www.hackerrank.com/"],
      ["LinkedIn Learning", "Professional courses for business, tech and career growth.", "https://www.linkedin.com/learning/"],
      ["InterviewBit", "Technical interview questions for programming, DSA and system design.", "https://www.interviewbit.com/"],
      ["LeetCode Interview", "Coding interview questions and company-style practice.", "https://leetcode.com/problemset/"],
      ["Pramp", "Peer mock interviews for coding, product and behavioral practice.", "https://www.pramp.com/"],
      ["STAR Method Guide", "Behavioral interview framework for structured answers.", "https://www.themuse.com/advice/star-interview-method"]
    ]
  }
];

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

function downloadReport(fileName, lines) {
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

export default function Dashboard({
  user,
  data,
  forms,
  resume,
  outputs,
  handlers,
  loading,
  pdfUpload,
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
                  <strong>
                    {item.label}
                    {item.copy && <small>{item.copy}</small>}
                  </strong>
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
        {renderRoutePage(activeRoute.id, routeTools, forms, resume, outputs, handlers, loading, onNavigate, pdfUpload)}
        <footer className="dashboard-footer">© 2026 AI Resume Checker. All rights reserved.</footer>
      </section>
    </main>
  );
}

function renderRoutePage(routeId, tools, forms, resume, outputs, handlers, loading, navigate, pdfUpload) {
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
    "job-match": <JobMatchPage matchScore={matchScore} matched={matched} missing={missing} resume={resume} navigate={navigate} />,
    "job-tracker": <JobTrackerModule navigate={navigate} />,
    analytics: <AnalyticsPage atsScore={atsScore} goals={goals} matchScore={matchScore} navigate={navigate} notes={notes} tasks={tasks} />,
    "market-insights": <MarketInsightsModule matched={matched} missing={missing} navigate={navigate} resume={resume} />,
    "ai-assistant": <AIAssistantPage forms={forms} goals={goals} handlers={handlers} loading={loading} navigate={navigate} notes={notes} outputs={outputs} tasks={tasks} />,
    "rag-pdf": <PdfModule forms={forms} handlers={handlers} loading={loading} navigate={navigate} outputs={outputs} pdfUpload={pdfUpload} />,
    "smart-search": <SearchModule forms={forms} handlers={handlers} loading={loading} navigate={navigate} outputs={outputs} />
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
            <button
              className="ghost-button"
              onClick={() => downloadReport("ats-report.txt", [
                "AI Resume Checker - ATS Report",
                `Target role: ${resume.jobRole}`,
                `ATS score: ${atsScore}/100`,
                `Pass probability: ${passChance}%`,
                `Matched skills: ${matched.join(", ") || "Not available"}`,
                `Missing skills: ${missing.join(", ") || "None"}`,
                "Recommendation: add measurable achievements, role keywords, and ATS-friendly formatting."
              ])}
              type="button"
            >
              Download Report
            </button>
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

function JobMatchPage({ matchScore, matched, missing, resume, navigate }) {
  const roleFit = Math.min(96, Math.max(matchScore, 72));
  const marketFit = Math.max(64, roleFit - 8);
  const keywordFit = Math.min(94, 76 + matched.length * 2);
  const actionItems = [
    ["Add Missing Skills", `${missing.slice(0, 3).join(", ") || "Role-specific tools"} need stronger proof.`, "/learning-hub"],
    ["Tune Resume Keywords", "Mirror job description language in skills, summary and project bullets.", "/keyword-optimizer"],
    ["Prepare Interview Proof", "Convert matched skills into STAR stories for recruiter screening.", "/interview-prep"]
  ];

  return (
    <div className="job-match-page page-grid">
      <section className="tool-hero job-hero">
        <div>
          <span>Job Tracking</span>
          <h2>AI Job Match Intelligence</h2>
          <p>Analyze how strongly your resume fits the {resume.jobRole} role, then convert skill gaps into a learning and application plan.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/keyword-optimizer")} type="button">Optimize Resume</button>
            <button className="ghost-button" onClick={() => navigate("/job-tracker")} type="button">Track This Role</button>
            <button
              className="ghost-button"
              onClick={() => downloadReport("job-match-report.txt", [
                "AI Resume Checker - Job Match Report",
                `Target role: ${resume.jobRole}`,
                `Role fit: ${roleFit}%`,
                `Keyword coverage: ${keywordFit}%`,
                `Market readiness: ${marketFit}%`,
                `Matched strengths: ${matched.join(", ") || "Not available"}`,
                `Priority gaps: ${missing.join(", ") || "None"}`
              ])}
              type="button"
            >
              Export Match
            </button>
          </div>
        </div>
        <div className="match-command-card">
          <ScoreRing value={roleFit} tone="purple" />
          <strong>{roleFit >= 85 ? "Strong Fit" : "Good Fit"}</strong>
          <span>{resume.jobRole}</span>
        </div>
      </section>

      <section className="job-intelligence-grid">
        <Card className="wide">
          <CardTitle title="Match Breakdown" />
          <div className="match-metric-grid">
            <Metric label="Role fit" value={roleFit} />
            <Metric label="Keyword coverage" value={keywordFit} />
            <Metric label="Market readiness" value={marketFit} />
          </div>
          <div className="fit-lane">
            {["Resume Scan", "Skill Mapping", "Keyword Gap", "Apply Ready"].map((step, index) => (
              <button key={step} onClick={() => navigate(index < 2 ? "/skills-analysis" : "/keyword-optimizer")} type="button">
                <em>{index + 1}</em>
                <strong>{step}</strong>
                <span>{index < 2 ? "Completed signal" : "Recommended next action"}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Matched Strengths" />
          <div className="keyword-cloud compact">
            {matched.slice(0, 10).map((skill) => <button key={skill} onClick={() => navigate("/skills-analysis")} type="button">{skill}</button>)}
          </div>
        </Card>

        <Card>
          <CardTitle title="Priority Gaps" />
          <div className="priority-gap-list">
            {missing.slice(0, 5).map((skill, index) => (
              <button key={skill} onClick={() => navigate("/learning-hub")} type="button">
                <strong>{skill}</strong>
                <span>{index < 2 ? "High hiring impact" : "Add portfolio proof"}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="wide">
          <CardTitle title="AI Action Plan" />
          <div className="job-action-grid">
            {actionItems.map(([title, copy, path]) => (
              <button key={title} onClick={() => navigate(path)} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
                <em>Open workflow</em>
              </button>
            ))}
          </div>
        </Card>
      </section>
    </div>
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

      <section className="analysis-grid">
        <Card className="wide">
          <CardTitle title="Version Compare" />
          <div className="compare-table">
            {[
              ["ATS Score", "87", "82", "Primary resume has stronger keyword balance."],
              ["Keyword Match", "High", "Medium", "Frontend version needs TypeScript and testing keywords."],
              ["Project Proof", "Medium", "High", "Frontend version has better portfolio proof."],
              ["Best Use", "General software roles", "React/UI roles", "Choose based on job description."]
            ].map(([metric, primary, focused, insight]) => (
              <div key={metric}>
                <strong>{metric}</strong>
                <span>{primary}</span>
                <span>{focused}</span>
                <em>{insight}</em>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/ats-score")} type="button">Open ATS Comparison</button>
        </Card>
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
  const recommendedSkills = missing.length ? missing.slice(0, 6) : ["communication", "portfolio projects", "interview practice", "role keywords"];

  return (
    <div className="job-prep-page page-grid">
      <section className="tool-hero prep-hero">
        <div>
          <span>Job Preparation</span>
          <h2>Learning Hub</h2>
          <p>Structured resources arranged by Tech, Non-Tech, Sales & Marketing, Government Exams, Certifications and Interview Prep.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/career-roadmap")} type="button">Build Roadmap</button>
            <button className="ghost-button" onClick={() => navigate("/interview-prep")} type="button">Practice Interview</button>
          </div>
        </div>
        <div className="tool-score-card">
          <strong>{learningHubSections.length}</strong>
          <span>learning sections</span>
          <p>{recommendedSkills.length} skill targets</p>
        </div>
      </section>

      <section className="learning-hub-layout">
        <aside className="learning-sidebar">
          <CardTitle title="Learning Hub" />
          {learningHubSections.map((section) => (
            <a href={`#${section.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={section.title}>
              <span>{section.badge}</span>
              <strong>{section.title}</strong>
            </a>
          ))}
        </aside>

        <div className="learning-section-stack">
          <section className="learning-section-card personal-plan">
            <div>
              <span>AI Recommendations</span>
              <h3>Personal Skill Queue for {resume.jobRole}</h3>
              <p>Use these items to decide what to learn first, then add proof in resume projects and interview stories.</p>
            </div>
            <div className="missing-action-list">
              {recommendedSkills.map((skill) => (
                <button key={skill} onClick={() => navigate("/skills-analysis")} type="button">
                  <strong>{skill}</strong>
                  <span>Learn, practice and add proof to resume</span>
                </button>
              ))}
            </div>
          </section>

          {learningHubSections.map((section) => (
            <section className="learning-section-card" id={section.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")} key={section.title}>
              <div className="learning-section-title">
                <span>{section.badge}</span>
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.resources.length} curated resources for practical career preparation.</p>
                </div>
              </div>
              <div className="resource-grid learning-resource-grid">
                {section.resources.map(([title, copy, url]) => (
                  <a href={url} key={title} rel="noreferrer" target="_blank">
                    <strong>{title}</strong>
                    <span>{copy}</span>
                    <em>Open resource</em>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

function JobTrackerModule({ navigate }) {
  const pipeline = [
    ["Saved", 6, "Resume tailoring pending"],
    ["Applied", 4, "Waiting for recruiter"],
    ["Interview", 2, "Prep required"],
    ["Offer", 1, "Compare package"]
  ];
  const applications = [
    ["Frontend Developer", "TechNova Labs", "Interview", "Today 7:00 PM", "92%"],
    ["Full Stack Developer", "CloudBridge", "Applied", "Follow up tomorrow", "86%"],
    ["React Developer", "PixelWorks", "Saved", "Customize resume", "81%"]
  ];

  return (
    <div className="job-tracker-page page-grid">
      <section className="tool-hero job-hero">
        <div>
          <span>Job Tracking</span>
          <h2>Application Command Center</h2>
          <p>Manage saved jobs, applications, interviews, follow-ups and resume versions from one professional tracking board.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/job-match")} type="button">Run Job Match</button>
            <button className="ghost-button" onClick={() => navigate("/cover-letter")} type="button">Generate Cover Letter</button>
          </div>
        </div>
        <div className="tracker-score-card">
          <strong>13</strong>
          <span>active opportunities</span>
          <p>3 need action today</p>
        </div>
      </section>

      <section className="tracker-pipeline">
        {pipeline.map(([label, count, detail]) => (
          <button key={label} onClick={() => navigate(label === "Interview" ? "/interview-prep" : "/job-match")} type="button">
            <strong>{count}</strong>
            <span>{label}</span>
            <em>{detail}</em>
          </button>
        ))}
      </section>

      <section className="job-intelligence-grid">
        <Card className="wide">
          <CardTitle title="Tracked Applications" />
          <div className="application-table">
            {applications.map(([role, company, stage, nextStep, score]) => (
              <button key={`${company}-${role}`} onClick={() => navigate(stage === "Interview" ? "/interview-prep" : "/job-match")} type="button">
                <span>
                  <strong>{role}</strong>
                  <em>{company}</em>
                </span>
                <b>{stage}</b>
                <small>{nextStep}</small>
                <i>{score}</i>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="AI Follow-Ups" />
          <div className="priority-gap-list">
            {["Send recruiter follow-up", "Prepare project walkthrough", "Update resume for React role"].map((item, index) => (
              <button key={item} onClick={() => navigate(index === 1 ? "/interview-prep" : "/resume-builder")} type="button">
                <strong>{item}</strong>
                <span>{index === 0 ? "Due today" : "Recommended action"}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Tracker Insights" />
          <ul className="ats-checklist">
            <li className="pass">Interview conversion is improving</li>
            <li className="warn">2 saved jobs need custom resume</li>
            <li className="warn">1 follow-up is due today</li>
            <li className="pass">Best match role: Frontend Developer</li>
          </ul>
        </Card>

        <Card className="wide">
          <CardTitle title="Smart Reminders" />
          <div className="reminder-strip">
            {[
              ["Today", "Send follow-up to TechNova recruiter", "/cover-letter"],
              ["Tomorrow", "Customize resume for CloudBridge", "/resume-builder"],
              ["This week", "Practice 2 interview answers", "/interview-prep"]
            ].map(([when, copy, path]) => (
              <button key={copy} onClick={() => navigate(path)} type="button">
                <strong>{when}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

function AnalyticsPage({ atsScore, goals, matchScore, navigate, notes, tasks }) {
  const productivityScore = Math.min(99, Math.max(58, tasks.length ? 82 : 76));
  const completionScore = Math.min(96, 62 + goals.length * 8 + tasks.length * 3);
  const analyticsCards = [
    ["Resume Health", `${atsScore}/100`, "ATS readiness and content quality", "/ats-score"],
    ["Job Match", `${matchScore}%`, "Current role fit and keyword coverage", "/job-match"],
    ["Productivity", `${productivityScore}/100`, "Task momentum and daily execution", "/ai-assistant"],
    ["Goal Progress", `${completionScore}%`, "Career roadmap completion estimate", "/career-roadmap"]
  ];
  const funnel = [
    ["Resume Screened", 12, "ATS and skills data captured"],
    ["Roles Matched", 8, "High-fit opportunities identified"],
    ["Applications Sent", 4, "Tracked in pipeline"],
    ["Interviews", 2, "Practice and feedback needed"]
  ];
  const trends = [
    ["ATS Momentum", atsScore, "+8 this month"],
    ["Applications", 68, "4 active roles"],
    ["Interview Prep", 74, "2 sessions due"],
    ["Learning Progress", completionScore, `${goals.length || 1} goals tracked`]
  ];

  return (
    <div className="analytics-page page-grid">
      <section className="tool-hero analytics-hero">
        <div>
          <span>Analytics</span>
          <h2>Career Performance Dashboard</h2>
          <p>Monitor resume health, job-match strength, task execution and goal progress with clear AI-driven recommendations.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/ats-score")} type="button">Improve Score</button>
            <button className="ghost-button" onClick={() => navigate("/market-insights")} type="button">View Market Signals</button>
          </div>
        </div>
        <div className="analytics-score-card">
          <ScoreRing value={productivityScore} tone="purple" />
          <strong>Performance Index</strong>
          <span>{tasks.length || 3} tasks, {notes.length || 2} notes, {goals.length || 1} goals tracked</span>
        </div>
      </section>

      <section className="analytics-kpi-grid">
        {analyticsCards.map(([title, value, copy, path]) => (
          <button key={title} onClick={() => navigate(path)} type="button">
            <span>{title}</span>
            <strong>{value}</strong>
            <em>{copy}</em>
          </button>
        ))}
      </section>

      <section className="analytics-grid">
        <Card className="wide">
          <CardTitle title="Score Breakdown" />
          <div className="analytics-mini">
            <Metric label="Resume health" value={atsScore} />
            <Metric label="Job match" value={matchScore} />
            <Metric label="Task progress" value={productivityScore} />
            <Metric label="Goal execution" value={completionScore} />
          </div>
        </Card>

        <Card>
          <CardTitle title="AI Insights" />
          <div className="priority-gap-list">
            {["Optimize missing keywords", "Apply to 4 high-fit roles", "Practice 2 interview answers"].map((item, index) => (
              <button key={item} onClick={() => navigate(index === 0 ? "/keyword-optimizer" : index === 1 ? "/job-tracker" : "/interview-prep")} type="button">
                <strong>{item}</strong>
                <span>{index === 0 ? "Highest impact" : "Recommended this week"}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="wide">
          <CardTitle title="Application Funnel" />
          <div className="analytics-funnel">
            {funnel.map(([label, count, copy]) => (
              <button key={label} onClick={() => navigate(label === "Interviews" ? "/interview-prep" : "/job-tracker")} type="button">
                <strong>{count}</strong>
                <span>{label}</span>
                <em>{copy}</em>
              </button>
            ))}
          </div>
        </Card>

        <Card className="wide">
          <CardTitle title="Progress Charts" />
          <div className="chart-board">
            {trends.map(([label, value, note]) => (
              <div className="chart-row" key={label}>
                <div>
                  <strong>{label}</strong>
                  <span>{note}</span>
                </div>
                <i><b style={{ width: `${value}%` }} /></i>
                <em>{value}%</em>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Admin Overview" />
          <div className="admin-mini-grid">
            <span><strong>{tasks.length || 0}</strong> Tasks</span>
            <span><strong>{notes.length || 0}</strong> Notes</span>
            <span><strong>{goals.length || 0}</strong> Goals</span>
            <span><strong>{Math.max(1, tasks.length + notes.length + goals.length)}</strong> Activities</span>
          </div>
        </Card>
      </section>
    </div>
  );
}

function MarketInsightsModule({ matched, missing, navigate, resume }) {
  const demandSignals = [
    ["High Demand", "React, Node.js and cloud-ready profiles are receiving stronger shortlists."],
    ["Rising Skill", `${missing[0] || "TypeScript"} can improve match quality for ${resume.jobRole}.`],
    ["Resume Signal", "Recruiters scan measurable outcomes, ownership and project proof first."]
  ];
  const marketRoles = [
    ["Frontend Developer", "92%", "React, TypeScript, UI systems"],
    ["Full Stack Developer", "88%", "Node.js, APIs, databases"],
    ["AI Engineer", "81%", "Python, ML, prompt workflows"]
  ];

  return (
    <div className="market-page page-grid">
      <section className="tool-hero analytics-hero market-hero">
        <div>
          <span>Market Insights</span>
          <h2>Hiring Market Intelligence</h2>
          <p>Understand demand signals, trending skills and role-fit opportunities before tailoring your resume and applications.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/job-match")} type="button">Check Role Fit</button>
            <button className="ghost-button" onClick={() => navigate("/learning-hub")} type="button">Close Skill Gaps</button>
          </div>
        </div>
        <div className="tracker-score-card">
          <strong>Hot</strong>
          <span>{resume.jobRole}</span>
          <p>{matched.length + missing.length} skills analyzed</p>
        </div>
      </section>

      <section className="analytics-grid">
        <Card className="wide">
          <CardTitle title="Role Demand Board" />
          <div className="application-table">
            {marketRoles.map(([role, score, skills]) => (
              <button key={role} onClick={() => navigate("/job-match")} type="button">
                <span>
                  <strong>{role}</strong>
                  <em>{skills}</em>
                </span>
                <b>Demand</b>
                <small>Market fit estimate</small>
                <i>{score}</i>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Trending Keywords" />
          <div className="market-keyword-grid">
            {[...matched.slice(0, 6), ...missing.slice(0, 4)].map((skill, index) => (
              <button key={`${skill}-${index}`} onClick={() => navigate(index < 6 ? "/skills-analysis" : "/learning-hub")} type="button">
                <strong>{skill}</strong>
                <span>{index < 6 ? "Detected strength" : "Growth opportunity"}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Demand Signals" />
          <div className="priority-gap-list">
            {demandSignals.map(([title, copy]) => (
              <button key={title} onClick={() => navigate("/keyword-optimizer")} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="wide">
          <CardTitle title="Market Action Plan" />
          <div className="job-action-grid">
            {[
              ["Tailor Resume", "Align bullets with demand keywords and measurable proof.", "/resume-builder"],
              ["Track Target Roles", "Add shortlisted roles to the application tracker.", "/job-tracker"],
              ["Build Skill Plan", "Use Learning Hub to close market gaps faster.", "/learning-hub"]
            ].map(([title, copy, path]) => (
              <button key={title} onClick={() => navigate(path)} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
                <em>Open workflow</em>
              </button>
            ))}
          </div>
        </Card>
      </section>
    </div>
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

function AIAssistantPage({ forms, goals, handlers, loading, navigate, notes, outputs, tasks }) {
  const commandTiles = [
    ["Prioritize Tasks", "Deadline and importance based priority engine", "/ai-assistant"],
    ["Break Down Work", "Turn large tasks into smaller execution steps", "/ai-assistant"],
    ["Daily Planner", "Create time-blocked schedule from available time", "/ai-assistant"],
    ["Notes Summarizer", "Extract key points and action items from notes", "/ai-assistant"],
    ["Goal Coach", "Convert goals into daily targets and checkpoints", "/career-roadmap"],
    ["Smart Search", "Find tasks, notes, goals and resume signals naturally", "/smart-search"]
  ];

  return (
    <div className="ai-tools-page page-grid">
      <section className="tool-hero ai-hero">
        <div>
          <span>AI Tools</span>
          <h2>AI Assistant Command Center</h2>
          <p>Ask the assistant to plan work, summarize notes, break big goals, search workspace data and guide your career actions.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/smart-search")} type="button">Ask Workspace</button>
            <button className="ghost-button" onClick={() => navigate("/rag-pdf")} type="button">Ask PDF</button>
          </div>
        </div>
        <div className="assistant-brain-card">
          <strong>24/7</strong>
          <span>smart assistant</span>
          <p>{tasks.length || 3} tasks, {notes.length || 2} notes, {goals.length || 1} goals in context</p>
        </div>
      </section>

      <section className="ai-command-grid">
        {commandTiles.map(([title, copy, path]) => (
          <button key={title} onClick={() => navigate(path)} type="button">
            <strong>{title}</strong>
            <span>{copy}</span>
          </button>
        ))}
      </section>

      <section className="ai-workbench-grid">
        <Card className="wide ai-chat-card">
          <CardTitle title="Ask AI Assistant" />
          <div className="ai-chat-window">
            {(outputs.aiMessages || []).map((message, index) => (
              <div className={`ai-message ${message.role}`} key={`${message.role}-${index}`}>
                <strong>{message.role === "user" ? "You" : "AI Assistant"}</strong>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <form className="stack-form ai-chat-form" onSubmit={handlers.sendAssistantMessage}>
            <input value={forms.chat || ""} onChange={handlers.changeChat} placeholder="Ask anything: resume, PDF, goals, tasks, interviews..." />
            <button disabled={loading}>Send to AI</button>
          </form>
        </Card>
        <TaskModule forms={forms} handlers={handlers} loading={loading} tasks={tasks} />
        <BreakdownModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} tasks={tasks} />
        <PlannerModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />
        <NotesModule forms={forms} handlers={handlers} loading={loading} notes={notes} goals={goals} />
        <GoalModule forms={forms} handlers={handlers} loading={loading} outputs={outputs} />
        <Card>
          <CardTitle title="Assistant Capabilities" />
          <ul className="ats-checklist">
            <li className="pass">Understands tasks, notes, goals and resume workflows</li>
            <li className="pass">Generates plans, summaries, priorities and next steps</li>
            <li className="warn">Use RAG PDF for document-grounded answers</li>
            <li className="warn">Use Smart Search for workspace-wide discovery</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

function SearchModule({ forms, handlers, loading, navigate, outputs }) {
  const searchExamples = [
    "Show overdue high priority tasks",
    "Find notes about React interview prep",
    "Which goals need action this week?",
    "Search resume gaps related to cloud"
  ];

  return (
    <div className="ai-tools-page page-grid">
      <section className="tool-hero ai-hero search-hero">
        <div>
          <span>AI Tools</span>
          <h2>Smart Search Intelligence</h2>
          <p>Search your workspace using natural language. It can understand tasks, notes, goals, resume insights and PDF answers semantically.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/ai-assistant")} type="button">Open Assistant</button>
            <button className="ghost-button" onClick={() => navigate("/rag-pdf")} type="button">Search PDFs</button>
          </div>
        </div>
        <div className="assistant-brain-card">
          <strong>NLQ</strong>
          <span>natural language query</span>
          <p>Meaning-based search across workspace data</p>
        </div>
      </section>

      <section className="smart-search-layout">
        <Card className="wide">
          <CardTitle title="Ask Anything" />
        <form className="stack-form" onSubmit={handlers.search}>
            <input value={forms.search} onChange={handlers.changeSearch} placeholder="Example: find tasks related to resume improvement this week" />
          <button disabled={loading}>Search Workspace</button>
        </form>
        <List items={outputs.searchResults.map((item) => item.title || item.summary || item.type)} />
        </Card>

        <Card>
          <CardTitle title="Smart Prompts" />
          <div className="market-keyword-grid">
            {searchExamples.map((example) => (
              <button key={example} onClick={() => navigate("/smart-search")} type="button">
                <strong>{example}</strong>
                <span>Natural language search example</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Search Sources" />
          <ul className="ats-checklist">
            <li className="pass">Tasks and priorities</li>
            <li className="pass">Notes and summaries</li>
            <li className="pass">Goals and roadmap progress</li>
            <li className="warn">PDF knowledge via RAG assistant</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

function PdfModule({ forms, handlers, loading, navigate, outputs, pdfUpload }) {
  const pdfUseCases = [
    ["Resume Review", "Ask questions from uploaded resume or job description."],
    ["Study Notes", "Summarize long PDF notes into key points and actions."],
    ["Policy / Docs", "Find exact answers from company, project or course PDFs."]
  ];

  return (
    <div className="ai-tools-page page-grid">
      <section className="tool-hero ai-hero rag-hero">
        <div>
          <span>AI Tools</span>
          <h2>RAG PDF Knowledge Assistant</h2>
          <p>Paste extracted PDF content, ask a question, and get a document-grounded answer for resumes, notes, job descriptions and study material.</p>
          <div className="ats-actions">
            <button onClick={() => navigate("/smart-search")} type="button">Search Workspace</button>
            <button className="ghost-button" onClick={() => navigate("/ai-assistant")} type="button">Open Assistant</button>
          </div>
        </div>
        <div className="assistant-brain-card">
          <strong>RAG</strong>
          <span>document grounded AI</span>
          <p>Answers from your uploaded PDF context</p>
        </div>
      </section>

      <section className="rag-layout">
        <Card className="wide">
          <CardTitle title="Ask Your PDF" />
          <div className="pdf-upload-zone">
            <label>
              <span>Upload PDF / DOCX / TXT</span>
              <input accept=".pdf,.docx,.txt" onChange={handlers.uploadPdf} type="file" />
            </label>
            <div>
              <strong>{pdfUpload?.file?.name || "No document selected"}</strong>
              <p>{pdfUpload?.status || "Upload a document to auto-extract text, then ask a question from it."}</p>
            </div>
          </div>
          <form className="stack-form" onSubmit={handlers.askPdf}>
            <input name="title" value={forms.pdf.title} onChange={handlers.changePdf} placeholder="PDF title" />
            <textarea name="content" value={forms.pdf.content} onChange={handlers.changePdf} placeholder="Paste extracted PDF content" />
            <input name="question" value={forms.pdf.question} onChange={handlers.changePdf} placeholder="Ask question from PDF" />
            <button disabled={loading}>Ask PDF AI</button>
          </form>
          <List items={[outputs.pdfAnswer].filter(Boolean)} />
        </Card>

        <Card>
          <CardTitle title="Use Cases" />
          <div className="priority-gap-list">
            {pdfUseCases.map(([title, copy]) => (
              <button key={title} onClick={() => navigate("/rag-pdf")} type="button">
                <strong>{title}</strong>
                <span>{copy}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle title="Answer Quality" />
          <ul className="ats-checklist">
            <li className="pass">Ground answer in pasted PDF content</li>
            <li className="pass">Extract key facts and action items</li>
            <li className="warn">Ask specific questions for better results</li>
            <li className="warn">Use enough PDF text for strong context</li>
          </ul>
        </Card>
      </section>
    </div>
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
