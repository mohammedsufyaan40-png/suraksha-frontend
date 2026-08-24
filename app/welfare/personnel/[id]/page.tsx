"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import RoleGuard from "@/components/RoleGuard";
import {
  User,
  Activity,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  ArrowLeft,
  HeartHandshake,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Plus,
  Moon,
  AlertTriangle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import RiskGauge from "@/components/Interactive/RiskGauge";
import { getRiskLevel } from "@/lib/utils";

export default function PersonnelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const {
    personnelList,
    setIsInterventionModalOpen,
    setSelectedPersonnelForIntervention,
  } = useApp();

  const personnel =
    personnelList.find((p) => p.id === resolvedParams.id) || personnelList[0];

  const riskLevel = getRiskLevel(personnel.riskScore);

  const handleOpenIntervention = () => {
    setSelectedPersonnelForIntervention(personnel);
    setIsInterventionModalOpen(true);
  };

  return (
    <RoleGuard
      allowedRoles={["WELFARE_OFFICER", "ADMIN"]}
      pageName="Personnel Deep Welfare Profile"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Back Link */}
        <Link
          href="/welfare"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Welfare Triage Queue</span>
        </Link>

        {/* Profile Header Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl">
              {personnel.id.substring(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Pseudonymized Welfare Record
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {personnel.anonymizedHash}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-100 mt-1">
                Personnel {personnel.id}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Unit: <strong className="text-slate-200">{personnel.unit}</strong> • Role:{" "}
                <span className="text-slate-300">{personnel.role}</span> • Last Voluntary Check:{" "}
                <span className="text-cyan-300 font-mono">{personnel.lastCheckIn}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenIntervention}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 transition-all shadow-md shadow-cyan-500/25 flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Create Intervention</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards: Score, Status, Trend */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400">Current Risk Score</span>
            <div className="flex items-baseline gap-1 font-mono">
              <span
                className="text-3xl font-extrabold"
                style={{ color: riskLevel.colorHex }}
              >
                {personnel.riskScore}
              </span>
              <span className="text-xs text-slate-500">/ 100</span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400">
              Evaluated under rolling 30-day baseline
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400">Welfare Status Tier</span>
            <div className="mt-1">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${riskLevel.badgeClass}`}
              >
                {riskLevel.label}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {riskLevel.description}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400">Velocity Trend (14 Days)</span>
            <div className="text-3xl font-extrabold font-mono text-rose-400 flex items-center gap-1.5">
              <TrendingUp className="w-6 h-6 text-rose-400" />
              <span>{personnel.trend}</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Accelerated workload variance detected
            </div>
          </div>
        </div>

        {/* Grid: 30-Day Timeline Graph vs SHAP Risk Contributors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 30-Day Trend Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Longitudinal Telemetry
                  </span>
                  <h3 className="text-lg font-bold text-slate-100">
                    30-Day Welfare Risk & Workload Timeline
                  </h3>
                </div>
                <span className="text-xs font-mono text-rose-400">↑ 21 points</span>
              </div>

              <div className="h-64 w-full p-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={personnel.timeline30Days}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="detailRiskGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
                    <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} tickLine={false} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs space-y-1 shadow-xl">
                              <div className="font-bold text-slate-200">{d.date} ({d.day})</div>
                              <div className="font-mono text-rose-400 font-bold">
                                Risk Score: {d.risk}/100
                              </div>
                              <div className="text-[10px] text-slate-400">
                                Workload Index: {d.workload}% • Fatigue: {d.fatigue}% • Recovery: {d.recovery}%
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="risk"
                      stroke="#f43f5e"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#detailRiskGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* AI Clinical Explanation */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-cyan-500/30 bg-slate-950/80 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-100 text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI Clinical Explanation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personnel.aiExplanation}
              </p>
            </div>
          </div>

          {/* Right: SHAP Contributors & Recommended Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Risk Contributors */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-slate-100">
                  SHAP Risk Contributors
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Additive Values</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {personnel.factors.map((f) => (
                  <div
                    key={f.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-slate-200">{f.name}</div>
                      <div className="text-[10px] text-slate-400">{f.description}</div>
                    </div>
                    <div className="font-mono font-bold text-rose-400 text-sm shrink-0">
                      +{f.impact} pts
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-slate-100">
                  Recommended Actions
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">Actionable</span>
              </div>

              <div className="space-y-2 text-xs">
                {personnel.recommendedActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleOpenIntervention}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Initiate Action Plan / Intervention</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}
