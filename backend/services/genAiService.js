const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

export async function buildGenAiInsights(screeningResult) {
  if (!process.env.OPENAI_API_KEY) {
    return buildFallbackInsights(screeningResult);
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        instructions:
          "You are an HR AI assistant. Return only valid JSON. Be concise, practical, and fair.",
        input: buildPrompt(screeningResult),
        text: {
          format: {
            type: "json_schema",
            name: "resume_screening_insights",
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                candidateSummary: { type: "string" },
                recruiterNote: { type: "string" },
                improvementTips: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 3,
                  maxItems: 5
                },
                interviewQuestions: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 3,
                  maxItems: 5
                }
              },
              required: [
                "candidateSummary",
                "recruiterNote",
                "improvementTips",
                "interviewQuestions"
              ]
            }
          }
        }
      })
    });

    if (!response.ok) {
      return buildFallbackInsights(screeningResult, "OpenAI request failed");
    }

    const data = await response.json();
    const content = data.output_text || data.output?.[0]?.content?.[0]?.text;
    return JSON.parse(content);
  } catch (error) {
    console.warn("GenAI fallback used:", error.message);
    return buildFallbackInsights(screeningResult, "OpenAI response unavailable");
  }
}

function buildPrompt(result) {
  return `
Create AI resume screening insights from this structured result.

Job role: ${result.jobRole}
Score: ${result.score}
Category: ${result.category}
Matched skills: ${result.matchedSkills.join(", ") || "none"}
Missing skills: ${result.missingSkills.join(", ") || "none"}

Avoid protected-class assumptions. Focus only on role fit, skills, projects, and interview follow-up.
`;
}

function buildFallbackInsights(result, note = "Local GenAI fallback") {
  const missing = result.missingSkills.slice(0, 5);
  const matched = result.matchedSkills.slice(0, 5);

  return {
    candidateSummary:
      result.score >= 75
        ? `Candidate appears well aligned for ${result.jobRole}, especially around ${matched.join(", ") || "core skills"}.`
        : `Candidate has partial alignment for ${result.jobRole}, but needs stronger evidence for ${missing.join(", ") || "role-critical skills"}.`,
    recruiterNote: `${note}: Review project depth, recent hands-on experience, and communication clarity before shortlisting.`,
    improvementTips: buildImprovementTips(missing),
    interviewQuestions: buildInterviewQuestions(result.jobRole, matched, missing)
  };
}

function buildImprovementTips(missingSkills) {
  if (!missingSkills.length) {
    return [
      "Add measurable project outcomes to make the resume stronger.",
      "Mention tools, frameworks, and responsibilities clearly under each project.",
      "Keep the top summary aligned with the target role."
    ];
  }

  return missingSkills.slice(0, 5).map((skill) => {
    return `Add a concrete project or achievement that demonstrates ${skill}.`;
  });
}

function buildInterviewQuestions(jobRole, matchedSkills, missingSkills) {
  const primarySkill = matchedSkills[0] || "your strongest technical skill";
  const gapSkill = missingSkills[0] || "role-specific problem solving";

  return [
    `Can you explain a recent ${jobRole} project where you used ${primarySkill}?`,
    `How would you approach learning or applying ${gapSkill} in a production task?`,
    "What was one technical challenge in your resume projects, and how did you solve it?"
  ];
}
