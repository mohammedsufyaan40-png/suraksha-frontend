"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, FileSpreadsheet, Download, CheckCircle, ShieldCheck, Printer } from "lucide-react";

export default function ExportReportModal() {
  const { isExportModalOpen, setIsExportModalOpen, addToast, unitStats } = useApp();
  const [format, setFormat] = useState<"PDF" | "CSV" | "JSON">("PDF");
  const [includeAuditLog, setIncludeAuditLog] = useState(true);
  const [anonymizeAll, setAnonymizeAll] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  if (!isExportModalOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setIsExportModalOpen(false);
      addToast({
        type: "success",
        title: "Report Generated Successfully",
        message: `Anonymized SURAKSHA ${format} welfare assessment export has been compiled.`,
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-md w-full glass-panel rounded-2xl border border-cyan-500/30 p-6 md:p-7 bg-slate-950/95 shadow-2xl relative">
        <button
          onClick={() => setIsExportModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Compliance & Analytics Export
            </div>
            <h3 className="text-base font-bold text-slate-100">
              Export Welfare Intelligence Report
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Export Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["PDF", "CSV", "JSON"] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setFormat(fmt)}
                  className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                    format === fmt
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm shadow-cyan-500/20"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {fmt} Document
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={anonymizeAll}
                onChange={(e) => setAnonymizeAll(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-0"
              />
              <span>Enforce Full Pseudonymization (Hash all PII identifiers)</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeAuditLog}
                onChange={(e) => setIncludeAuditLog(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-0"
              />
              <span>Attach Cryptographic Zero-Knowledge Audit Stamp</span>
            </label>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="text-slate-300 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Report Scope:</span>
            </div>
            <div>• Total Personnel Evaluated: 1,248 (42nd Battalion)</div>
            <div>• Triage Summary: 72% Stable, 18% Support Recommended, 4% Priority Review</div>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsExportModalOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleExport}
              disabled={isExporting}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-1.5"
            >
              {isExporting ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 animate-spin" />
                  <span>Compiling...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Report ({format})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
