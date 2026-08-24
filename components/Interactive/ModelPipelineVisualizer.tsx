"use client";

import React, { useState } from "react";
import { AI_PIPELINE_STEPS } from "@/lib/demoData";
import {
  Database,
  Cpu,
  TrendingUp,
  LineChart,
  ShieldAlert,
  SearchCheck,
  HeartHandshake,
  UserCheck,
  ChevronRight,
  ArrowDown,
  Info,
  Sliders,
} from "lucide-react";

export default function ModelPipelineVisualizer() {
  const [selectedStep, setSelectedStep] = useState<number>(3);

  const stepIcons = [
    Database,
    Cpu,
    TrendingUp,
    LineChart,
    ShieldAlert,
    SearchCheck,
    HeartHandshake,
  ];

  return (
    <div className="space-y-6">
      {/* Horizontal / Vertical Interactive Pipeline Track */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2 relative">
        {AI_PIPELINE_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx] || Cpu;
          const isSelected = selectedStep === step.step;

          return (
            <div key={step.step} className="flex flex-col items-center">
              <button
                onClick={() => setSelectedStep(step.step)}
                className={`w-full p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] relative group ${
                  isSelected
                    ? "bg-cyan-950/60 border-cyan-400 text-slate-100 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/40"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold font-mono ${
                      isSelected
                        ? "bg-cyan-400 text-slate-950"
                        : "bg-slate-800 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    0{step.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isSelected ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  />
                </div>

                <div className="mt-2">
                  <div className="text-xs font-bold leading-tight">{step.title}</div>
                  <div className="text-[10px] text-cyan-400/90 font-mono mt-0.5 truncate">
                    {step.tech}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-cyan-400 hidden md:block" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card for Selected Step */}
      {selectedStep && (
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-950/90 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                {React.createElement(stepIcons[selectedStep - 1] || Cpu, { className: "w-6 h-6" })}
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Step 0{selectedStep} of 07 • {AI_PIPELINE_STEPS[selectedStep - 1].subtitle}
                </div>
                <h4 className="text-xl font-extrabold text-slate-100">
                  {AI_PIPELINE_STEPS[selectedStep - 1].title}
                </h4>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs text-cyan-300 shrink-0">
              Tech: <strong className="text-slate-100">{AI_PIPELINE_STEPS[selectedStep - 1].tech}</strong>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>{AI_PIPELINE_STEPS[selectedStep - 1].description}</p>

            {selectedStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-semibold text-cyan-300 font-mono text-xs">
                    XGBoost / LightGBM Multi-Model Ensemble
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Combines decision trees trained on anonymized workload cycles, shift regularity, and rest deprivation markers.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-semibold text-cyan-300 font-mono text-xs">
                    Zero Clinical Diagnosis
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    SURAKSHA strictly evaluates operational stress and fatigue risk indicators — never psychological disorders.
                  </p>
                </div>
              </div>
            )}

            {selectedStep === 6 && (
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
                <div className="font-semibold text-cyan-300 font-mono text-xs">
                  SHAP (SHapley Additive exPlanations) Game-Theoretic Decomposition
                </div>
                <p className="text-xs text-slate-400">
                  Computes the exact marginal contribution of every operational feature (+18 Duty Load, +14 Reduced Recovery), ensuring every score is fully interpretable and defensible during human welfare review.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Crucial Validation & Non-Medical Notice Banner */}
      <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-200">Prototype Disclaimer: </span>
          Model thresholds and feature weights are configurable and must be validated using representative anonymized datasets before real-world deployment. SURAKSHA is an early-warning decision support system that keeps human welfare officers firmly in the loop.
        </div>
      </div>
    </div>
  );
}
