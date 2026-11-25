"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText, Check, Copy, Sun, Moon } from "lucide-react";
import { profileData, RESUME_PATH, RESUME_FILENAME } from "@/data/profile";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-mono font-semibold text-xs tracking-wider transition-transform group-hover:scale-105 shadow-2xs">
              {profileData.monogram}
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline-block">
                Software & AI Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-medium text-zinc-600 dark:text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600 transition-transform -rotate-12 hover:rotate-0" />
              )}
            </button>

            <button
              onClick={handleCopyEmail}
              title="Copy Email Address"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/70 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white px-2.5 py-1.5 rounded-md transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white dark:text-zinc-950 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white px-3.5 py-1.5 rounded-md transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600" />
              )}
            </button>

            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="inline-flex items-center gap-1 text-xs font-medium text-white dark:text-zinc-950 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white px-2.5 py-1.5 rounded-md transition-all sm:hidden"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-md text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-2">
            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="flex items-center justify-center gap-2 w-full text-sm font-medium text-white dark:text-zinc-950 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white py-2.5 rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 w-full text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/80 dark:hover:bg-zinc-700 py-2 rounded-md transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span>Copy Email: {profileData.email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
