import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  showBadge?: boolean;
  className?: string;
  linkToHome?: boolean;
}

export default function SurakshaLogo({
  size = "md",
  showTagline = false,
  showBadge = false,
  className = "",
  linkToHome = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const content = (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Emblem: Hexagonal biometric-resonance core representing protection, human heartbeat wellbeing, and predictive intelligence */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        {/* Outer subtle rotating hex ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-teal-400/20 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 group-hover:border-cyan-400 transition-colors" />
        
        {/* Inner glowing pulse core */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5 text-cyan-400 z-10 transition-transform group-hover:scale-110 duration-300"
        >
          {/* Subtle heartbeat pulse line intersecting an intelligent node */}
          <path
            d="M3 12H7L9 6L12 18L15 10L17 12H21"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="18" r="1.5" fill="#38bdf8" />
          <circle cx="9" cy="6" r="1.5" fill="#10b981" />
        </svg>

        {/* Ambient glow */}
        <div className="absolute -inset-0.5 bg-cyan-500/20 blur-sm rounded-xl -z-10 group-hover:bg-cyan-400/30 transition-all" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className={`font-bold tracking-wider text-slate-100 uppercase font-mono ${textSizes[size]}`}>
            SURAKSHA
          </span>
          {showBadge && (
            <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-700/50">
              SIH 26186
            </span>
          )}
        </div>
        {showTagline && (
          <p className="text-[10px] tracking-widest text-cyan-400/80 uppercase font-medium">
            Predict • Protect • Support
          </p>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return <Link href="/">{content}</Link>;
  }

  return content;
}
