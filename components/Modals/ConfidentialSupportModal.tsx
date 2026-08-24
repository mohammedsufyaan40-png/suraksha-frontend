"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, ShieldCheck, HeartHandshake, Lock, Send, CheckCircle2 } from "lucide-react";

export default function ConfidentialSupportModal() {
  const { isSupportModalOpen, setIsSupportModalOpen, activePersonnel, addToast } = useApp();
  const [topic, setTopic] = useState("Sleep & Duty Fatigue");
  const [method, setMethod] = useState("Confidential Chat with Welfare Officer");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isSupportModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      addToast({
        type: "success",
        title: "Confidential Request Dispatched",
        message: "A dedicated Welfare Officer will reach out confidentially within 4 hours.",
      });
      setIsSupportModalOpen(false);
      setIsSubmitted(false);
      setMessage("");
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="max-w-md w-full glass-panel rounded-2xl border border-emerald-500/30 p-6 md:p-7 bg-slate-950/95 shadow-2xl relative">
        <button
          onClick={() => setIsSupportModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Zero-Retaliation Safe Channel
            </div>
            <h3 className="text-base font-bold text-slate-100">
              Request Confidential Welfare Assistance
            </h3>
          </div>
        </div>

        <div className="rounded-xl bg-emerald-950/20 border border-emerald-800/30 p-3 text-xs text-slate-300 space-y-1 mb-4">
          <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Privacy Guarantee</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            This request is routed directly to the Welfare Officer. It is completely decoupled from disciplinary records, commanding officer appraisals, and duty evaluation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Area of Support
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-emerald-400"
            >
              <option value="Sleep & Duty Fatigue">Sleep & Duty Fatigue</option>
              <option value="Family Separation & Leave Relief">Family Separation & Leave Relief</option>
              <option value="Operational Stress Management">Operational Stress Management</option>
              <option value="Physical Recovery & Rest Block">Physical Recovery & Rest Block</option>
              <option value="General Confidential Counseling">General Confidential Counseling</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Preferred Contact Method
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-emerald-400"
            >
              <option value="Confidential Chat with Welfare Officer">Encrypted Chat via Portal</option>
              <option value="One-on-One Private In-Person Check">Private In-Person Meeting</option>
              <option value="Scheduled Phone Callback">Encrypted Voice Callback</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Optional Message / Details
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="E.g., Feeling fatigued after consecutive night shifts, requesting rest guidance..."
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-emerald-400 placeholder:text-slate-600"
            />
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsSupportModalOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitted}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Request Privately</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
