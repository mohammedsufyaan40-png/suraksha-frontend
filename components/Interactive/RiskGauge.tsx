"use client";

import React from "react";
import { getRiskLevel } from "@/lib/utils";
import { AlertCircle, TrendingUp, TrendingDown, Minus, Info } from "lucide-react";

interface RiskGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showTierBands?: boolean;
  trendText?: string;
  trendDirection?: "up" | "down" | "stable";
  fictionalNotice?: boolean;
}

export default function RiskGauge({
  score,
  size = "md",
  showTierBands = true,
  trendText,
  trendDirection = "up",
  fictionalNotice = false,
}: RiskGaugeProps) {
  const riskInfo = getRiskLevel(score);

  // SVG arc calculation (semi-circle gauge: 180 degrees)
  const radius = size === "lg" ? 80 : size === "md" ? 64 : 44;
  const strokeWidth = size === "lg" ? 14 : size === "md" ? 10 : 8;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const tiers = [
    { range: "0–29", label: "STABLE", color: "#10b981", active: score < 30 },
    { range: "30–49", label: "WATCH", color: "#06b6d4", active: score >= 30 && score < 50 },
    { range: "50–69", label: "SUPPORT RECOMMENDED", color: "#f59e0b", active: score >= 50 && score < 70 },
    { range: "70–100", label: "PRIORITY WELFARE REVIEW", color: "#f43f5e", active: score >= 70 },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Semi-circle Gauge */}
      <div className="relative flex flex-col items-center">
        <svg
          width={(radius + strokeWidth) * 2}
          height={radius + strokeWidth + 14}
          className="overflow-visible"
        >
          {/* Background Track */}
          <path
            d={`M ${strokeWidth},${radius + strokeWidth} A ${radius},${radius} 0 0 1 ${
              radius * 2 + strokeWidth
            },${radius + strokeWidth}`}
            fill="none"
            stroke="#1e293b"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Value Progress Arc */}
          <path
            d={`M ${strokeWidth},${radius + strokeWidth} A ${radius},${radius} 0 0 1 ${
              radius * 2 + strokeWidth
            },${radius + strokeWidth}`}
            fill="none"
            stroke={riskInfo.colorHex}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0 0 8px ${riskInfo.colorHex}66)`,
            }}
          />
        </svg>

        {/* Center Score Overlay */}
        <div className="absolute bottom-2 flex flex-col items-center text-center">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-mono font-extrabold tracking-tight ${
                size === "lg" ? "text-4xl" : size === "md" ? "text-3xl" : "text-xl"
              }`}
              style={{ color: riskInfo.colorHex }}
            >
              {score}
            </span>
            <span className="text-xs text-slate-500 font-mono">/ 100</span>
          </div>
          <span
            className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${riskInfo.badgeClass} mt-0.5`}
          >
            {riskInfo.label}
          </span>
        </div>
      </div>

      {/* Trend indicator */}
      {trendText && (
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
          {trendDirection === "up" ? (
            <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
          ) : trendDirection === "down" ? (
            <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Minus className="w-3.5 h-3.5 text-slate-400" />
          )}
          <span>{trendText}</span>
        </div>
      )}

      {/* Tier Breakdown Legend */}
      {showTierBands && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-4 pt-3 border-t border-slate-800/80">
          {tiers.map((t) => (
            <div
              key={t.label}
              className={`p-2 rounded-lg border text-center transition-all ${
                t.active
                  ? "bg-slate-900 border-cyan-500/40 shadow-sm"
                  : "bg-slate-950/50 border-slate-800/60 opacity-60"
              }`}
            >
              <div className="text-[10px] font-mono font-semibold" style={{ color: t.color }}>
                {t.range}
              </div>
              <div className="text-[9px] font-bold tracking-tight text-slate-300 uppercase truncate">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {fictionalNotice && (
        <div className="text-[10px] text-slate-500 text-center mt-2 italic">
          * Fictional demonstration data for hackathon evaluation.
        </div>
      )}
    </div>
  );
}
