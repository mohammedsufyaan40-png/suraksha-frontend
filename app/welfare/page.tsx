"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import RoleGuard from "@/components/RoleGuard";
import {
  Users,
  HeartPulse,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  ArrowRight,
  Download,
  Plus,
  ShieldCheck,
  Activity,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { getRiskLevel } from "@/lib/utils";
import { PersonnelRecord } from "@/lib/demoData";

export default function WelfareDashboardPage() {
  const router = useRouter();
  const {
    personnelList,
    unitStats,
    setIsInterventionModalOpen,
    setSelectedPersonnelForIntervention,
    setIsExportModalOpen,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Donut chart data for 1,248 personnel
  const riskDistributionData = [
    { name: "Stable (0-29)", value: 72, color: "#10b981" },
    { name: "Watch (30-49)", value: 6, color: "#06b6d4" },
    { name: "Support Rec. (50-69)", value: 18, color: "#f59e0b" },
    { name: "Priority Review (70-100)", value: 4, color: "#f43f5e" },
  ];

  const filteredPersonnel = personnelList.filter((p) => {
    const matchesSearch =
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.primaryFactor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.unit.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateIntervention = (p: PersonnelRecord) => {
    setSelectedPersonnelForIntervention(p);
    setIsInterventionModalOpen(true);
  };

  return (
    <RoleGuard
      allowedRoles={["WELFARE_OFFICER", "ADMIN"]}
      pageName="Welfare Officer Intelligence Dashboard"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Header Bar */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                CRPF Welfare Officer Portal • Station HQ
              </span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-[10px] font-mono text-cyan-300">
                WO-Sharma Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              Battalion Welfare Intelligence & Triage Queue
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Unit: {unitStats.unitName} • Total Monitored Personnel:{" "}
              <strong className="text-slate-200">1,248</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Triage Report</span>
            </button>
            <Link
              href="/welfare/cases"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <HeartPulse className="w-4 h-4" />
              <span>Active Case Workflow</span>
            </Link>
          </div>
        </div>

        {/* 5 Top Statistics from Spec (Section 13) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400">Total Personnel</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-slate-100">
              1,248
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">Full Battalion Roster</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 space-y-1">
            <span className="text-xs text-slate-400">Stable</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
              72%
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">898 Personnel</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-1">
            <span className="text-xs text-slate-400">Support Recommended</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
              18%
            </div>
            <span className="text-[10px] text-amber-400 font-mono">225 Personnel</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-rose-500/30 space-y-1">
            <span className="text-xs text-slate-400">Priority Review</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">
              4%
            </div>
            <span className="text-[10px] text-rose-400 font-mono">50 Personnel (Triage)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-teal-500/30 space-y-1 col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-400">Improving</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-teal-400">
              11%
            </div>
            <span className="text-[10px] text-teal-400 font-mono">Post-Intervention</span>
          </div>
        </div>

        {/* Charts: Risk Distribution Donut & Welfare Risk Trend Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Risk Distribution Donut (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Triage Composition
                </span>
                <h3 className="text-lg font-bold text-slate-100">Risk Distribution</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">1,248 Total</span>
            </div>

            <div className="h-56 w-full relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {riskDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs shadow-xl">
                            <span className="font-semibold text-slate-200">{d.name}</span>:{" "}
                            <strong className="text-cyan-400 font-mono">{d.value}%</strong>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black font-mono text-slate-100">72%</span>
                <span className="text-[10px] text-emerald-400 font-mono uppercase">Stable</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-900">
              {riskDistributionData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-300 truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Welfare Risk Trend Line (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Longitudinal Index
                </span>
                <h3 className="text-lg font-bold text-slate-100">
                  Battalion Welfare Risk Trend (8 Months)
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-300">Avg Risk: 48/100</span>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={unitStats.welfareTrend}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="unitTrendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} domain={[0, 100]} tickLine={false} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs space-y-1 shadow-xl">
                            <div className="font-bold text-slate-200">{d.month} 2026</div>
                            <div className="font-mono text-cyan-400">Unit Risk: {d.risk}/100</div>
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
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#unitTrendGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Overall Unit Health Trend: <strong>Stable with localized night shift variances</strong></span>
              <span className="text-cyan-400 font-mono text-[11px]">8-Month Horizon</span>
            </div>
          </div>
        </div>

        {/* Priority Cases Table Section (Section 13 & 14) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Anonymized Welfare Triage Queue
              </div>
              <h2 className="text-xl font-bold text-slate-100 mt-0.5">Priority Cases</h2>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search ID, factor, or unit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 w-48 sm:w-60"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="ALL">All Tiers</option>
                <option value="PRIORITY_WELFARE_REVIEW">Priority Review</option>
                <option value="SUPPORT_RECOMMENDED">Support Recommended</option>
                <option value="WATCH">Watch</option>
                <option value="STABLE">Stable</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase tracking-wider text-[10px]">
                  <th className="pb-3 px-3">Personnel ID</th>
                  <th className="pb-3 px-3">Risk Score</th>
                  <th className="pb-3 px-3">Trend</th>
                  <th className="pb-3 px-3">Primary Factor</th>
                  <th className="pb-3 px-3">Status</th>
                  <th className="pb-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredPersonnel.map((p) => {
                  const riskLevel = getRiskLevel(p.riskScore);
                  return (
                    <tr
                      key={p.id}
                      className="hover:bg-slate-900/50 transition-colors group"
                    >
                      {/* ID */}
                      <td className="py-4 px-3 font-mono font-bold text-slate-200">
                        <Link
                          href={`/welfare/personnel/${p.id}`}
                          className="text-cyan-400 hover:underline flex items-center gap-1.5"
                        >
                          <span>{p.id}</span>
                          <span className="text-[10px] text-slate-500 group-hover:text-cyan-300">
                            →
                          </span>
                        </Link>
                        <div className="text-[10px] text-slate-500 font-normal">{p.unit}</div>
                      </td>

                      {/* Score */}
                      <td className="py-4 px-3">
                        <div className="flex items-baseline gap-1 font-mono">
                          <span
                            className="text-base font-extrabold"
                            style={{ color: riskLevel.colorHex }}
                          >
                            {p.riskScore}
                          </span>
                          <span className="text-[10px] text-slate-500">/100</span>
                        </div>
                      </td>

                      {/* Trend */}
                      <td className="py-4 px-3 font-mono text-slate-300">
                        <div className="flex items-center gap-1">
                          {p.trendDirection === "up" ? (
                            <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                          ) : p.trendDirection === "down" ? (
                            <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                          ) : null}
                          <span>{p.trend}</span>
                        </div>
                      </td>

                      {/* Primary Factor */}
                      <td className="py-4 px-3 text-slate-300 font-medium">
                        {p.primaryFactor}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${riskLevel.badgeClass}`}
                        >
                          {riskLevel.label}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/welfare/personnel/${p.id}`}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 text-xs transition-colors"
                          >
                            Detail View
                          </Link>
                          <button
                            onClick={() => handleCreateIntervention(p)}
                            className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-semibold transition-colors flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Intervene</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="text-[11px] text-slate-400 text-center italic pt-2">
            * All records use synthetic pseudonymized identifiers (P-1042, P-2187, P-3021) in compliance with CRPF Privacy Charter.
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}
