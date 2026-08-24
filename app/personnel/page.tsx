"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  User,
  Heart,
  Activity,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Moon,
  BatteryCharging,
  Calendar,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import RiskGauge from "@/components/Interactive/RiskGauge";

export default function PersonnelPortalPage() {
  const { activePersonnel, setIsSupportModalOpen } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg">
            {activePersonnel.id.substring(0, 3)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                Personnel Portal • Anonymized Token
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
                {activePersonnel.id}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              Welcome back, Personnel {activePersonnel.id}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Unit: {activePersonnel.unit} • Role: {activePersonnel.role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/personnel/wellness"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
          >
            <Heart className="w-4 h-4" />
            <span>Daily Check-In</span>
          </Link>
          <button
            onClick={() => setIsSupportModalOpen(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Confidential Support</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Status Gauges & 30-Day Personal Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Current Welfare Status (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-6 text-center">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Welfare Risk Index
              </span>
              <span className="text-[10px] font-mono text-cyan-400">
                Last: {activePersonnel.lastCheckIn}
              </span>
            </div>

            <RiskGauge
              score={activePersonnel.riskScore}
              size="lg"
              showTierBands={true}
              trendText={activePersonnel.trend}
              trendDirection={activePersonnel.trendDirection}
              fictionalNotice={true}
            />

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-2 text-xs">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Personal AI Insight:</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {activePersonnel.aiExplanation}
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400">Avg Sleep (7d)</span>
              <div className="text-xl font-bold font-mono text-slate-100">
                {activePersonnel.sleepAvgHours} hrs
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Rest Interval Nominal</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-slate-400">Duty Days Active</span>
              <div className="text-xl font-bold font-mono text-slate-100">
                {activePersonnel.dutyDaysActive} days
              </div>
              <span className="text-[10px] text-cyan-400 font-mono">Rotation Cycle 04</span>
            </div>
          </div>
        </div>

        {/* Right: 30-Day Trend Chart & Proactive Recommendations (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Chart Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Longitudinal Telemetry
                </span>
                <h3 className="text-lg font-bold text-slate-100">
                  Your 30-Day Welfare & Fatigue Trend
                </h3>
              </div>
              <Link
                href="/personnel/risk"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <span>Factor Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="h-64 w-full p-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={activePersonnel.timeline30Days}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="personnelRiskGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
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
                            <div className="font-bold text-slate-200">{d.date}</div>
                            <div className="font-mono text-cyan-400 font-bold">
                              Welfare Risk: {d.risk} / 100
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Workload: {d.workload}% • Recovery: {d.recovery}%
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
                    stroke="#06b6d4"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#personnelRiskGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommended Proactive Welfare Actions */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-4">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm">
              <BatteryCharging className="w-4 h-4 text-emerald-400" />
              <span>Recommended Proactive Self-Care</span>
            </div>

            <div className="space-y-2 text-xs">
              {activePersonnel.recommendedActions.map((action, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2 text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
