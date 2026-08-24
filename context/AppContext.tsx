"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  PersonnelRecord,
  InterventionRecord,
  UnitIntelligence,
  AuditLogItem,
  INITIAL_PERSONNEL,
  UNIT_INTELLIGENCE,
  AUDIT_LOGS,
} from "@/lib/demoData";

export type UserRole = "PERSONNEL" | "WELFARE_OFFICER" | "COMMANDER" | "ADMIN";

export interface ToastMessage {
  id: string;
  type: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
  timestamp: string;
}

export interface CheckInPayload {
  stress: number; // 1-5
  fatigue: number; // 1-5
  sleep: number; // 1-5
  workload: number; // 1-5
  notes?: string;
}

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  personnelList: PersonnelRecord[];
  activePersonnel: PersonnelRecord;
  setActivePersonnelId: (id: string) => void;
  unitStats: UnitIntelligence;
  auditLogs: AuditLogItem[];
  interventions: InterventionRecord[];
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, "id" | "timestamp">) => void;
  removeToast: (id: string) => void;
  submitCheckIn: (payload: CheckInPayload) => void;
  createIntervention: (data: {
    personnelId: string;
    title: string;
    type: InterventionRecord["type"];
    assignedOfficer: string;
    notes: string;
  }) => void;
  isInterventionModalOpen: boolean;
  setIsInterventionModalOpen: (open: boolean) => void;
  selectedPersonnelForIntervention: PersonnelRecord | null;
  setSelectedPersonnelForIntervention: (p: PersonnelRecord | null) => void;
  isSupportModalOpen: boolean;
  setIsSupportModalOpen: (open: boolean) => void;
  isExportModalOpen: boolean;
  setIsExportModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("WELFARE_OFFICER");
  const [personnelList, setPersonnelList] = useState<PersonnelRecord[]>(INITIAL_PERSONNEL);
  const [activePersonnelId, setActivePersonnelId] = useState<string>("P-1042");
  const [unitStats] = useState<UnitIntelligence>(UNIT_INTELLIGENCE);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(AUDIT_LOGS);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isInterventionModalOpen, setIsInterventionModalOpen] = useState<boolean>(false);
  const [selectedPersonnelForIntervention, setSelectedPersonnelForIntervention] = useState<PersonnelRecord | null>(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Derive active personnel
  const activePersonnel =
    personnelList.find((p) => p.id === activePersonnelId) || personnelList[0];

  // Extract all interventions across personnel
  const interventions = personnelList.flatMap((p) => p.interventions);

  const addToast = (toast: Omit<ToastMessage, "id" | "timestamp">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const timestamp = new Date().toLocaleTimeString();
    const newToast = { ...toast, id, timestamp };
    setToasts((prev) => [newToast, ...prev].slice(0, 5));
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    const roleLabels: Record<UserRole, string> = {
      PERSONNEL: "Personnel (P-1042)",
      WELFARE_OFFICER: "Welfare Officer (WO-Sharma)",
      COMMANDER: "Unit Commander (Cmdr-Verma)",
      ADMIN: "System Administrator",
    };
    addToast({
      type: "info",
      title: "Active Role Switched",
      message: `Simulating user session as ${roleLabels[newRole]}.`,
    });
  };

  const submitCheckIn = (payload: CheckInPayload) => {
    // Calculate new calculated risk score based on check-in
    const avgRating = (payload.stress + payload.fatigue + (6 - payload.sleep) + payload.workload) / 4;
    const computedScore = Math.min(100, Math.max(10, Math.round(avgRating * 18)));

    setPersonnelList((prev) =>
      prev.map((p) => {
        if (p.id === activePersonnelId) {
          const updatedTimeline = [
            ...p.timeline30Days,
            {
              day: `Day ${p.timeline30Days.length + 1}`,
              date: "Today",
              risk: computedScore,
              workload: payload.workload * 20,
              fatigue: payload.fatigue * 20,
              recovery: payload.sleep * 20,
            },
          ];
          return {
            ...p,
            riskScore: computedScore,
            lastCheckIn: "Just now",
            sleepAvgHours: payload.sleep * 1.5,
            fatigueScore: payload.fatigue * 20,
            timeline30Days: updatedTimeline,
            status: computedScore >= 70 ? "PRIORITY_WELFARE_REVIEW" : computedScore >= 50 ? "SUPPORT_RECOMMENDED" : computedScore >= 30 ? "WATCH" : "STABLE",
          };
        }
        return p;
      })
    );

    // Add audit log
    const newLog: AuditLogItem = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC",
      actorRole: "Personnel (Self)",
      actorId: activePersonnelId,
      action: "Voluntary Check-In Recorded",
      resource: "Encrypted Wellness Telemetry",
      ipHash: "Zero-Knowledge Token",
      status: "Success",
      details: `Daily assessment submitted (Stress: ${payload.stress}/5, Fatigue: ${payload.fatigue}/5, Sleep: ${payload.sleep}/5).`,
    };
    setAuditLogs((prev) => [newLog, ...prev]);

    addToast({
      type: "success",
      title: "Check-In Logged Privately",
      message: "Your voluntary check-in has been securely recorded. Baselines updated.",
    });
  };

  const createIntervention = (data: {
    personnelId: string;
    title: string;
    type: InterventionRecord["type"];
    assignedOfficer: string;
    notes: string;
  }) => {
    const target = personnelList.find((p) => p.id === data.personnelId);
    const initialRisk = target ? target.riskScore : 78;
    const postRisk = Math.max(30, initialRisk - 14);

    const newIntervention: InterventionRecord = {
      id: `INT-${Math.floor(1000 + Math.random() * 9000)}`,
      personnelId: data.personnelId,
      title: data.title,
      type: data.type,
      status: "Active",
      createdAt: new Date().toISOString().substring(0, 10),
      assignedOfficer: data.assignedOfficer || "WO-Sharma",
      initialRisk: initialRisk,
      currentRisk: postRisk,
      followUp7Day: {
        scheduledDate: new Date(Date.now() + 7 * 86400000).toISOString().substring(0, 10),
        status: "Scheduled",
        notes: "Scheduled initial welfare check and shift adjustment review.",
      },
      followUp30Day: {
        scheduledDate: new Date(Date.now() + 30 * 86400000).toISOString().substring(0, 10),
        status: "Pending",
      },
      riskHistory: [
        { milestone: "Initial Detected", score: initialRisk, date: "At Creation" },
        { milestone: "Intervention Initiated", score: postRisk, date: "Scheduled" },
      ],
      wording: "Risk indicators decreased following the recorded intervention.",
      notes: data.notes,
    };

    setPersonnelList((prev) =>
      prev.map((p) => {
        if (p.id === data.personnelId) {
          return {
            ...p,
            riskScore: postRisk,
            status: postRisk >= 70 ? "PRIORITY_WELFARE_REVIEW" : postRisk >= 50 ? "SUPPORT_RECOMMENDED" : "WATCH",
            interventions: [newIntervention, ...p.interventions],
          };
        }
        return p;
      })
    );

    // Audit log
    const newLog: AuditLogItem = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC",
      actorRole: "Welfare Officer",
      actorId: "WO-Sharma",
      action: "Initiate Welfare Intervention",
      resource: `Intervention [${newIntervention.id}] for ${data.personnelId}`,
      ipHash: "10.48.12.92 (CRPF GovNet)",
      status: "Success",
      details: `${data.type} initiated. Follow-up protocol generated.`,
    };
    setAuditLogs((prev) => [newLog, ...prev]);

    addToast({
      type: "success",
      title: "Welfare Intervention Created",
      message: `Protocol ${newIntervention.id} created for personnel ${data.personnelId}. 7-day and 30-day tracking registered.`,
    });

    setIsInterventionModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        personnelList,
        activePersonnel,
        setActivePersonnelId,
        unitStats,
        auditLogs,
        interventions,
        toasts,
        addToast,
        removeToast,
        submitCheckIn,
        createIntervention,
        isInterventionModalOpen,
        setIsInterventionModalOpen,
        selectedPersonnelForIntervention,
        setSelectedPersonnelForIntervention,
        isSupportModalOpen,
        setIsSupportModalOpen,
        isExportModalOpen,
        setIsExportModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
