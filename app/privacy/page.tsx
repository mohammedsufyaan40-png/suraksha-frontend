"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  UserCheck,
  FileText,
  AlertOctagon,
  CheckCircle2,
  Shield,
  ArrowRight,
  Fingerprint,
} from "lucide-react";
import { PRIVACY_PRINCIPLES } from "@/lib/demoData";

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Ethical AI & Privacy Charter</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
          Welfare Without Surveillance.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          SURAKSHA is engineered with mathematical privacy boundaries ensuring welfare support is strictly separated from military discipline, appraisals, or command surveillance.
        </p>
      </div>

      {/* Core Privacy Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRIVACY_PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="glass-panel glass-panel-hover rounded-3xl p-7 border border-slate-800 space-y-4 bg-slate-950/80 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400">
                  PRINCIPLE {principle.number}
                </span>
                <span className="text-emerald-400 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">{principle.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {principle.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-900 text-xs font-mono text-cyan-300/90">
              ✓ {principle.short}
            </div>
          </div>
        ))}
      </div>

      {/* Contrast Matrix: Surveillance vs Welfare Support */}
      <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-950/90 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Institutional Safeguard
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Explicit Guardrails & Non-Punitive Mandate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Prohibited */}
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider font-mono">
              <AlertOctagon className="w-5 h-5" />
              <span>Strictly Prohibited & Impossible</span>
            </div>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Using welfare risk metrics in annual performance reviews or appraisals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Allowing unit commanders to view individual subjective survey responses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Automated punitive actions or disciplinary flags triggered by AI models.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Claiming medical psychiatric diagnoses (depression, PTSD, anxiety).</span>
              </li>
            </ul>
          </div>

          {/* Guaranteed */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
              <ShieldCheck className="w-5 h-5" />
              <span>Guaranteed by Design</span>
            </div>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% voluntary check-in participation without stigma or penalty.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Cryptographic pseudonymization separating service ID from risk signals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Confidential one-to-one welfare support channel directly with Welfare Officers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Immutable cryptographic audit logs for every system access event.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-teal-950/40 border border-cyan-500/30 text-center space-y-3 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
          "The system is designed to support people — not punish them."
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Readiness is built on trust, recovery, and proactive institutional care.
        </p>
      </div>
    </div>
  );
}
