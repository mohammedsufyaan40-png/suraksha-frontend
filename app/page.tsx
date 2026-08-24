"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Heart,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Lock,
  EyeOff,
  UserCheck,
  FileText,
  Clock,
  Sparkles,
  AlertTriangle,
  Cpu,
  Layers,
  ChevronRight,
  BarChart3,
  Users,
  Compass,
  Building2,
  Calendar,
  Zap,
} from "lucide-react";
import SurakshaLogo from "@/components/Interactive/SurakshaLogo";
import HeroDashboardPreview from "@/components/Interactive/HeroDashboardPreview";
import ModelPipelineVisualizer from "@/components/Interactive/ModelPipelineVisualizer";
import WhyRiskChangedTimeline from "@/components/Interactive/WhyRiskChangedTimeline";
import MobileAppSimulator from "@/components/Interactive/MobileAppSimulator";
import RiskGauge from "@/components/Interactive/RiskGauge";
import { PRIVACY_PRINCIPLES, EXPANSION_ROADMAP } from "@/lib/demoData";
import { useApp } from "@/context/AppContext";

export default function LandingPage() {
  const { setRole, setIsSupportModalOpen } = useApp();

  return (
    <div className="relative overflow-hidden space-y-24 sm:space-y-32 pb-16 bg-grid-pattern">
      {/* 1 & 5. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* SIH Hackathon Proposal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-semibold">SIH Problem Statement 26186</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">MHA / CRPF Police II Division</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
              Protecting Those Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                Protect Us.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              SURAKSHA is a <strong className="text-slate-100 font-semibold">privacy-first AI-powered personnel welfare platform</strong> designed to identify early indicators of stress, fatigue and burnout risk and enable timely, human-led welfare intervention.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/platform"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/how-it-works"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <span>How SURAKSHA Works</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Micro Credibility Text */}
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Designed for Uniformed Services • Privacy by Design • Human-in-the-Loop</span>
            </div>
          </div>

          {/* Hero Right: Live Dashboard Preview Component */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroDashboardPreview />
          </div>
        </div>
      </section>

      {/* 6. GOVERNMENT / OFFICIAL CONTEXT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-slate-800 bg-slate-950/60 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-semibold text-slate-100">Government of India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Ministry of Home Affairs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Central Reserve Police Force (CRPF)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Police II Division</span>
              </div>
            </div>

            <div className="text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-lg shrink-0">
              Proposed AI-enabled welfare technology solution for SIH Problem Statement 26186.
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
            Operational Stress & Fatigue In Uniformed Forces
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            The Warning Signs Are Often Invisible.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Uniformed personnel endure demanding duty conditions where accumulated fatigue and operational stress often go undetected until critical tipping points.
          </p>
        </div>

        {/* Operational Pressure Points Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: "Extended Deployments", desc: "Long rotations in remote terrain" },
            { title: "Irregular Duty Schedules", desc: "Unpredictable rotation timings" },
            { title: "Night Shifts", desc: "Circadian rhythm disruption" },
            { title: "Operational Pressure", desc: "High-readiness standby demands" },
            { title: "Separation from Family", desc: "Prolonged communication distance" },
            { title: "High Workload", desc: "Consecutive double-duty cycles" },
            { title: "Insufficient Recovery", desc: "Shortened rest and sleep windows" },
            { title: "Difficult Environments", desc: "Extreme climate & counter-ops" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-rose-500/30 transition-all space-y-1"
            >
              <div className="text-xs font-bold text-slate-200">{item.title}</div>
              <div className="text-[11px] text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Visual Comparison: Reactive Welfare vs SURAKSHA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
          {/* Reactive (Old) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950/60 border border-slate-800 p-6 space-y-4 flex flex-col justify-between opacity-80">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Traditional Approach
              </div>
              <h3 className="text-xl font-bold text-slate-300 mt-1">Reactive Welfare</h3>
              <p className="text-xs text-slate-400 mt-1">
                Relies on manual observation or post-incident reporting after burnout has already occurred.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Observation</span>
              <span>→</span>
              <span>Report</span>
              <span>→</span>
              <span className="text-rose-400 font-bold">Late Intervention</span>
            </div>
          </div>

          {/* SURAKSHA (New & Dominant) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-cyan-500/40 p-6 sm:p-7 space-y-4 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  SURAKSHA Modern Framework
                </div>
                <h3 className="text-2xl font-black text-slate-100 mt-1">
                  Predictive & Proactive Support
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-bold font-mono">
                AI + Human Triage
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Detects early velocity changes in personal baselines and operational fatigue before severe burnout occurs, empowering welfare officers to deliver non-punitive support.
            </p>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 grid grid-cols-5 text-center text-xs font-mono">
              <div>
                <div className="text-cyan-400 font-bold">Data</div>
                <div className="text-[10px] text-slate-400">Rosters/Logs</div>
              </div>
              <div className="text-slate-500 font-bold self-center">→</div>
              <div>
                <div className="text-cyan-300 font-bold">Early Signal</div>
                <div className="text-[10px] text-slate-400">Anomalies</div>
              </div>
              <div className="text-slate-500 font-bold self-center">→</div>
              <div>
                <div className="text-emerald-400 font-bold">Support & Recovery</div>
                <div className="text-[10px] text-emerald-300">Human-Led</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOLUTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            From Reactive Welfare to Predictive Prevention.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A defence-grade suite built around voluntary participation, transparent AI explainability, and actionable welfare workflows.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Wellness Check-ins",
              desc: "Voluntary stress, fatigue, sleep and workload assessments completed in under 30 seconds on secure mobile devices.",
              icon: Heart,
              color: "text-emerald-400",
              href: "/personnel/wellness",
            },
            {
              num: "02",
              title: "Predictive Intelligence",
              desc: "AI analyzes organizational and wellness indicators to identify elevated welfare risk before acute exhaustion sets in.",
              icon: Cpu,
              color: "text-cyan-400",
              href: "/how-it-works",
            },
            {
              num: "03",
              title: "Personal Baselines",
              desc: "Detect changes relative to an individual's normal pattern rather than rigid, one-size-fits-all population averages.",
              icon: Activity,
              color: "text-blue-400",
              href: "/personnel/risk",
            },
            {
              num: "04",
              title: "Explainable AI (XAI)",
              desc: "Understand the exact major factors contributing to a risk increase via game-theoretic SHAP decomposition.",
              icon: Layers,
              color: "text-amber-400",
              href: "/how-it-works",
            },
            {
              num: "05",
              title: "Welfare Recommendations",
              desc: "Translate detected risk into appropriate human-led welfare actions such as rest cycles, schedule shifts, or counseling.",
              icon: UserCheck,
              color: "text-teal-400",
              href: "/welfare",
            },
            {
              num: "06",
              title: "Intervention Tracking",
              desc: "Measure trends before and after welfare interventions across 7-day and 30-day follow-up outcome milestones.",
              icon: CheckCircle2,
              color: "text-purple-400",
              href: "/welfare/cases",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.num}
                href={card.href}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {card.num}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Feature</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 9. HOW THE AI WORKS PIPELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Multi-Stage Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            How The AI Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            End-to-end pipeline from privacy-preserving telemetry to explainable factor attribution and human review.
          </p>
        </div>

        <ModelPipelineVisualizer />
      </section>

      {/* 10. RISK INTELLIGENCE & TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Risk Intelligence & Threshold Calibration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Standardized 4-Tier Welfare Risk Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calibrated scoring scale designed to prompt timely welfare support without punitive categorization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Risk Gauge Demo */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 text-center space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Fictional Personnel Welfare Gauge
            </div>
            <RiskGauge
              score={72}
              size="lg"
              showTierBands={true}
              trendText="+18 points / 14 days"
              trendDirection="up"
              fictionalNotice={true}
            />
          </div>

          {/* Right: Contributors Breakdown Example */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Signal Decomposition
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-0.5">
                  Primary Risk Contributors Example
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                Score: 72 / 100
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-400">Duty Load:</span>
                <div className="font-bold text-rose-400 text-sm">High (58 hrs/wk)</div>
                <p className="text-[11px] text-slate-400">Consecutive high-intensity patrols</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-400">Recovery:</span>
                <div className="font-bold text-rose-400 text-sm">Low (4.8h rest avg)</div>
                <p className="text-[11px] text-slate-400">Narrow rest intervals between shifts</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-400">Night Duties:</span>
                <div className="font-bold text-amber-400 text-sm">Elevated (6 consecutive)</div>
                <p className="text-[11px] text-slate-400">Frequent night rotations</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-400">Self-Reported Fatigue:</span>
                <div className="font-bold text-amber-400 text-sm">Elevated (4/5 scale)</div>
                <p className="text-[11px] text-slate-400">Voluntary self-assessment signal</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              * Fictional demonstration: All names and personal identifiers are synthetic hashes.
            </div>
          </div>
        </div>
      </section>

      {/* 11. "WHY DID THE RISK CHANGE?" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyRiskChangedTimeline />
      </section>

      {/* 12. PERSONNEL EXPERIENCE (MOBILE APP SIMULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Personnel Mobile Application
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Your Wellness. Your Data. Your Choice.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Personnel have complete autonomy over their voluntary check-ins, personal resilience tips, and confidential support requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Mobile Interactive Phone */}
          <div className="lg:col-span-6 flex justify-center">
            <MobileAppSimulator />
          </div>

          {/* Right: Key Pillars of Personnel App */}
          <div className="lg:col-span-6 space-y-5">
            {[
              {
                title: "100% Voluntary Check-Ins",
                desc: "Quick 30-second daily logs for stress, fatigue, and sleep with zero disciplinary impact.",
                icon: Heart,
              },
              {
                title: "Private Wellness Feedback",
                desc: "Personalized recovery suggestions and trend tracking visible only to the personnel member.",
                icon: Activity,
              },
              {
                title: "Confidential Welfare Assistance",
                desc: "Direct confidential link to Welfare Officers without notifying commanding officers or unit appraisals.",
                icon: Lock,
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100">{p.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 pl-11 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-2 pl-2">
              <Link
                href="/personnel/wellness"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Launch Interactive Check-in</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 17. PRIVACY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Privacy-First Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Welfare Without Surveillance.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            SURAKSHA adheres strictly to Six Core Privacy Principles guaranteeing that welfare care never degrades into disciplinary monitoring.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIVACY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-cyan-400">
                  Principle {principle.number}
                </span>
                <h3 className="text-base font-bold text-slate-100">{principle.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
              <div className="text-[11px] font-mono text-cyan-300/80 pt-2 border-t border-slate-800/80">
                ✓ {principle.short}
              </div>
            </div>
          ))}
        </div>

        {/* Large Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-teal-950/40 border border-cyan-500/30 text-center space-y-3 shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Fundamental Ethos
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
            "The system is designed to support people — not punish them."
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Zero automated adverse decisions. Strict separation of medical and disciplinary records.
          </p>
        </div>
      </section>

      {/* 18. SECURITY CENTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Zero-Trust Cyber Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Defence-Grade Security Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            End-to-end encrypted telemetry and zero-knowledge data storage.
          </p>
        </div>

        {/* Security Pipeline Flow */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 bg-slate-950/80 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
            {[
              { title: "Encrypted Data", sub: "AES-256-GCM at rest", icon: Lock },
              { title: "Secure API", sub: "mTLS & OAuth2 Token", icon: Zap },
              { title: "Role-Based Access", sub: "Strict RBAC Triage", icon: UserCheck },
              { title: "Audit Layer", sub: "Immutable Event Logs", icon: FileText },
              { title: "Protected Analytics", sub: "Zero-Knowledge Aggregates", icon: ShieldCheck },
            ].map((node, i) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.title}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 flex flex-col items-center justify-center relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-200">{node.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{node.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            {[
              "Authentication",
              "RBAC",
              "Encryption",
              "Audit Logs",
              "Consent Management",
              "Secure Storage",
              "Access Monitoring",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300"
              >
                • {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 19. IMPACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Measurable Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Better Welfare. Stronger Readiness.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Enhancing operational sustainability and personnel longevity across uniformed formations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Early Intervention", desc: "Identify warning signals sooner before acute burnout occurs.", icon: Activity },
            { title: "Personnel Wellbeing", desc: "Support timely, compassionate, and human-led welfare intervention.", icon: Heart },
            { title: "Operational Readiness", desc: "Reduce risks associated with prolonged fatigue and sleep deprivation.", icon: Shield },
            { title: "Workload Intelligence", desc: "Identify organizational pressure points and duty roster imbalances.", icon: BarChart3 },
            { title: "Evidence-Based Welfare", desc: "Support better welfare resource planning with objective longitudinal data.", icon: Layers },
            { title: "Scalable Architecture", desc: "Extend seamlessly from a single battalion to nation-wide multi-force deployments.", icon: Cpu },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{card.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 20. SCALE & EXPANSION ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Expansion Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Built for Uniformed Services. Designed to Scale.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Modular architecture ready to integrate across Central Armed Police Forces and state security agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPANSION_ROADMAP.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400">{item.step}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {item.status}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-100">{item.name}</div>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 21. ABOUT SURAKSHA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 bg-slate-950/80 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                SIH Problem Statement 26186 Alignment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
                About SURAKSHA
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Theme: <span className="text-cyan-300 font-semibold">MedTech / BioTech / HealthTech</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-slate-100 font-semibold">SURAKSHA</strong> (System for Uniformed Resilience, Analytics & Stress Health Assessment) proposes a privacy-first, AI-driven framework for proactive personnel welfare monitoring, early risk identification and human-led intervention.
              </p>
              <p className="text-slate-400">
                Created in response to <strong>SIH Problem Statement 26186</strong> for the <strong>Ministry of Home Affairs</strong>, Department of <strong>Central Reserve Police Force (CRPF) — Police II Division</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-200 uppercase font-mono">
                Project Prototyping Credits
              </div>
              <div className="text-sm font-semibold text-cyan-300">
                Concept & Prototype: <span className="text-slate-100">Ayaan Shakil Hashmi</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with Next.js, TypeScript, Tailwind CSS, Recharts, and XGBoost/SHAP XAI architecture for hackathon demonstration.
              </p>
              <div className="pt-1">
                <Link
                  href="/about"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <span>Read Full Concept Document</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA: Launch Dashboards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <Compass className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-100">
              Experience the Complete Prototype
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Test all four role-based perspectives: Personnel, Welfare Officer, Unit Commander, and System Admin.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/personnel"
              onClick={() => setRole("PERSONNEL")}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Personnel Portal (P-1042)
            </Link>
            <Link
              href="/welfare"
              onClick={() => setRole("WELFARE_OFFICER")}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 transition-all shadow-md shadow-cyan-500/25"
            >
              Welfare Officer Dashboard
            </Link>
            <Link
              href="/commander"
              onClick={() => setRole("COMMANDER")}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Commander Intelligence
            </Link>
            <Link
              href="/admin"
              onClick={() => setRole("ADMIN")}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 transition-all"
            >
              Admin & Security Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
