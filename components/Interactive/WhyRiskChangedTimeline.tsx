"use client";

import React, { useState } from "react";
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
  ReferenceLine,
} from "recharts";
import {
  Clock,
  TrendingUp,
  AlertTriangle,
  Moon,
  Activity,
  Calendar,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";

export default function WhyRiskChangedTimeline() {
  const [selectedWeek, setSelectedWeek] = useState<number>(5);

  const timelineData = [
    { week: "Week 1", score: 34, status: "Watch", note: "Baseline operational tempo" },
    { week: "Week 2", score: 39, status: "Watch", note: "Slight increase in shift overtime" },
    { week: "Week 3", score: 47, status: "Watch", note: "3 consecutive night patrols initiated" },
    { week: "Week 4", score: 58, status: "Support Recommended", note: "Recovery window narrowed to 5.2h" },
    { week: "Week 5", score: 72, status: "Priority Review", note: "Peak cumulative operational strain" },
  ];

  const shapContributors = [
    { name: "Duty Workload", points: 18, sign: "+", category: "Operational", color: "#f43f5e", icon: Activity },
    { name: "Reduced Recovery", points: 14, sign: "+", category: "Rest Cycle", color: "#fb7185", icon: Clock },
    { name: "Night-duty Frequency", points: 11, sign: "+", category: "Shift Timing", color: "#f59e0b", icon: Moon },
    { name: "Fatigue Indicators", points: 9, sign: "+", category: "Subjective", color: "#06b6d4", icon: Sparkles },
    { name: "Leave Pattern", points: 5, sign: "+", category: "Deployment", color: "#38bdf8", icon: Calendar },
  ];

  const totalIncrease = 38; // 72 - 34

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/25 bg-slate-950/80 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Top Banner & Heading */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Layers className="w-4 h-4" />
            <span>SHAP Explainability & Longitudinal Decomposition</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
            Why Did The Risk Change?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            <strong className="text-slate-200">SURAKSHA does not simply generate a score.</strong> It identifies the underlying operational and physiological factors associated with changing welfare risk.
          </p>
        </div>

        {/* Big Change Pill */}
        <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 shrink-0 text-left md:text-right">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
            5-Week Risk Velocity
          </div>
          <div className="text-2xl font-black font-mono text-rose-400 flex items-center md:justify-end gap-1.5 mt-0.5">
            <TrendingUp className="w-6 h-6 text-rose-400" />
            <span>Risk increased by +{totalIncrease} points</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Baseline: <strong className="text-slate-300">34</strong> → Current: <strong className="text-rose-300">72 / 100</strong>
          </div>
        </div>
      </div>

      {/* Grid: 5-Week Trend Graph vs SHAP Factor Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 5-Week Interactive Graph (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Fictional Personnel Timeline (5-Week Progression)
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">
              Click a week to inspect
            </span>
          </div>

          <div className="h-64 w-full p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="riskTimelineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="week"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: "#334155" }}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={11}
                  domain={[0, 100]}
                  tickLine={false}
                  axisLine={{ stroke: "#334155" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-xl space-y-1">
                          <div className="font-bold text-slate-100">{data.week}</div>
                          <div className="font-mono text-rose-400 font-bold">
                            Score: {data.score} / 100
                          </div>
                          <div className="text-[10px] text-slate-400">{data.status}</div>
                          <div className="text-[10px] text-cyan-300 italic">{data.note}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine y={50} stroke="#f59e0b" strokeDasharray="3 3" />
                <ReferenceLine y={70} stroke="#f43f5e" strokeDasharray="3 3" />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#f43f5e"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#riskTimelineGrad)"
                  dot={{ r: 5, fill: "#f43f5e", strokeWidth: 2, stroke: "#0f172a" }}
                  activeDot={{ r: 8, fill: "#38bdf8" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Interactive Week Pills */}
          <div className="grid grid-cols-5 gap-2">
            {timelineData.map((item, idx) => {
              const wkNum = idx + 1;
              const isSelected = selectedWeek === wkNum;
              return (
                <button
                  key={item.week}
                  onClick={() => setSelectedWeek(wkNum)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? "bg-cyan-500/20 border-cyan-400 text-slate-100 shadow-md shadow-cyan-500/20 scale-[1.02]"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="text-[10px] font-mono font-medium">{item.week}</div>
                  <div className="text-base font-extrabold font-mono text-rose-400">
                    {item.score}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate">{item.status}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: SHAP Granular Factor Breakdown (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Primary Risk Contributors
            </span>
            <span className="text-[10px] font-mono text-rose-400 font-semibold">
              Sum: +{totalIncrease} pts
            </span>
          </div>

          <div className="space-y-2.5">
            {shapContributors.map((c) => {
              const Icon = c.icon;
              const barWidthPercent = (c.points / 18) * 100;
              return (
                <div
                  key={c.name}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-slate-950 font-bold"
                        style={{ backgroundColor: c.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-200">{c.name}</span>
                        <span className="text-[10px] text-slate-400 block">{c.category}</span>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-rose-400 text-sm">
                      +{c.points} pts
                    </div>
                  </div>

                  {/* Progress Bar representation */}
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${barWidthPercent}%`,
                        backgroundColor: c.color,
                        boxShadow: `0 0 8px ${c.color}66`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Non-punitive notice */}
          <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-[11px] text-cyan-300/90 leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
            <span>
              By identifying that <strong>Duty Workload (+18)</strong> and <strong>Reduced Recovery (+14)</strong> are the driving factors, welfare officers can adjust operational scheduling without any punitive or stigmatizing actions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
