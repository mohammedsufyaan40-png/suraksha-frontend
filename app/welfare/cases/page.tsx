"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import RoleGuard from "@/components/RoleGuard";
import {
  HeartPulse,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Search,
  Filter,
  Plus,
  ArrowLeft,
  User,
  ShieldCheck,
  TrendingDown,
  Sparkles,
} from "lucide-react";

export default function WelfareCasesPage() {
  const { interventions, setIsInterventionModalOpen, personnelList } = useApp();
  const [filterType, setFilterType] = useState<string>("ALL");

  const filtered = interventions.filter(
    (item) => filterType === "ALL" || item.type === filterType || item.status === filterType
  );

  return (
    <RoleGuard
      allowedRoles={["WELFARE_OFFICER", "ADMIN"]}
      pageName="Welfare Case Management"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Back Link */}
        <Link
          href="/welfare"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Welfare Dashboard</span>
        </Link>

        {/* Header */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                Active Welfare Interventions
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
                {interventions.length} Total Records
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              Human-in-the-Loop Welfare Case Queue
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Structured tracking of rest allocations, workload balancing, and 7-day / 30-day outcomes.
            </p>
          </div>

          <button
            onClick={() => setIsInterventionModalOpen(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Protocol</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setFilterType("ALL")}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterType === "ALL"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            All Protocols ({interventions.length})
          </button>
          <button
            onClick={() => setFilterType("Active")}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterType === "Active"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Active ({interventions.filter((i) => i.status === "Active").length})
          </button>
          <button
            onClick={() => setFilterType("Completed")}
            className={`px-3 py-1.5 rounded-xl border transition-all ${
              filterType === "Completed"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Completed ({interventions.filter((i) => i.status === "Completed").length})
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="glass-panel rounded-3xl p-6 border border-slate-800 bg-slate-950/80 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-400">{c.id}</span>
                    <span className="text-slate-600">•</span>
                    <Link
                      href={`/welfare/personnel/${c.personnelId}`}
                      className="font-mono text-xs text-slate-300 hover:text-cyan-300 hover:underline font-bold"
                    >
                      {c.personnelId}
                    </Link>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono border ${
                      c.status === "Active"
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100">{c.title}</h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Category: <strong className="text-slate-300">{c.type}</strong> • Officer:{" "}
                    <span className="text-cyan-300">{c.assignedOfficer}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  {c.notes}
                </p>
              </div>

              {/* Progress Milestones: 82 -> 68 -> 51 -> 39 */}
              <div className="space-y-2 pt-2 border-t border-slate-900 text-xs">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-400">Recorded Risk Trajectory:</span>
                  <span className="text-emerald-400 font-semibold">
                    {c.initialRisk} → {c.currentRisk} points
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/30 space-y-1">
                  <div className="text-cyan-300 text-[11px] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Follow-up Tracking Schedule</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 pt-1">
                    <div>7-Day Check: <strong className="text-slate-200">{c.followUp7Day.scheduledDate}</strong> ({c.followUp7Day.status})</div>
                    <div>30-Day Check: <strong className="text-slate-200">{c.followUp30Day.scheduledDate}</strong> ({c.followUp30Day.status})</div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 italic">
                  "{c.wording}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RoleGuard>
  );
}
