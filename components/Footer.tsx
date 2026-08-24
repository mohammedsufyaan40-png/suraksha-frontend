import React from "react";
import Link from "next/link";
import SurakshaLogo from "./Interactive/SurakshaLogo";
import { Shield, Lock, FileText, CheckCircle2, User, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-sm mt-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <SurakshaLogo size="lg" showTagline={true} />
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              <strong className="text-slate-200">System for Uniformed Resilience, Analytics & Stress Health Assessment</strong>.
              A privacy-first AI-enabled welfare early-warning solution designed for uniformed forces to identify operational stress, fatigue, and burnout risk indicators.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SIH Problem Statement 26186 Solution Architecture</span>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/personnel/wellness" className="hover:text-cyan-400 transition-colors">
                  Wellness Check-Ins
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-cyan-400 transition-colors">
                  AI Intelligence & SHAP
                </Link>
              </li>
              <li>
                <Link href="/welfare" className="hover:text-cyan-400 transition-colors">
                  Welfare Dashboard
                </Link>
              </li>
              <li>
                <Link href="/commander" className="hover:text-cyan-400 transition-colors">
                  Commander Intelligence
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Framework
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors">
                  Security & Audit Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Context */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Official Context
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>Government of India</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>Ministry of Home Affairs</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>Central Reserve Police Force</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>Police II Division</span>
              </li>
              <li className="flex items-center gap-1.5 text-cyan-300 font-mono">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>SIH PS 26186</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Developer Attribution */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Developer & Credits
            </h4>
            <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-3 space-y-2">
              <div className="text-[11px] text-slate-400">Concept & Prototype:</div>
              <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ayaan Shakil Hashmi</span>
              </div>
              <div className="text-[10px] text-cyan-400/90 font-mono pt-1">
                SIH 2026 Hackathon Prototype
              </div>
            </div>
            <div className="text-[11px] text-slate-400">
              <Link href="/about" className="text-cyan-400 hover:underline flex items-center gap-1">
                <span>View Full Architecture & Credits</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Official Disclaimer Banner */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="rounded-md bg-slate-900/60 border border-slate-800/80 px-4 py-2.5 text-slate-400 max-w-3xl leading-relaxed">
            <span className="font-semibold text-slate-300">Disclaimer: </span>
            SURAKSHA is a proposed hackathon prototype developed in response to SIH Problem Statement 26186. It is not an officially deployed Government of India or CRPF system. SURAKSHA is a welfare-support and early-warning platform, NOT a surveillance, disciplinary, or medical-diagnosis system.
          </div>
          <div className="text-slate-400 text-right whitespace-nowrap font-mono">
            © 2026 SURAKSHA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
