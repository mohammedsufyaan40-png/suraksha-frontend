"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Heart,
  Moon,
  BatteryCharging,
  Activity,
  Send,
  Lock,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function WellnessCheckInPage() {
  const router = useRouter();
  const { submitCheckIn, activePersonnel } = useApp();

  const [stress, setStress] = useState<number>(2);
  const [fatigue, setFatigue] = useState<number>(3);
  const [sleep, setSleep] = useState<number>(4);
  const [workload, setWorkload] = useState<number>(3);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      submitCheckIn({
        stress,
        fatigue,
        sleep,
        workload,
        notes,
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#06b6d4", "#10b981", "#38bdf8"],
      });

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <Link
        href="/personnel"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Personnel Portal</span>
      </Link>

      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Voluntary & Encrypted Check-In</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100">
          Daily Operational Wellness Log
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Takes under 30 seconds. Your responses are encrypted and processed as anonymous signals to update personal baseline trends.
        </p>
      </div>

      {/* Submitted Confirmation State */}
      {submitted ? (
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-emerald-500/30 bg-slate-950/90 text-center space-y-5 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-100">
              Check-In Recorded Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Your recovery and stress indices have been updated in your private personal baseline profile.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto space-y-1">
            <div className="font-semibold text-emerald-400">Personal Recommendation:</div>
            <p className="text-[11px] text-slate-400">
              "Maintain current hydration and aim for 7+ hours rest window before tomorrow's morning muster."
            </p>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => router.push("/personnel")}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
            >
              Return to Personnel Dashboard
            </button>
          </div>
        </div>
      ) : (
        /* Interactive Assessment Form */
        <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/90 space-y-6">
          {/* 1. Stress Rating */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>1. Perceived Operational Stress</span>
              </div>
              <span className="font-mono text-xs font-bold text-cyan-400">
                Level {stress} / 5
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[
                { val: 1, label: "Very Low" },
                { val: 2, label: "Low" },
                { val: 3, label: "Moderate" },
                { val: 4, label: "High" },
                { val: 5, label: "Very High" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.val}
                  onClick={() => setStress(s.val)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center gap-0.5 ${
                    stress === s.val
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="font-mono font-bold">{s.val}</span>
                  <span className="text-[9px] opacity-75">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Fatigue Rating */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <BatteryCharging className="w-4 h-4 text-amber-400" />
                <span>2. Physical & Mental Fatigue</span>
              </div>
              <span className="font-mono text-xs font-bold text-amber-400">
                Level {fatigue} / 5
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[
                { val: 1, label: "Fully Energized" },
                { val: 2, label: "Light Fatigue" },
                { val: 3, label: "Moderate" },
                { val: 4, label: "Elevated" },
                { val: 5, label: "Exhausted" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.val}
                  onClick={() => setFatigue(s.val)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center gap-0.5 ${
                    fatigue === s.val
                      ? "bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="font-mono font-bold">{s.val}</span>
                  <span className="text-[9px] opacity-75">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Sleep Quality Rating */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Moon className="w-4 h-4 text-emerald-400" />
                <span>3. Last Sleep & Rest Window Quality</span>
              </div>
              <span className="font-mono text-xs font-bold text-emerald-400">
                Rating {sleep} / 5
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[
                { val: 1, label: "< 4 hrs / Disturbed" },
                { val: 2, label: "4-5 hrs" },
                { val: 3, label: "5-6 hrs" },
                { val: 4, label: "6-7 hrs" },
                { val: 5, label: "7-8+ hrs / Restful" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.val}
                  onClick={() => setSleep(s.val)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center gap-0.5 ${
                    sleep === s.val
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-sm"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="font-mono font-bold">{s.val}</span>
                  <span className="text-[9px] opacity-75">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Subjective Workload Feeling */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>4. Current Operational Load</span>
              </div>
              <span className="font-mono text-xs font-bold text-blue-400">
                Level {workload} / 5
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[
                { val: 1, label: "Very Light" },
                { val: 2, label: "Normal" },
                { val: 3, label: "Moderate" },
                { val: 4, label: "Demanding" },
                { val: 5, label: "Extremely Heavy" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.val}
                  onClick={() => setWorkload(s.val)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center gap-0.5 ${
                    workload === s.val
                      ? "bg-blue-500/20 text-blue-300 border-blue-400 shadow-sm"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="font-mono font-bold">{s.val}</span>
                  <span className="text-[9px] opacity-75">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Optional Self-Reflection Notes (Encrypted)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g., completed 6h night patrol, rest cycle starting at 14:00"
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
            />
          </div>

          {/* Privacy Guarantee Note */}
          <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 flex items-center gap-2 text-xs text-emerald-300/90">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Your daily entries are private to you. They are never shown to commanding officers.
            </span>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <CheckCircle2 className="w-4 h-4 animate-spin" />
                <span>Encrypting & Logging Check-In...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Voluntary Wellness Check-In</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
