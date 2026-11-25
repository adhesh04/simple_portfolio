"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Bot,
  Cpu,
  Database,
  Cloud,
  Layout,
  GraduationCap,
} from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Backend & Systems": Server,
  "Generative AI & Agentic Systems": Bot,
  "Machine Learning & Computer Vision": Cpu,
  "Databases & Storage": Database,
  "Cloud & DevOps": Cloud,
  "Frontend Engineering": Layout,
  "Core CS Foundations": GraduationCap,
};

export default function Skills() {
  const [highlightCoreOnly, setHighlightCoreOnly] = useState(false);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Technical Proficiencies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
              Skills & Engineering Stack
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Curated across production delivery at KaarTech, peer-reviewed research, and hands-on systems development.
              Categorized with honest proficiency levels—no arbitrary percentage meters.
            </p>
          </div>

          {/* Quick Legend & Toggle */}
          <div className="flex items-center gap-3 p-1.5 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs self-start">
            <span className="text-zinc-500 dark:text-zinc-400 font-mono pl-1">Filter:</span>
            <button
              onClick={() => setHighlightCoreOnly(false)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                !highlightCoreOnly
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              All Stack
            </button>
            <button
              onClick={() => setHighlightCoreOnly(true)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                highlightCoreOnly
                  ? "bg-indigo-600 text-white font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Core & Production Only
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            const displayedSkills = highlightCoreOnly
              ? category.skills.filter((s) => s.level === "Core" || s.highlight)
              : category.skills;

            return (
              <div
                key={category.title}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal mb-4 min-h-[32px]">
                    {category.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {displayedSkills.map((skill) => {
                      const isCore = skill.level === "Core";
                      const isFoundational = skill.level === "Foundational";

                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-mono transition-all ${
                            isCore
                              ? "bg-indigo-50/80 dark:bg-indigo-950/70 text-indigo-950 dark:text-indigo-200 border border-indigo-200/80 dark:border-indigo-800 font-medium"
                              : isFoundational
                              ? "bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800"
                              : "bg-zinc-100/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-transparent"
                          }`}
                        >
                          {skill.name}
                          {isCore && (
                            <span
                              className="ml-1 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                              title="Core Production Proficiency"
                            ></span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom tier indicator */}
                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  <span>{displayedSkills.length} tools</span>
                  <span>Verified Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend Footnote */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <strong className="text-zinc-700 dark:text-zinc-300">Core:</strong> Shipped in production / primary stack
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <strong className="text-zinc-700 dark:text-zinc-300">Proficient:</strong> Academic research & project builds
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-zinc-400 dark:border-zinc-600"></span>
              <strong className="text-zinc-700 dark:text-zinc-300">Foundational:</strong> Academic & coursework exposure
            </span>
          </div>

          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            Adheres strictly to verified knowledge profile
          </span>
        </div>
      </div>
    </section>
  );
}
