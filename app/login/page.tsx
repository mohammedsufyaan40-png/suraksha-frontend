"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp, UserRole } from "@/context/AppContext";
import {
  Shield,
  User,
  HeartHandshake,
  Award,
  Lock,
  ArrowRight,
  CheckCircle2,
  KeyRound,
} from "lucide-react";
import SurakshaLogo from "@/components/Interactive/SurakshaLogo";

export default function LoginPage() {
  const router = useRouter();
  const { role, setRole, addToast } = useApp();
  const [selectedRole, setSelectedRole] = useState<UserRole>(role);
  const [personnelCode, setPersonnelCode] = useState("P-1042");
  const [pin, setPin] = useState("••••");

  const roles = [
    {
      id: "PERSONNEL" as UserRole,
      title: "Individual Personnel",
      subtitle: "Patrol / Active Duty",
      idExample: "P-1042",
      desc: "Daily voluntary wellness check-ins, personal recovery insights, and confidential support.",
      icon: User,
      targetUrl: "/personnel",
      border: "border-emerald-500/40 hover:border-emerald-400",
      pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "WELFARE_OFFICER" as UserRole,
      title: "Welfare Officer",
      subtitle: "CRPF Welfare Division",
      idExample: "WO-Sharma",
      desc: "Battalion priority welfare review queue, SHAP explainability, and intervention tracking.",
      icon: HeartHandshake,
      targetUrl: "/welfare",
      border: "border-cyan-500/40 hover:border-cyan-400",
      pill: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      id: "COMMANDER" as UserRole,
      title: "Unit Commander",
      subtitle: "42nd Battalion HQ",
      idExample: "Cmdr-Verma",
      desc: "High-level aggregate organizational intelligence and duty roster balance (Zero PII).",
      icon: Award,
      targetUrl: "/commander",
      border: "border-blue-500/40 hover:border-blue-400",
      pill: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      id: "ADMIN" as UserRole,
      title: "System Administrator",
      subtitle: "SecOps & Compliance",
      idExample: "Sys-Admin",
      desc: "Cryptographic audit trail, RBAC control matrix, and ML threshold calibration.",
      icon: Lock,
      targetUrl: "/admin",
      border: "border-amber-500/40 hover:border-amber-400",
      pill: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
  ];

  const handleLogin = (r: UserRole, targetUrl: string) => {
    setRole(r);
    router.push(targetUrl);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3">
        <SurakshaLogo size="lg" showTagline={true} className="justify-center" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
          Authorized Role Authentication Portal
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Select an authorized role to simulate end-to-end user workflows under SURAKSHA RBAC policy.
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = selectedRole === r.id;

          return (
            <div
              key={r.id}
              onClick={() => setSelectedRole(r.id)}
              className={`glass-panel rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between space-y-4 bg-slate-950/80 ${
                isSelected
                  ? `border-cyan-400 bg-cyan-950/20 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/50`
                  : r.border
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${r.pill}`}>
                    {r.subtitle}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100">{r.title}</h3>
                  <div className="text-xs font-mono text-cyan-300 mt-0.5">
                    Demo ID: {r.idExample}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogin(r.id, r.targetUrl);
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
              >
                <span>Launch {r.title} Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Security Note */}
      <div className="text-center text-xs text-slate-500 font-mono">
        Secured with CRPF Zero-Trust Token Verification • SIH PS 26186 Prototype
      </div>
    </div>
  );
}
