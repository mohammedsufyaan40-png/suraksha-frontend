import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastContainer from "@/components/ToastContainer";
import CreateInterventionModal from "@/components/Modals/CreateInterventionModal";
import ConfidentialSupportModal from "@/components/Modals/ConfidentialSupportModal";
import ExportReportModal from "@/components/Modals/ExportReportModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SURAKSHA | System for Uniformed Resilience, Analytics & Stress Health Assessment",
  description:
    "Privacy-first AI-enabled welfare support and early-warning platform for uniformed personnel. Proposed solution for SIH Problem Statement 26186 (Ministry of Home Affairs / CRPF).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-black">
        <AppProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <ToastContainer />
          <CreateInterventionModal />
          <ConfidentialSupportModal />
          <ExportReportModal />
        </AppProvider>
      </body>
    </html>
  );
}
