# SURAKSHA (System for Uniformed Resilience, Analytics & Stress Health Assessment)

**Predict. Protect. Support.**

**Smart India Hackathon (SIH) Problem Statement 26186**  
**Organization:** Ministry of Home Affairs, Government of India  
**Department:** Central Reserve Police Force (CRPF) — Police II Division  
**Category:** Software | **Theme:** MedTech / BioTech / HealthTech  
**Concept & Prototype Developer:** Ayaan Shakil Hashmi  

---

## 📌 Overview

**SURAKSHA** is a privacy-first, AI-powered personnel welfare and early-warning web application designed for uniformed forces (CRPF, CAPFs, and defence services) to identify early indicators of operational stress, fatigue, and burnout risk and enable timely, human-led welfare intervention.

> **Important Mandate:**  
> SURAKSHA is a welfare-support and early-warning platform, **NOT** a surveillance, disciplinary, or medical-diagnosis system.  
> It does not diagnose depression, PTSD, anxiety, or any medical condition. All individual wellness data is voluntary and strictly decoupled from command appraisals.

---

## 🚀 Key Features & Pages

- **Public Landing Page (`/`)**: 22 comprehensive sections including hero preview, official MHA/CRPF context strip, reactive vs predictive comparison, 6 solution cards, 7-step AI pipeline visualizer, 4-tier risk matrix (0-100), 5-week SHAP timeline, 4-screen interactive mobile phone simulator, 6 privacy principles ("Welfare Without Surveillance"), security pipeline, impact cards, expansion roadmap, and developer footer.
- **Platform Architecture (`/platform`)**: Deep dive into the 4 architectural pillars and Zero-Trust RBAC Domain Isolation Matrix.
- **AI & ML Intelligence (`/how-it-works`)**: Technical breakdown of XGBoost/LightGBM ensembles, Isolation Forest anomaly detection, SHAP game-theoretic factor decomposition, and interactive threshold calibration sandbox.
- **Privacy & Ethics Charter (`/privacy`)**: "Welfare Without Surveillance" framework with explicit comparison of prohibited vs guaranteed practices.
- **About & SIH Context (`/about`)**: Project problem statement context, CRPF Police II Division alignment, and developer profile.
- **Role-Based Auth Portal (`/login`)**: 1-click test simulation for **Personnel (`P-1042`)**, **Welfare Officer (`WO-Sharma`)**, **Unit Commander (`Cmdr-Verma`)**, and **System Admin**.
- **Personnel Portal (`/personnel`)**:
  - **Daily Wellness Check-In (`/personnel/wellness`)**: 30-second voluntary assessment form with interactive rating scales, instant feedback, and confetti celebration.
  - **Personal Baseline Explorer (`/personnel/risk`)**: Multi-dimensional radar balance chart (Workload, Fatigue, Recovery, Sleep, Shift Stability).
- **Welfare Officer Dashboard (`/welfare`)**:
  - Battalion overview for **1,248 personnel** (72% Stable, 18% Support Recommended, 4% Priority Review, 11% Improving).
  - Risk distribution donut chart, 8-month welfare trend line chart, and searchable Priority Cases table (`P-1042`, `P-2187`, `P-3021`, `P-4417`, `P-5208`).
  - **Welfare Cases & Intervention Tracking (`/welfare/cases`)**: Case management queue with 7-day and 30-day follow-up tracking.
  - **Personnel Detail Profile (`/welfare/personnel/P-1042`)**: Deep profile for `P-1042` with 78/100 Priority Review gauge, ↑21 pts velocity, 30-day longitudinal trend chart, SHAP factor contributions, AI clinical explanation, and "Create Intervention" modal.
- **Unit Commander Dashboard (`/commander`)**: Aggregate organizational intelligence (Unit Risk 48/100, Workload Pressure +12%, Fatigue Trend +8%, Night Duty Load 14%, Extended Deployment 18%) with 5 strategic charts (**Zero individual PII exposed**).
- **Admin & Security Center (`/admin`)**: Immutable cryptographic audit trail viewer, RBAC enforcement monitor, AES-256-GCM token rotation simulator, and AI anomaly sensitivity calibration.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Defence-Tech Dark Theme
- **Data Visualizations**: Recharts (Donut, Area, Multi-Bar, Line, Radar)
- **Icons & Micro-Interactions**: Lucide React + Canvas Confetti
- **State Management**: React Context (`AppContext.tsx`)

---

## 💻 How to Run on Another Computer

### 1. Prerequisites
- Node.js (version 18 or higher, Node 20+ recommended)
- npm, pnpm, or yarn

### 2. Installation
Extract the ZIP archive and open a terminal inside the project directory:

```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

### 4. Build for Production (Optional)
```bash
npm run build
npm run start
```

---

## 📜 Disclaimer
SURAKSHA is a proposed hackathon prototype developed in response to SIH Problem Statement 26186. It is not an officially deployed Government of India or CRPF system.

**Copyright © 2026 SURAKSHA. All rights reserved.**
