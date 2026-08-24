"use client";

import React from "react";
import { useApp, UserRole } from "@/context/AppContext";
import { ShieldAlert, Lock, ArrowRight, CheckCircle2, UserCheck } from "lucide-react";
import Link from "next/link";

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
  pageName: string;
}

export default function RoleGuard({ allowedRoles, children, pageName }: RoleGuardProps) {
  const { role, setRole } = useApp();

  const isAllowed = allowedRoles.includes(role);

  if (isAllowed) {
    return <>{children}</>;
  }

  const roleNames: Record<UserRole, string> = {
    PERSONNEL: "Individual Personnel",
    WELFARE_OFFICER: "Welfare Officer",
    COMMANDER: "Unit Commander",
    ADMIN: "System Administrator",
  };

  const primaryAllowedRole = allowedRoles[0];

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full glass-panel rounded-2xl p-8 border border-amber-500/30 text-center space-y-6 relative overflow-hidden bg-slate-950/80">
        {/* Glow ambient background */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-500/10 blur-2xl pointer-events-none rounded-full" />

        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
            RBAC Access Guard • Zero-Trust Policy
          </div>
          <h2 className="text-xl font-bold text-slate-100">
            Role Elevation Required for {pageName}
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your current active simulation role is <strong className="text-slate-200">{roleNames[role]}</strong>.
            Under SURAKSHA Privacy & Security mandate, this view is restricted to{" "}
            <span className="text-cyan-400 font-medium">{allowedRoles.map((r) => roleNames[r]).join(" or ")}</span>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left space-y-2">
          <div className="text-[11px] text-slate-400 uppercase tracking-wide font-mono">
            Simulate Authorized Role:
          </div>
          <div className="flex flex-col gap-2">
            {allowedRoles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Switch to {roleNames[r]}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-center gap-4 text-xs">
          <Link href="/personnel" className="text-slate-400 hover:text-slate-200">
            Return to Personnel Portal
          </Link>
          <span className="text-slate-700">•</span>
          <Link href="/" className="text-cyan-400 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
