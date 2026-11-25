"use client";

import React from "react";
import {
  GraduationCap,
  Trophy,
  Calendar,
  MapPin,
} from "lucide-react";
import { educationData, achievementsData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Academics & Honors
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-3">
            Education & Achievements
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Rigorous foundations in Computer Science Engineering, competitive programming, product
            innovation contests, and campus leadership.
          </p>
        </div>

        {/* 2-Column Layout: Left Education, Right Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    Undergraduate Degree
                  </span>
                  <div className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-semibold">
                    Expected Graduation: {educationData.graduationDate}
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-zinc-100 mb-1 leading-snug">
                {educationData.institution}
              </h3>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                {educationData.degree}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-5 pb-4 border-b border-zinc-200/70 dark:border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase">
                    Cumulative GPA (CGPA)
                  </span>
                  <span className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {educationData.cgpa}{" "}
                    <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">/ {educationData.cgpaScale}</span>
                  </span>
                </div>
              </div>

              {/* Core Coursework */}
              <div>
                <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase block mb-2.5">
                  Core Foundations Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Leadership List */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Competitions, Awards & Leadership Roles</span>
            </h3>

            <div className="grid grid-cols-1 gap-3.5">
              {achievementsData.map((item, idx) => {
                const isAward = item.category === "Award";
                const isCompetition = item.category === "Competition";

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                            isAward
                              ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/70"
                              : isCompetition
                              ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/70"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          }`}
                        >
                          {item.category}
                        </span>
                        <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                        {item.organization}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0 self-start sm:self-center">
                      {item.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
