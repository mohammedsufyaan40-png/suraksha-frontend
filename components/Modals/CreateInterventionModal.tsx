"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, ShieldCheck, HeartHandshake, Calendar, User, FileText, CheckCircle2 } from "lucide-react";
import { InterventionRecord } from "@/lib/demoData";

export default function CreateInterventionModal() {
  const {
    isInterventionModalOpen,
    setIsInterventionModalOpen,
    selectedPersonnelForIntervention,
    activePersonnel,
    createIntervention,
  } = useApp();

  const target = selectedPersonnelForIntervention || activePersonnel;

  const [title, setTitle] = useState("Proactive Rest & Duty Cycle Rebalance");
  const [type, setType] = useState<InterventionRecord["type"]>("Workload Review");
  const [assignedOfficer, setAssignedOfficer] = useState("WO-Sharma (CRPF Welfare Div)");
  const [notes, setNotes] = useState(
    "Transition personnel from high-density night patrol to balanced logistics support. Mandate 48-hour compensatory recovery block."
  );

  if (!isInterventionModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createIntervention({
      personnelId: target.id,
      title,
      type,
      assignedOfficer,
      notes,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-xl w-full glass-panel rounded-2xl border border-cyan-500/30 p-6 md:p-8 bg-slate-950/95 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={() => setIsInterventionModalOpen(false)}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Human-in-the-Loop Welfare Protocol
            </div>
            <h3 className="text-lg font-bold text-slate-100">
              Create Welfare Intervention for {target.id}
            </h3>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400">Current Risk Score:</span>
              <div className="font-bold text-rose-400 text-sm mt-0.5">
                {target.riskScore} / 100 (Priority Review)
              </div>
            </div>
            <div>
              <span className="text-slate-400">Primary Risk Factor:</span>
              <div className="font-semibold text-slate-200 text-sm mt-0.5">
                {target.primaryFactor}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Intervention Protocol Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Intervention Category
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as InterventionRecord["type"])}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="Workload Review">Workload Review</option>
                <option value="Recovery Protocol">Recovery Protocol</option>
                <option value="Duty Schedule Adjustment">Duty Schedule Adjustment</option>
                <option value="Confidential Welfare Counselling">Confidential Welfare Counselling</option>
                <option value="Leave Grant Assessment">Leave Grant Assessment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Assigned Welfare Officer
              </label>
              <input
                type="text"
                value={assignedOfficer}
                onChange={(e) => setAssignedOfficer(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Action Plan & Welfare Notes (Non-punitive)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 leading-relaxed"
              required
            />
          </div>

          {/* Follow-up schedule preview */}
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1.5">
            <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Automated Outcome Tracking Milestones</span>
            </div>
            <p className="text-[11px] text-slate-400">
              • <strong>7-Day Follow-up</strong> scheduled automatically for initial fatigue index re-check.<br />
              • <strong>30-Day Follow-up</strong> scheduled for long-term recovery stabilization confirmation.
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsInterventionModalOpen(false)}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm & Initiate Intervention</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
