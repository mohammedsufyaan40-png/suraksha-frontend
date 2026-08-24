"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Activity,
  Heart,
  TrendingDown,
  TrendingUp,
  Moon,
  BatteryCharging,
  Sparkles,
  Lock,
  ChevronRight,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function HeroDashboardPreview() {
  const [pulseLive, setPulseLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseLive((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-teal-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Glass Card Preview */}
      <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-cyan-500/30 bg-slate-950/85 shadow-2xl space-y-5 relative overflow-hidden">
        {/* Top Header Bar with Live Indicator */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Fictional Demonstration
              </div>
              <h4 className="text-sm font-bold text-slate-100">Personnel Wellness Status</h4>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-emerald-400 transition-opacity duration-500 ${
                pulseLive ? "opacity-100" : "opacity-30"
              }`}
            />
            <span>Active Telemetry</span>
          </div>
        </div>

        {/* Primary Metric: Risk 34 / 100 Stable */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-1">
            <div className="text-[11px] text-slate-400 font-medium">Welfare Risk Index</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold font-mono text-cyan-400">34</span>
              <span className="text-xs text-slate-500 font-mono">/ 100</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold pt-0.5">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Trend: ↓ 8%</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-1 flex flex-col justify-between">
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Evaluation Tier</div>
              <div className="mt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Stable
                </span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400">
              Personal baselines within nominal parameters.
            </div>
          </div>
        </div>

        {/* Real-time Indicator Gauges */}
        <div className="space-y-2.5 p-3 rounded-2xl bg-slate-900/50 border border-slate-800/60">
          <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium px-1">
            <span>Operational Resilience Factors</span>
            <span className="text-[10px] font-mono text-cyan-400">Live XAI Signals</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Workload Balance */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Duty Workload Equilibrium</span>
                <span className="font-mono text-slate-200">Balanced (38 hrs/wk)</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[42%]" />
              </div>
            </div>

            {/* Sleep & Rest Recovery */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Rest Interval Recovery</span>
                <span className="font-mono text-emerald-400">Optimal (7.2h rest)</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-[78%]" />
              </div>
            </div>

            {/* Shift Regularity */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Shift Rotation Index</span>
                <span className="font-mono text-slate-200">Daytime Standard</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full w-[85%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Simulated Action Bar */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px]">Pseudonymized ID: P-4417</span>
          </div>

          <Link
            href="/personnel"
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-xs transition-colors"
          >
            <span>Open Interactive View</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bottom Credibility Strip */}
        <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 text-center font-medium">
          Designed for Uniformed Services • Privacy by Design • Human-in-the-Loop
        </div>
      </div>
    </div>
  );
}
