# Project Portfolio

> Personal interactive portfolio showcasing selected engineering projects, technical experience, architecture decisions, and professional background.

This project is an interactive web portfolio designed to present professional experience and selected projects in a modern, visual, and technically meaningful way.

The portfolio is developed through an **AI-assisted engineering workflow** using **Multica**, **PWD**, and **Midas**, with dedicated AI agents responsible for project planning, frontend development, quality assurance, and deployment.

---

## 🎯 Project Goals

The primary goals of this project are:

* Present professional experience beyond a traditional CV.
* Showcase selected projects through interactive case studies.
* Explain technical architecture and engineering decisions.
* Demonstrate experience across backend, frontend, cloud, AI, and system integration.
* Provide a modern and visually engaging portfolio experience.
* Maintain a workflow that allows the portfolio to evolve as new projects are added.

---

## 🏗️ Project Architecture

```text
                         ┌─────────────────────┐
                         │      Multica        │
                         │   AI Orchestrator   │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
             ┌──────▼──────┐                ┌──────▼──────┐
             │ Portfolio PM │                │  Frontend   │
             │  / Architect │                │  Developer  │
             └──────┬──────┘                └──────┬──────┘
                    │                               │
                    └───────────────┬───────────────┘
                                    │
                             ┌──────▼──────┐
                             │     PWD     │
                             │ Development │
                             │   Runtime   │
                             └──────┬──────┘
                                    │
                             ┌──────▼──────┐
                             │    GitLab   │
                             │ project-    │
                             │   profile   │
                             └──────┬──────┘
                                    │
                             ┌──────▼──────┐
                             │    Midas    │
                             │ E2E Testing │
                             └─────────────┘
```

### Core Components

| Component                          | Responsibility                                                                      |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| **Multica**                        | AI orchestration, project planning, agent coordination                              |
| **Portfolio PM / Architect Agent** | Defines portfolio structure, content hierarchy, milestones, and technical direction |
| **Frontend Developer Agent**       | Implements UI, components, animations, responsive layouts, and interactions         |
| **PWD**                            | Development/runtime environment for applications and AI agents                      |
| **GitLab**                         | Source control, collaboration, and CI/CD integration                                |
| **Midas**                          | End-to-end testing and validation                                                   |

---

## 🤖 AI Agent Architecture

The project uses dedicated agents rather than relying on a single general-purpose agent.

### Portfolio PM / Lead Architect

Responsible for:

* Portfolio information architecture
* Project prioritization
* Case-study structure
* Technical storytelling
* Milestone planning
* Coordination between agents
* Reviewing implementation against portfolio objectives

Recommended model:

```text
deepseek-v4-pro / glm-5.2
```

The large context window is useful for processing CV information, previous project documentation, architecture notes, and portfolio requirements.

### Senior Frontend Developer

Responsible for:

* UI implementation
* Responsive design
* Component architecture
* Modern frontend interactions
* Visual storytelling
* Accessibility
* Performance
* Integration with portfolio content

Recommended model:

```text
kimi-k2.7-code / deepseek-v4-pro
```

### Optional Research Specialist

Used when additional external information is required for:

* Technology references
* Project background
* Documentation
* Current technical information
* External research

---

## 🧩 Agent Skills

The existing agent ecosystem provides several useful foundations:

* `product-owner`
* `tech-lead`
* `qa-tester`
* `devops-engineer`

Existing skills can also be reused where appropriate:

* `jira-assistant`
* `security-audit`
* `github-pr-reviewer`
* `api-docs-generator`

For this portfolio project, additional specialized capabilities are required:

### Portfolio Storytelling

Transforms technical project information into understandable case studies.

Focus:

```text
Problem
   ↓
Context
   ↓
Solution
   ↓
Architecture
   ↓
Implementation
   ↓
Challenges
   ↓
Result
   ↓
Lessons Learned
```

### Modern UI/UX Web Craft

Focuses on:

* Modern visual design
* Responsive layouts
* Interactive components
* Motion and animation
* Visual hierarchy
* Project timelines
* Architecture visualization
* Technical storytelling

### GitLab & PWD Deployment Sync

Handles:

* Git workflow
* Branch management
* Commit strategy
* Build validation
* Deployment synchronization
* Environment configuration

### Project Knowledge

Provides structured context from previous projects and professional experience so that project case studies remain technically accurate.

---

# 📚 Portfolio Projects

The portfolio will contain selected projects from professional, freelance, and personal experience.

Current project candidates include:

### Telkom Agree

Enterprise platform experience involving application development, system integration, and engineering workflows.

### Logee

Logistics-related engineering experience showcasing system development and integration.

### Multica — Custom Telkom DPE

AI orchestration and agent-based engineering platform experience.

### US Church Event App

Application development experience involving event-related workflows and user-facing functionality.

### Photobooth

Independent project demonstrating product development and practical implementation.

### Book Summary

Personal project demonstrating experimentation, automation, and application development.

> Project details should be presented as case studies rather than simple technology lists.

---

# 📖 Case Study Structure

Each project page follows a consistent structure:

```text
┌──────────────────────────────┐
│ Project Overview             │
├──────────────────────────────┤
│ Problem / Context            │
├──────────────────────────────┤
│ Role & Responsibilities      │
├──────────────────────────────┤
│ Architecture                 │
├──────────────────────────────┤
│ Technology Stack             │
├──────────────────────────────┤
│ Key Engineering Challenges   │
├──────────────────────────────┤
│ Implementation               │
├──────────────────────────────┤
│ Result / Impact              │
├──────────────────────────────┤
│ Lessons Learned              │
└──────────────────────────────┘
```

The objective is to communicate not only **what technology was used**, but also **why it was used and what engineering problem it solved**.

---

# 🛠️ Technology

The exact frontend stack may evolve during implementation, but the project is intended to use a modern web application architecture.

Potential stack:

* React
* TypeScript
* Vite
* Tailwind CSS
* Modern component architecture
* Responsive web design
* GitLab
* PWD
* Midas E2E Testing

Technology choices should remain pragmatic and should prioritize:

1. Maintainability
2. Performance
3. Developer experience
4. Visual quality
5. Deployment simplicity

---

# 🌿 Git Workflow

The repository uses `main` as the primary branch.

Recommended workflow:

```text
main
 │
 ├── feature/portfolio-home
 ├── feature/project-agree
 ├── feature/project-logee
 ├── feature/project-multica
 └── feature/project-timeline
```

Changes should be developed in feature branches and merged into `main` after validation.

---

# 🧪 Testing

End-to-end validation is handled through **Midas**.

Typical validation flow:

```text
Code
  ↓
Build
  ↓
Run Application
  ↓
Midas E2E Test
  ↓
Validate UI / Interaction
  ↓
Fix
  ↓
Re-test
  ↓
Deploy
```

Important user journeys include:

* Homepage navigation
* Project browsing
* Project detail pages
* Responsive layouts
* Interactive components
* External links
* Contact / profile interactions

---

# 🚀 Development Workflow

The intended development workflow is:

```text
1. Define Portfolio Requirement
          ↓
2. Portfolio PM Agent
          ↓
3. Architecture & Content Planning
          ↓
4. Frontend Developer Agent
          ↓
5. Implementation in PWD
          ↓
6. GitLab Commit / Merge
          ↓
7. Midas E2E Testing
          ↓
8. Review & Iteration
          ↓
9. Deployment
```

This workflow demonstrates the use of AI not simply as a coding assistant, but as part of an **agentic software engineering workflow**.

---

# 📁 Proposed Repository Structure

```text
project-profile/
│
├── public/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── layouts/
│   ├── data/
│   ├── assets/
│   ├── hooks/
│   └── utils/
│
├── tests/
│
├── docs/
│   ├── architecture/
│   ├── projects/
│   └── decisions/
│
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# 📌 Development Principles

### 1. Content First

Technical implementation should serve the portfolio story rather than becoming the story itself.

### 2. Show, Don't Only Tell

Whenever possible, architecture, workflows, and project results should be represented visually.

### 3. Technical Depth Without Unnecessary Complexity

The portfolio should be understandable by non-technical stakeholders while still providing enough depth for engineers and technical reviewers.

### 4. Reusable Components

UI elements should be reusable and modular so new projects can be added without significant restructuring.

### 5. AI-Assisted, Human-Directed

AI agents are responsible for assisting with planning, implementation, testing, and iteration.

Final technical direction and project representation remain human-directed.

---

# 🗺️ Roadmap

## Phase 1 — Foundation

* [ ] Initialize repository
* [ ] Create `main` branch
* [ ] Configure frontend stack
* [ ] Establish design system
* [ ] Create base layout
* [ ] Configure PWD development environment

## Phase 2 — Portfolio Core

* [ ] Hero section
* [ ] About section
* [ ] Skills / technology section
* [ ] Experience timeline
* [ ] Project showcase
* [ ] Contact section

## Phase 3 — Project Case Studies

* [ ] Agree
* [ ] Logee
* [ ] Multica
* [ ] US Church Event App
* [ ] Photobooth
* [ ] Book Summary

## Phase 4 — AI Engineering Workflow

* [ ] Portfolio PM Agent
* [ ] Frontend Developer Agent
* [ ] Portfolio Storytelling Skill
* [ ] Modern UI/UX Skill
* [ ] GitLab/PWD Sync Skill

## Phase 5 — Quality & Deployment

* [ ] Midas E2E tests
* [ ] Responsive testing
* [ ] Performance optimization
* [ ] Accessibility validation
* [ ] Production deployment

---

# 🎯 Final Objective

The final result should be more than a traditional developer portfolio.

It should demonstrate:

> **What I built, why I built it, how I engineered it, and how AI-assisted engineering can be used to build and maintain modern software.**

The portfolio itself therefore becomes a demonstration of the engineering approach it describes.
