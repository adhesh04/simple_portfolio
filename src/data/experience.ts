export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  employmentType: string;
  summary: string;
  leadership: string;
  highlights: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "KaarTech",
    role: "AI Forward Deployed Engineer — Intern",
    location: "Chennai, India",
    duration: "January 2026 – June 2026",
    employmentType: "Internship (6 Months)",
    summary:
      "Led full-lifecycle development and production rollout of KCSM—an enterprise AI Use Case Repository SaaS platform. Worked across the entire engineering lifecycle from requirements and system design to frontend, backend, MongoDB database modeling, AI microservices, telemetry, and live production deployment.",
    leadership:
      "Led a multidisciplinary engineering team of 3 interns supported by a senior engineer, delivering a production-ready enterprise repository scaling to 1,000+ records in under one month.",
    highlights: [
      {
        title: "Enterprise AI-Native Repository (KCSM) Delivered to Production",
        description:
          "Led a team of 3 interns to design, develop, test, and ship an AI-Native Use Case Repository into live enterprise production in under one month. Developed the full-stack architecture using Angular, TypeScript, Node.js, Express, and MongoDB with secure JWT authentication.",
        technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      },
      {
        title: "Hybrid Semantic Search & AI-Powered Content Workflows",
        description:
          "Engineered intelligent search infrastructure pairing keyword indexing with MongoDB Atlas Vector Search, AWS Bedrock Titan Embeddings, and Anthropic Claude Sonnet. Researched and prototyped AI-assisted automated authoring workflows for high-quality use case documentation.",
        technologies: ["MongoDB Atlas Vector Search", "AWS Bedrock", "Claude Sonnet", "Prompt Engineering"],
      },
      {
        title: "Voice Assistant & MCP Enterprise Integrations",
        description:
          "Developed a real-time voice-enabled AI assistant integrating ElevenLabs with AWS Bedrock. Architected a Model Context Protocol (MCP) connector for Microsoft Teams to expose platform use cases and insights directly within enterprise collaboration channels.",
        technologies: ["Model Context Protocol (MCP)", "Microsoft Teams", "ElevenLabs", "AWS Bedrock"],
      },
      {
        title: "Telemetry Pipelines & Product Analytics",
        description:
          "Designed and implemented telemetry pipelines for tracking user interactions, AI adoption patterns, and search relevance. Architected two post-launch dashboards (user-facing discovery catalog & admin operations telemetry) based on MongoDB schema analysis.",
        technologies: ["Telemetry Architecture", "Data Modeling", "Product Analytics", "MongoDB Compass/MONGOSH"],
      },
      {
        title: "Agentic Workflows: Predictive Fleet Intelligence & Self-Healing POCs",
        description:
          "Engineered an end-to-end Predictive Maintenance and Fleet Intelligence POC using Lyzr, Superflow workflow managers, and Supabase telemetry via MCP. Optimized multi-agent interactions to minimize latency. Collaborated on IT operations self-healing workflows and GTM planning.",
        technologies: ["Lyzr Agentic Framework", "Supabase", "MCP", "Agentic Orchestration", "Enterprise Claude Personas"],
      },
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Angular",
      "TypeScript",
      "MongoDB",
      "AWS Bedrock",
      "Claude Sonnet",
      "MongoDB Atlas Vector Search",
      "Model Context Protocol (MCP)",
      "Supabase",
      "ElevenLabs",
      "Lyzr",
      "Docker",
      "Postman",
      "Git",
    ],
  },
];
