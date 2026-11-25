import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adhesh Murali — Software Engineer | AI Engineer",
  description:
    "Personal engineering portfolio of Adhesh Murali. Software Engineer specializing in scalable backend architectures, production AI systems, LLM orchestration, and reinforcement learning. Claude Certified Architect (CCA-F) and IEEE published researcher.",
  keywords: [
    "Adhesh Murali",
    "Software Engineer",
    "AI Engineer",
    "Backend Developer",
    "Machine Learning Engineer",
    "Generative AI",
    "FastAPI",
    "PyTorch",
    "Node.js",
    "Claude Certified Architect",
    "KCSM",
    "EmoFocus AI",
    "IEEE Research",
  ],
  authors: [{ name: "Adhesh Murali", url: "https://github.com/adhesh04" }],
  creator: "Adhesh Murali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adhesh04.github.io",
    title: "Adhesh Murali — Software Engineer & AI Engineer",
    description:
      "Engineering portfolio of Adhesh Murali. Building scalable backend architectures, production AI systems, and reinforcement learning workflows.",
    siteName: "Adhesh Murali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhesh Murali — Software Engineer & AI Engineer",
    description:
      "Building intelligent systems. Engineering meaningful products. Explore projects, enterprise experience, and research publications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adhesh Murali",
    jobTitle: "Software Engineer & AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "KaarTech",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Rajalakshmi Engineering College",
    },
    url: "https://github.com/adhesh04",
    sameAs: [
      "https://github.com/adhesh04",
      "https://linkedin.com/in/adhesh-m-28399b257",
      "https://ieeexplore.ieee.org/document/11416747",
    ],
    knowsAbout: [
      "Backend Architecture",
      "Artificial Intelligence",
      "Generative AI",
      "Reinforcement Learning",
      "FastAPI",
      "Node.js",
      "MongoDB",
      "PyTorch",
    ],
  };

  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-indigo-100 dark:selection:bg-indigo-900/60 selection:text-indigo-900 dark:selection:text-indigo-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
