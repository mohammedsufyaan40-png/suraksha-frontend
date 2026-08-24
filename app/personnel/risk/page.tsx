"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Activity,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  BatteryCharging,
  Moon,
  Clock,
  ArrowLeft,
  Sparkles,
  Info,
  Calendar,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import RiskGauge from "@/components/Interactive/RiskGauge";

export default function PersonnelRiskPage() {
  const { activePersonnel } = useApp();

  const radarData = [
    { subject: "Workload", value: activePersonnel.workloadIndex, fullMark: 100 },
    { subject: "Fatigue", value: activePersonnel.fatigueScore, fullMark: 100 },
    { subject: "Recovery", value: activePersonnel.recoveryIndex, fullMark: 100 },
    { subject: "Sleep Rest", value: Math.min(100, Math.round(activePersonnel.sleepAvgHours * 13)), fullMark: 100 },
    { subject: "Shift Stability", value: Math.max(20, 100 - activePersonnel.consecutiveNightShifts * 12), fullMark: 100 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Link */}
      <Link
        href="/personnel"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Personnel Portal</span>
      </Link>

      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Activity className="w-3.5 h-3.5" />
          <span>Personal Baseline Explorer</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100">
          Your Personal Welfare Baselines & Risk Indicators
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Transparent view of how your operational rest cycles, shift hours, and voluntary check-in signals inform your welfare indicators.
        </p>
      </div>

      {/* Grid: Risk Gauge vs Radar Multi-Factor Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Current Score (5 Cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-6 text-center flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Current Risk Evaluation
            </span>
            <RiskGauge
              score={activePersonnel.riskScore}
              size="lg"
              showTierBands={true}
              trendText={activePersonnel.trend}
              trendDirection={activePersonnel.trendDirection}
            />
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-1.5 text-xs">
            <div className="font-semibold text-slate-200">How to interpret this:</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              This score indicates whether your recent recovery time is keeping pace with operational demands. It is <strong>non-punitive</strong> and used solely to recommend rest cycles.
            </p>
          </div>
        </div>

        {/* Right: Radar Multi-Factor Equilibrium (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Multi-Dimensional Biometric & Operational Radar
              </span>
              <h3 className="text-lg font-bold text-slate-100">
                Personal Resilience Balance
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">P-1042 Baseline</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
                <PolarRadiusAxis stroke="#475569" angle={30} domain={[0, 100]} />
                <Radar
                  name="Current Level"
                  dataKey="value"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 text-[10px]">Recovery Index</span>
              <div className="font-bold text-emerald-400 font-mono mt-0.5">
                {activePersonnel.recoveryIndex}%
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 text-[10px]">Fatigue Marker</span>
              <div className="font-bold text-amber-400 font-mono mt-0.5">
                {activePersonnel.fatigueScore}%
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 text-[10px]">Night Shifts</span>
              <div className="font-bold text-cyan-400 font-mono mt-0.5">
                {activePersonnel.consecutiveNightShifts} consecutive
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Factor Breakdown List */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 space-y-4">
        <h3 className="text-lg font-bold text-slate-100">
          Granular Factors Contributing to Current Welfare Risk
        </h3>

        <div className="space-y-3 text-xs">
          {activePersonnel.factors.map((f) => (
            <div
              key={f.name}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4"
            >
              <div className="space-y-0.5">
                <div className="font-bold text-slate-200 text-sm">{f.name}</div>
                <p className="text-slate-400">{f.description}</p>
              </div>
              <div className="font-mono text-sm font-bold text-rose-400 shrink-0">
                +{f.impact} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
