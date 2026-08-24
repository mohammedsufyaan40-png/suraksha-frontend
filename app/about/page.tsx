"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Award,
  User,
  Shield,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight,
} from "lucide-react";
import SurakshaLogo from "@/components/Interactive/SurakshaLogo";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Award className="w-3.5 h-3.5" />
          <span>Smart India Hackathon 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
          About SURAKSHA
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          <strong className="text-slate-100">System for Uniformed Resilience, Analytics & Stress Health Assessment</strong>.
          A proposed software solution designed for SIH Problem Statement 26186.
        </p>
      </div>

      {/* Official Context Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
            Organization
          </div>
          <div className="font-bold text-slate-100 text-sm">
            Ministry of Home Affairs
          </div>
          <p className="text-slate-400">Government of India</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
            Department
          </div>
          <div className="font-bold text-slate-100 text-sm">
            Central Reserve Police Force
          </div>
          <p className="text-slate-400">Police II Division</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
            Problem Statement
          </div>
          <div className="font-bold text-slate-100 text-sm font-mono">
            SIH PS 26186
          </div>
          <p className="text-slate-400">Software Category</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
            Theme
          </div>
          <div className="font-bold text-slate-100 text-sm">
            MedTech / HealthTech
          </div>
          <p className="text-slate-400">Uniformed Welfare Support</p>
        </div>
      </div>

      {/* Narrative & Mission */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 bg-slate-950/80 space-y-6">
        <div className="border-b border-slate-800 pb-5">
          <h2 className="text-2xl font-bold text-slate-100">Mission & Purpose</h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            The personnel of the Central Reserve Police Force (CRPF) and allied Central Armed Police Forces operate in some of the most challenging environments in the country. Extended duty hours, nocturnal operations, physical separation from families, and sustained operational tempo inevitably induce physiological fatigue and stress.
          </p>
          <p>
            <strong>SURAKSHA</strong> was conceived as a proactive, privacy-preserving technology framework that replaces retroactive observation with predictive early signals. By analyzing longitudinal duty telemetry and voluntary wellness inputs through explainable AI (SHAP and XGBoost), SURAKSHA empowers Welfare Officers to deliver timely, non-punitive interventions before fatigue compounds.
          </p>
        </div>
      </div>

      {/* Developer Profile Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 bg-slate-950/90 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Concept & Prototype Developer
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100">
                Ayaan Shakil Hashmi
              </h3>
            </div>
          </div>

          <div className="text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 px-3.5 py-1.5 rounded-xl">
            SIH 2026 Prototype
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Architected and engineered the SURAKSHA web platform frontend prototype, featuring complete role-based access flows, explainable AI visualizations, longitudinal stress timelines, and privacy-preserving welfare workflows.
          </p>
        </div>
      </div>

      {/* Official Disclaimer Note */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
        <div className="font-bold text-slate-300 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>Official Hackathon Prototype Disclaimer</span>
        </div>
        <p className="leading-relaxed">
          SURAKSHA is a proposed hackathon prototype developed in response to SIH Problem Statement 26186. It is not an officially deployed Government of India or CRPF system. SURAKSHA is a welfare-support and early-warning platform, NOT a surveillance, disciplinary, or medical-diagnosis system. Do not claim that SURAKSHA diagnoses depression, PTSD, anxiety, or any medical condition.
        </p>
      </div>
    </div>
  );
}
