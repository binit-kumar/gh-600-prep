window.GH600_QUESTION_BANK = {
  "meta": {
    "examCode": "GH-600",
    "examName": "Developing in Agentic AI Systems",
    "examDurationMinutes": 120,
    "officialQuestionCountPublished": false,
    "questionCountGuidance": "Microsoft states most certification exams typically contain between 40-60 questions; exact count varies by exam.",
    "estimatedQuestionRange": {
      "min": 40,
      "max": 60
    },
    "recommendedMockQuestionCount": 200,
    "distributionMethod": "Weighted distribution by skill-area midpoint, scaled to a 200-question practice bank",
    "recommendedSessionQuestionCount": 60,
    "sessionDistribution": {
      "D1": 11,
      "D2": 14,
      "D3": 8,
      "D4": 10,
      "D5": 10,
      "D6": 7
    }
  },
  "domains": [
    {
      "id": "D1",
      "title": "Prepare agent architecture and SDLC processes",
      "weightRange": "15-20%",
      "mockQuestionCount": 35,
      "conceptMarkdown": "# Domain 1: Prepare agent architecture and SDLC processes\n\n## Focus\n- Integrate agents into SDLC stages\n- Separate planning from execution\n- Define autonomy levels and intervention points\n\n## Exam signal\nExpect scenario questions asking where an agent should stop, ask for review, or produce inspectable artifacts."
    },
    {
      "id": "D2",
      "title": "Implement tool use and environment interaction",
      "weightRange": "20-25%",
      "mockQuestionCount": 45,
      "conceptMarkdown": "# Domain 2: Implement tool use and environment interaction\n\n## Focus\n- Select tools and permissions\n- Configure MCP servers and allow lists\n- Handle environment constraints and failures\n\n## Exam signal\nExpect tradeoff questions around least privilege, retries, rollbacks, and safe execution boundaries."
    },
    {
      "id": "D3",
      "title": "Manage memory, state, and execution",
      "weightRange": "10-15%",
      "mockQuestionCount": 25,
      "conceptMarkdown": "# Domain 3: Manage memory, state, and execution\n\n## Focus\n- Short-term vs long-term vs external memory\n- Durable task state and resumability\n- Detect and correct context drift\n\n## Exam signal\nQuestions often test when to prune memory, what to persist, and how to avoid stale context."
    },
    {
      "id": "D4",
      "title": "Perform evaluation, error analysis, and tuning",
      "weightRange": "15-20%",
      "mockQuestionCount": 35,
      "conceptMarkdown": "# Domain 4: Perform evaluation, error analysis, and tuning\n\n## Focus\n- Define measurable success criteria\n- Use traces/logs/artifacts for root cause analysis\n- Tune instructions, tools, and memory strategy\n\n## Exam signal\nExpect failure-analysis scenarios where multiple causes are plausible and you must pick the best evidence-led fix."
    },
    {
      "id": "D5",
      "title": "Orchestrate multi-agent coordination",
      "weightRange": "15-20%",
      "mockQuestionCount": 35,
      "conceptMarkdown": "# Domain 5: Orchestrate multi-agent coordination\n\n## Focus\n- Choose orchestration patterns\n- Manage isolation, handoffs, and conflicts\n- Recover from stalled or failed agents\n\n## Exam signal\nLook for scenarios involving overlapping code changes, contradictory outputs, and lifecycle updates to active workflows."
    },
    {
      "id": "D6",
      "title": "Implement guardrails and accountability",
      "weightRange": "10-15%",
      "mockQuestionCount": 25,
      "conceptMarkdown": "# Domain 6: Implement guardrails and accountability\n\n## Focus\n- Classify risk and assign autonomy levels\n- Enforce least privilege and approval gates\n- Preserve velocity while meeting compliance\n\n## Exam signal\nQuestions frequently require balancing delivery speed against irreversible or compliance-sensitive actions."
    }
  ],
  "questions": [
    {
      "id": "D1-01",
      "domainId": "D1",
      "q": "A team wants an agent to open pull requests after refactoring, but architects require human validation before any production-impacting change. Which design is best?",
      "options": [
        "Allow direct merge on green CI to maximize speed",
        "Require human approval before merge and keep agent PR creation autonomous",
        "Disable agent PR creation and require manual patch files",
        "Let the agent choose whether approval is needed"
      ],
      "answer": 1,
      "explanation": "This preserves delivery velocity while enforcing a control point for production-impacting decisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-02",
      "domainId": "D1",
      "q": "What is the clearest way to separate planning from execution in an agent workflow?",
      "options": [
        "Run tools during chain-of-thought and summarize later",
        "Output a structured plan artifact, then execute only after policy checks pass",
        "Execute first and write a plan retroactively",
        "Hide planning details to reduce noise"
      ],
      "answer": 1,
      "explanation": "A structured pre-execution plan supports review, validation, and policy enforcement before action.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-03",
      "domainId": "D1",
      "q": "Which SDLC integration point is most suitable for an agent that enforces coding standards before code review?",
      "options": [
        "Post-deployment monitoring only",
        "Pre-commit hook or pull request validation workflow",
        "Quarterly architecture review",
        "Incident response process"
      ],
      "answer": 1,
      "explanation": "Quality and style controls should run early, ideally before or during PR validation.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-04",
      "domainId": "D1",
      "q": "A product owner asks for autonomous hotfix deployment at midnight. Which prerequisite is most critical first?",
      "options": [
        "Higher model temperature",
        "Defined rollback path and escalation policy",
        "Larger context window",
        "More verbose commit messages"
      ],
      "answer": 1,
      "explanation": "Autonomous production actions need explicit rollback and escalation to manage risk.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-05",
      "domainId": "D1",
      "q": "What best demonstrates inspectable artifacts for autonomous agent operation?",
      "options": [
        "Final response text and confidence note only",
        "Plan, tool call log, diff, and evaluation summary attached to workflow run",
        "Hidden logs retained in volatile memory",
        "Screenshot of terminal output without metadata"
      ],
      "answer": 1,
      "explanation": "Inspectable artifacts require traceable outputs that support review and audit in standard tooling.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-06",
      "domainId": "D1",
      "q": "Which anti-pattern most often causes unsafe autonomy in SDLC agent design?",
      "options": [
        "Explicit tool allow list",
        "No distinction between read-only and write-capable actions",
        "Human approval for irreversible actions",
        "Branch-scoped execution"
      ],
      "answer": 1,
      "explanation": "Mixing read and write privileges without boundaries leads to accidental high-impact actions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-07",
      "domainId": "D1",
      "q": "You need fast iteration while preserving governance. Which approach is best?",
      "options": [
        "Full human review on every low-risk formatting change",
        "Risk-tiered autonomy with selective human checkpoints",
        "Disable all autonomy in regulated repositories",
        "Allow unrestricted autonomy with post-hoc review"
      ],
      "answer": 1,
      "explanation": "Risk-tiered autonomy keeps low-risk flow fast and focuses approvals where they matter.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-08",
      "domainId": "D1",
      "q": "Which output format most helps validate an agent plan before execution?",
      "options": [
        "Unstructured prose only",
        "JSON with steps, assumptions, required tools, and success criteria",
        "Single confidence score",
        "Natural language without constraints"
      ],
      "answer": 1,
      "explanation": "Structured plans are easier to lint, validate, and enforce with policy checks.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-09",
      "domainId": "D1",
      "q": "An agent repeatedly opens duplicate PRs for the same issue. Which architecture fix is best?",
      "options": [
        "Expand repository/tool context visibility without changing safety gates",
        "Introduce idempotency checks tied to issue and branch state",
        "Reduce artifact retention scope to only final outputs",
        "Add more reviewers"
      ],
      "answer": 1,
      "explanation": "Idempotency controls prevent repeated execution of the same logical action.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-01-V2",
      "domainId": "D1",
      "q": "A team wants an agent to open pull requests after refactoring, but architects require human validation before any production-impacting change. Which design is best?",
      "options": [
        "Allow direct merge on green CI to maximize speed",
        "Require human approval before merge and keep agent PR creation autonomous",
        "Disable agent PR creation and require manual patch files",
        "Let the agent choose whether approval is needed"
      ],
      "answer": 1,
      "explanation": "This preserves delivery velocity while enforcing a control point for production-impacting decisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-02-V2.111111111111111",
      "domainId": "D1",
      "q": "What is the clearest way to separate planning from execution in an agent workflow?",
      "options": [
        "Run tools during chain-of-thought and summarize later",
        "Output a structured plan artifact, then execute only after policy checks pass",
        "Execute first and write a plan retroactively",
        "Hide planning details to reduce noise"
      ],
      "answer": 1,
      "explanation": "A structured pre-execution plan supports review, validation, and policy enforcement before action.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-03-V2.2222222222222223",
      "domainId": "D1",
      "q": "Which SDLC integration point is most suitable for an agent that enforces coding standards before code review?",
      "options": [
        "Post-deployment monitoring only",
        "Pre-commit hook or pull request validation workflow",
        "Quarterly architecture review",
        "Incident response process"
      ],
      "answer": 1,
      "explanation": "Quality and style controls should run early, ideally before or during PR validation.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-04-V2.333333333333333",
      "domainId": "D1",
      "q": "A product owner asks for autonomous hotfix deployment at midnight. Which prerequisite is most critical first?",
      "options": [
        "Higher model temperature",
        "Defined rollback path and escalation policy",
        "Larger context window",
        "More verbose commit messages"
      ],
      "answer": 1,
      "explanation": "Autonomous production actions need explicit rollback and escalation to manage risk.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-05-V2.4444444444444446",
      "domainId": "D1",
      "q": "What best demonstrates inspectable artifacts for autonomous agent operation?",
      "options": [
        "Final response text and confidence note only",
        "Plan, tool call log, diff, and evaluation summary attached to workflow run",
        "Hidden logs retained in volatile memory",
        "Screenshot of terminal output without metadata"
      ],
      "answer": 1,
      "explanation": "Inspectable artifacts require traceable outputs that support review and audit in standard tooling.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-06-V2.5555555555555554",
      "domainId": "D1",
      "q": "Which anti-pattern most often causes unsafe autonomy in SDLC agent design?",
      "options": [
        "Explicit tool allow list",
        "No distinction between read-only and write-capable actions",
        "Human approval for irreversible actions",
        "Branch-scoped execution"
      ],
      "answer": 1,
      "explanation": "Mixing read and write privileges without boundaries leads to accidental high-impact actions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-07-V2.666666666666667",
      "domainId": "D1",
      "q": "You need fast iteration while preserving governance. Which approach is best?",
      "options": [
        "Full human review on every low-risk formatting change",
        "Risk-tiered autonomy with selective human checkpoints",
        "Disable all autonomy in regulated repositories",
        "Allow unrestricted autonomy with post-hoc review"
      ],
      "answer": 1,
      "explanation": "Risk-tiered autonomy keeps low-risk flow fast and focuses approvals where they matter.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-08-V2.7777777777777777",
      "domainId": "D1",
      "q": "Which output format most helps validate an agent plan before execution?",
      "options": [
        "Unstructured prose only",
        "JSON with steps, assumptions, required tools, and success criteria",
        "Single confidence score",
        "Natural language without constraints"
      ],
      "answer": 1,
      "explanation": "Structured plans are easier to lint, validate, and enforce with policy checks.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-09-V2.888888888888889",
      "domainId": "D1",
      "q": "An agent repeatedly opens duplicate PRs for the same issue. Which architecture fix is best?",
      "options": [
        "Expand repository/tool context visibility without changing safety gates",
        "Introduce idempotency checks tied to issue and branch state",
        "Reduce artifact retention scope to only final outputs",
        "Add more reviewers"
      ],
      "answer": 1,
      "explanation": "Idempotency controls prevent repeated execution of the same logical action.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D1-X019",
      "domainId": "D1",
      "q": "A team wants an agent to open pull requests after refactoring, but architects require human validation before any production-impacting change. Which design is best?",
      "options": [
        "Allow direct merge on green CI to maximize speed",
        "Require human approval before merge and keep agent PR creation autonomous",
        "Disable agent PR creation and require manual patch files",
        "Let the agent choose whether approval is needed"
      ],
      "answer": 1,
      "explanation": "This preserves delivery velocity while enforcing a control point for production-impacting decisions.",
      "variantNumber": 19,
      "variantLabel": "Variant 19"
    },
    {
      "id": "D1-X020",
      "domainId": "D1",
      "q": "What is the clearest way to separate planning from execution in an agent workflow?",
      "options": [
        "Run tools during chain-of-thought and summarize later",
        "Output a structured plan artifact, then execute only after policy checks pass",
        "Execute first and write a plan retroactively",
        "Hide planning details to reduce noise"
      ],
      "answer": 1,
      "explanation": "A structured pre-execution plan supports review, validation, and policy enforcement before action.",
      "variantNumber": 20,
      "variantLabel": "Variant 20"
    },
    {
      "id": "D1-X021",
      "domainId": "D1",
      "q": "Which SDLC integration point is most suitable for an agent that enforces coding standards before code review?",
      "options": [
        "Post-deployment monitoring only",
        "Pre-commit hook or pull request validation workflow",
        "Quarterly architecture review",
        "Incident response process"
      ],
      "answer": 1,
      "explanation": "Quality and style controls should run early, ideally before or during PR validation.",
      "variantNumber": 21,
      "variantLabel": "Variant 21"
    },
    {
      "id": "D1-X022",
      "domainId": "D1",
      "q": "A product owner asks for autonomous hotfix deployment at midnight. Which prerequisite is most critical first?",
      "options": [
        "Higher model temperature",
        "Defined rollback path and escalation policy",
        "Larger context window",
        "More verbose commit messages"
      ],
      "answer": 1,
      "explanation": "Autonomous production actions need explicit rollback and escalation to manage risk.",
      "variantNumber": 22,
      "variantLabel": "Variant 22"
    },
    {
      "id": "D1-X023",
      "domainId": "D1",
      "q": "What best demonstrates inspectable artifacts for autonomous agent operation?",
      "options": [
        "Final response text and confidence note only",
        "Plan, tool call log, diff, and evaluation summary attached to workflow run",
        "Hidden logs retained in volatile memory",
        "Screenshot of terminal output without metadata"
      ],
      "answer": 1,
      "explanation": "Inspectable artifacts require traceable outputs that support review and audit in standard tooling.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D1-X024",
      "domainId": "D1",
      "q": "Which anti-pattern most often causes unsafe autonomy in SDLC agent design?",
      "options": [
        "Explicit tool allow list",
        "No distinction between read-only and write-capable actions",
        "Human approval for irreversible actions",
        "Branch-scoped execution"
      ],
      "answer": 1,
      "explanation": "Mixing read and write privileges without boundaries leads to accidental high-impact actions.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D1-X025",
      "domainId": "D1",
      "q": "You need fast iteration while preserving governance. Which approach is best?",
      "options": [
        "Full human review on every low-risk formatting change",
        "Risk-tiered autonomy with selective human checkpoints",
        "Disable all autonomy in regulated repositories",
        "Allow unrestricted autonomy with post-hoc review"
      ],
      "answer": 1,
      "explanation": "Risk-tiered autonomy keeps low-risk flow fast and focuses approvals where they matter.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    },
    {
      "id": "D1-X026",
      "domainId": "D1",
      "q": "Which output format most helps validate an agent plan before execution?",
      "options": [
        "Unstructured prose only",
        "JSON with steps, assumptions, required tools, and success criteria",
        "Single confidence score",
        "Natural language without constraints"
      ],
      "answer": 1,
      "explanation": "Structured plans are easier to lint, validate, and enforce with policy checks.",
      "variantNumber": 26,
      "variantLabel": "Variant 26"
    },
    {
      "id": "D1-X027",
      "domainId": "D1",
      "q": "An agent repeatedly opens duplicate PRs for the same issue. Which architecture fix is best?",
      "options": [
        "Expand repository/tool context visibility without changing safety gates",
        "Introduce idempotency checks tied to issue and branch state",
        "Reduce artifact retention scope to only final outputs",
        "Add more reviewers"
      ],
      "answer": 1,
      "explanation": "Idempotency controls prevent repeated execution of the same logical action.",
      "variantNumber": 27,
      "variantLabel": "Variant 27"
    },
    {
      "id": "D1-X028",
      "domainId": "D1",
      "q": "A team wants an agent to open pull requests after refactoring, but architects require human validation before any production-impacting change. Which design is best?",
      "options": [
        "Allow direct merge on green CI to maximize speed",
        "Require human approval before merge and keep agent PR creation autonomous",
        "Disable agent PR creation and require manual patch files",
        "Let the agent choose whether approval is needed"
      ],
      "answer": 1,
      "explanation": "This preserves delivery velocity while enforcing a control point for production-impacting decisions.",
      "variantNumber": 28,
      "variantLabel": "Variant 28"
    },
    {
      "id": "D1-X029",
      "domainId": "D1",
      "q": "What is the clearest way to separate planning from execution in an agent workflow?",
      "options": [
        "Run tools during chain-of-thought and summarize later",
        "Output a structured plan artifact, then execute only after policy checks pass",
        "Execute first and write a plan retroactively",
        "Hide planning details to reduce noise"
      ],
      "answer": 1,
      "explanation": "A structured pre-execution plan supports review, validation, and policy enforcement before action.",
      "variantNumber": 29,
      "variantLabel": "Variant 29"
    },
    {
      "id": "D1-X030",
      "domainId": "D1",
      "q": "Which SDLC integration point is most suitable for an agent that enforces coding standards before code review?",
      "options": [
        "Post-deployment monitoring only",
        "Pre-commit hook or pull request validation workflow",
        "Quarterly architecture review",
        "Incident response process"
      ],
      "answer": 1,
      "explanation": "Quality and style controls should run early, ideally before or during PR validation.",
      "variantNumber": 30,
      "variantLabel": "Variant 30"
    },
    {
      "id": "D1-X031",
      "domainId": "D1",
      "q": "A product owner asks for autonomous hotfix deployment at midnight. Which prerequisite is most critical first?",
      "options": [
        "Higher model temperature",
        "Defined rollback path and escalation policy",
        "Larger context window",
        "More verbose commit messages"
      ],
      "answer": 1,
      "explanation": "Autonomous production actions need explicit rollback and escalation to manage risk.",
      "variantNumber": 31,
      "variantLabel": "Variant 31"
    },
    {
      "id": "D1-X032",
      "domainId": "D1",
      "q": "What best demonstrates inspectable artifacts for autonomous agent operation?",
      "options": [
        "Final response text and confidence note only",
        "Plan, tool call log, diff, and evaluation summary attached to workflow run",
        "Hidden logs retained in volatile memory",
        "Screenshot of terminal output without metadata"
      ],
      "answer": 1,
      "explanation": "Inspectable artifacts require traceable outputs that support review and audit in standard tooling.",
      "variantNumber": 32,
      "variantLabel": "Variant 32"
    },
    {
      "id": "D1-X033",
      "domainId": "D1",
      "q": "Which anti-pattern most often causes unsafe autonomy in SDLC agent design?",
      "options": [
        "Explicit tool allow list",
        "No distinction between read-only and write-capable actions",
        "Human approval for irreversible actions",
        "Branch-scoped execution"
      ],
      "answer": 1,
      "explanation": "Mixing read and write privileges without boundaries leads to accidental high-impact actions.",
      "variantNumber": 33,
      "variantLabel": "Variant 33"
    },
    {
      "id": "D1-X034",
      "domainId": "D1",
      "q": "A team wants an agent to propose architecture changes during sprint planning without directly changing code. Which operating mode is best?",
      "options": [
        "Allow it to generate implementation pull requests automatically after drafting the plan",
        "Restrict it to producing reviewable design artifacts and require a separately approved execution step",
        "Let it update the backlog and code in one run when confidence is high",
        "Skip design artifacts and provide only a final architectural recommendation"
      ],
      "answer": 1,
      "explanation": "Planning-only operation keeps architectural exploration useful while preserving a distinct approval boundary before execution.",
      "variantNumber": 34,
      "variantLabel": "Variant 34"
    },
    {
      "id": "D1-X035",
      "domainId": "D1",
      "q": "An organization allows autonomous dependency updates but not schema migrations. Which workflow boundary is best?",
      "options": [
        "One maintenance workflow that may include schema migrations whenever tests pass",
        "Separate low-risk maintenance actions from high-risk structural changes with different approval policies",
        "Disable all autonomous maintenance so one policy covers every change type",
        "Treat schema migrations as low risk because rollback scripts can be added later"
      ],
      "answer": 1,
      "explanation": "Distinct workflow boundaries let teams keep routine low-risk changes autonomous without collapsing controls for structurally risky actions.",
      "variantNumber": 35,
      "variantLabel": "Variant 35"
    },
    {
      "id": "D2-01",
      "domainId": "D2",
      "q": "When selecting tools for an agent, what is the safest default?",
      "options": [
        "Enable all available tools for flexibility",
        "Start with least privilege and add capabilities per verified use case",
        "Grant admin tools in development and production equally",
        "Use only write-capable tools"
      ],
      "answer": 1,
      "explanation": "Least privilege minimizes blast radius and aligns access with explicit need.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-02",
      "domainId": "D2",
      "q": "What is the primary benefit of MCP in a multi-tool agent workflow?",
      "options": [
        "Model compression",
        "Standardized context exchange between model, tools, and agent runtime",
        "Automatic code signing",
        "Replacing CI pipelines"
      ],
      "answer": 1,
      "explanation": "MCP improves interoperability by standardizing how context and tool contracts are exchanged.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-03",
      "domainId": "D2",
      "q": "A remote MCP server is added, but security requires control over callable operations. Which configuration is most appropriate?",
      "options": [
        "Wildcard tool access",
        "MCP allow list with explicit method-level permissions",
        "Disable authentication for faster onboarding",
        "Local-only logs"
      ],
      "answer": 1,
      "explanation": "Allow lists and method-level controls constrain exposed operations to approved actions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-04",
      "domainId": "D2",
      "q": "An agent running in CI needs to create a branch and PR. What is the best permission model?",
      "options": [
        "Repository admin token reused across all workflows",
        "Scoped token limited to branch and PR operations",
        "Personal access token with org-wide write",
        "No authentication, rely on IP allow list"
      ],
      "answer": 1,
      "explanation": "Scoped credentials implement least privilege and reduce risk if compromised.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-05",
      "domainId": "D2",
      "q": "Which strategy best handles transient tool failures in autonomous workflows?",
      "options": [
        "Immediate hard fail with no context",
        "Bounded retries with backoff and eventual escalation",
        "Infinite retries until success",
        "Classify failures as non-blocking and continue with partial completion"
      ],
      "answer": 1,
      "explanation": "Bounded retries handle transient faults while escalation prevents endless loops.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-06",
      "domainId": "D2",
      "q": "A tool call modifies files outside the target repository path. Which control should have prevented this?",
      "options": [
        "Higher logging verbosity",
        "Execution scope constraints and filesystem sandboxing",
        "Longer timeout",
        "Rotating prompt templates between runs without policy checks"
      ],
      "answer": 1,
      "explanation": "Path and sandbox controls enforce repository boundaries for safe execution.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-07",
      "domainId": "D2",
      "q": "What is the best way to preserve traceability of agent actions using tools?",
      "options": [
        "Store final result text with no action-level telemetry",
        "Record tool inputs/outputs, identity, timestamps, and resulting artifacts",
        "Rotate logs every minute without retention",
        "Store logs in ephemeral local temp storage per run"
      ],
      "answer": 1,
      "explanation": "End-to-end traceability requires linking action metadata to resulting changes.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-08",
      "domainId": "D2",
      "q": "An environment has strict egress restrictions. How should an agent be adapted?",
      "options": [
        "Ignore restrictions and retry external calls",
        "Use approved internal mirrors/services and fail closed on blocked endpoints",
        "Disable all validation",
        "Embed credentials in prompts"
      ],
      "answer": 1,
      "explanation": "Agents must honor environment constraints and route through approved controlled paths.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-09",
      "domainId": "D2",
      "q": "Which rollback pattern is strongest after a failed autonomous refactor?",
      "options": [
        "Delete workflow logs",
        "Revert commit or reset branch to known-good baseline with incident note",
        "Retry with same inputs indefinitely",
        "Force-merge partial changes"
      ],
      "answer": 1,
      "explanation": "A known-good rollback with documentation restores stability and supports audit.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-10",
      "domainId": "D2",
      "q": "Why is tool permission separation between read and write operations important?",
      "options": [
        "It increases token usage",
        "It reduces accidental destructive actions and clarifies approval boundaries",
        "It prevents planning",
        "It removes need for logs"
      ],
      "answer": 1,
      "explanation": "Separate capabilities reduce risk and make policy gates more precise.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-11",
      "domainId": "D2",
      "q": "A team wants one agent profile for all repos and environments. What is the main risk?",
      "options": [
        "Lower prompt quality",
        "Over-broad permissions and poor environment fit",
        "Reduced artifact quality",
        "Inability to parse JSON"
      ],
      "answer": 1,
      "explanation": "Single broad profiles often violate least privilege and ignore environment-specific constraints.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-01-V2",
      "domainId": "D2",
      "q": "When selecting tools for an agent, what is the safest default?",
      "options": [
        "Enable all available tools for flexibility",
        "Start with least privilege and add capabilities per verified use case",
        "Grant admin tools in development and production equally",
        "Use only write-capable tools"
      ],
      "answer": 1,
      "explanation": "Least privilege minimizes blast radius and aligns access with explicit need.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-02-V2.090909090909091",
      "domainId": "D2",
      "q": "What is the primary benefit of MCP in a multi-tool agent workflow?",
      "options": [
        "Model compression",
        "Standardized context exchange between model, tools, and agent runtime",
        "Automatic code signing",
        "Replacing CI pipelines"
      ],
      "answer": 1,
      "explanation": "MCP improves interoperability by standardizing how context and tool contracts are exchanged.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-03-V2.1818181818181817",
      "domainId": "D2",
      "q": "A remote MCP server is added, but security requires control over callable operations. Which configuration is most appropriate?",
      "options": [
        "Wildcard tool access",
        "MCP allow list with explicit method-level permissions",
        "Disable authentication for faster onboarding",
        "Local-only logs"
      ],
      "answer": 1,
      "explanation": "Allow lists and method-level controls constrain exposed operations to approved actions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-04-V2.2727272727272725",
      "domainId": "D2",
      "q": "An agent running in CI needs to create a branch and PR. What is the best permission model?",
      "options": [
        "Repository admin token reused across all workflows",
        "Scoped token limited to branch and PR operations",
        "Personal access token with org-wide write",
        "No authentication, rely on IP allow list"
      ],
      "answer": 1,
      "explanation": "Scoped credentials implement least privilege and reduce risk if compromised.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-05-V2.3636363636363633",
      "domainId": "D2",
      "q": "Which strategy best handles transient tool failures in autonomous workflows?",
      "options": [
        "Immediate hard fail with no context",
        "Bounded retries with backoff and eventual escalation",
        "Infinite retries until success",
        "Classify failures as non-blocking and continue with partial completion"
      ],
      "answer": 1,
      "explanation": "Bounded retries handle transient faults while escalation prevents endless loops.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-06-V2.4545454545454546",
      "domainId": "D2",
      "q": "A tool call modifies files outside the target repository path. Which control should have prevented this?",
      "options": [
        "Higher logging verbosity",
        "Execution scope constraints and filesystem sandboxing",
        "Longer timeout",
        "Rotating prompt templates between runs without policy checks"
      ],
      "answer": 1,
      "explanation": "Path and sandbox controls enforce repository boundaries for safe execution.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-07-V2.5454545454545454",
      "domainId": "D2",
      "q": "What is the best way to preserve traceability of agent actions using tools?",
      "options": [
        "Store final result text with no action-level telemetry",
        "Record tool inputs/outputs, identity, timestamps, and resulting artifacts",
        "Rotate logs every minute without retention",
        "Store logs in ephemeral local temp storage per run"
      ],
      "answer": 1,
      "explanation": "End-to-end traceability requires linking action metadata to resulting changes.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-08-V2.6363636363636367",
      "domainId": "D2",
      "q": "An environment has strict egress restrictions. How should an agent be adapted?",
      "options": [
        "Ignore restrictions and retry external calls",
        "Use approved internal mirrors/services and fail closed on blocked endpoints",
        "Disable all validation",
        "Embed credentials in prompts"
      ],
      "answer": 1,
      "explanation": "Agents must honor environment constraints and route through approved controlled paths.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-09-V2.7272727272727275",
      "domainId": "D2",
      "q": "Which rollback pattern is strongest after a failed autonomous refactor?",
      "options": [
        "Delete workflow logs",
        "Revert commit or reset branch to known-good baseline with incident note",
        "Retry with same inputs indefinitely",
        "Force-merge partial changes"
      ],
      "answer": 1,
      "explanation": "A known-good rollback with documentation restores stability and supports audit.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-10-V2.8181818181818183",
      "domainId": "D2",
      "q": "Why is tool permission separation between read and write operations important?",
      "options": [
        "It increases token usage",
        "It reduces accidental destructive actions and clarifies approval boundaries",
        "It prevents planning",
        "It removes need for logs"
      ],
      "answer": 1,
      "explanation": "Separate capabilities reduce risk and make policy gates more precise.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-11-V2.909090909090909",
      "domainId": "D2",
      "q": "A team wants one agent profile for all repos and environments. What is the main risk?",
      "options": [
        "Lower prompt quality",
        "Over-broad permissions and poor environment fit",
        "Reduced artifact quality",
        "Inability to parse JSON"
      ],
      "answer": 1,
      "explanation": "Single broad profiles often violate least privilege and ignore environment-specific constraints.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D2-X023",
      "domainId": "D2",
      "q": "When selecting tools for an agent, what is the safest default?",
      "options": [
        "Enable all available tools for flexibility",
        "Start with least privilege and add capabilities per verified use case",
        "Grant admin tools in development and production equally",
        "Use only write-capable tools"
      ],
      "answer": 1,
      "explanation": "Least privilege minimizes blast radius and aligns access with explicit need.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D2-X024",
      "domainId": "D2",
      "q": "What is the primary benefit of MCP in a multi-tool agent workflow?",
      "options": [
        "Model compression",
        "Standardized context exchange between model, tools, and agent runtime",
        "Automatic code signing",
        "Replacing CI pipelines"
      ],
      "answer": 1,
      "explanation": "MCP improves interoperability by standardizing how context and tool contracts are exchanged.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D2-X025",
      "domainId": "D2",
      "q": "A remote MCP server is added, but security requires control over callable operations. Which configuration is most appropriate?",
      "options": [
        "Wildcard tool access",
        "MCP allow list with explicit method-level permissions",
        "Disable authentication for faster onboarding",
        "Local-only logs"
      ],
      "answer": 1,
      "explanation": "Allow lists and method-level controls constrain exposed operations to approved actions.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    },
    {
      "id": "D2-X026",
      "domainId": "D2",
      "q": "An agent running in CI needs to create a branch and PR. What is the best permission model?",
      "options": [
        "Repository admin token reused across all workflows",
        "Scoped token limited to branch and PR operations",
        "Personal access token with org-wide write",
        "No authentication, rely on IP allow list"
      ],
      "answer": 1,
      "explanation": "Scoped credentials implement least privilege and reduce risk if compromised.",
      "variantNumber": 26,
      "variantLabel": "Variant 26"
    },
    {
      "id": "D2-X027",
      "domainId": "D2",
      "q": "Which strategy best handles transient tool failures in autonomous workflows?",
      "options": [
        "Immediate hard fail with no context",
        "Bounded retries with backoff and eventual escalation",
        "Infinite retries until success",
        "Classify failures as non-blocking and continue with partial completion"
      ],
      "answer": 1,
      "explanation": "Bounded retries handle transient faults while escalation prevents endless loops.",
      "variantNumber": 27,
      "variantLabel": "Variant 27"
    },
    {
      "id": "D2-X028",
      "domainId": "D2",
      "q": "A tool call modifies files outside the target repository path. Which control should have prevented this?",
      "options": [
        "Higher logging verbosity",
        "Execution scope constraints and filesystem sandboxing",
        "Longer timeout",
        "Rotating prompt templates between runs without policy checks"
      ],
      "answer": 1,
      "explanation": "Path and sandbox controls enforce repository boundaries for safe execution.",
      "variantNumber": 28,
      "variantLabel": "Variant 28"
    },
    {
      "id": "D2-X029",
      "domainId": "D2",
      "q": "What is the best way to preserve traceability of agent actions using tools?",
      "options": [
        "Store final result text with no action-level telemetry",
        "Record tool inputs/outputs, identity, timestamps, and resulting artifacts",
        "Rotate logs every minute without retention",
        "Store logs in ephemeral local temp storage per run"
      ],
      "answer": 1,
      "explanation": "End-to-end traceability requires linking action metadata to resulting changes.",
      "variantNumber": 29,
      "variantLabel": "Variant 29"
    },
    {
      "id": "D2-X030",
      "domainId": "D2",
      "q": "An environment has strict egress restrictions. How should an agent be adapted?",
      "options": [
        "Ignore restrictions and retry external calls",
        "Use approved internal mirrors/services and fail closed on blocked endpoints",
        "Disable all validation",
        "Embed credentials in prompts"
      ],
      "answer": 1,
      "explanation": "Agents must honor environment constraints and route through approved controlled paths.",
      "variantNumber": 30,
      "variantLabel": "Variant 30"
    },
    {
      "id": "D2-X031",
      "domainId": "D2",
      "q": "Which rollback pattern is strongest after a failed autonomous refactor?",
      "options": [
        "Delete workflow logs",
        "Revert commit or reset branch to known-good baseline with incident note",
        "Retry with same inputs indefinitely",
        "Force-merge partial changes"
      ],
      "answer": 1,
      "explanation": "A known-good rollback with documentation restores stability and supports audit.",
      "variantNumber": 31,
      "variantLabel": "Variant 31"
    },
    {
      "id": "D2-X032",
      "domainId": "D2",
      "q": "Why is tool permission separation between read and write operations important?",
      "options": [
        "It increases token usage",
        "It reduces accidental destructive actions and clarifies approval boundaries",
        "It prevents planning",
        "It removes need for logs"
      ],
      "answer": 1,
      "explanation": "Separate capabilities reduce risk and make policy gates more precise.",
      "variantNumber": 32,
      "variantLabel": "Variant 32"
    },
    {
      "id": "D2-X033",
      "domainId": "D2",
      "q": "A team wants one agent profile for all repos and environments. What is the main risk?",
      "options": [
        "Lower prompt quality",
        "Over-broad permissions and poor environment fit",
        "Reduced artifact quality",
        "Inability to parse JSON"
      ],
      "answer": 1,
      "explanation": "Single broad profiles often violate least privilege and ignore environment-specific constraints.",
      "variantNumber": 33,
      "variantLabel": "Variant 33"
    },
    {
      "id": "D2-X034",
      "domainId": "D2",
      "q": "When selecting tools for an agent, what is the safest default?",
      "options": [
        "Enable all available tools for flexibility",
        "Start with least privilege and add capabilities per verified use case",
        "Grant admin tools in development and production equally",
        "Use only write-capable tools"
      ],
      "answer": 1,
      "explanation": "Least privilege minimizes blast radius and aligns access with explicit need.",
      "variantNumber": 34,
      "variantLabel": "Variant 34"
    },
    {
      "id": "D2-X035",
      "domainId": "D2",
      "q": "What is the primary benefit of MCP in a multi-tool agent workflow?",
      "options": [
        "Model compression",
        "Standardized context exchange between model, tools, and agent runtime",
        "Automatic code signing",
        "Replacing CI pipelines"
      ],
      "answer": 1,
      "explanation": "MCP improves interoperability by standardizing how context and tool contracts are exchanged.",
      "variantNumber": 35,
      "variantLabel": "Variant 35"
    },
    {
      "id": "D2-X036",
      "domainId": "D2",
      "q": "A remote MCP server is added, but security requires control over callable operations. Which configuration is most appropriate?",
      "options": [
        "Wildcard tool access",
        "MCP allow list with explicit method-level permissions",
        "Disable authentication for faster onboarding",
        "Local-only logs"
      ],
      "answer": 1,
      "explanation": "Allow lists and method-level controls constrain exposed operations to approved actions.",
      "variantNumber": 36,
      "variantLabel": "Variant 36"
    },
    {
      "id": "D2-X037",
      "domainId": "D2",
      "q": "An agent running in CI needs to create a branch and PR. What is the best permission model?",
      "options": [
        "Repository admin token reused across all workflows",
        "Scoped token limited to branch and PR operations",
        "Personal access token with org-wide write",
        "No authentication, rely on IP allow list"
      ],
      "answer": 1,
      "explanation": "Scoped credentials implement least privilege and reduce risk if compromised.",
      "variantNumber": 37,
      "variantLabel": "Variant 37"
    },
    {
      "id": "D2-X038",
      "domainId": "D2",
      "q": "Which strategy best handles transient tool failures in autonomous workflows?",
      "options": [
        "Immediate hard fail with no context",
        "Bounded retries with backoff and eventual escalation",
        "Infinite retries until success",
        "Classify failures as non-blocking and continue with partial completion"
      ],
      "answer": 1,
      "explanation": "Bounded retries handle transient faults while escalation prevents endless loops.",
      "variantNumber": 38,
      "variantLabel": "Variant 38"
    },
    {
      "id": "D2-X039",
      "domainId": "D2",
      "q": "A tool call modifies files outside the target repository path. Which control should have prevented this?",
      "options": [
        "Higher logging verbosity",
        "Execution scope constraints and filesystem sandboxing",
        "Longer timeout",
        "Rotating prompt templates between runs without policy checks"
      ],
      "answer": 1,
      "explanation": "Path and sandbox controls enforce repository boundaries for safe execution.",
      "variantNumber": 39,
      "variantLabel": "Variant 39"
    },
    {
      "id": "D2-X040",
      "domainId": "D2",
      "q": "What is the best way to preserve traceability of agent actions using tools?",
      "options": [
        "Store final result text with no action-level telemetry",
        "Record tool inputs/outputs, identity, timestamps, and resulting artifacts",
        "Rotate logs every minute without retention",
        "Store logs in ephemeral local temp storage per run"
      ],
      "answer": 1,
      "explanation": "End-to-end traceability requires linking action metadata to resulting changes.",
      "variantNumber": 40,
      "variantLabel": "Variant 40"
    },
    {
      "id": "D2-X041",
      "domainId": "D2",
      "q": "An environment has strict egress restrictions. How should an agent be adapted?",
      "options": [
        "Ignore restrictions and retry external calls",
        "Use approved internal mirrors/services and fail closed on blocked endpoints",
        "Disable all validation",
        "Embed credentials in prompts"
      ],
      "answer": 1,
      "explanation": "Agents must honor environment constraints and route through approved controlled paths.",
      "variantNumber": 41,
      "variantLabel": "Variant 41"
    },
    {
      "id": "D2-X042",
      "domainId": "D2",
      "q": "Which rollback pattern is strongest after a failed autonomous refactor?",
      "options": [
        "Delete workflow logs",
        "Revert commit or reset branch to known-good baseline with incident note",
        "Retry with same inputs indefinitely",
        "Force-merge partial changes"
      ],
      "answer": 1,
      "explanation": "A known-good rollback with documentation restores stability and supports audit.",
      "variantNumber": 42,
      "variantLabel": "Variant 42"
    },
    {
      "id": "D2-X043",
      "domainId": "D2",
      "q": "An agent can read repository files and call deployment APIs. Which tool policy best limits blast radius?",
      "options": [
        "Use one shared token with read/write rights to both the repository and deployment endpoints",
        "Separate read-only repository access from narrowly scoped deployment actions gated by environment",
        "Grant full repository and deployment rights only in non-production environments",
        "Use a broader token but rely on detailed logs to detect misuse later"
      ],
      "answer": 1,
      "explanation": "Separating low-risk read capability from tightly scoped deployment actions constrains the impact of mistakes or compromised runs.",
      "variantNumber": 43,
      "variantLabel": "Variant 43"
    },
    {
      "id": "D2-X044",
      "domainId": "D2",
      "q": "A remote MCP tool can execute shell commands, but the task only needs issue triage. Which configuration is best?",
      "options": [
        "Expose both shell and issue methods because the agent may need flexibility later",
        "Publish only the issue-triage methods and deny unrelated command execution",
        "Allow shell execution but require a lower temperature setting",
        "Disable method descriptions so the model is less likely to misuse the tool"
      ],
      "answer": 1,
      "explanation": "Only exposing the task-relevant methods follows least privilege and avoids granting unnecessary command execution capability.",
      "variantNumber": 44,
      "variantLabel": "Variant 44"
    },
    {
      "id": "D2-X045",
      "domainId": "D2",
      "q": "A CI agent must retry a flaky package restore step. Which retry design is safest?",
      "options": [
        "Retry indefinitely with the same credentials until restore succeeds",
        "Use bounded retries with backoff, keep the step idempotent, and escalate after the threshold",
        "Switch to a higher-privilege token on the second retry to reduce failures",
        "Run parallel retries against multiple registries without additional guardrails"
      ],
      "answer": 1,
      "explanation": "Bounded, idempotent retries manage transient failure while limiting runaway behavior and forcing escalation when the fault persists.",
      "variantNumber": 45,
      "variantLabel": "Variant 45"
    },
    {
      "id": "D3-01",
      "domainId": "D3",
      "q": "Which memory strategy is best for reusable policy rules across many runs?",
      "options": [
        "Ephemeral task memory retained only for the active run",
        "External durable memory store with versioned policy entries",
        "Session-only in-memory context with no durable state",
        "Store policies in temporary prompt text"
      ],
      "answer": 1,
      "explanation": "Reusable organizational policies require durable, versioned storage beyond one session.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-02",
      "domainId": "D3",
      "q": "What most directly mitigates context drift in long-running tasks?",
      "options": [
        "Increase output verbosity",
        "Periodic state checkpoints with explicit objective restatement and validation",
        "Disable retries",
        "Use only one tool"
      ],
      "answer": 1,
      "explanation": "Checkpoints and objective validation detect divergence early and keep execution aligned.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-03",
      "domainId": "D3",
      "q": "An interrupted workflow must resume without duplicating actions. What should be persisted?",
      "options": [
        "Final summary with no intermediate state artifacts",
        "Task state, completed steps, artifact references, and idempotency keys",
        "Model temperature",
        "Local IDE display settings and editor theme configuration"
      ],
      "answer": 1,
      "explanation": "Resumability requires durable execution state plus deduplication identifiers.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-04",
      "domainId": "D3",
      "q": "Which rule is most appropriate for memory expiration?",
      "options": [
        "Never expire any context",
        "Retain by relevance/risk policy and prune stale low-value context regularly",
        "Delete all memory after each tool call",
        "Expire only successful runs"
      ],
      "answer": 1,
      "explanation": "Policy-driven pruning keeps context useful while controlling staleness and noise.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-05",
      "domainId": "D3",
      "q": "Multiple agents share stale branch metadata and conflict. What control helps most?",
      "options": [
        "More retries",
        "Shared state synchronization with freshness checks and conflict detection",
        "Relax merge constraints during high-priority incident windows",
        "Longer commit messages"
      ],
      "answer": 1,
      "explanation": "Freshness validation and conflict-aware shared state prevent stale-context collisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-06",
      "domainId": "D3",
      "q": "What is the best distinction between short-term and long-term agent memory?",
      "options": [
        "Short-term stores policy; long-term stores scratchpad",
        "Short-term handles immediate task context; long-term stores reusable knowledge/state",
        "They are equivalent",
        "Long-term is always in prompt only"
      ],
      "answer": 1,
      "explanation": "Short-term context supports current reasoning, while long-term memory preserves reusable information.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-01-V2",
      "domainId": "D3",
      "q": "Which memory strategy is best for reusable policy rules across many runs?",
      "options": [
        "Ephemeral task memory retained only for the active run",
        "External durable memory store with versioned policy entries",
        "Session-only in-memory context with no durable state",
        "Store policies in temporary prompt text"
      ],
      "answer": 1,
      "explanation": "Reusable organizational policies require durable, versioned storage beyond one session.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-02-V2.166666666666667",
      "domainId": "D3",
      "q": "What most directly mitigates context drift in long-running tasks?",
      "options": [
        "Increase output verbosity",
        "Periodic state checkpoints with explicit objective restatement and validation",
        "Disable retries",
        "Use only one tool"
      ],
      "answer": 1,
      "explanation": "Checkpoints and objective validation detect divergence early and keep execution aligned.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-03-V2.333333333333333",
      "domainId": "D3",
      "q": "An interrupted workflow must resume without duplicating actions. What should be persisted?",
      "options": [
        "Final summary with no intermediate state artifacts",
        "Task state, completed steps, artifact references, and idempotency keys",
        "Model temperature",
        "Local IDE display settings and editor theme configuration"
      ],
      "answer": 1,
      "explanation": "Resumability requires durable execution state plus deduplication identifiers.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-04-V2.5",
      "domainId": "D3",
      "q": "Which rule is most appropriate for memory expiration?",
      "options": [
        "Never expire any context",
        "Retain by relevance/risk policy and prune stale low-value context regularly",
        "Delete all memory after each tool call",
        "Expire only successful runs"
      ],
      "answer": 1,
      "explanation": "Policy-driven pruning keeps context useful while controlling staleness and noise.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-05-V2.666666666666667",
      "domainId": "D3",
      "q": "Multiple agents share stale branch metadata and conflict. What control helps most?",
      "options": [
        "More retries",
        "Shared state synchronization with freshness checks and conflict detection",
        "Relax merge constraints during high-priority incident windows",
        "Longer commit messages"
      ],
      "answer": 1,
      "explanation": "Freshness validation and conflict-aware shared state prevent stale-context collisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-06-V2.833333333333333",
      "domainId": "D3",
      "q": "What is the best distinction between short-term and long-term agent memory?",
      "options": [
        "Short-term stores policy; long-term stores scratchpad",
        "Short-term handles immediate task context; long-term stores reusable knowledge/state",
        "They are equivalent",
        "Long-term is always in prompt only"
      ],
      "answer": 1,
      "explanation": "Short-term context supports current reasoning, while long-term memory preserves reusable information.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D3-X013",
      "domainId": "D3",
      "q": "Which memory strategy is best for reusable policy rules across many runs?",
      "options": [
        "Ephemeral task memory retained only for the active run",
        "External durable memory store with versioned policy entries",
        "Session-only in-memory context with no durable state",
        "Store policies in temporary prompt text"
      ],
      "answer": 1,
      "explanation": "Reusable organizational policies require durable, versioned storage beyond one session.",
      "variantNumber": 13,
      "variantLabel": "Variant 13"
    },
    {
      "id": "D3-X014",
      "domainId": "D3",
      "q": "What most directly mitigates context drift in long-running tasks?",
      "options": [
        "Increase output verbosity",
        "Periodic state checkpoints with explicit objective restatement and validation",
        "Disable retries",
        "Use only one tool"
      ],
      "answer": 1,
      "explanation": "Checkpoints and objective validation detect divergence early and keep execution aligned.",
      "variantNumber": 14,
      "variantLabel": "Variant 14"
    },
    {
      "id": "D3-X015",
      "domainId": "D3",
      "q": "An interrupted workflow must resume without duplicating actions. What should be persisted?",
      "options": [
        "Final summary with no intermediate state artifacts",
        "Task state, completed steps, artifact references, and idempotency keys",
        "Model temperature",
        "Local IDE display settings and editor theme configuration"
      ],
      "answer": 1,
      "explanation": "Resumability requires durable execution state plus deduplication identifiers.",
      "variantNumber": 15,
      "variantLabel": "Variant 15"
    },
    {
      "id": "D3-X016",
      "domainId": "D3",
      "q": "Which rule is most appropriate for memory expiration?",
      "options": [
        "Never expire any context",
        "Retain by relevance/risk policy and prune stale low-value context regularly",
        "Delete all memory after each tool call",
        "Expire only successful runs"
      ],
      "answer": 1,
      "explanation": "Policy-driven pruning keeps context useful while controlling staleness and noise.",
      "variantNumber": 16,
      "variantLabel": "Variant 16"
    },
    {
      "id": "D3-X017",
      "domainId": "D3",
      "q": "Multiple agents share stale branch metadata and conflict. What control helps most?",
      "options": [
        "More retries",
        "Shared state synchronization with freshness checks and conflict detection",
        "Relax merge constraints during high-priority incident windows",
        "Longer commit messages"
      ],
      "answer": 1,
      "explanation": "Freshness validation and conflict-aware shared state prevent stale-context collisions.",
      "variantNumber": 17,
      "variantLabel": "Variant 17"
    },
    {
      "id": "D3-X018",
      "domainId": "D3",
      "q": "What is the best distinction between short-term and long-term agent memory?",
      "options": [
        "Short-term stores policy; long-term stores scratchpad",
        "Short-term handles immediate task context; long-term stores reusable knowledge/state",
        "They are equivalent",
        "Long-term is always in prompt only"
      ],
      "answer": 1,
      "explanation": "Short-term context supports current reasoning, while long-term memory preserves reusable information.",
      "variantNumber": 18,
      "variantLabel": "Variant 18"
    },
    {
      "id": "D3-X019",
      "domainId": "D3",
      "q": "Which memory strategy is best for reusable policy rules across many runs?",
      "options": [
        "Ephemeral task memory retained only for the active run",
        "External durable memory store with versioned policy entries",
        "Session-only in-memory context with no durable state",
        "Store policies in temporary prompt text"
      ],
      "answer": 1,
      "explanation": "Reusable organizational policies require durable, versioned storage beyond one session.",
      "variantNumber": 19,
      "variantLabel": "Variant 19"
    },
    {
      "id": "D3-X020",
      "domainId": "D3",
      "q": "What most directly mitigates context drift in long-running tasks?",
      "options": [
        "Increase output verbosity",
        "Periodic state checkpoints with explicit objective restatement and validation",
        "Disable retries",
        "Use only one tool"
      ],
      "answer": 1,
      "explanation": "Checkpoints and objective validation detect divergence early and keep execution aligned.",
      "variantNumber": 20,
      "variantLabel": "Variant 20"
    },
    {
      "id": "D3-X021",
      "domainId": "D3",
      "q": "An interrupted workflow must resume without duplicating actions. What should be persisted?",
      "options": [
        "Final summary with no intermediate state artifacts",
        "Task state, completed steps, artifact references, and idempotency keys",
        "Model temperature",
        "Local IDE display settings and editor theme configuration"
      ],
      "answer": 1,
      "explanation": "Resumability requires durable execution state plus deduplication identifiers.",
      "variantNumber": 21,
      "variantLabel": "Variant 21"
    },
    {
      "id": "D3-X022",
      "domainId": "D3",
      "q": "Which rule is most appropriate for memory expiration?",
      "options": [
        "Never expire any context",
        "Retain by relevance/risk policy and prune stale low-value context regularly",
        "Delete all memory after each tool call",
        "Expire only successful runs"
      ],
      "answer": 1,
      "explanation": "Policy-driven pruning keeps context useful while controlling staleness and noise.",
      "variantNumber": 22,
      "variantLabel": "Variant 22"
    },
    {
      "id": "D3-X023",
      "domainId": "D3",
      "q": "Multiple agents share stale branch metadata and conflict. What control helps most?",
      "options": [
        "More retries",
        "Shared state synchronization with freshness checks and conflict detection",
        "Relax merge constraints during high-priority incident windows",
        "Longer commit messages"
      ],
      "answer": 1,
      "explanation": "Freshness validation and conflict-aware shared state prevent stale-context collisions.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D3-X024",
      "domainId": "D3",
      "q": "A long-running code-fix agent resumes after interruption. Which persisted state most directly prevents duplicate pull requests?",
      "options": [
        "Only the final human-readable summary and model name",
        "Run identifier, completed action log, branch and PR references, and idempotency keys",
        "Current token count, context window size, and retry counter",
        "A cached copy of the repository README and the issue title"
      ],
      "answer": 1,
      "explanation": "Resumability needs durable execution state that ties completed actions to concrete artifacts and deduplication keys.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D3-X025",
      "domainId": "D3",
      "q": "An agent stores debugging notes from one repository and later applies them in another unrelated repository. Which memory control best prevents this?",
      "options": [
        "Longer context windows with all prior memories included",
        "Repository-scoped memory with provenance and applicability checks before reuse",
        "More aggressive summarization of all memories into one shared note",
        "Delete only failed-run memories and retain successful ones everywhere"
      ],
      "answer": 1,
      "explanation": "Scoping memory to its repository and validating provenance prevents stale or irrelevant context from leaking across projects.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    },
    {
      "id": "D4-01",
      "domainId": "D4",
      "q": "Which is the strongest success criterion for an agent refactoring task?",
      "options": [
        "The output sounds confident",
        "All tests pass, security scan has no new high findings, and diff matches scope",
        "The PR is large",
        "Runtime increases"
      ],
      "answer": 1,
      "explanation": "Good criteria are measurable, scoped, and aligned to quality and risk constraints.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-02",
      "domainId": "D4",
      "q": "An agent repeatedly selects the wrong tool despite correct permissions. Most likely root cause?",
      "options": [
        "Minor timestamp skew between orchestrator and tool server",
        "Instruction ambiguity about tool-selection rules",
        "Data-center network path variability between agents and tools",
        "Insufficient branch names"
      ],
      "answer": 1,
      "explanation": "If access is correct but behavior is wrong, prompt/instruction clarity is often the issue.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-03",
      "domainId": "D4",
      "q": "What evidence is most useful to classify failures as reasoning error vs environment issue?",
      "options": [
        "Final response plus a single confidence score",
        "Plans, traces, tool call results, and environment telemetry",
        "Vendor benchmark summary without run-level telemetry",
        "Single screenshot"
      ],
      "answer": 1,
      "explanation": "Cross-layer evidence is required to separate cognitive errors from runtime/tooling faults.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-04",
      "domainId": "D4",
      "q": "A tuning cycle should usually start with which step?",
      "options": [
        "Tune prompt, tool policy, and memory settings in one combined experiment",
        "Isolate one hypothesized cause and run targeted evaluation",
        "Disable metrics collection",
        "Increase autonomy immediately"
      ],
      "answer": 1,
      "explanation": "Controlled, hypothesis-driven tuning avoids confounded results and regressions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-05",
      "domainId": "D4",
      "q": "Which metric best captures reliability for autonomous CI fix suggestions?",
      "options": [
        "Average response length",
        "Rate of accepted fixes that pass full pipeline without manual correction",
        "Percentage of review comments auto-generated by the agent",
        "Prompt token count"
      ],
      "answer": 1,
      "explanation": "Reliability is reflected by accepted changes that succeed end-to-end.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-06",
      "domainId": "D4",
      "q": "After introducing a stricter policy prompt, failure rate rises on benign tasks. Best next action?",
      "options": [
        "Remove all guardrails",
        "Refine policy granularity and test against segmented task sets",
        "Increase retries to hide failures",
        "Disable artifact capture"
      ],
      "answer": 1,
      "explanation": "Overly broad constraints can harm benign flows; segmented evaluation guides targeted refinement.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-07",
      "domainId": "D4",
      "q": "Which practice most improves post-incident agent tuning?",
      "options": [
        "Delete failed run data",
        "Maintain failure taxonomy and link remediations to measurable outcomes",
        "Avoid versioning instructions",
        "Tune only by intuition"
      ],
      "answer": 1,
      "explanation": "A taxonomy with measurable follow-up enables repeatable learning and accountability.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-08",
      "domainId": "D4",
      "q": "What is the best use of automated scans in evaluation?",
      "options": [
        "Replace all human review",
        "Generate objective signals for quality, security, and policy compliance",
        "Raise model temperature to broaden candidate outputs",
        "Suppress warnings"
      ],
      "answer": 1,
      "explanation": "Scans provide consistent machine-verifiable signals that complement human judgment.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-09",
      "domainId": "D4",
      "q": "A model upgrade improves speed but increases policy violations. Which decision is best?",
      "options": [
        "Keep upgrade because speed is better",
        "Gate rollout with policy-compliance thresholds and staged deployment",
        "Disable policy checks",
        "Rollback and stop all experiments"
      ],
      "answer": 1,
      "explanation": "Rollouts should be gated by non-negotiable compliance criteria, not speed alone.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-01-V2",
      "domainId": "D4",
      "q": "Which is the strongest success criterion for an agent refactoring task?",
      "options": [
        "The output sounds confident",
        "All tests pass, security scan has no new high findings, and diff matches scope",
        "The PR is large",
        "Runtime increases"
      ],
      "answer": 1,
      "explanation": "Good criteria are measurable, scoped, and aligned to quality and risk constraints.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-02-V2.111111111111111",
      "domainId": "D4",
      "q": "An agent repeatedly selects the wrong tool despite correct permissions. Most likely root cause?",
      "options": [
        "Minor timestamp skew between orchestrator and tool server",
        "Instruction ambiguity about tool-selection rules",
        "Data-center network path variability between agents and tools",
        "Insufficient branch names"
      ],
      "answer": 1,
      "explanation": "If access is correct but behavior is wrong, prompt/instruction clarity is often the issue.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-03-V2.2222222222222223",
      "domainId": "D4",
      "q": "What evidence is most useful to classify failures as reasoning error vs environment issue?",
      "options": [
        "Final response plus a single confidence score",
        "Plans, traces, tool call results, and environment telemetry",
        "Vendor benchmark summary without run-level telemetry",
        "Single screenshot"
      ],
      "answer": 1,
      "explanation": "Cross-layer evidence is required to separate cognitive errors from runtime/tooling faults.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-04-V2.333333333333333",
      "domainId": "D4",
      "q": "A tuning cycle should usually start with which step?",
      "options": [
        "Tune prompt, tool policy, and memory settings in one combined experiment",
        "Isolate one hypothesized cause and run targeted evaluation",
        "Disable metrics collection",
        "Increase autonomy immediately"
      ],
      "answer": 1,
      "explanation": "Controlled, hypothesis-driven tuning avoids confounded results and regressions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-05-V2.4444444444444446",
      "domainId": "D4",
      "q": "Which metric best captures reliability for autonomous CI fix suggestions?",
      "options": [
        "Average response length",
        "Rate of accepted fixes that pass full pipeline without manual correction",
        "Percentage of review comments auto-generated by the agent",
        "Prompt token count"
      ],
      "answer": 1,
      "explanation": "Reliability is reflected by accepted changes that succeed end-to-end.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-06-V2.5555555555555554",
      "domainId": "D4",
      "q": "After introducing a stricter policy prompt, failure rate rises on benign tasks. Best next action?",
      "options": [
        "Remove all guardrails",
        "Refine policy granularity and test against segmented task sets",
        "Increase retries to hide failures",
        "Disable artifact capture"
      ],
      "answer": 1,
      "explanation": "Overly broad constraints can harm benign flows; segmented evaluation guides targeted refinement.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-07-V2.666666666666667",
      "domainId": "D4",
      "q": "Which practice most improves post-incident agent tuning?",
      "options": [
        "Delete failed run data",
        "Maintain failure taxonomy and link remediations to measurable outcomes",
        "Avoid versioning instructions",
        "Tune only by intuition"
      ],
      "answer": 1,
      "explanation": "A taxonomy with measurable follow-up enables repeatable learning and accountability.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-08-V2.7777777777777777",
      "domainId": "D4",
      "q": "What is the best use of automated scans in evaluation?",
      "options": [
        "Replace all human review",
        "Generate objective signals for quality, security, and policy compliance",
        "Raise model temperature to broaden candidate outputs",
        "Suppress warnings"
      ],
      "answer": 1,
      "explanation": "Scans provide consistent machine-verifiable signals that complement human judgment.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-09-V2.888888888888889",
      "domainId": "D4",
      "q": "A model upgrade improves speed but increases policy violations. Which decision is best?",
      "options": [
        "Keep upgrade because speed is better",
        "Gate rollout with policy-compliance thresholds and staged deployment",
        "Disable policy checks",
        "Rollback and stop all experiments"
      ],
      "answer": 1,
      "explanation": "Rollouts should be gated by non-negotiable compliance criteria, not speed alone.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D4-X019",
      "domainId": "D4",
      "q": "Which is the strongest success criterion for an agent refactoring task?",
      "options": [
        "The output sounds confident",
        "All tests pass, security scan has no new high findings, and diff matches scope",
        "The PR is large",
        "Runtime increases"
      ],
      "answer": 1,
      "explanation": "Good criteria are measurable, scoped, and aligned to quality and risk constraints.",
      "variantNumber": 19,
      "variantLabel": "Variant 19"
    },
    {
      "id": "D4-X020",
      "domainId": "D4",
      "q": "An agent repeatedly selects the wrong tool despite correct permissions. Most likely root cause?",
      "options": [
        "Minor timestamp skew between orchestrator and tool server",
        "Instruction ambiguity about tool-selection rules",
        "Data-center network path variability between agents and tools",
        "Insufficient branch names"
      ],
      "answer": 1,
      "explanation": "If access is correct but behavior is wrong, prompt/instruction clarity is often the issue.",
      "variantNumber": 20,
      "variantLabel": "Variant 20"
    },
    {
      "id": "D4-X021",
      "domainId": "D4",
      "q": "What evidence is most useful to classify failures as reasoning error vs environment issue?",
      "options": [
        "Final response plus a single confidence score",
        "Plans, traces, tool call results, and environment telemetry",
        "Vendor benchmark summary without run-level telemetry",
        "Single screenshot"
      ],
      "answer": 1,
      "explanation": "Cross-layer evidence is required to separate cognitive errors from runtime/tooling faults.",
      "variantNumber": 21,
      "variantLabel": "Variant 21"
    },
    {
      "id": "D4-X022",
      "domainId": "D4",
      "q": "A tuning cycle should usually start with which step?",
      "options": [
        "Tune prompt, tool policy, and memory settings in one combined experiment",
        "Isolate one hypothesized cause and run targeted evaluation",
        "Disable metrics collection",
        "Increase autonomy immediately"
      ],
      "answer": 1,
      "explanation": "Controlled, hypothesis-driven tuning avoids confounded results and regressions.",
      "variantNumber": 22,
      "variantLabel": "Variant 22"
    },
    {
      "id": "D4-X023",
      "domainId": "D4",
      "q": "Which metric best captures reliability for autonomous CI fix suggestions?",
      "options": [
        "Average response length",
        "Rate of accepted fixes that pass full pipeline without manual correction",
        "Percentage of review comments auto-generated by the agent",
        "Prompt token count"
      ],
      "answer": 1,
      "explanation": "Reliability is reflected by accepted changes that succeed end-to-end.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D4-X024",
      "domainId": "D4",
      "q": "After introducing a stricter policy prompt, failure rate rises on benign tasks. Best next action?",
      "options": [
        "Remove all guardrails",
        "Refine policy granularity and test against segmented task sets",
        "Increase retries to hide failures",
        "Disable artifact capture"
      ],
      "answer": 1,
      "explanation": "Overly broad constraints can harm benign flows; segmented evaluation guides targeted refinement.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D4-X025",
      "domainId": "D4",
      "q": "Which practice most improves post-incident agent tuning?",
      "options": [
        "Delete failed run data",
        "Maintain failure taxonomy and link remediations to measurable outcomes",
        "Avoid versioning instructions",
        "Tune only by intuition"
      ],
      "answer": 1,
      "explanation": "A taxonomy with measurable follow-up enables repeatable learning and accountability.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    },
    {
      "id": "D4-X026",
      "domainId": "D4",
      "q": "What is the best use of automated scans in evaluation?",
      "options": [
        "Replace all human review",
        "Generate objective signals for quality, security, and policy compliance",
        "Raise model temperature to broaden candidate outputs",
        "Suppress warnings"
      ],
      "answer": 1,
      "explanation": "Scans provide consistent machine-verifiable signals that complement human judgment.",
      "variantNumber": 26,
      "variantLabel": "Variant 26"
    },
    {
      "id": "D4-X027",
      "domainId": "D4",
      "q": "A model upgrade improves speed but increases policy violations. Which decision is best?",
      "options": [
        "Keep upgrade because speed is better",
        "Gate rollout with policy-compliance thresholds and staged deployment",
        "Disable policy checks",
        "Rollback and stop all experiments"
      ],
      "answer": 1,
      "explanation": "Rollouts should be gated by non-negotiable compliance criteria, not speed alone.",
      "variantNumber": 27,
      "variantLabel": "Variant 27"
    },
    {
      "id": "D4-X028",
      "domainId": "D4",
      "q": "Which is the strongest success criterion for an agent refactoring task?",
      "options": [
        "The output sounds confident",
        "All tests pass, security scan has no new high findings, and diff matches scope",
        "The PR is large",
        "Runtime increases"
      ],
      "answer": 1,
      "explanation": "Good criteria are measurable, scoped, and aligned to quality and risk constraints.",
      "variantNumber": 28,
      "variantLabel": "Variant 28"
    },
    {
      "id": "D4-X029",
      "domainId": "D4",
      "q": "An agent repeatedly selects the wrong tool despite correct permissions. Most likely root cause?",
      "options": [
        "Minor timestamp skew between orchestrator and tool server",
        "Instruction ambiguity about tool-selection rules",
        "Data-center network path variability between agents and tools",
        "Insufficient branch names"
      ],
      "answer": 1,
      "explanation": "If access is correct but behavior is wrong, prompt/instruction clarity is often the issue.",
      "variantNumber": 29,
      "variantLabel": "Variant 29"
    },
    {
      "id": "D4-X030",
      "domainId": "D4",
      "q": "What evidence is most useful to classify failures as reasoning error vs environment issue?",
      "options": [
        "Final response plus a single confidence score",
        "Plans, traces, tool call results, and environment telemetry",
        "Vendor benchmark summary without run-level telemetry",
        "Single screenshot"
      ],
      "answer": 1,
      "explanation": "Cross-layer evidence is required to separate cognitive errors from runtime/tooling faults.",
      "variantNumber": 30,
      "variantLabel": "Variant 30"
    },
    {
      "id": "D4-X031",
      "domainId": "D4",
      "q": "A tuning cycle should usually start with which step?",
      "options": [
        "Tune prompt, tool policy, and memory settings in one combined experiment",
        "Isolate one hypothesized cause and run targeted evaluation",
        "Disable metrics collection",
        "Increase autonomy immediately"
      ],
      "answer": 1,
      "explanation": "Controlled, hypothesis-driven tuning avoids confounded results and regressions.",
      "variantNumber": 31,
      "variantLabel": "Variant 31"
    },
    {
      "id": "D4-X032",
      "domainId": "D4",
      "q": "Which metric best captures reliability for autonomous CI fix suggestions?",
      "options": [
        "Average response length",
        "Rate of accepted fixes that pass full pipeline without manual correction",
        "Percentage of review comments auto-generated by the agent",
        "Prompt token count"
      ],
      "answer": 1,
      "explanation": "Reliability is reflected by accepted changes that succeed end-to-end.",
      "variantNumber": 32,
      "variantLabel": "Variant 32"
    },
    {
      "id": "D4-X033",
      "domainId": "D4",
      "q": "After introducing a stricter policy prompt, failure rate rises on benign tasks. Best next action?",
      "options": [
        "Remove all guardrails",
        "Refine policy granularity and test against segmented task sets",
        "Increase retries to hide failures",
        "Disable artifact capture"
      ],
      "answer": 1,
      "explanation": "Overly broad constraints can harm benign flows; segmented evaluation guides targeted refinement.",
      "variantNumber": 33,
      "variantLabel": "Variant 33"
    },
    {
      "id": "D4-X034",
      "domainId": "D4",
      "q": "Which practice most improves post-incident agent tuning?",
      "options": [
        "Delete failed run data",
        "Maintain failure taxonomy and link remediations to measurable outcomes",
        "Avoid versioning instructions",
        "Tune only by intuition"
      ],
      "answer": 1,
      "explanation": "A taxonomy with measurable follow-up enables repeatable learning and accountability.",
      "variantNumber": 34,
      "variantLabel": "Variant 34"
    },
    {
      "id": "D4-X035",
      "domainId": "D4",
      "q": "Evaluation shows a new prompt increases first-pass success but also increases unsafe tool calls. Which metric pairing best informs rollout?",
      "options": [
        "Average answer length and latency percentile",
        "Task success rate paired with policy-violation rate under the same test set",
        "Number of generated files paired with token usage",
        "Human preference score paired with model temperature"
      ],
      "answer": 1,
      "explanation": "Rollout decisions need paired outcome and safety measures taken over the same evaluation set so tradeoffs are explicit.",
      "variantNumber": 35,
      "variantLabel": "Variant 35"
    },
    {
      "id": "D5-01",
      "domainId": "D5",
      "q": "Two agents edit overlapping files in parallel and produce conflicting diffs. Best coordination pattern?",
      "options": [
        "No coordination and merge both",
        "Isolated branches with conflict arbitration before integration",
        "Single shared branch with force-push",
        "Disable code review"
      ],
      "answer": 1,
      "explanation": "Isolation plus arbitration reduces race conditions and contradictory outputs.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-02",
      "domainId": "D5",
      "q": "What should be logged at multi-agent handoff points?",
      "options": [
        "Destination agent and handoff timestamp only",
        "Input contract, decision context, expected output schema, and timestamp",
        "Payload size and token volume at handoff",
        "Minimal handoff metadata limited to destination and status"
      ],
      "answer": 1,
      "explanation": "Rich handoff metadata supports diagnosis, replay, and accountability.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-03",
      "domainId": "D5",
      "q": "An orchestration run stalls because one agent never reports completion. Best recovery approach?",
      "options": [
        "Extend timeout thresholds and keep run open until manual cancellation",
        "Timeout, mark partial failure, invoke fallback agent or human escalation",
        "Delete all state",
        "Restart entire platform"
      ],
      "answer": 1,
      "explanation": "Timeout and fallback patterns prevent deadlock and preserve workflow continuity.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-04",
      "domainId": "D5",
      "q": "Which is most important when adding a new agent into an active workflow?",
      "options": [
        "Use broad write permissions first",
        "Define explicit role, contracts, and rollback plan before activation",
        "Replace all existing agents immediately",
        "Skip observability to reduce cost"
      ],
      "answer": 1,
      "explanation": "Safe lifecycle management requires clear responsibilities, interfaces, and recovery paths.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-05",
      "domainId": "D5",
      "q": "What is the best way to detect duplicated effort across agents?",
      "options": [
        "Diversify decomposition prompts across workers",
        "Task registry with ownership and status across workflow stages",
        "Disable parallelism",
        "Use one agent only"
      ],
      "answer": 1,
      "explanation": "A shared task registry reveals overlap and enables de-duplication decisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-06",
      "domainId": "D5",
      "q": "A reviewer needs post-hoc analysis of why two agents diverged in recommendations. What is essential?",
      "options": [
        "Merged PR diff and CI status only",
        "Per-agent plans, tool traces, and decision artifacts tied to run IDs",
        "Verbal summary from operator",
        "No logging due to privacy"
      ],
      "answer": 1,
      "explanation": "Comparative diagnostics require per-agent traceability with correlation IDs.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-07",
      "domainId": "D5",
      "q": "Which topology is most suitable for specialized agents feeding a final coordinator?",
      "options": [
        "Completely unstructured peer-to-peer only",
        "Hub-and-spoke orchestration with explicit aggregation step",
        "Single monolithic agent",
        "Dynamic peer-to-peer routing without a fixed aggregation contract"
      ],
      "answer": 1,
      "explanation": "Hub-and-spoke patterns fit specialist agents that require centralized synthesis.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-08",
      "domainId": "D5",
      "q": "During incident response, one agent's output is contradictory to policy agent output. What should happen first?",
      "options": [
        "Auto-merge contradictory changes",
        "Trigger conflict resolution gate and route to human-in-the-loop if unresolved",
        "Ignore policy agent",
        "Turn off branch protection"
      ],
      "answer": 1,
      "explanation": "Policy conflicts should trigger controlled resolution, escalating to humans when needed.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-09",
      "domainId": "D5",
      "q": "What is the safest way to retire an agent from a workflow?",
      "options": [
        "Delete all history and remove instantly",
        "Drain active work, preserve artifacts, and update orchestration contracts",
        "Reduce audit retention before decommissioning",
        "Leave orphaned tasks"
      ],
      "answer": 1,
      "explanation": "Retirement should preserve auditability and prevent disruption to in-flight work.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-01-V2",
      "domainId": "D5",
      "q": "Two agents edit overlapping files in parallel and produce conflicting diffs. Best coordination pattern?",
      "options": [
        "No coordination and merge both",
        "Isolated branches with conflict arbitration before integration",
        "Single shared branch with force-push",
        "Disable code review"
      ],
      "answer": 1,
      "explanation": "Isolation plus arbitration reduces race conditions and contradictory outputs.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-02-V2.111111111111111",
      "domainId": "D5",
      "q": "What should be logged at multi-agent handoff points?",
      "options": [
        "Destination agent and handoff timestamp only",
        "Input contract, decision context, expected output schema, and timestamp",
        "Payload size and token volume at handoff",
        "Minimal handoff metadata limited to destination and status"
      ],
      "answer": 1,
      "explanation": "Rich handoff metadata supports diagnosis, replay, and accountability.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-03-V2.2222222222222223",
      "domainId": "D5",
      "q": "An orchestration run stalls because one agent never reports completion. Best recovery approach?",
      "options": [
        "Extend timeout thresholds and keep run open until manual cancellation",
        "Timeout, mark partial failure, invoke fallback agent or human escalation",
        "Delete all state",
        "Restart entire platform"
      ],
      "answer": 1,
      "explanation": "Timeout and fallback patterns prevent deadlock and preserve workflow continuity.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-04-V2.333333333333333",
      "domainId": "D5",
      "q": "Which is most important when adding a new agent into an active workflow?",
      "options": [
        "Use broad write permissions first",
        "Define explicit role, contracts, and rollback plan before activation",
        "Replace all existing agents immediately",
        "Skip observability to reduce cost"
      ],
      "answer": 1,
      "explanation": "Safe lifecycle management requires clear responsibilities, interfaces, and recovery paths.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-05-V2.4444444444444446",
      "domainId": "D5",
      "q": "What is the best way to detect duplicated effort across agents?",
      "options": [
        "Diversify decomposition prompts across workers",
        "Task registry with ownership and status across workflow stages",
        "Disable parallelism",
        "Use one agent only"
      ],
      "answer": 1,
      "explanation": "A shared task registry reveals overlap and enables de-duplication decisions.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-06-V2.5555555555555554",
      "domainId": "D5",
      "q": "A reviewer needs post-hoc analysis of why two agents diverged in recommendations. What is essential?",
      "options": [
        "Merged PR diff and CI status only",
        "Per-agent plans, tool traces, and decision artifacts tied to run IDs",
        "Verbal summary from operator",
        "No logging due to privacy"
      ],
      "answer": 1,
      "explanation": "Comparative diagnostics require per-agent traceability with correlation IDs.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-07-V2.666666666666667",
      "domainId": "D5",
      "q": "Which topology is most suitable for specialized agents feeding a final coordinator?",
      "options": [
        "Completely unstructured peer-to-peer only",
        "Hub-and-spoke orchestration with explicit aggregation step",
        "Single monolithic agent",
        "Dynamic peer-to-peer routing without a fixed aggregation contract"
      ],
      "answer": 1,
      "explanation": "Hub-and-spoke patterns fit specialist agents that require centralized synthesis.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-08-V2.7777777777777777",
      "domainId": "D5",
      "q": "During incident response, one agent's output is contradictory to policy agent output. What should happen first?",
      "options": [
        "Auto-merge contradictory changes",
        "Trigger conflict resolution gate and route to human-in-the-loop if unresolved",
        "Ignore policy agent",
        "Turn off branch protection"
      ],
      "answer": 1,
      "explanation": "Policy conflicts should trigger controlled resolution, escalating to humans when needed.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-09-V2.888888888888889",
      "domainId": "D5",
      "q": "What is the safest way to retire an agent from a workflow?",
      "options": [
        "Delete all history and remove instantly",
        "Drain active work, preserve artifacts, and update orchestration contracts",
        "Reduce audit retention before decommissioning",
        "Leave orphaned tasks"
      ],
      "answer": 1,
      "explanation": "Retirement should preserve auditability and prevent disruption to in-flight work.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D5-X019",
      "domainId": "D5",
      "q": "Two agents edit overlapping files in parallel and produce conflicting diffs. Best coordination pattern?",
      "options": [
        "No coordination and merge both",
        "Isolated branches with conflict arbitration before integration",
        "Single shared branch with force-push",
        "Disable code review"
      ],
      "answer": 1,
      "explanation": "Isolation plus arbitration reduces race conditions and contradictory outputs.",
      "variantNumber": 19,
      "variantLabel": "Variant 19"
    },
    {
      "id": "D5-X020",
      "domainId": "D5",
      "q": "What should be logged at multi-agent handoff points?",
      "options": [
        "Destination agent and handoff timestamp only",
        "Input contract, decision context, expected output schema, and timestamp",
        "Payload size and token volume at handoff",
        "Minimal handoff metadata limited to destination and status"
      ],
      "answer": 1,
      "explanation": "Rich handoff metadata supports diagnosis, replay, and accountability.",
      "variantNumber": 20,
      "variantLabel": "Variant 20"
    },
    {
      "id": "D5-X021",
      "domainId": "D5",
      "q": "An orchestration run stalls because one agent never reports completion. Best recovery approach?",
      "options": [
        "Extend timeout thresholds and keep run open until manual cancellation",
        "Timeout, mark partial failure, invoke fallback agent or human escalation",
        "Delete all state",
        "Restart entire platform"
      ],
      "answer": 1,
      "explanation": "Timeout and fallback patterns prevent deadlock and preserve workflow continuity.",
      "variantNumber": 21,
      "variantLabel": "Variant 21"
    },
    {
      "id": "D5-X022",
      "domainId": "D5",
      "q": "Which is most important when adding a new agent into an active workflow?",
      "options": [
        "Use broad write permissions first",
        "Define explicit role, contracts, and rollback plan before activation",
        "Replace all existing agents immediately",
        "Skip observability to reduce cost"
      ],
      "answer": 1,
      "explanation": "Safe lifecycle management requires clear responsibilities, interfaces, and recovery paths.",
      "variantNumber": 22,
      "variantLabel": "Variant 22"
    },
    {
      "id": "D5-X023",
      "domainId": "D5",
      "q": "What is the best way to detect duplicated effort across agents?",
      "options": [
        "Diversify decomposition prompts across workers",
        "Task registry with ownership and status across workflow stages",
        "Disable parallelism",
        "Use one agent only"
      ],
      "answer": 1,
      "explanation": "A shared task registry reveals overlap and enables de-duplication decisions.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D5-X024",
      "domainId": "D5",
      "q": "A reviewer needs post-hoc analysis of why two agents diverged in recommendations. What is essential?",
      "options": [
        "Merged PR diff and CI status only",
        "Per-agent plans, tool traces, and decision artifacts tied to run IDs",
        "Verbal summary from operator",
        "No logging due to privacy"
      ],
      "answer": 1,
      "explanation": "Comparative diagnostics require per-agent traceability with correlation IDs.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D5-X025",
      "domainId": "D5",
      "q": "Which topology is most suitable for specialized agents feeding a final coordinator?",
      "options": [
        "Completely unstructured peer-to-peer only",
        "Hub-and-spoke orchestration with explicit aggregation step",
        "Single monolithic agent",
        "Dynamic peer-to-peer routing without a fixed aggregation contract"
      ],
      "answer": 1,
      "explanation": "Hub-and-spoke patterns fit specialist agents that require centralized synthesis.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    },
    {
      "id": "D5-X026",
      "domainId": "D5",
      "q": "During incident response, one agent's output is contradictory to policy agent output. What should happen first?",
      "options": [
        "Auto-merge contradictory changes",
        "Trigger conflict resolution gate and route to human-in-the-loop if unresolved",
        "Ignore policy agent",
        "Turn off branch protection"
      ],
      "answer": 1,
      "explanation": "Policy conflicts should trigger controlled resolution, escalating to humans when needed.",
      "variantNumber": 26,
      "variantLabel": "Variant 26"
    },
    {
      "id": "D5-X027",
      "domainId": "D5",
      "q": "What is the safest way to retire an agent from a workflow?",
      "options": [
        "Delete all history and remove instantly",
        "Drain active work, preserve artifacts, and update orchestration contracts",
        "Reduce audit retention before decommissioning",
        "Leave orphaned tasks"
      ],
      "answer": 1,
      "explanation": "Retirement should preserve auditability and prevent disruption to in-flight work.",
      "variantNumber": 27,
      "variantLabel": "Variant 27"
    },
    {
      "id": "D5-X028",
      "domainId": "D5",
      "q": "Two agents edit overlapping files in parallel and produce conflicting diffs. Best coordination pattern?",
      "options": [
        "No coordination and merge both",
        "Isolated branches with conflict arbitration before integration",
        "Single shared branch with force-push",
        "Disable code review"
      ],
      "answer": 1,
      "explanation": "Isolation plus arbitration reduces race conditions and contradictory outputs.",
      "variantNumber": 28,
      "variantLabel": "Variant 28"
    },
    {
      "id": "D5-X029",
      "domainId": "D5",
      "q": "What should be logged at multi-agent handoff points?",
      "options": [
        "Destination agent and handoff timestamp only",
        "Input contract, decision context, expected output schema, and timestamp",
        "Payload size and token volume at handoff",
        "Minimal handoff metadata limited to destination and status"
      ],
      "answer": 1,
      "explanation": "Rich handoff metadata supports diagnosis, replay, and accountability.",
      "variantNumber": 29,
      "variantLabel": "Variant 29"
    },
    {
      "id": "D5-X030",
      "domainId": "D5",
      "q": "An orchestration run stalls because one agent never reports completion. Best recovery approach?",
      "options": [
        "Extend timeout thresholds and keep run open until manual cancellation",
        "Timeout, mark partial failure, invoke fallback agent or human escalation",
        "Delete all state",
        "Restart entire platform"
      ],
      "answer": 1,
      "explanation": "Timeout and fallback patterns prevent deadlock and preserve workflow continuity.",
      "variantNumber": 30,
      "variantLabel": "Variant 30"
    },
    {
      "id": "D5-X031",
      "domainId": "D5",
      "q": "Which is most important when adding a new agent into an active workflow?",
      "options": [
        "Use broad write permissions first",
        "Define explicit role, contracts, and rollback plan before activation",
        "Replace all existing agents immediately",
        "Skip observability to reduce cost"
      ],
      "answer": 1,
      "explanation": "Safe lifecycle management requires clear responsibilities, interfaces, and recovery paths.",
      "variantNumber": 31,
      "variantLabel": "Variant 31"
    },
    {
      "id": "D5-X032",
      "domainId": "D5",
      "q": "What is the best way to detect duplicated effort across agents?",
      "options": [
        "Diversify decomposition prompts across workers",
        "Task registry with ownership and status across workflow stages",
        "Disable parallelism",
        "Use one agent only"
      ],
      "answer": 1,
      "explanation": "A shared task registry reveals overlap and enables de-duplication decisions.",
      "variantNumber": 32,
      "variantLabel": "Variant 32"
    },
    {
      "id": "D5-X033",
      "domainId": "D5",
      "q": "A reviewer needs post-hoc analysis of why two agents diverged in recommendations. What is essential?",
      "options": [
        "Merged PR diff and CI status only",
        "Per-agent plans, tool traces, and decision artifacts tied to run IDs",
        "Verbal summary from operator",
        "No logging due to privacy"
      ],
      "answer": 1,
      "explanation": "Comparative diagnostics require per-agent traceability with correlation IDs.",
      "variantNumber": 33,
      "variantLabel": "Variant 33"
    },
    {
      "id": "D5-X034",
      "domainId": "D5",
      "q": "Which topology is most suitable for specialized agents feeding a final coordinator?",
      "options": [
        "Completely unstructured peer-to-peer only",
        "Hub-and-spoke orchestration with explicit aggregation step",
        "Single monolithic agent",
        "Dynamic peer-to-peer routing without a fixed aggregation contract"
      ],
      "answer": 1,
      "explanation": "Hub-and-spoke patterns fit specialist agents that require centralized synthesis.",
      "variantNumber": 34,
      "variantLabel": "Variant 34"
    },
    {
      "id": "D5-X035",
      "domainId": "D5",
      "q": "A coordinator agent decomposes work well, but specialist agents often redo completed tasks. Which orchestration change best addresses this?",
      "options": [
        "Let each specialist infer progress from chat history alone",
        "Introduce a shared task-state ledger with ownership, completion markers, and handoff rules",
        "Add more specialist agents so duplicate work becomes less noticeable",
        "Have the coordinator resend the full plan after every tool call"
      ],
      "answer": 1,
      "explanation": "A shared authoritative task state is the most direct way to stop repeated work across multiple specialists.",
      "variantNumber": 35,
      "variantLabel": "Variant 35"
    },
    {
      "id": "D6-01",
      "domainId": "D6",
      "q": "Which action should generally require explicit human authorization?",
      "options": [
        "Reading repository metadata",
        "Irreversible compliance-sensitive production configuration change",
        "Formatting markdown",
        "Listing open issues"
      ],
      "answer": 1,
      "explanation": "Irreversible or compliance-sensitive operations warrant strong human control gates.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-02",
      "domainId": "D6",
      "q": "How should autonomy levels be assigned?",
      "options": [
        "Uniformly across all actions",
        "Based on operational, security, and compliance risk classification",
        "By model vendor preference",
        "By repository size"
      ],
      "answer": 1,
      "explanation": "Risk-based autonomy balances speed and safety in a defensible way.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-03",
      "domainId": "D6",
      "q": "What best enforces least privilege for agent execution?",
      "options": [
        "Shared admin token across org",
        "Scoped credentials per workflow and environment with periodic review",
        "Environment-wide shared credentials stored in static configuration",
        "Disable secret rotation"
      ],
      "answer": 1,
      "explanation": "Per-scope credentials and periodic review reduce unauthorized access risk.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-04",
      "domainId": "D6",
      "q": "A team says approvals slow velocity. What is the best guardrail improvement?",
      "options": [
        "Remove all approvals",
        "Apply approvals only to materially risky actions using policy thresholds",
        "Require approvals for every read action",
        "Disable policy engine"
      ],
      "answer": 1,
      "explanation": "Targeted approvals preserve speed while maintaining control where risk is meaningful.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-05",
      "domainId": "D6",
      "q": "Which accountability control is most important after autonomous actions?",
      "options": [
        "Anonymous actions",
        "Immutable audit trail linking actor, action, artifact, and approval context",
        "Fixed short retention without risk-based exceptions",
        "Ad-hoc analyst notes captured outside the run system"
      ],
      "answer": 1,
      "explanation": "Immutable end-to-end auditability is core for compliance and incident investigation.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-06",
      "domainId": "D6",
      "q": "What is the best response when an agent proposes a policy-violating action?",
      "options": [
        "Allow and document later",
        "Block execution, surface policy reason, and require approved override path",
        "Mark violation as informational and continue automatically",
        "Auto-escalate to production"
      ],
      "answer": 1,
      "explanation": "Guardrails should fail closed, explain why, and provide controlled escalation when justified.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-01-V2",
      "domainId": "D6",
      "q": "Which action should generally require explicit human authorization?",
      "options": [
        "Reading repository metadata",
        "Irreversible compliance-sensitive production configuration change",
        "Formatting markdown",
        "Listing open issues"
      ],
      "answer": 1,
      "explanation": "Irreversible or compliance-sensitive operations warrant strong human control gates.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-02-V2.166666666666667",
      "domainId": "D6",
      "q": "How should autonomy levels be assigned?",
      "options": [
        "Uniformly across all actions",
        "Based on operational, security, and compliance risk classification",
        "By model vendor preference",
        "By repository size"
      ],
      "answer": 1,
      "explanation": "Risk-based autonomy balances speed and safety in a defensible way.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-03-V2.333333333333333",
      "domainId": "D6",
      "q": "What best enforces least privilege for agent execution?",
      "options": [
        "Shared admin token across org",
        "Scoped credentials per workflow and environment with periodic review",
        "Environment-wide shared credentials stored in static configuration",
        "Disable secret rotation"
      ],
      "answer": 1,
      "explanation": "Per-scope credentials and periodic review reduce unauthorized access risk.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-04-V2.5",
      "domainId": "D6",
      "q": "A team says approvals slow velocity. What is the best guardrail improvement?",
      "options": [
        "Remove all approvals",
        "Apply approvals only to materially risky actions using policy thresholds",
        "Require approvals for every read action",
        "Disable policy engine"
      ],
      "answer": 1,
      "explanation": "Targeted approvals preserve speed while maintaining control where risk is meaningful.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-05-V2.666666666666667",
      "domainId": "D6",
      "q": "Which accountability control is most important after autonomous actions?",
      "options": [
        "Anonymous actions",
        "Immutable audit trail linking actor, action, artifact, and approval context",
        "Fixed short retention without risk-based exceptions",
        "Ad-hoc analyst notes captured outside the run system"
      ],
      "answer": 1,
      "explanation": "Immutable end-to-end auditability is core for compliance and incident investigation.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-06-V2.833333333333333",
      "domainId": "D6",
      "q": "What is the best response when an agent proposes a policy-violating action?",
      "options": [
        "Allow and document later",
        "Block execution, surface policy reason, and require approved override path",
        "Mark violation as informational and continue automatically",
        "Auto-escalate to production"
      ],
      "answer": 1,
      "explanation": "Guardrails should fail closed, explain why, and provide controlled escalation when justified.",
      "variantNumber": 0,
      "variantLabel": ""
    },
    {
      "id": "D6-X013",
      "domainId": "D6",
      "q": "Which action should generally require explicit human authorization?",
      "options": [
        "Reading repository metadata",
        "Irreversible compliance-sensitive production configuration change",
        "Formatting markdown",
        "Listing open issues"
      ],
      "answer": 1,
      "explanation": "Irreversible or compliance-sensitive operations warrant strong human control gates.",
      "variantNumber": 13,
      "variantLabel": "Variant 13"
    },
    {
      "id": "D6-X014",
      "domainId": "D6",
      "q": "How should autonomy levels be assigned?",
      "options": [
        "Uniformly across all actions",
        "Based on operational, security, and compliance risk classification",
        "By model vendor preference",
        "By repository size"
      ],
      "answer": 1,
      "explanation": "Risk-based autonomy balances speed and safety in a defensible way.",
      "variantNumber": 14,
      "variantLabel": "Variant 14"
    },
    {
      "id": "D6-X015",
      "domainId": "D6",
      "q": "What best enforces least privilege for agent execution?",
      "options": [
        "Shared admin token across org",
        "Scoped credentials per workflow and environment with periodic review",
        "Environment-wide shared credentials stored in static configuration",
        "Disable secret rotation"
      ],
      "answer": 1,
      "explanation": "Per-scope credentials and periodic review reduce unauthorized access risk.",
      "variantNumber": 15,
      "variantLabel": "Variant 15"
    },
    {
      "id": "D6-X016",
      "domainId": "D6",
      "q": "A team says approvals slow velocity. What is the best guardrail improvement?",
      "options": [
        "Remove all approvals",
        "Apply approvals only to materially risky actions using policy thresholds",
        "Require approvals for every read action",
        "Disable policy engine"
      ],
      "answer": 1,
      "explanation": "Targeted approvals preserve speed while maintaining control where risk is meaningful.",
      "variantNumber": 16,
      "variantLabel": "Variant 16"
    },
    {
      "id": "D6-X017",
      "domainId": "D6",
      "q": "Which accountability control is most important after autonomous actions?",
      "options": [
        "Anonymous actions",
        "Immutable audit trail linking actor, action, artifact, and approval context",
        "Fixed short retention without risk-based exceptions",
        "Ad-hoc analyst notes captured outside the run system"
      ],
      "answer": 1,
      "explanation": "Immutable end-to-end auditability is core for compliance and incident investigation.",
      "variantNumber": 17,
      "variantLabel": "Variant 17"
    },
    {
      "id": "D6-X018",
      "domainId": "D6",
      "q": "What is the best response when an agent proposes a policy-violating action?",
      "options": [
        "Allow and document later",
        "Block execution, surface policy reason, and require approved override path",
        "Mark violation as informational and continue automatically",
        "Auto-escalate to production"
      ],
      "answer": 1,
      "explanation": "Guardrails should fail closed, explain why, and provide controlled escalation when justified.",
      "variantNumber": 18,
      "variantLabel": "Variant 18"
    },
    {
      "id": "D6-X019",
      "domainId": "D6",
      "q": "Which action should generally require explicit human authorization?",
      "options": [
        "Reading repository metadata",
        "Irreversible compliance-sensitive production configuration change",
        "Formatting markdown",
        "Listing open issues"
      ],
      "answer": 1,
      "explanation": "Irreversible or compliance-sensitive operations warrant strong human control gates.",
      "variantNumber": 19,
      "variantLabel": "Variant 19"
    },
    {
      "id": "D6-X020",
      "domainId": "D6",
      "q": "How should autonomy levels be assigned?",
      "options": [
        "Uniformly across all actions",
        "Based on operational, security, and compliance risk classification",
        "By model vendor preference",
        "By repository size"
      ],
      "answer": 1,
      "explanation": "Risk-based autonomy balances speed and safety in a defensible way.",
      "variantNumber": 20,
      "variantLabel": "Variant 20"
    },
    {
      "id": "D6-X021",
      "domainId": "D6",
      "q": "What best enforces least privilege for agent execution?",
      "options": [
        "Shared admin token across org",
        "Scoped credentials per workflow and environment with periodic review",
        "Environment-wide shared credentials stored in static configuration",
        "Disable secret rotation"
      ],
      "answer": 1,
      "explanation": "Per-scope credentials and periodic review reduce unauthorized access risk.",
      "variantNumber": 21,
      "variantLabel": "Variant 21"
    },
    {
      "id": "D6-X022",
      "domainId": "D6",
      "q": "A team says approvals slow velocity. What is the best guardrail improvement?",
      "options": [
        "Remove all approvals",
        "Apply approvals only to materially risky actions using policy thresholds",
        "Require approvals for every read action",
        "Disable policy engine"
      ],
      "answer": 1,
      "explanation": "Targeted approvals preserve speed while maintaining control where risk is meaningful.",
      "variantNumber": 22,
      "variantLabel": "Variant 22"
    },
    {
      "id": "D6-X023",
      "domainId": "D6",
      "q": "Which accountability control is most important after autonomous actions?",
      "options": [
        "Anonymous actions",
        "Immutable audit trail linking actor, action, artifact, and approval context",
        "Fixed short retention without risk-based exceptions",
        "Ad-hoc analyst notes captured outside the run system"
      ],
      "answer": 1,
      "explanation": "Immutable end-to-end auditability is core for compliance and incident investigation.",
      "variantNumber": 23,
      "variantLabel": "Variant 23"
    },
    {
      "id": "D6-X024",
      "domainId": "D6",
      "q": "What is the best response when an agent proposes a policy-violating action?",
      "options": [
        "Allow and document later",
        "Block execution, surface policy reason, and require approved override path",
        "Mark violation as informational and continue automatically",
        "Auto-escalate to production"
      ],
      "answer": 1,
      "explanation": "Guardrails should fail closed, explain why, and provide controlled escalation when justified.",
      "variantNumber": 24,
      "variantLabel": "Variant 24"
    },
    {
      "id": "D6-X025",
      "domainId": "D6",
      "q": "A team wants agents to self-approve low-risk changes in development but never in production. Which control model is best?",
      "options": [
        "One global approval rule based on model confidence across all environments",
        "Environment-aware policy thresholds with separate approval requirements per risk tier",
        "Developer opt-out of approvals whenever delivery velocity drops",
        "Production write access guarded only by post-deployment monitoring"
      ],
      "answer": 1,
      "explanation": "Approval policy should reflect both risk tier and environment so low-risk development changes stay fast without weakening production controls.",
      "variantNumber": 25,
      "variantLabel": "Variant 25"
    }
  ]
};