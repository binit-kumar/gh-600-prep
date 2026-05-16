# GH-600 Prep — Practice Flashcards

This repository provides a browser-based practice experience for the GH-600 exam.

**Get started**
- Open the practice exam at: https://binit-kumar.github.io/gh-600-prep/flashcards.html

**How the test experience works**
- Each attempt is a timed session of **120 minutes**.
- Each attempt presents **60 randomized questions** selected from a larger bank (the repository contains ~200 mock questions). Questions are selected so each skill/domain is equally represented per the documentation.
- During the attempt you can answer, bookmark, and navigate between questions. Click **Check Answer** to reveal correctness and view explanations.
- At the end of the attempt (or when the session completes) a review panel displays your final result with per-question feedback and overall score.

**What to expect**
- Timed, exam-like practice: 60 questions, 120 minutes.
- Randomized, non-repeating selection per attempt drawn from the bank.
- Immediate feedback on each question and a full review after completion.

**Files (for maintainers)**
- `flashcards.html` — the browser UI test takers open.
- `gh600-question-bank.json` / `gh600-question-bank.js` — the question bank sources used by the UI.
