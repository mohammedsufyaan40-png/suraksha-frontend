"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle, Info, AlertTriangle, AlertOctagon, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />,
          info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />,
          warning: <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />,
          error: <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />,
        };

        const borders = {
          success: "border-emerald-500/40 bg-slate-900/95 text-slate-100",
          info: "border-cyan-500/40 bg-slate-900/95 text-slate-100",
          warning: "border-amber-500/40 bg-slate-900/95 text-slate-100",
          error: "border-rose-500/40 bg-slate-900/95 text-slate-100",
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-xl p-3.5 border shadow-2xl backdrop-blur-md flex items-start gap-3 transition-all animate-in slide-in-from-right-4 duration-200 ${borders[toast.type]}`}
          >
            {icons[toast.type]}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold">{toast.title}</span>
                <span className="text-[10px] text-slate-400">{toast.timestamp}</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
