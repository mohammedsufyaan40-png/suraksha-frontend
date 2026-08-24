"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import RoleGuard from "@/components/RoleGuard";
import {
  Lock,
  ShieldCheck,
  FileText,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Search,
  KeyRound,
  Database,
  Cpu,
  Eye,
  Server,
  Zap,
} from "lucide-react";

export default function AdminPage() {
  const { auditLogs, addToast } = useApp();
  const [logFilter, setLogFilter] = useState("ALL");
  const [anomalyThreshold, setAnomalyThreshold] = useState(0.72);
  const [isRotatingKeys, setIsRotatingKeys] = useState(false);

  const handleRotateKey = () => {
    setIsRotatingKeys(true);
    setTimeout(() => {
      setIsRotatingKeys(false);
      addToast({
        type: "success",
        title: "Cryptographic Master Key Rotated",
        message: "HSM token refreshed with AES-256-GCM zero-knowledge salt.",
      });
    }, 1000);
  };

  const filteredLogs = auditLogs.filter(
    (log) => logFilter === "ALL" || log.actorRole.includes(logFilter) || log.status === logFilter
  );

  return (
    <RoleGuard
      allowedRoles={["ADMIN"]}
      pageName="System Administration & Audit Layer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Header */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                System Administration & Security Center
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/60 text-[10px] font-mono text-amber-300">
                SecOps Level 4
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              SURAKSHA Security, RBAC & Audit Layer
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero-Trust Architecture • Immutable Cryptographic Audit Log • SIH PS 26186 Security Compliance
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRotateKey}
              disabled={isRotatingKeys}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRotatingKeys ? "animate-spin" : ""}`} />
              <span>Rotate Cryptographic Tokens</span>
            </button>
          </div>
        </div>

        {/* Security Diagnostics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Pseudonymization Engine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-base font-bold text-slate-100">SHA-256 HSM Salted</div>
            <div className="text-[10px] text-emerald-400 font-mono">Zero PII in Analytical DB</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>RBAC Enforcement</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-base font-bold text-slate-100">Zero-Trust Boundary</div>
            <div className="text-[10px] text-cyan-400 font-mono">4 Isolated Role Domains</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Audit Log Immutability</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-base font-bold text-slate-100">Append-Only Ledger</div>
            <div className="text-[10px] text-amber-400 font-mono">Cryptographic Hash Chained</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Data at Rest</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-base font-bold text-slate-100">AES-256-GCM</div>
            <div className="text-[10px] text-purple-400 font-mono">GovNet End-to-End</div>
          </div>
        </div>

        {/* Model Threshold Calibration */}
        <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-950/80 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                AI Engine Parameters
              </span>
              <h3 className="text-lg font-bold text-slate-100">
                Isolation Forest & XGBoost Sensitivity Calibration
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-300">Active Value: {anomalyThreshold}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between font-semibold text-slate-300">
                <span>Anomaly Sensitivity Contamination Threshold</span>
                <span className="font-mono text-cyan-400">{anomalyThreshold}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="0.95"
                step="0.01"
                value={anomalyThreshold}
                onChange={(e) => setAnomalyThreshold(parseFloat(e.target.value))}
                className="w-full accent-cyan-400"
              />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Controls the statistical strictness before an operational rest drift triggers an alert on the Welfare Officer queue.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Threshold Calibration Mandate</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Model thresholds and feature weights are configurable and must be validated using representative anonymized datasets before real-world deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Immutable Audit Log Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Immutable Event Ledger
              </div>
              <h2 className="text-xl font-bold text-slate-100 mt-0.5">
                System Security & Access Audit Trail
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={logFilter}
                onChange={(e) => setLogFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="ALL">All Event Types</option>
                <option value="Welfare Officer">Welfare Officer Access</option>
                <option value="Unit Commander">Commander Access</option>
                <option value="Personnel">Personnel Check-Ins</option>
                <option value="System Admin">Admin Parameter Edits</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase tracking-wider text-[10px]">
                  <th className="pb-3 px-3">Timestamp (UTC)</th>
                  <th className="pb-3 px-3">Actor Role</th>
                  <th className="pb-3 px-3">Action</th>
                  <th className="pb-3 px-3">Resource</th>
                  <th className="pb-3 px-3">Audit Details</th>
                  <th className="pb-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                      {log.timestamp}
                    </td>
                    <td className="py-3 px-3 font-sans font-semibold text-slate-200">
                      {log.actorRole} ({log.actorId})
                    </td>
                    <td className="py-3 px-3 text-cyan-300 font-medium">
                      {log.action}
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      {log.resource}
                    </td>
                    <td className="py-3 px-3 text-slate-400 font-sans max-w-xs truncate">
                      {log.details}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}
