"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  ExternalLink,
  Cpu,
  Layers,
  Database,
  Terminal,
} from "lucide-react";
import { profileData, RESUME_PATH, RESUME_FILENAME } from "@/data/profile";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-zinc-200/70 dark:border-zinc-800 technical-grid overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status / Role Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
                SOFTWARE ENGINEER | AI ENGINEER
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                Chennai, India
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.15] mb-5">
              Building intelligent systems.{" "}
              <span className="text-zinc-500 dark:text-zinc-400 font-medium">Engineering meaningful products.</span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 max-w-2xl">
              I&apos;m <span className="font-semibold text-zinc-900 dark:text-white">Adhesh Murali</span>, a software
              engineer interested in building scalable backend systems, AI-powered applications, and
              intelligent products. I enjoy working across the engineering stack, from designing APIs
              and architectures to developing and deploying production-ready AI systems.
            </p>

            {/* Background highlight: KaarTech & IEEE */}
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl bg-white/70 dark:bg-zinc-900/70 p-3.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800">
              Recently shipped an enterprise AI Use Case Repository into live production as an{" "}
              <span className="font-medium text-zinc-900 dark:text-white">AI Forward Deployed Engineer Intern at KaarTech</span>,
              and published peer-reviewed research in{" "}
              <span className="font-medium text-zinc-900 dark:text-white">IEEE (2026)</span> on multimodal attention
              optimization and contextual reinforcement learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-950 text-sm font-medium transition-all shadow-xs"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium border border-zinc-300 dark:border-zinc-700 transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/70 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-sans">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                    <span>adhesh04@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Target Roles */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.email}
                  className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>

              <div className="text-xs text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-1.5 items-center">
                <span className="text-zinc-400 dark:text-zinc-500">Target Roles:</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">Software Engineer</span>
                <span>•</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">Backend Developer</span>
                <span>•</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">AI / ML Engineer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineered Architecture / Systems Snapshot */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">systems-architecture.ts</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  Production Verified
                </span>
              </div>

              {/* Architecture Pipeline Stack */}
              <div className="p-4 sm:p-5 space-y-3.5 text-xs">
                {/* Layer 1: Perception & Ingestion */}
                <div className="p-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 hover:bg-zinc-50 dark:hover:bg-zinc-950/70 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-medium text-zinc-900 dark:text-zinc-100">
                      <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>01. Ingestion & Perception Layer</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">FastAPI / OpenCV</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                    MediaPipe 60Hz facial tracking, affective valence, and interaction telemetry
                    pipelined into normalized contextual state tensors.
                  </p>
                </div>

                {/* Layer 2: Decision & Multi-Agent Engine */}
                <div className="p-3 rounded-lg border border-indigo-200/80 dark:border-indigo-800/80 bg-indigo-50/30 dark:bg-indigo-950/20 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-medium text-indigo-950 dark:text-indigo-200">
                      <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>02. Policy & Agentic Engine</span>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-300">PyTorch / CrewAI</span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    Contextual Multi-Armed Bandit with REINFORCE user embeddings; sequential multi-agent
                    verification with strict document grounding.
                  </p>
                </div>

                {/* Layer 3: Vector & Data Persistence */}
                <div className="p-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 hover:bg-zinc-50 dark:hover:bg-zinc-950/70 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-medium text-zinc-900 dark:text-zinc-100">
                      <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>03. Vector RAG & Persistence</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Atlas Vector / Supabase</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                    Hybrid semantic search with Bedrock Titan + Claude Sonnet, ChromaDB MMR retrieval,
                    and PostgreSQL / MongoDB schema indexing.
                  </p>
                </div>

                {/* Layer 4: Enterprise Orchestration & Cloud */}
                <div className="p-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 hover:bg-zinc-50 dark:hover:bg-zinc-950/70 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-medium text-zinc-900 dark:text-zinc-100">
                      <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>04. Cloud & Interoperability</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Azure / Docker / MCP</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                    Containerized microservices deployed on Azure Container Apps; Model Context Protocol
                    (MCP) connectors for Microsoft Teams.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="grid grid-cols-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-950/80 text-center py-2.5 px-3">
                <div className="border-r border-zinc-200/80 dark:border-zinc-800">
                  <div className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100">CCA-F</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Claude Architect</div>
                </div>
                <div className="border-r border-zinc-200/80 dark:border-zinc-800">
                  <div className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100">1,000+</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Live Repo Records</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100">IEEE &apos;26</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Published Author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
