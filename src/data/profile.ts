export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface ProfileData {
  name: string;
  monogram: string;
  titles: string[];
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    portfolioOld?: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  targetRoles: string[];
}

export const RESUME_PATH = "/resume/Adhesh_Murali_Resume.pdf";
export const RESUME_FILENAME = "Adhesh_Murali_Resume.pdf";

export const profileData: ProfileData = {
  name: "Adhesh Murali",
  monogram: "AM",
  titles: ["SOFTWARE ENGINEER", "AI ENGINEER"],
  headline: "Building intelligent systems. Engineering meaningful products.",
  subheadline:
    "I'm Adhesh Murali, a software engineer specializing in scalable backend architectures, AI-powered applications, and intelligent systems. I engineer across the entire stack—from resilient API pipelines and database schemas to production-ready agentic and reinforcement learning workflows.",
  summary:
    "Software Engineer specializing in backend engineering and AI systems, with practical experience designing and deploying production-grade applications across REST APIs, LLMs, RAG, multi-agent systems, and cloud infrastructure. Hands-on industry experience shipping a live enterprise SaaS platform at KaarTech, recognized as a Claude Certified Architect (CCA-F), and IEEE-published researcher.",
  location: "Chennai, Tamil Nadu, India",
  email: "adhesh04@gmail.com",
  phone: "+91 7550105243",
  socials: {
    github: "https://github.com/adhesh04",
    linkedin: "https://linkedin.com/in/adhesh-m-28399b257",
    email: "mailto:adhesh04@gmail.com",
    portfolioOld: "http://adhesh04.pythonanywhere.com/",
  },
  metrics: [
    {
      label: "Industry Experience",
      value: "6 Mos",
      description: "AI Forward Deployed Engineer Intern at KaarTech shipping enterprise SaaS",
    },
    {
      label: "Team Leadership",
      value: "3 Interns",
      description: "Led engineering team shipping KCSM repository into production in < 1 month",
    },
    {
      label: "Research Impact",
      value: "IEEE '26",
      description: "Published author in multimodal attention optimization & reinforcement learning",
    },
    {
      label: "Enterprise Architecture",
      value: "CCA-F",
      description: "Claude Certified Architect & SAP Certified Generative AI Developer",
    },
  ],
  targetRoles: [
    "Software Development Engineer",
    "Software Engineer",
    "Backend Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
  ],
};
