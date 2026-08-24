"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SurakshaLogo from "./Interactive/SurakshaLogo";
import { useApp, UserRole } from "@/context/AppContext";
import {
  Shield,
  User,
  Users,
  Award,
  Lock,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Activity,
  BarChart3,
  Sliders,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { role, setRole } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/platform" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Intelligence", href: "/welfare" },
    { name: "Privacy", href: "/privacy" },
    { name: "About", href: "/about" },
  ];

  const roleConfigs: Record<
    UserRole,
    { label: string; sub: string; icon: React.ElementType; color: string; targetUrl: string }
  > = {
    PERSONNEL: {
      label: "Personnel",
      sub: "P-1042 (Patrol)",
      icon: User,
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      targetUrl: "/personnel",
    },
    WELFARE_OFFICER: {
      label: "Welfare Officer",
      sub: "WO-Sharma",
      icon: HeartPulseIcon,
      color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      targetUrl: "/welfare",
    },
    COMMANDER: {
      label: "Unit Commander",
      sub: "42nd Battalion",
      icon: Award,
      color: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      targetUrl: "/commander",
    },
    ADMIN: {
      label: "System Admin",
      sub: "SecOps / Audit",
      icon: Lock,
      color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      targetUrl: "/admin",
    },
  };

  const currentRoleConfig = roleConfigs[role];
  const CurrentIcon = currentRoleConfig.icon;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <SurakshaLogo size="md" showTagline={true} />

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Role Switcher & Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Role Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${currentRoleConfig.color} hover:brightness-110`}
            >
              <CurrentIcon className="w-3.5 h-3.5" />
              <div className="text-left leading-tight">
                <div className="font-semibold">{currentRoleConfig.label}</div>
                <div className="text-[10px] opacity-75">{currentRoleConfig.sub}</div>
              </div>
              <ChevronDown className="w-3 h-3 ml-1 opacity-70" />
            </button>

            {/* Dropdown menu for role simulation */}
            {roleDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-xl glass-panel p-2 shadow-2xl z-50 border border-slate-700 bg-slate-900/95"
                onMouseLeave={() => setRoleDropdownOpen(false)}
              >
                <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1">
                  Switch Active Role (Demo)
                </div>
                {(Object.keys(roleConfigs) as UserRole[]).map((r) => {
                  const cfg = roleConfigs[r];
                  const Icon = cfg.icon;
                  const isSelected = role === r;
                  return (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-medium text-slate-100">{cfg.label}</div>
                        <div className="text-[10px] text-slate-400">{cfg.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Personnel Quick Access */}
          <Link
            href="/personnel"
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 border border-slate-700/80 transition-all flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Personnel Portal</span>
          </Link>

          {/* Authorized Access CTA */}
          <Link
            href={currentRoleConfig.targetUrl}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/25 flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Authorized Access</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 py-4 space-y-3 mt-2 bg-slate-950/95">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="text-xs font-medium text-slate-400 px-3">Switch Role:</div>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(roleConfigs) as UserRole[]).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setRole(r);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1.5 rounded text-xs text-left font-medium border ${
                    role === r
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  {roleConfigs[r].label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/personnel"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg text-xs font-medium border border-slate-700 text-slate-200"
              >
                Personnel Portal
              </Link>
              <Link
                href={currentRoleConfig.targetUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg text-xs font-semibold bg-cyan-400 text-slate-950"
              >
                Open Dashboard ({currentRoleConfig.label})
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeartPulseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
