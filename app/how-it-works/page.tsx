"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Activity,
  Sliders,
  TrendingUp,
  ShieldCheck,
  Info,
  Code,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Database,
} from "lucide-react";
import ModelPipelineVisualizer from "@/components/Interactive/ModelPipelineVisualizer";
import WhyRiskChangedTimeline from "@/components/Interactive/WhyRiskChangedTimeline";

export default function HowItWorksPage() {
  const [nightWeight, setNightWeight] = useState(0.35);
  const [recoveryWeight, setRecoveryWeight] = useState(0.4);
  const [workloadWeight, setWorkloadWeight] = useState(0.25);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Cpu className="w-3.5 h-3.5" />
          <span>Machine Learning & Explainability Engine</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
          How SURAKSHA AI Generates Actionable Welfare Intelligence
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          SURAKSHA replaces subjective assumptions with mathematically defensible, explainable multi-model ensembles.
        </p>
      </div>

      {/* 7-Step Interactive Pipeline Component */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold text-slate-100">
            End-to-End Decision Architecture
          </h2>
          <span className="text-xs font-mono text-cyan-400">Step 01 - 07</span>
        </div>
        <ModelPipelineVisualizer />
      </div>

      {/* Deep-dive 3 Core ML Algorithms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3 bg-slate-950/80">
          <div className="font-mono text-xs font-bold text-cyan-400">ALGORITHM 01</div>
          <h3 className="text-lg font-bold text-slate-100">XGBoost / LightGBM</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Gradient boosted decision tree ensemble trained to evaluate nonlinear interactions between consecutive night duties, rest deprivation, and voluntary check-in fatigue velocity.
          </p>
          <div className="text-[11px] font-mono text-slate-300 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            Loss: Binary Cross-Entropy + Cost-Sensitive Risk Weighting
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3 bg-slate-950/80">
          <div className="font-mono text-xs font-bold text-teal-400">ALGORITHM 02</div>
          <h3 className="text-lg font-bold text-slate-100">Isolation Forest</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Unsupervised tree-based anomaly detector isolating personnel whose recent operational rest profiles deviate markedly from their own 30-day baseline distribution.
          </p>
          <div className="text-[11px] font-mono text-slate-300 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            Metric: Average Path Length Contamination Factor
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3 bg-slate-950/80">
          <div className="font-mono text-xs font-bold text-amber-400">ALGORITHM 03</div>
          <h3 className="text-lg font-bold text-slate-100">SHAP Explainability</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Game-theoretic Shapley values calculating the exact additive contribution (+18 Workload, +14 Recovery) to explain why any risk score increased.
          </p>
          <div className="text-[11px] font-mono text-slate-300 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            Output: Granular Feature Attribution Waterfall
          </div>
        </div>
      </div>

      {/* SHAP Timeline Component */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">
          Interactive Longitudinal Decomposition
        </h2>
        <WhyRiskChangedTimeline />
      </div>

      {/* Model Parameter Calibration Sandbox */}
      <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-950/90 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Admin / Research Sandbox
            </div>
            <h3 className="text-xl font-bold text-slate-100 mt-0.5">
              Configurable Feature Weight Calibration
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            Dynamic Simulation Mode
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="space-y-2 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-300">Reduced Recovery Weight</span>
              <span className="font-mono text-cyan-400">{(recoveryWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.8"
              step="0.05"
              value={recoveryWeight}
              onChange={(e) => setRecoveryWeight(parseFloat(e.target.value))}
              className="w-full accent-cyan-400"
            />
            <p className="text-[11px] text-slate-400">
              Sensitivity to short rest intervals between consecutive patrols.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-300">Night-Duty Frequency Weight</span>
              <span className="font-mono text-amber-400">{(nightWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.8"
              step="0.05"
              value={nightWeight}
              onChange={(e) => setNightWeight(parseFloat(e.target.value))}
              className="w-full accent-amber-400"
            />
            <p className="text-[11px] text-slate-400">
              Sensitivity to circadian disruption from consecutive nocturnal shifts.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between font-semibold">
              <span className="text-slate-300">Operational Workload Weight</span>
              <span className="font-mono text-emerald-400">{(workloadWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.8"
              step="0.05"
              value={workloadWeight}
              onChange={(e) => setWorkloadWeight(parseFloat(e.target.value))}
              className="w-full accent-emerald-400"
            />
            <p className="text-[11px] text-slate-400">
              Sensitivity to cumulative weekly duty hours and route coverage.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-cyan-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Simulated Model Stability Index: 98.4% Nominal Convergence</span>
          </div>
          <Link
            href="/admin"
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
          >
            <span>Open Admin Model Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
