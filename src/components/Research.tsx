"use client";

import React from "react";
import {
  BookOpen,
  Brain,
  ArrowUpRight,
} from "lucide-react";
import { publicationData } from "@/data/publications";

export default function Research() {
  return (
    <section id="research" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Peer-Reviewed Academic Research
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
            Research & Publications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bridging theoretical reinforcement learning formulation with real-world multimodal system
            engineering.
          </p>
        </div>

        {/* Paper Feature Card */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          {/* Top Paper Metadata Strip */}
          <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-zinc-800 bg-gradient-to-r from-zinc-50 via-white to-indigo-50/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>{publicationData.venue}</span>
                </span>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Published: {publicationData.publishedDate}
                </span>
              </div>

              <a
                href={publicationData.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors self-start shadow-xs"
              >
                <span>View on IEEE Xplore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-950 dark:text-zinc-100 mb-3 leading-snug">
              {publicationData.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2">
              <span>IEEE Document ID: {publicationData.documentId}</span>
              <span>•</span>
              <span>Author: Adhesh Murali</span>
              <span>•</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">Peer Reviewed</span>
            </div>
          </div>

          {/* Abstract & Conceptual Model */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Abstract */}
            <div>
              <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase mb-2">
                Abstract & Contribution
              </h4>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50/80 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800">
                {publicationData.abstract}
              </p>
            </div>

            {/* Architecture Highlights / Mathematical Framing */}
            <div>
              <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase mb-3">
                Key Technical Innovations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {publicationData.keyContributions.map((contrib, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{contrib}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Implementation Breakdown (The 3 Pillars) */}
            <div className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800">
              <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase mb-4">
                Framework System Pipeline
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {publicationData.systemHighlights.map((sh, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                        <Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>{sh.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {sh.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Software Link */}
            <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="text-indigo-950 dark:text-indigo-200">
                <span className="font-semibold text-indigo-900 dark:text-indigo-300">Live Implementation: </span>
                This research serves as the mathematical foundation for the{" "}
                <span className="font-semibold">{publicationData.relatedProject.name}</span>{" "}
                production microservices.
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors shrink-0"
              >
                <span>Inspect Project Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
