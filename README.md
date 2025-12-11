# 🧠 AI Agent Customizer

A lightweight and visual tool to **design, configure, and test a conversational AI agent** before integrating it into your applications (Slack bot, internal tool, product assistant, etc.).

Users can define:

* the agent’s identity (name, role)
* its communication style (tone, expertise level)
* domains of expertise
* extra behavioral rules
* an auto-generated **system prompt**
* a **behavior summary**
* a **playground** to test the agent

---

## 🌟 Screenshots

### 🔹 Hero & General Layout

![Hero Screenshot](/public/screenshots/hero.png)

### 🔹 Agent Configuration Form (3 columns)

![Agent Config Form](/public/screenshots/agent-config-form.png)

### 🔹 Prompt & Summary Preview

![Agent Insights](/public/screenshots/agent-insights.png)

### 🔹 Playground

![Playground](/public/screenshots/playground.png)

---

## ✨ Features

* 🎛️ **Three-column configuration form**: Identity, Style, Domains & Rules
* 🧾 **Automatic system prompt generation**
* 📄 **Human-readable agent summary**
* 💬 **Playground** to test the agent
* 📚 **Storybook** documenting all UI components
* 🧩 **Unit tests (Vitest)** for prompt + demo conversation logic

---

## 🛠 Tech Stack

* **Next.js 16 (App Router)**
* **TypeScript**
* **MUI** Design System
* **Zustand** for global state
* **Zod** for schema validation
* **Vitest** for unit testing
* **Storybook** for UI documentation

---

## 🚀 Installation

```bash
git clone <your-repo>
cd ai-agent-customizer
npm install
npm run dev
```

---

## 🔐 Optional: enable real AI mode (OpenAI API)

Create a `.env.local` file:

```
OPENAI_API_KEY=sk-...
```

---

## 🧪 Tests

Run unit tests:

```bash
npm test
```

Tests cover:

* system prompt generation

---

## 📚 Storybook

Run Storybook:

```bash
npm run storybook
```

Components documented:

* AgentConfigForm
* ToneSelector
* LevelSelector
* AgentInsightsCard
* ChatWindow
* SectionCard

---

## 📂 Project Structure

```
src/
  app/
  components/
  hooks/
  store/
  lib/
  config/
  types/
```

---

## 🎯 Why this project?

This project demonstrates:

* the ability to design **usable AI tooling**
* structured prompt engineering
* building clean, modular UI components ready for Storybook
* managing global state and validation
* testing AI-related logic safely
