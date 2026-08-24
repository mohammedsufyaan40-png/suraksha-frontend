"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Smartphone,
  ShieldCheck,
  Moon,
  BatteryCharging,
  Heart,
  ChevronRight,
  Send,
  Lock,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

export default function MobileAppSimulator() {
  const { setIsSupportModalOpen } = useApp();
  const [activeScreen, setActiveScreen] = useState<1 | 2 | 3 | 4>(1);

  // Screen 1 Check-in state
  const [stress, setStress] = useState(2);
  const [fatigue, setFatigue] = useState(3);
  const [sleep, setSleep] = useState(4);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setActiveScreen(2);
      setSubmitted(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Mobile Device Frame */}
      <div className="relative w-[320px] sm:w-[350px] h-[640px] rounded-[42px] bg-slate-950 p-3.5 border-[6px] border-slate-800 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/30 flex flex-col justify-between overflow-hidden">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30 border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-slate-700" />
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-3 pt-2 pb-1 border-b border-slate-900 z-20">
          <span>06:30</span>
          <div className="flex items-center gap-1.5 text-cyan-400">
            <span className="text-[9px] font-bold uppercase">CRPF GovNet</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="flex-1 overflow-y-auto px-3 py-3 text-slate-100 flex flex-col justify-between relative">
          {/* SCREEN 1: Check-in */}
          {activeScreen === 1 && (
            <div className="space-y-3.5 animate-in fade-in duration-300">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  Voluntary Self-Check
                </div>
                <h4 className="text-base font-bold text-slate-100">Good evening.</h4>
                <p className="text-xs text-slate-400">How are you feeling today?</p>
              </div>

              <form onSubmit={handleCheckInSubmit} className="space-y-3 text-xs">
                {/* Stress Scale */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-semibold text-slate-300">
                    <span>Stress Level</span>
                    <span className="font-mono text-cyan-400">{stress} / 5</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setStress(val)}
                        className={`flex-1 py-1.5 rounded text-xs font-semibold border transition-all ${
                          stress === val
                            ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fatigue Scale */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-semibold text-slate-300">
                    <span>Fatigue Level</span>
                    <span className="font-mono text-amber-400">{fatigue} / 5</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setFatigue(val)}
                        className={`flex-1 py-1.5 rounded text-xs font-semibold border transition-all ${
                          fatigue === val
                            ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sleep Scale */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-semibold text-slate-300">
                    <span>Sleep Quality</span>
                    <span className="font-mono text-emerald-400">{sleep} / 5</span>
                  </div>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setSleep(val)}
                        className={`flex-1 py-1.5 rounded text-xs font-semibold border transition-all ${
                          sleep === val
                            ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 transition-all shadow-md shadow-cyan-500/25 flex items-center justify-center gap-1.5"
                >
                  {submitted ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Check-in</span>
                    </>
                  )}
                </button>
              </form>

              <div className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-cyan-500" />
                <span>Encrypted on-device • Zero commander surveillance</span>
              </div>
            </div>
          )}

          {/* SCREEN 2: Current Status */}
          {activeScreen === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="text-center space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  Daily Wellbeing Snapshot
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Your current status:</h4>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-center space-y-2 relative overflow-hidden">
                <div className="text-3xl font-extrabold font-mono text-emerald-400">
                  38 <span className="text-xs text-slate-500">/ 100</span>
                </div>
                <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Stable
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Your indicators reflect steady operational resilience today.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-slate-300">Personal Baselines</div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Sleep Avg</span>
                    <span className="font-mono text-slate-200">6.8 hrs</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Duty Recovery</span>
                    <span className="font-mono text-emerald-400">Optimal</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveScreen(3)}
                className="w-full py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Recommendations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* SCREEN 3: Recovery Recommendation */}
          {activeScreen === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="text-center space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  AI Welfare Guidance
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Recommended:</h4>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-cyan-300 text-xs">Recovery Focus</h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "Your recent workload has increased. Consider reviewing recovery time and available welfare support."
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px] space-y-1 text-slate-400">
                <div className="text-slate-200 font-semibold">Suggested Self-Care:</div>
                <div>• Prioritize 7+ hours rest block before next patrol.</div>
                <div>• Hydrate and request daylight rotation if fatigue persists.</div>
              </div>

              <button
                onClick={() => setActiveScreen(4)}
                className="w-full py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Need Support?</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* SCREEN 4: Need Support? */}
          {activeScreen === 4 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="text-center space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  Confidential Safe Harbor
                </div>
                <h4 className="text-base font-bold text-slate-100">Need Support?</h4>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Request confidential welfare assistance directly from your dedicated Welfare Officer.
                </p>
                <button
                  onClick={() => setIsSupportModalOpen(true)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 transition-all shadow-md shadow-emerald-500/20"
                >
                  Request Confidential Welfare Assistance
                </button>
              </div>

              <div className="text-[10px] text-slate-500 text-center">
                100% Protected under Section 4 CRPF Welfare Charter.
              </div>
            </div>
          )}
        </div>

        {/* App Screen Nav Dots & Home Indicator */}
        <div className="pt-2 border-t border-slate-900 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((scr) => (
              <button
                key={scr}
                onClick={() => setActiveScreen(scr as 1 | 2 | 3 | 4)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeScreen === scr
                    ? "w-6 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
                title={`Screen ${scr}`}
              />
            ))}
          </div>
          <div className="w-32 h-1 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Screen selector tabs */}
      <div className="flex items-center gap-1 mt-4 p-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
        <button
          onClick={() => setActiveScreen(1)}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeScreen === 1 ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
          }`}
        >
          1. Check-in
        </button>
        <button
          onClick={() => setActiveScreen(2)}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeScreen === 2 ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
          }`}
        >
          2. Status
        </button>
        <button
          onClick={() => setActiveScreen(3)}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeScreen === 3 ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
          }`}
        >
          3. Guidance
        </button>
        <button
          onClick={() => setActiveScreen(4)}
          className={`px-3 py-1 rounded-lg transition-all ${
            activeScreen === 4 ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
          }`}
        >
          4. Support
        </button>
      </div>
    </div>
  );
}
