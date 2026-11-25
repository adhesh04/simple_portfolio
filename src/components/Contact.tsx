"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profileData, RESUME_PATH, RESUME_FILENAME } from "@/data/profile";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white dark:bg-zinc-950 technical-dots">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Box */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900/50 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/70 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Open to Engineering & AI Opportunities</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4 max-w-2xl mx-auto">
            Have an opportunity or an interesting problem to solve?
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
            I&apos;m always interested in connecting with people building thoughtful software products
            and intelligent systems. If you&apos;re hiring or would like to discuss an engineering
            opportunity, feel free to reach out.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-950 font-medium text-sm transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Send Me an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm border border-zinc-300 dark:border-zinc-700 transition-all shadow-2xs"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Copy: {profileData.email}</span>
                </>
              )}
            </button>

            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-950 dark:text-indigo-200 font-medium text-sm border border-indigo-200 dark:border-indigo-800 transition-all"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Contact Details & Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-200/70 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex flex-col items-center">
              <span className="text-zinc-400 dark:text-zinc-500 font-mono uppercase mb-1">Direct Email</span>
              <a
                href={`mailto:${profileData.email}`}
                className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {profileData.email}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-zinc-400 dark:text-zinc-500 font-mono uppercase mb-1">Professional Network</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-zinc-400 dark:text-zinc-500 font-mono uppercase mb-1">Location</span>
              <div className="flex items-center gap-1 font-medium text-zinc-900 dark:text-zinc-100">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              {profileData.name} | Designed and built with care.
            </div>
            <div>
              © {currentYear} All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
