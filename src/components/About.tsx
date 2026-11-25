"use client";

import React from "react";
import {
  Server,
  Sparkles,
  GitPullRequest,
  Compass,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { educationData } from "@/data/education";

export default function About() {
  const principles = [
    {
      icon: Server,
      title: "Backend Engineering & Systems Rigor",
      description:
        "I approach software with an architectural focus—designing clean RESTful interfaces, schema-validated datastores, asynchronous queue workers (Celery/Redis), and fault-tolerant microservices.",
    },
    {
      icon: Sparkles,
      title: "Production-Grade AI & Agentic Systems",
      description:
        "Rather than treating AI as simple API wrappers, I build grounded cognitive systems: contextual bandits with policy gradient training, multi-agent pipelines with strict output constraints, and RAG retrieval with cited attributions.",
    },
    {
      icon: Compass,
      title: "Systems-Level Product Intuition",
      description:
        "Leading the KCSM repository build at KaarTech taught me to balance technical trade-offs against user friction. I care about how APIs translate to responsive UX and how telemetry shapes iterative roadmap decisions.",
    },
    {
      icon: GitPullRequest,
      title: "End-to-End Ownership (Research to Deploy)",
      description:
        "Comfortable taking ambiguous problems from early mathematical formulation and literature research through containerization, CI pipelines, and cloud production rollouts.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Engineering Perspective
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1 mb-4">
            A little about me.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I am a Computer Science undergraduate at{" "}
            <span className="font-semibold text-zinc-900 dark:text-white">Rajalakshmi Engineering College, Chennai</span>,
            graduating in May 2026. My focus lies at the convergence of resilient backend engineering,
            applied machine learning, and AI-enabled product architectures.
          </p>
        </div>

        {/* Core Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              My journey into software engineering began with foundational systems: writing C and Java,
              modeling relational databases, and studying algorithms. When exploring machine learning,
              I found myself pulled toward end-to-end architectures—how mathematical models translate
              into robust services that real users interact with reliably.
            </p>
            <p>
              During my six-month internship as an{" "}
              <strong className="font-semibold text-zinc-900 dark:text-white">
                AI Forward Deployed Engineer at KaarTech
              </strong>
              , I led a team of three interns to architect, build, and deploy an enterprise AI Use Case
              Repository (<strong className="font-semibold text-zinc-900 dark:text-white">KCSM</strong>) into live
              production in under one month. Working across MEAN stack services, MongoDB Atlas Vector Search,
              AWS Bedrock, and Model Context Protocol (MCP) connectors reinforced my appreciation for
              resilient system design and rapid execution under real enterprise constraints.
            </p>
            <p>
              Parallel to industry software delivery, I authored peer-reviewed research published by{" "}
              <strong className="font-semibold text-zinc-900 dark:text-white">IEEE (March 2026)</strong> on multimodal
              distraction detection. Instead of passive computer vision tracking, I formulated an online
              contextual reinforcement learning framework using Deep Contextual Bandits and a logarithmic
              recovery-time reward to deliver personalized cognitive interventions—now deployed as{" "}
              <a
                href="#projects"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium underline underline-offset-4"
              >
                EmoFocus AI
              </a>
              .
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm pt-2">
              Today, I am looking to join a high-caliber engineering team as a{" "}
              <strong className="text-zinc-900 dark:text-white">Software Engineer</strong>,{" "}
              <strong className="text-zinc-900 dark:text-white">Backend Developer</strong>, or{" "}
              <strong className="text-zinc-900 dark:text-white">AI Engineer</strong> where I can build dependable,
              high-throughput systems and push the frontiers of production intelligent software.
            </p>
          </div>

          {/* Quick Engineering Factsheet */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Candidate Engineering Profile</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Degree & Discipline</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">B.E. Computer Science</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Institution</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">Rajalakshmi Eng. College</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Graduation</span>
                  <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">May 2026</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Academic Standing</span>
                  <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
                    {educationData.cgpa} / {educationData.cgpaScale} CGPA
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Enterprise Internship</span>
                  <span className="font-medium text-indigo-900 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded">
                    KaarTech (6 Months)
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500 dark:text-zinc-400">Primary Core Tech</span>
                  <span className="font-mono text-zinc-800 dark:text-zinc-200 text-right">Python • FastAPI • TypeScript • Node.js</span>
                </div>
              </div>
            </div>

            {/* What I Value Box */}
            <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-2">
              <span className="font-semibold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                Engineering Values
              </span>
              <p className="text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed">
                Deterministic outputs over opaque black-boxes. Resilient database schemas over brittle
                ad-hoc storage. Thoughtful software architecture over trendy boilerplate.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 pt-12 border-t border-zinc-200/70 dark:border-zinc-800/70">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-50/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
