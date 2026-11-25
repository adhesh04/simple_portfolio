"use client";

import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  BookOpen,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FolderGit2,
} from "lucide-react";
import { projectsData, additionalBuilds } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Flagship" | "Core Systems" | "Applied Engineering">("All");
  const [showAdditional, setShowAdditional] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("emofocus-ai");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Engineered Systems & Software Builds
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Production systems, mathematical optimization models, and multi-agent AI pipelines
              built with complete architectural depth.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200/80 dark:border-zinc-800 text-xs font-medium self-start">
            {(["All", "Flagship", "Core Systems", "Applied Engineering"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  filter === tab
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Projects Showcase (EmoFocus AI, Financial Document Analyzer, Bus Route Optimization) */}
        <div className="space-y-8 mb-12">
          {filteredProjects
            .filter((p) => p.featured)
            .map((project, idx) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs overflow-hidden transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  {/* Top Bar */}
                  <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-zinc-800 bg-gradient-to-r from-zinc-50/70 via-white to-zinc-50/30 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                          {project.category.toUpperCase()} • 0{idx + 1}
                        </span>
                        {project.paperUrl && (
                          <a
                            href={project.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                          >
                            <BookOpen className="w-3 h-3" />
                            <span>IEEE 2026 Core Paper</span>
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {project.dateRange}
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-100 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
                      {project.shortDescription}
                    </p>

                    {/* Metrics Badges */}
                    {project.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-zinc-200/60 dark:border-zinc-800">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800"
                          >
                            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block uppercase">
                              {m.label}
                            </span>
                            <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 font-mono">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Architecture & Contributions */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center justify-between w-full text-left text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span>Detailed System Architecture & Workflow Breakdown</span>
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-indigo-600 dark:text-indigo-400 font-sans normal-case">
                          {isExpanded ? "Collapse" : "Expand Architecture"}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                          {project.architectureHighlights.map((arch, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50/70 dark:bg-zinc-950/40 p-3 rounded-lg border border-zinc-200/60 dark:border-zinc-800"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-2"></span>
                              <span className="leading-relaxed">{arch}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Key Contributions */}
                    <div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block mb-3">
                        Engineering Contributions
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {project.keyContributions.map((contrib, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{contrib}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Compact Grid for Remaining Projects (RealVal, EmpPerks, HR Onboarding) */}
        <div className="mb-12">
          <h4 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase mb-5">
            Core Systems & Applied Engineering Builds
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {project.category}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label={`${project.name} GitHub Repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <h5 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-zinc-100 mb-1">
                      {project.name}
                    </h5>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Architecture bullet points */}
                    <div className="space-y-1.5 mb-5 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.architectureHighlights.map((arch, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 mt-1.5"></span>
                          <span className="leading-relaxed">{arch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Collapsible Additional Builds */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/60 dark:bg-zinc-900/60 p-5">
          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="flex items-center justify-between w-full text-left font-medium text-sm text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Additional Software Builds & Automation Tools ({additionalBuilds.length})</span>
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              {showAdditional ? "Hide" : "Show All"}
              {showAdditional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          {showAdditional && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 animate-in fade-in duration-150">
              {additionalBuilds.map((build, bIdx) => (
                <div
                  key={bIdx}
                  className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h6 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                        {build.name}
                      </h6>
                      <a
                        href={build.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                        aria-label={build.name}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                      {build.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {build.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
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
