export interface PersonnelRecord {
  id: string;
  unit: string;
  role: string;
  riskScore: number;
  trend: string;
  trendDirection: "up" | "down" | "stable";
  trendPoints: number;
  status: "STABLE" | "WATCH" | "SUPPORT_RECOMMENDED" | "PRIORITY_WELFARE_REVIEW";
  primaryFactor: string;
  lastCheckIn: string;
  anonymizedHash: string;
  dutyDaysActive: number;
  consecutiveNightShifts: number;
  recoveryIndex: number; // 0 - 100
  sleepAvgHours: number;
  fatigueScore: number; // 0 - 100
  workloadIndex: number; // 0 - 100
  deploymentDurationWeeks: number;
  factors: {
    name: string;
    impact: number;
    category: "workload" | "recovery" | "shift" | "wellness" | "deployment";
    description: string;
  }[];
  timeline30Days: {
    day: string;
    date: string;
    risk: number;
    workload: number;
    fatigue: number;
    recovery: number;
  }[];
  interventions: InterventionRecord[];
  aiExplanation: string;
  recommendedActions: string[];
}

export interface InterventionRecord {
  id: string;
  personnelId: string;
  title: string;
  type: "Workload Review" | "Recovery Protocol" | "Duty Schedule Adjustment" | "Confidential Welfare Counselling" | "Leave Grant Assessment";
  status: "Active" | "Completed" | "Pending Review";
  createdAt: string;
  assignedOfficer: string;
  initialRisk: number;
  currentRisk: number;
  followUp7Day: {
    scheduledDate: string;
    status: "Completed" | "Scheduled" | "Overdue";
    riskScore?: number;
    notes?: string;
  };
  followUp30Day: {
    scheduledDate: string;
    status: "Completed" | "Scheduled" | "Pending";
    riskScore?: number;
    notes?: string;
  };
  riskHistory: {
    milestone: string;
    score: number;
    date: string;
  }[];
  wording: string;
  notes: string;
}

export interface UnitIntelligence {
  unitName: string;
  totalPersonnel: number;
  overallRisk: number; // 48 / 100
  workloadPressure: number; // +12%
  fatigueTrend: number; // +8%
  nightDutyLoad: number; // 14%
  extendedDeployment: number; // 18%
  distribution: {
    stable: number; // 72%
    watch: number; // 6%
    supportRecommended: number; // 18%
    priorityReview: number; // 4%
    improving: number; // 11%
  };
  aiInsight: string;
  commanderRecommendation: string;
  welfareTrend: {
    month: string;
    risk: number;
    workload: number;
    fatigue: number;
    recovery: number;
  }[];
  workloadDistribution: {
    range: string;
    count: number;
    percentage: number;
  }[];
  fatigueTrendWeekly: {
    week: string;
    avgFatigue: number;
    nightHoursAvg: number;
  }[];
  deploymentPressure: {
    battalion: string;
    deployedMonths: number;
    riskIndex: number;
  }[];
  leaveUtilization: {
    category: string;
    utilized: number;
    pending: number;
  }[];
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  actorRole: "Welfare Officer" | "Unit Commander" | "System Admin" | "Personnel (Self)";
  actorId: string;
  action: string;
  resource: string;
  ipHash: string;
  status: "Success" | "Flagged" | "Audited";
  details: string;
}

export const INITIAL_PERSONNEL: PersonnelRecord[] = [
  {
    id: "P-1042",
    unit: "Bravo Sector - Delta Battalion",
    role: "Patrol Operations",
    riskScore: 78,
    trend: "+21 points / 14 days",
    trendDirection: "up",
    trendPoints: 21,
    status: "PRIORITY_WELFARE_REVIEW",
    primaryFactor: "Duty Workload & Reduced Recovery",
    lastCheckIn: "Today, 06:30 hrs",
    anonymizedHash: "SHA256:4d8a1c9e...f02",
    dutyDaysActive: 28,
    consecutiveNightShifts: 6,
    recoveryIndex: 32,
    sleepAvgHours: 4.8,
    fatigueScore: 84,
    workloadIndex: 88,
    deploymentDurationWeeks: 14,
    factors: [
      { name: "Duty Workload", impact: 18, category: "workload", description: "Sustained high operational tempo over past 14 consecutive duty cycles" },
      { name: "Reduced Recovery", impact: 14, category: "recovery", description: "Rest intervals between active patrols decreased below 6.5h baseline" },
      { name: "Night-Duty Frequency", impact: 11, category: "shift", description: "6 consecutive night operations without standard rotation interval" },
      { name: "Fatigue Indicators", impact: 9, category: "wellness", description: "Elevated subjective fatigue markers reported in voluntary wellness surveys" },
      { name: "Leave Pattern", impact: 5, category: "deployment", description: "Extended duration since last scheduled compensatory rest cycle" },
    ],
    timeline30Days: [
      { day: "Day 1", date: "Jul 25", risk: 34, workload: 40, fatigue: 30, recovery: 85 },
      { day: "Day 5", date: "Jul 29", risk: 36, workload: 42, fatigue: 35, recovery: 80 },
      { day: "Day 10", date: "Aug 03", risk: 39, workload: 48, fatigue: 42, recovery: 74 },
      { day: "Day 15", date: "Aug 08", risk: 47, workload: 62, fatigue: 55, recovery: 62 },
      { day: "Day 20", date: "Aug 13", risk: 58, workload: 76, fatigue: 68, recovery: 48 },
      { day: "Day 25", date: "Aug 18", risk: 69, workload: 84, fatigue: 78, recovery: 38 },
      { day: "Day 30", date: "Aug 23", risk: 78, workload: 88, fatigue: 84, recovery: 32 },
    ],
    interventions: [
      {
        id: "INT-8492",
        personnelId: "P-1042",
        title: "Workload Rebalance & Comp-Rest Cycle",
        type: "Workload Review",
        status: "Active",
        createdAt: "2026-08-22",
        assignedOfficer: "WO-Sharma (Welfare Div)",
        initialRisk: 82,
        currentRisk: 78,
        followUp7Day: {
          scheduledDate: "2026-08-29",
          status: "Scheduled",
          notes: "Scheduled rotation from night patrol to morning logistics duty.",
        },
        followUp30Day: {
          scheduledDate: "2026-09-21",
          status: "Pending",
        },
        riskHistory: [
          { milestone: "Initial Peak", score: 82, date: "Aug 20" },
          { milestone: "Triage Review", score: 78, date: "Aug 23" },
        ],
        wording: "Risk indicators decreased following the recorded intervention.",
        notes: "Recommended mandatory 48h recovery cycle and reassignment to daylight non-tactical tasks.",
      },
    ],
    aiExplanation:
      "Risk has increased primarily alongside increased workload and reduced recovery over the last 14 days. Cumulative operational demands combined with consecutive night shifts have driven fatigue markers upward.",
    recommendedActions: [
      "Welfare officer review & informal welfare check-in",
      "Workload assessment: balance operational tempo with adjacent squad",
      "Recovery review: mandate consecutive 48-hour rest block",
      "Support/counselling availability: provide voluntary confidential welfare counselor access",
    ],
  },
  {
    id: "P-2187",
    unit: "Alpha Sector - Echo Company",
    role: "Rapid Deployment Unit",
    riskScore: 68,
    trend: "+14 points / 14 days",
    trendDirection: "up",
    trendPoints: 14,
    status: "SUPPORT_RECOMMENDED",
    primaryFactor: "Consecutive Night Shifts & High Fatigue",
    lastCheckIn: "Yesterday, 20:15 hrs",
    anonymizedHash: "SHA256:7f3b890a...a11",
    dutyDaysActive: 22,
    consecutiveNightShifts: 5,
    recoveryIndex: 44,
    sleepAvgHours: 5.2,
    fatigueScore: 72,
    workloadIndex: 75,
    deploymentDurationWeeks: 10,
    factors: [
      { name: "Night-Duty Frequency", impact: 16, category: "shift", description: "Elevated night shift density over 2 weeks" },
      { name: "Fatigue Indicators", impact: 12, category: "wellness", description: "Consistently low self-reported energy ratings" },
      { name: "Reduced Recovery", impact: 10, category: "recovery", description: "Irregular resting schedules between deployments" },
      { name: "Duty Workload", impact: 8, category: "workload", description: "Extended route coverage requirement" },
    ],
    timeline30Days: [
      { day: "Day 1", date: "Jul 25", risk: 28, workload: 35, fatigue: 25, recovery: 90 },
      { day: "Day 10", date: "Aug 03", risk: 36, workload: 48, fatigue: 40, recovery: 78 },
      { day: "Day 20", date: "Aug 13", risk: 54, workload: 68, fatigue: 60, recovery: 55 },
      { day: "Day 30", date: "Aug 23", risk: 68, workload: 75, fatigue: 72, recovery: 44 },
    ],
    interventions: [],
    aiExplanation:
      "Risk indicators reflect sustained night duty hours with incomplete sleep recovery intervals. Proactive rotation to daylight duty recommended before fatigue markers compound.",
    recommendedActions: [
      "Welfare schedule check: transition to day shifts for next duty cycle",
      "Sleep hygiene & recovery protocol guidance",
      "Voluntary peer-support check-in",
    ],
  },
  {
    id: "P-3021",
    unit: "Charlie Sector - Quick Reaction Team",
    role: "Static Security Detail",
    riskScore: 39,
    trend: "↓ 43 points / 30 days",
    trendDirection: "down",
    trendPoints: 43,
    status: "WATCH",
    primaryFactor: "Post-Intervention Recovery Positive",
    lastCheckIn: "Today, 08:00 hrs",
    anonymizedHash: "SHA256:1a90cc54...d88",
    dutyDaysActive: 12,
    consecutiveNightShifts: 1,
    recoveryIndex: 78,
    sleepAvgHours: 7.1,
    fatigueScore: 32,
    workloadIndex: 45,
    deploymentDurationWeeks: 6,
    factors: [
      { name: "Recovery Improvement", impact: -18, category: "recovery", description: "Full 72-hour rest block successfully utilized" },
      { name: "Workload Normalization", impact: -14, category: "workload", description: "Reassigned to balanced 8-hour perimeter detail" },
      { name: "Sleep Quality", impact: -9, category: "wellness", description: "Average sleep increased from 4.5h to 7.1h" },
    ],
    timeline30Days: [
      { day: "Day 1", date: "Jul 25", risk: 82, workload: 88, fatigue: 86, recovery: 28 },
      { day: "Day 10", date: "Aug 03", risk: 68, workload: 70, fatigue: 64, recovery: 48 },
      { day: "Day 20", date: "Aug 13", risk: 51, workload: 55, fatigue: 45, recovery: 68 },
      { day: "Day 30", date: "Aug 23", risk: 39, workload: 45, fatigue: 32, recovery: 78 },
    ],
    interventions: [
      {
        id: "INT-7104",
        personnelId: "P-3021",
        title: "Compensatory Leave & Rotation Follow-up",
        type: "Leave Grant Assessment",
        status: "Completed",
        createdAt: "2026-07-28",
        assignedOfficer: "WO-Verma",
        initialRisk: 82,
        currentRisk: 39,
        followUp7Day: {
          scheduledDate: "2026-08-04",
          status: "Completed",
          riskScore: 68,
          notes: "Personnel confirmed restful sleep and positive transition.",
        },
        followUp30Day: {
          scheduledDate: "2026-08-20",
          status: "Completed",
          riskScore: 39,
          notes: "Full stabilization achieved. Closed case.",
        },
        riskHistory: [
          { milestone: "Initial Detected", score: 82, date: "Jul 25" },
          { milestone: "Intervention Implemented", score: 68, date: "Aug 03" },
          { milestone: "7-Day Follow-up", score: 51, date: "Aug 13" },
          { milestone: "30-Day Follow-up Outcome", score: 39, date: "Aug 23" },
        ],
        wording: "Risk indicators decreased following the recorded intervention.",
        notes: "Demonstrates high efficacy of timely compensatory leave and schedule normalization.",
      },
    ],
    aiExplanation:
      "Risk indicators decreased following the recorded intervention. Recovery metrics show marked upward trajectory following the 72-hour rest cycle and task reallocation.",
    recommendedActions: [
      "Maintain current balanced duty schedule",
      "Periodic 14-day check-in to confirm sustained recovery",
    ],
  },
  {
    id: "P-4417",
    unit: "Bravo Sector - Support Logistics",
    role: "Supply & Transport",
    riskScore: 24,
    trend: "↓ 8% / 14 days",
    trendDirection: "down",
    trendPoints: 4,
    status: "STABLE",
    primaryFactor: "Balanced Duty & Normal Baselines",
    lastCheckIn: "Today, 07:15 hrs",
    anonymizedHash: "SHA256:3c81bb67...e92",
    dutyDaysActive: 10,
    consecutiveNightShifts: 0,
    recoveryIndex: 86,
    sleepAvgHours: 7.4,
    fatigueScore: 22,
    workloadIndex: 38,
    deploymentDurationWeeks: 4,
    factors: [
      { name: "Healthy Recovery", impact: -12, category: "recovery", description: "Regular 8h sleep intervals maintained" },
      { name: "Consistent Baseline", impact: -8, category: "wellness", description: "Zero anomalous variance across past 30 days" },
    ],
    timeline30Days: [
      { day: "Day 1", date: "Jul 25", risk: 26, workload: 36, fatigue: 25, recovery: 84 },
      { day: "Day 10", date: "Aug 03", risk: 28, workload: 40, fatigue: 26, recovery: 82 },
      { day: "Day 20", date: "Aug 13", risk: 25, workload: 35, fatigue: 24, recovery: 88 },
      { day: "Day 30", date: "Aug 23", risk: 24, workload: 38, fatigue: 22, recovery: 86 },
    ],
    interventions: [],
    aiExplanation:
      "All metrics remain safely within nominal personal baselines. Workload and recovery are well balanced.",
    recommendedActions: ["Continue regular voluntary check-in schedule"],
  },
  {
    id: "P-5208",
    unit: "Echo Sector - Communications Hub",
    role: "Signals & Telemetry",
    riskScore: 56,
    trend: "+12 points / 14 days",
    trendDirection: "up",
    trendPoints: 12,
    status: "SUPPORT_RECOMMENDED",
    primaryFactor: "Extended Shift Length & High Workload",
    lastCheckIn: "Yesterday, 19:40 hrs",
    anonymizedHash: "SHA256:99f012cc...2a4",
    dutyDaysActive: 18,
    consecutiveNightShifts: 3,
    recoveryIndex: 52,
    sleepAvgHours: 5.8,
    fatigueScore: 64,
    workloadIndex: 72,
    deploymentDurationWeeks: 8,
    factors: [
      { name: "Shift Overtime", impact: 14, category: "workload", description: "Consecutive 12h shifts during communications upgrade" },
      { name: "Disrupted Recovery", impact: 8, category: "recovery", description: "Interrupted off-duty rest periods" },
    ],
    timeline30Days: [
      { day: "Day 1", date: "Jul 25", risk: 32, workload: 44, fatigue: 30, recovery: 82 },
      { day: "Day 10", date: "Aug 03", risk: 38, workload: 52, fatigue: 39, recovery: 74 },
      { day: "Day 20", date: "Aug 13", risk: 48, workload: 65, fatigue: 52, recovery: 60 },
      { day: "Day 30", date: "Aug 23", risk: 56, workload: 72, fatigue: 64, recovery: 52 },
    ],
    interventions: [],
    aiExplanation:
      "Moderate workload pressure detected from temporary overtime requirements. Early preventive intervention advised.",
    recommendedActions: [
      "Review communications duty shift roster",
      "Introduce staggered rest breaks during 12h shifts",
    ],
  },
];

export const UNIT_INTELLIGENCE: UnitIntelligence = {
  unitName: "CRPF 42nd Battalion — Central Zone",
  totalPersonnel: 1248,
  overallRisk: 48, // 48 / 100
  workloadPressure: 12, // +12%
  fatigueTrend: 8, // +8%
  nightDutyLoad: 14, // 14%
  extendedDeployment: 18, // 18%
  distribution: {
    stable: 72, // 72%
    watch: 6,
    supportRecommended: 18, // 18%
    priorityReview: 4, // 4%
    improving: 11, // 11%
  },
  aiInsight:
    "Unit fatigue indicators have increased over the past 14 days, primarily associated with increased night-duty load and reduced recovery periods.",
  commanderRecommendation:
    "Review workload distribution and recovery allocation across tactical sub-units to prevent acute fatigue accumulation.",
  welfareTrend: [
    { month: "Jan", risk: 38, workload: 45, fatigue: 36, recovery: 78 },
    { month: "Feb", risk: 41, workload: 48, fatigue: 40, recovery: 74 },
    { month: "Mar", risk: 40, workload: 46, fatigue: 38, recovery: 76 },
    { month: "Apr", risk: 44, workload: 52, fatigue: 42, recovery: 70 },
    { month: "May", risk: 49, workload: 58, fatigue: 49, recovery: 64 },
    { month: "Jun", risk: 46, workload: 54, fatigue: 44, recovery: 68 },
    { month: "Jul", risk: 45, workload: 50, fatigue: 42, recovery: 71 },
    { month: "Aug", risk: 48, workload: 56, fatigue: 47, recovery: 65 },
  ],
  workloadDistribution: [
    { range: "< 40 hrs/wk (Nominal)", count: 486, percentage: 39 },
    { range: "40 - 55 hrs/wk (Standard)", count: 412, percentage: 33 },
    { range: "55 - 70 hrs/wk (Elevated)", count: 262, percentage: 21 },
    { range: "> 70 hrs/wk (High)", count: 88, percentage: 7 },
  ],
  fatigueTrendWeekly: [
    { week: "Wk 1", avgFatigue: 36, nightHoursAvg: 14 },
    { week: "Wk 2", avgFatigue: 39, nightHoursAvg: 16 },
    { week: "Wk 3", avgFatigue: 43, nightHoursAvg: 20 },
    { week: "Wk 4", avgFatigue: 48, nightHoursAvg: 23 },
    { week: "Wk 5", avgFatigue: 47, nightHoursAvg: 22 },
  ],
  deploymentPressure: [
    { battalion: "Alpha Co (High Altitude)", deployedMonths: 8.5, riskIndex: 62 },
    { battalion: "Bravo Co (Urban Detail)", deployedMonths: 4.2, riskIndex: 44 },
    { battalion: "Charlie Co (Border Transit)", deployedMonths: 6.8, riskIndex: 54 },
    { battalion: "Delta Co (HQ & Reserve)", deployedMonths: 2.1, riskIndex: 28 },
  ],
  leaveUtilization: [
    { category: "Annual Leave", utilized: 68, pending: 32 },
    { category: "Casual Leave", utilized: 74, pending: 26 },
    { category: "Compensatory Rest", utilized: 58, pending: 42 },
  ],
};

export const AUDIT_LOGS: AuditLogItem[] = [
  {
    id: "LOG-9941",
    timestamp: "2026-08-23 20:45:12 UTC",
    actorRole: "Welfare Officer",
    actorId: "WO-Sharma",
    action: "View Personnel Detail Record",
    resource: "Personnel Record [P-1042]",
    ipHash: "10.48.12.92 (CRPF GovNet)",
    status: "Success",
    details: "Accessed SHAP explainability decomposition factors for welfare assessment triage.",
  },
  {
    id: "LOG-9940",
    timestamp: "2026-08-23 19:30:00 UTC",
    actorRole: "Unit Commander",
    actorId: "Cmdr-Verma",
    action: "View Unit Aggregate Analytics",
    resource: "Unit Intelligence [42nd Bn]",
    ipHash: "10.48.10.14 (CRPF GovNet)",
    status: "Success",
    details: "Reviewed Battalion Workload vs Fatigue Correlation (Aggregate data only, zero PII).",
  },
  {
    id: "LOG-9939",
    timestamp: "2026-08-23 18:12:44 UTC",
    actorRole: "Personnel (Self)",
    actorId: "P-1042",
    action: "Voluntary Wellness Check-In",
    resource: "Self Check-In Log",
    ipHash: "Encrypted Zero-Knowledge Token",
    status: "Success",
    details: "Logged daily subjective fatigue, sleep, and recovery rating. Encrypted at rest with AES-256-GCM.",
  },
  {
    id: "LOG-9938",
    timestamp: "2026-08-23 17:05:19 UTC",
    actorRole: "System Admin",
    actorId: "Sys-Admin",
    action: "AI Anomaly Threshold Recalibration",
    resource: "XGBoost / Isolation Forest Engine",
    ipHash: "10.48.0.2 (Secured Core)",
    status: "Audited",
    details: "Configured sensitivity hyperparameter for night duty load weighting to 0.72.",
  },
  {
    id: "LOG-9937",
    timestamp: "2026-08-23 14:22:10 UTC",
    actorRole: "Welfare Officer",
    actorId: "WO-Sharma",
    action: "Create Welfare Intervention",
    resource: "Intervention [INT-8492]",
    ipHash: "10.48.12.92 (CRPF GovNet)",
    status: "Success",
    details: "Initiated Workload Review and scheduled 7-Day / 30-Day outcome tracking for P-1042.",
  },
];

export const AI_PIPELINE_STEPS = [
  {
    step: 1,
    title: "Data Ingestion",
    subtitle: "Privacy-Preserving Telemetry",
    tech: "Secure Zero-Knowledge Ingestion",
    description: "Anonymized duty rosters, voluntary wellness logs, night shift hours, and leave utilization data ingested under strict RBAC.",
  },
  {
    step: 2,
    title: "Feature Engineering",
    subtitle: "Personalized Normalization",
    tech: "Rolling Baseline Windows",
    description: "Computes rolling 14/30-day cumulative fatigue indices, rest interval deviations, and individualized baseline drift ratios.",
  },
  {
    step: 3,
    title: "Risk Prediction",
    subtitle: "Multi-Model Ensemble",
    tech: "XGBoost / LightGBM",
    description: "Computes composite Welfare Risk Index (0-100) calibrated against organizational fatigue and operational indicators.",
  },
  {
    step: 4,
    title: "Trend Analysis",
    subtitle: "Longitudinal Modeling",
    tech: "Time-Series Analysis (ARIMA / LSTM)",
    description: "Monitors velocity of risk score changes over 14 and 30-day horizons to differentiate acute spikes from chronic fatigue trends.",
  },
  {
    step: 5,
    title: "Anomaly Detection",
    subtitle: "Outlier Identification",
    tech: "Isolation Forest",
    description: "Detects anomalous deviations from an individual's normal historical operational and recovery baselines without manual rules.",
  },
  {
    step: 6,
    title: "Explainable AI (XAI)",
    subtitle: "Transparent Factor Attribution",
    tech: "SHAP (SHapley Additive exPlanations)",
    description: "Decomposes risk score into granular contributors (Workload, Recovery, Night Shifts, Deployment) so decisions are never a black box.",
  },
  {
    step: 7,
    title: "Welfare Recommendation & Human Review",
    subtitle: "Actionable Human-in-the-Loop Triage",
    tech: "Decision Support System (DSS)",
    description: "Generates non-punitive, supportive recommendations for Welfare Officers. Final decisions always rest with human officers.",
  },
];

export const PRIVACY_PRINCIPLES = [
  {
    number: "01",
    title: "Consent & Voluntary Input",
    short: "Personnel control optional wellness data participation.",
    description:
      "All subjective wellness and fatigue check-ins are 100% voluntary. Personnel can opt in or out of subjective surveys at any time without adverse records.",
  },
  {
    number: "02",
    title: "Data Minimization",
    short: "Only necessary operational & recovery information is collected.",
    description:
      "We collect strictly the minimum data required to assess operational fatigue and workload risk. Zero invasive surveillance or private personal tracking.",
  },
  {
    number: "03",
    title: "Role-Based Access Control (RBAC)",
    short: "Users see only what their operational role strictly requires.",
    description:
      "Unit Commanders view only high-level unit aggregates. Only authorized Welfare Officers view actionable individual welfare indicators. Medical data is never pooled.",
  },
  {
    number: "04",
    title: "Pseudonymization & Cryptography",
    short: "Sensitive data is separated from direct identity via cryptographic tokens.",
    description:
      "All analytical processing operates on hashed synthetic identifiers (e.g., P-1042). Real identity mapping keys are stored in high-security hardware security modules.",
  },
  {
    number: "05",
    title: "Complete Auditability",
    short: "Every access to sensitive information is immutably logged.",
    description:
      "Every single profile view, parameter change, and intervention record is logged to an immutable audit trail for complete accountability and compliance inspection.",
  },
  {
    number: "06",
    title: "Human Oversight & Non-Punitive Mandate",
    short: "AI recommendations do not automatically trigger disciplinary decisions.",
    description:
      "SURAKSHA operates strictly as an early-warning support tool. The system is designed to support people — not punish them. No automated adverse actions ever exist.",
  },
];

export const EXPANSION_ROADMAP = [
  { step: "01", name: "CRPF Deployment", desc: "Central Reserve Police Force high-altitude & counter-insurgency battalions", status: "Primary Target" },
  { step: "02", name: "CAPFs Integration", desc: "BSF, CISF, ITBP, SSB, and Assam Rifles unified welfare analytics", status: "Phase 2" },
  { step: "03", name: "Armed Forces Adaptor", desc: "Indian Army, Navy, and Air Force operational resilience units", status: "Phase 3" },
  { step: "04", name: "State Police Forces", desc: "Metropolitan and state police command personnel welfare wings", status: "Phase 4" },
  { step: "05", name: "Disaster Response (NDRF)", desc: "National Disaster Response Force high-stress deployment tracking", status: "Phase 5" },
  { step: "06", name: "Other High-Stress Workforces", desc: "Paramedics, emergency medical workers, and critical infrastructure crews", status: "Vision" },
];
