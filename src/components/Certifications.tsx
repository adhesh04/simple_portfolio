"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { certificationsData, additionalCredentials } from "@/data/certifications";

export default function Certifications() {
  const [showAllCredentials, setShowAllCredentials] = useState(false);

  const prominentCerts = certificationsData.filter((c) => c.prominent);
  const coreCerts = certificationsData.filter((c) => !c.prominent);

  return (
    <section id="certifications" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Industry Accreditations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
            Certifications & Architectural Credentials
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Officially verified competencies across AI system architecture, enterprise cloud,
            foundational prompt design, and relational database systems.
          </p>
        </div>

        {/* Tier 1: Prominent Accreditations (Claude Certified Architect & SAP GenAI Developer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {prominentCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl border-2 border-indigo-200/80 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-50/40 via-white to-zinc-50/40 dark:from-indigo-950/30 dark:via-zinc-900 dark:to-zinc-900 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-100/80 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Featured Architectural Credential</span>
                  </span>
                  <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 bg-white dark:bg-zinc-800 px-2 py-0.5 rounded border border-indigo-100 dark:border-indigo-800">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-100 mb-2 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills verified */}
                <div className="pt-4 border-t border-indigo-100 dark:border-indigo-900/60 flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-800 border border-indigo-100 dark:border-zinc-700 text-indigo-950 dark:text-indigo-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-indigo-900 dark:text-indigo-300 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium">{cert.statusText}</span>
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500">Official Specification</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2: Core Engineering Certifications Grid (AWS, Google, UiPath, Oracle SQL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {coreCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    {cert.issuer}
                  </span>
                  {cert.date && (
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      {cert.date}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                  {cert.name}
                </h4>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800 flex flex-wrap gap-1 mb-2">
                  {cert.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{cert.statusText || "Verified"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 3: Expandable Full Academic & Coursework Credentials */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/40 dark:bg-zinc-900/60 p-5">
          <button
            onClick={() => setShowAllCredentials(!showAllCredentials)}
            className="flex items-center justify-between w-full text-left font-medium text-sm text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>
                Additional Specialized Credentials & Coursework ({additionalCredentials.length})
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              {showAllCredentials ? "Collapse" : "View All"}
              {showAllCredentials ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </button>

          {showAllCredentials && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 animate-in fade-in duration-150">
              {additionalCredentials.map((cred, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 block mb-1">
                      {cred.issuer}
                    </span>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug mb-2">
                      {cred.name}
                    </div>
                  </div>

                  <div>
                    {cred.credentialId && (
                      <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                        ID: {cred.credentialId}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {cred.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-1 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
