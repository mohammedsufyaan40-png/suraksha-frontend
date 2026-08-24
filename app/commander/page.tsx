"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import RoleGuard from "@/components/RoleGuard";
import {
  Award,
  Shield,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Moon,
  Clock,
  Sparkles,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  Layers,
  Info,
  Building,
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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

export default function CommanderDashboardPage() {
  const { unitStats, setIsExportModalOpen } = useApp();

  return (
    <RoleGuard
      allowedRoles={["COMMANDER", "ADMIN"]}
      pageName="Unit Commander Intelligence Dashboard"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Header Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
                Command Staff Operational Welfare Portal
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-[10px] font-mono text-blue-300">
                Cmdr-Verma HQ
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              Unit Welfare Intelligence
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Formation: <strong className="text-slate-200">{unitStats.unitName}</strong> • Aggregate Battalion Scope
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Export Executive Brief</span>
            </button>
          </div>
        </div>

        {/* 5 Top Statistics from Spec (Section 15) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400">Overall Unit Risk</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">
              48 <span className="text-xs text-slate-500 font-normal">/ 100</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Moderate Baseline</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-1">
            <span className="text-xs text-slate-400">Workload Pressure</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
              +12%
            </div>
            <span className="text-[10px] text-amber-400 font-mono">Past 14 Days</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-rose-500/30 space-y-1">
            <span className="text-xs text-slate-400">Fatigue Trend</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">
              +8%
            </div>
            <span className="text-[10px] text-rose-400 font-mono">Night Shift Density</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-blue-500/30 space-y-1">
            <span className="text-xs text-slate-400">Night Duty Load</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-blue-400">
              14%
            </div>
            <span className="text-[10px] text-blue-400 font-mono">Battalion Rotation</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/30 space-y-1 col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-400">Extended Deployment</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-purple-400">
              18%
            </div>
            <span className="text-[10px] text-purple-400 font-mono">&gt; 6 Mos Forward</span>
          </div>
        </div>

        {/* AI Insight & Strategic Recommendation Banner (Section 15) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-blue-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/30 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>AI Strategic Command Insight</span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
            "{unitStats.aiInsight}"
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-100">Command Recommendation: </span>
              {unitStats.commanderRecommendation}
            </div>
          </div>
        </div>

        {/* 5 Aggregate Charts Grid (Section 15) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chart 1: Unit Welfare Trend (6 Cols) */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">1. Unit Welfare Trend (8 Months)</h3>
              <span className="text-xs font-mono text-cyan-400">Aggregate</span>
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={unitStats.welfareTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", fontSize: "12px" }} />
                  <Area type="monotone" dataKey="risk" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Workload Distribution (6 Cols) */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">2. Workload Distribution</h3>
              <span className="text-xs font-mono text-amber-400">Hours / Wk</span>
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={unitStats.workloadDistribution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="range" stroke="#64748b" fontSize={9} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", fontSize: "12px" }} />
                  <Bar dataKey="percentage" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 3: Fatigue Trend Weekly (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">3. Fatigue Trend</h3>
              <span className="text-xs font-mono text-rose-400">Weekly</span>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={unitStats.fatigueTrendWeekly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="week" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} domain={[0, 60]} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", fontSize: "12px" }} />
                  <Line type="monotone" dataKey="avgFatigue" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 4: Deployment Pressure (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">4. Deployment Pressure</h3>
              <span className="text-xs font-mono text-purple-400">Companies</span>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={unitStats.deploymentPressure} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <XAxis type="number" stroke="#64748b" fontSize={10} domain={[0, 10]} />
                  <YAxis dataKey="battalion" type="category" stroke="#64748b" fontSize={9} width={80} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", fontSize: "12px" }} />
                  <Bar dataKey="deployedMonths" fill="#a855f7" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 5: Leave Utilization (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100">5. Leave Utilization</h3>
              <span className="text-xs font-mono text-emerald-400">Rest Allocation</span>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={unitStats.leaveUtilization} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="category" stroke="#64748b" fontSize={9} />
                  <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", fontSize: "12px" }} />
                  <Bar dataKey="utilized" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Strict Privacy Compliance Disclaimer from Section 15 */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Privacy Safeguard Notice: </strong>
            The Commander dashboard does NOT expose unnecessary individual psychological or wellness details. All metrics are aggregated to provide organizational decision intelligence while protecting personnel anonymity.
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}
