import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RiskLevel = "STABLE" | "WATCH" | "SUPPORT_RECOMMENDED" | "PRIORITY_WELFARE_REVIEW";

export function getRiskLevel(score: number): {
  level: RiskLevel;
  label: string;
  badgeClass: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  colorHex: string;
  description: string;
} {
  if (score < 30) {
    return {
      level: "STABLE",
      label: "Stable",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      borderClass: "border-emerald-500/40",
      bgClass: "bg-emerald-500/5",
      textClass: "text-emerald-400",
      colorHex: "#10b981",
      description: "Indicators are within baseline parameters.",
    };
  } else if (score < 50) {
    return {
      level: "WATCH",
      label: "Watch",
      badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      borderClass: "border-cyan-500/40",
      bgClass: "bg-cyan-500/5",
      textClass: "text-cyan-400",
      colorHex: "#06b6d4",
      description: "Minor variances detected; normal monitoring advised.",
    };
  } else if (score < 70) {
    return {
      level: "SUPPORT_RECOMMENDED",
      label: "Support Recommended",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      borderClass: "border-amber-500/40",
      bgClass: "bg-amber-500/5",
      textClass: "text-amber-400",
      colorHex: "#f59e0b",
      description: "Fatigue or operational indicators elevated. Proactive welfare support recommended.",
    };
  } else {
    return {
      level: "PRIORITY_WELFARE_REVIEW",
      label: "Priority Welfare Review",
      badgeClass: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      borderClass: "border-rose-500/40",
      bgClass: "bg-rose-500/5",
      textClass: "text-rose-400",
      colorHex: "#f43f5e",
      description: "Elevated welfare risk indicators detected. Prompt human-led review recommended.",
    };
  }
}
