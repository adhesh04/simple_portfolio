export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: "Core" | "Proficient" | "Foundational";
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across production systems, research architectures, and systems engineering",
    skills: [
      { name: "Python", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "JavaScript", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Foundational" },
      { name: "PL/SQL", level: "Foundational" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Distributed backends, high-throughput asynchronous services, authentication, and microservices",
    skills: [
      { name: "FastAPI", level: "Core", highlight: true },
      { name: "Node.js", level: "Core", highlight: true },
      { name: "Express.js", level: "Core" },
      { name: "Flask", level: "Proficient" },
      { name: "RESTful API Design", level: "Core" },
      { name: "JWT Authentication", level: "Proficient" },
      { name: "Celery & Task Queues", level: "Proficient" },
      { name: "Postman API Testing", level: "Proficient" },
    ],
  },
  {
    title: "Generative AI & Agentic Systems",
    description: "Production LLM orchestration, multi-agent frameworks, RAG pipelines, and open protocols",
    skills: [
      { name: "Model Context Protocol (MCP)", level: "Core", highlight: true },
      { name: "Multi-Agent Systems", level: "Core", highlight: true },
      { name: "CrewAI", level: "Core" },
      { name: "LangChain", level: "Core" },
      { name: "RAG & Vector Retrieval", level: "Core", highlight: true },
      { name: "Prompt Engineering & Guardrails", level: "Core" },
      { name: "Ollama (LLaMA 3 / Mistral)", level: "Proficient" },
      { name: "AWS Bedrock", level: "Proficient" },
      { name: "Claude Sonnet Personas", level: "Proficient" },
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    description: "Applied reinforcement learning, real-time perception, and classical predictive modeling",
    skills: [
      { name: "PyTorch", level: "Core", highlight: true },
      { name: "Contextual Multi-Armed Bandits", level: "Core", highlight: true },
      { name: "REINFORCE Policy Gradient", level: "Core" },
      { name: "MediaPipe", level: "Core" },
      { name: "OpenCV", level: "Core" },
      { name: "DeepFace", level: "Proficient" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Random Forest Regressors", level: "Proficient" },
      { name: "Google OR-Tools (VRP)", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Vector databases, relational persistence, in-memory caching, and document stores",
    skills: [
      { name: "PostgreSQL", level: "Core", highlight: true },
      { name: "MongoDB & Atlas", level: "Core", highlight: true },
      { name: "Supabase", level: "Core" },
      { name: "Redis", level: "Proficient" },
      { name: "ChromaDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerization, cloud infrastructure, managed services, and CI/CD coordination",
    skills: [
      { name: "Microsoft Azure (Container Apps, App Service)", level: "Core", highlight: true },
      { name: "Docker", level: "Core", highlight: true },
      { name: "AWS Cloud (Bedrock, Titan)", level: "Proficient" },
      { name: "Git & GitHub", level: "Core" },
      { name: "Linux / Bash", level: "Proficient" },
      { name: "Google Cloud Platform", level: "Foundational" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern component-driven web interfaces, enterprise dashboards, and mobile views",
    skills: [
      { name: "Angular", level: "Proficient", highlight: true },
      { name: "HTML5 & Semantic Web", level: "Core" },
      { name: "CSS3 & Tailwind CSS", level: "Core" },
      { name: "Responsive UI/UX Architecture", level: "Core" },
      { name: "Flutter (Mobile & PC)", level: "Foundational" },
    ],
  },
  {
    title: "Core CS Foundations",
    description: "Rigorous academic computer science principles verified through coursework and lab repositories",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core" },
      { name: "Object-Oriented Design (OOD)", level: "Core" },
      { name: "Database Management Systems (DBMS)", level: "Core" },
      { name: "Operating Systems (Linux/Windows)", level: "Core" },
      { name: "Computer Networks & Security", level: "Proficient" },
      { name: "Algorithm Design & Complexity", level: "Proficient" },
    ],
  },
];
