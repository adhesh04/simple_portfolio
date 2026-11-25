"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Users,
  CheckCircle,
  Calendar,
  MapPin,
  ChevronRight,
  Database,
  Layers,
  Sparkles,
  Bot,
  Activity,
  Terminal,
} from "lucide-react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);

  const exp = experienceData[0]; // KaarTech

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Work History & Industry Delivery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hands-on engineering contributions shipping production-ready enterprise software,
            architecting AI pipelines, and leading cross-functional intern teams.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          {/* Top Banner with Company, Role, and Meta */}
          <div className="p-6 sm:p-8 border-b border-zinc-200/80 dark:border-zinc-800 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60">
                    Enterprise SaaS & AI Delivery
                  </span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Production Live</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-100">
                  {exp.role}
                </h3>
                <div className="text-base font-semibold text-zinc-800 dark:text-zinc-300 mt-0.5">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Leadership Callout */}
            <div className="mt-5 p-3.5 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 flex items-start gap-3 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200">
              <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-indigo-900 dark:text-indigo-300">Leadership Scope: </span>
                {exp.leadership}
              </div>
            </div>
          </div>

          {/* Core Body: Contributions Breakdown */}
          <div className="p-6 sm:p-8 space-y-6">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
              Key Engineering Milestones & Architecture Contributions
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {exp.highlights.map((highlight, idx) => {
                const isSelected = activeHighlightIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-indigo-400 dark:border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/30 shadow-xs"
                        : "border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                    onClick={() => setActiveHighlightIndex(isSelected ? null : idx)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs font-semibold shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <div>
                          <h5 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                            {highlight.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform shrink-0 mt-1 ${
                          isSelected ? "rotate-90 text-indigo-600 dark:text-indigo-400" : ""
                        }`}
                      />
                    </div>

                    {/* Technologies tags for this highlight */}
                    <div className="mt-3.5 pl-9 flex flex-wrap gap-1.5">
                      {highlight.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Stack Ribbon */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800">
              <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-3">
                Full Production Technologies Touched at KaarTech
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
