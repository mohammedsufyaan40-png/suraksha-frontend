"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Shield,
  Cpu,
  Activity,
  HeartHandshake,
  Database,
  Lock,
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  FileCheck,
  UserCheck,
  EyeOff,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PlatformPage() {
  const { setRole } = useApp();

  const pillars = [
    {
      id: "01",
      title: "Privacy-Preserving Telemetry",
      subtitle: "Zero-Knowledge Ingestion",
      desc: "Ingests duty schedules, shift rotations, night duty hours, and voluntary wellness check-ins without storing unencrypted personal identifiers.",
      tags: ["AES-256-GCM", "Pseudonymized Tokenization", "Consent Management"],
      icon: Database,
    },
    {
      id: "02",
      title: "Dynamic Baseline Engine",
      subtitle: "Personalized Normalization",
      desc: "Establishes personalized 30-day baseline windows for each personnel member, detecting individual anomalies rather than applying rigid population thresholds.",
      tags: ["Rolling 30-Day Baselines", "Isolation Forest", "Trend Velocity"],
      icon: Activity,
    },
    {
      id: "03",
      title: "Multi-Model Risk Intelligence",
      subtitle: "Explainable ML Ensemble",
      desc: "Ensemble of XGBoost and LightGBM models calibrated on operational fatigue indicators, combined with SHAP game-theoretic factor decomposition.",
      tags: ["XGBoost Ensemble", "SHAP Explainability", "Non-Clinical Focus"],
      icon: Cpu,
    },
    {
      id: "04",
      title: "Human-in-the-Loop Triage",
      subtitle: "Welfare Decision Support",
      desc: "Translates analytical predictions into proactive, supportive recommendations for dedicated Welfare Officers with 7-day and 30-day outcome tracking.",
      tags: ["Decision Support (DSS)", "Intervention Tracking", "Zero Disciplinary Link"],
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Layers className="w-3.5 h-3.5" />
          <span>SURAKSHA Platform Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
          Enterprise Defence-Grade Welfare Intelligence
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          SURAKSHA combines zero-knowledge telemetry ingestion with explainable machine learning to provide uniformed services with proactive early warnings of operational stress and fatigue.
        </p>
      </div>

      {/* 4 Core Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="glass-panel glass-panel-hover rounded-3xl p-7 border border-slate-800 space-y-5 bg-slate-950/80"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-cyan-400">
                  PILLAR {pillar.id}
                </span>
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {pillar.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mt-0.5">{pillar.title}</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Role-Based Access Architecture Diagram */}
      <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-950/90 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Zero-Trust Data Boundary
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Role-Based Access Separation (RBAC)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Under strict privacy design, different operational roles have mathematically isolated access boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <UserCheck className="w-4 h-4" />
              <span>Personnel View</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Self check-in ratings</li>
              <li>✓ Personal recovery tips</li>
              <li>✓ Confidential welfare requests</li>
              <li className="text-slate-400">✗ Peer data strictly blocked</li>
            </ul>
            <Link
              href="/personnel"
              onClick={() => setRole("PERSONNEL")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline pt-2"
            >
              <span>Test Personnel View</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <HeartHandshake className="w-4 h-4" />
              <span>Welfare Officer</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Priority welfare review queue</li>
              <li>✓ SHAP factor decomposition</li>
              <li>✓ Create & track interventions</li>
              <li className="text-slate-400">✗ Zero disciplinary authority</li>
            </ul>
            <Link
              href="/welfare"
              onClick={() => setRole("WELFARE_OFFICER")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-2"
            >
              <span>Test Welfare View</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Shield className="w-4 h-4" />
              <span>Unit Commander</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Battalion aggregate fatigue trend</li>
              <li>✓ Shift distribution analytics</li>
              <li>✓ Strategic resource recommendations</li>
              <li className="text-rose-400 font-medium">✗ Zero individual PII access</li>
            </ul>
            <Link
              href="/commander"
              onClick={() => setRole("COMMANDER")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:underline pt-2"
            >
              <span>Test Commander View</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Lock className="w-4 h-4" />
              <span>System Admin</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Cryptographic audit trail</li>
              <li>✓ Pseudonymization key rotation</li>
              <li>✓ Model hyperparameter calibration</li>
              <li className="text-slate-400">✗ Zero clinical record viewing</li>
            </ul>
            <Link
              href="/admin"
              onClick={() => setRole("ADMIN")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline pt-2"
            >
              <span>Test Admin View</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
