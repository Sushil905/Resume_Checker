export default function ResultCard({ result }) {
  if (!result) {
    return (
      <section className="panel empty-state">
        <h2>Result will appear here</h2>
        <p>Upload a resume and choose a role to see match score, strengths, and missing skills.</p>
      </section>
    );
  }

  return (
    <section className="panel result-card">
      <div className="score-row">
        <div>
          <p className="eyebrow">{result.jobRole}</p>
          <h2>{result.category}</h2>
        </div>
        <strong>{result.score}%</strong>
      </div>

      <p>{result.summary}</p>

      <SkillList title="Matched skills" skills={result.matchedSkills} tone="good" />
      <SkillList title="Missing skills" skills={result.missingSkills} tone="warn" />

      {result.genAiInsights && <GenAiInsights insights={result.genAiInsights} />}
    </section>
  );
}

function SkillList({ title, skills, tone }) {
  return (
    <div className="skill-block">
      <h3>{title}</h3>
      <div className="chips">
        {skills.length ? (
          skills.map((skill) => (
            <span className={`chip ${tone}`} key={skill}>
              {skill}
            </span>
          ))
        ) : (
          <span className="muted">None</span>
        )}
      </div>
    </div>
  );
}

function GenAiInsights({ insights }) {
  return (
    <div className="genai-block">
      <p className="eyebrow">GenAI Insights</p>
      <h3>Recruiter summary</h3>
      <p>{insights.candidateSummary}</p>

      <h3>Recruiter note</h3>
      <p>{insights.recruiterNote}</p>

      <InsightList title="Improvement tips" items={insights.improvementTips} />
      <InsightList title="Interview questions" items={insights.interviewQuestions} />
    </div>
  );
}

function InsightList({ title, items = [] }) {
  return (
    <div className="insight-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
