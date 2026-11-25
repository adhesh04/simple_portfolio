export interface ProjectItem {
  id: string;
  name: string;
  category: "Flagship" | "Core Systems" | "Applied Engineering";
  shortDescription: string;
  tagline: string;
  dateRange: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  paperUrl?: string;
  technologies: string[];
  architectureHighlights: string[];
  keyContributions: string[];
  metrics?: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "emofocus-ai",
    name: "EmoFocus AI",
    category: "Flagship",
    tagline: "Real-Time Multimodal Attention Optimization & Cognitive Intervention Platform",
    shortDescription:
      "A real-time multimodal attention optimization platform combining computer vision, facial emotion recognition, digital behavior analysis, and reinforcement learning to deliver personalized cognitive interventions.",
    dateRange: "November 2025 – March 2025",
    featured: true,
    githubUrl: "https://github.com/adhesh04/EmoFocusAI.git",
    paperUrl: "https://ieeexplore.ieee.org/document/11416747",
    technologies: [
      "Python",
      "FastAPI",
      "PyTorch",
      "MediaPipe",
      "OpenCV",
      "DeepFace",
      "PostgreSQL",
      "Supabase",
      "LangChain",
      "ChromaDB",
      "Docker",
      "Azure Container Apps",
      "JWT Auth",
      "Ollama / LLaMA 3",
    ],
    architectureHighlights: [
      "Perception Layer: Real-time facial landmark attention and emotion extraction via MediaPipe, OpenCV, and DeepFace fused with digital interaction telemetry (tab-switching patterns).",
      "Decision Layer: Deep Contextual Multi-Armed Bandit with user embedding vectors, parameterized by a neural policy network trained using REINFORCE stochastic policy gradients.",
      "Reward Engineering: Novel logarithmic recovery-time reward function measuring post-intervention sustained focus restoration over time.",
      "Persistent Online Learning: Policy parameters adapt continuously across user sessions to support longitudinal personalization.",
      "Focus Advisor RAG Microservice: LangChain + ChromaDB + LLaMA 3.2 microservice with semantic chunking, HuggingFace embeddings (all-MiniLM-L6-v2), and strict guardrails.",
      "Production Deployment: Containerized with Docker and deployed to Microsoft Azure Container Apps with Supabase PostgreSQL and JWT authentication.",
    ],
    keyContributions: [
      "Architected the multimodal ML pipeline fusing computer vision and behavioral telemetry into a single contextual state vector.",
      "Formulated and implemented the Deep Contextual Bandit policy gradient algorithm with user embeddings for non-invasive focus restoration.",
      "Developed the Focus Advisor microservice with multi-layer guardrails (regex input filter, topic scanner, cited attribution).",
      "Underpins peer-reviewed IEEE research publication (March 2026).",
    ],
    metrics: [
      { label: "Architecture", value: "Multimodal RL + RAG" },
      { label: "Deployment", value: "Azure Container Apps" },
      { label: "Publication", value: "IEEE 2026 Core" },
    ],
  },
  {
    id: "financial-document-analyzer",
    name: "AI Financial Document Analyzer",
    category: "Flagship",
    tagline: "Multi-Agent Financial Document Intelligence System",
    shortDescription:
      "A distributed multi-agent system that parses complex corporate financial reports through sequential specialized AI agents to generate structured audit-grade risk and investment assessments.",
    dateRange: "Dec 2025 – Jan 2026",
    featured: true,
    githubUrl: "https://github.com/adhesh04/Financial_Document_Analyzer.git",
    technologies: [
      "FastAPI",
      "CrewAI",
      "Python",
      "Mistral LLM",
      "Redis",
      "Celery",
      "SQLite",
      "Docker",
      "Prompt Engineering",
      "RESTful APIs",
    ],
    architectureHighlights: [
      "4-Stage Sequential Agent Pipeline: Document Verifier -> Financial Analyst -> Risk Analyst -> Investment Strategist.",
      "Asynchronous Orchestration: Redis message broker and Celery distributed task queue decoupling long-running LLM workloads from HTTP request cycles.",
      "Document-Grounded Prompt Guardrails: Strict output constraints preventing hallucination and enforcing adherence strictly to provided document corpus.",
      "Audit Trail & Persistence: SQLite database schema storing processing lifecycle states, intermediate agent conclusions, and structured analyses.",
    ],
    keyContributions: [
      "Built resilient asynchronous processing pipeline supporting large document ingestion without HTTP timeouts.",
      "Engineered specialized agent personas with strict role-based separation of concerns and deterministic verification checks.",
      "Designed structured JSON output schemas consumed by downstream financial reporting services.",
    ],
    metrics: [
      { label: "Agent Pipeline", value: "4-Stage Sequential" },
      { label: "Concurrency", value: "Async Celery/Redis" },
      { label: "Guardrails", value: "Document-Grounded" },
    ],
  },
  {
    id: "bus-route-optimization",
    name: "Bus Route Optimization (BRO)",
    category: "Flagship",
    tagline: "Intelligent Public Transit Operations & Vehicle Routing Platform",
    shortDescription:
      "An intelligent transportation optimization platform focused on improving public transit route efficiency and minimizing operational costs.",
    dateRange: "2025",
    featured: true,
    githubUrl: "https://github.com/adhesh04/BRO.git",
    technologies: [
      "Google OR-Tools",
      "Vehicle Routing Problem (VRP)",
      "OpenStreetMap APIs",
      "Docker",
      "Microsoft Azure App Service",
      "Azure Resource Groups",
      "Python",
      "Geospatial Routing",
    ],
    architectureHighlights: [
      "1. Transportation & Routing Ingestion: Ingestion and parsing of public transit operational parameters, fleet capacity limits, station depots, and transit schedules.",
      "2. Geospatial Layer Integration: Dynamic integration with OpenStreetMap APIs to calculate real-world road network distance matrices, transit travel times, and spatial waypoint coordinates.",
      "3. Optimization Engine (Google OR-Tools & VRP): Mathematical modeling of transit network scheduling as a constrained Vehicle Routing Problem (VRP) to optimize route efficiency and minimize operational fleet expenditure.",
      "4. Optimized Routing Outputs: Synthesis and generation of deterministic routing schedules, reduced vehicle travel distance matrices, and transit dispatch itineraries.",
      "5. Docker Containerization: Isolated container packaging encapsulating mathematical solvers, geospatial libraries, and runtime dependencies for reproducible environments.",
      "6. Azure Cloud Deployment: End-to-end cloud infrastructure provisioned through Azure Resource Groups and deployed on Microsoft Azure App Service.",
    ],
    keyContributions: [
      "Formulated public transit fleet scheduling as a mathematical Vehicle Routing Problem (VRP) using Google OR-Tools.",
      "Integrated OpenStreetMap APIs for dynamic distance matrix evaluation across actual geographic transit networks.",
      "Containerized the complete optimization pipeline using Docker for production reproducibility.",
      "Architected the cloud deployment infrastructure end-to-end on Microsoft Azure App Service with Azure Resource Groups.",
    ],
    metrics: [
      { label: "Optimization Engine", value: "Google OR-Tools (VRP)" },
      { label: "Geospatial Layer", value: "OpenStreetMap APIs" },
      { label: "Cloud Deployment", value: "Azure App Service" },
    ],
  },
  {
    id: "realval",
    name: "RealVal — Real Estate Price Prediction",
    category: "Core Systems",
    tagline: "Machine Learning Property Valuation Engine",
    shortDescription:
      "A predictive machine learning web application estimating residential property valuations based on spatial features, structural attributes, and historical market dynamics.",
    dateRange: "Jan 2025 – Mar 2025",
    featured: false,
    githubUrl: "https://github.com/adhesh04/Real-Estate-Price-Prediction-System.git",
    technologies: ["Python", "Flask", "Scikit-Learn", "Random Forest", "HTML5", "CSS3", "JavaScript"],
    architectureHighlights: [
      "Predictive Engine: Supervised ensemble regression (Random Forest) trained on cleaned property transaction datasets.",
      "Interactive Interface: Dual prediction flow supporting house and plot valuations with immediate visual comparisons of actual vs. predicted metrics.",
      "Backend API: Lightweight Flask service exposing inference endpoints with input validation.",
    ],
    keyContributions: [
      "Conducted exploratory data analysis, feature engineering, and outlier removal to maximize regression accuracy.",
      "Engineered lightweight full-stack interface with real-time prediction feedback.",
    ],
  },
  {
    id: "empperks",
    name: "EmpPerks — Employee Rewards System",
    category: "Applied Engineering",
    tagline: "Enterprise Performance Tracking & Reward Redemption Portal",
    shortDescription:
      "A full-stack employee performance and rewards management system enabling managers to track peer recognition, record metric achievements, and administer incentive redemptions.",
    dateRange: "Nov 2024 – Dec 2024",
    featured: false,
    githubUrl: "https://github.com/adhesh04/Emp-Reward-Mng-System.git",
    technologies: ["Full-Stack Web", "MySQL", "JavaScript", "HTML/CSS", "Relational Modeling"],
    architectureHighlights: [
      "Relational Schema: Normalized MySQL database structure handling role-based permissions, points ledgers, and redemption logs.",
      "Management Interface: Centralized dashboard for evaluating employee metrics and approving reward disbursements.",
    ],
    keyContributions: [
      "Modeled transaction safety for employee point accruals and reward redemptions.",
      "Constructed administrative dashboards with responsive tabular analytics.",
    ],
  },
  {
    id: "hr-onboarding-automation",
    name: "HR Onboarding Automation",
    category: "Applied Engineering",
    tagline: "Enterprise Robotic Process Automation Pipeline",
    shortDescription:
      "An automated employee onboarding pipeline built using UiPath Robotic Enterprise Framework (REFramework) and Orchestrator Queues for zero-touch credential generation and dispatch.",
    dateRange: "2024",
    featured: false,
    githubUrl: "https://github.com/adhesh04/HR_Onboarding_Automation.git",
    technologies: ["UiPath REFramework", "Orchestrator Queues", "RPA", "PDF Automation", "SMTP Automation"],
    architectureHighlights: [
      "REFramework Architecture: State-machine-based transaction handling with built-in retry mechanisms and exception management.",
      "Orchestrator Queues: Scalable transaction distribution ensuring idempotent processing of new-hire records.",
      "Automated Dispatch: Automated generation of standardized employee ID assets and personalized offer packages emailed automatically.",
    ],
    keyContributions: [
      "Architected error-resilient automation workflow adhering to enterprise RPA governance standards.",
      "Eliminated manual data entry and document assembly bottlenecks in HR intake workflows.",
    ],
  },
];

export const additionalBuilds = [
  {
    name: "Ragbot — Telegram RAG Assistant",
    description: "Conversational question-answering assistant on Telegram integrating vector retrieval over custom domain documents with LLM reasoning.",
    url: "https://github.com/adhesh04/Ragbot-telegram-bot",
    tags: ["Telegram API", "RAG", "LLMs", "Python"],
  },
  {
    name: "Job Listings Tracker Automation",
    description: "Robust automated crawler and tracker scraping job listings across portals with structured data extraction (~5.8 MB codebase).",
    url: "https://github.com/adhesh04/Job-Lisitings-Tracker-Automation",
    tags: ["Automation", "Web Scraping", "Python", "Data Extraction"],
  },
  {
    name: "Flights Tracker Automation",
    description: "Practical scheduled automation script monitoring airline fares and alerting price deviations.",
    url: "https://github.com/adhesh04/Flights-Tracker-Automation",
    tags: ["Python", "Automation", "Alerting"],
  },
  {
    name: "Advanced RPA Practices Hub",
    description: "Comprehensive repository of advanced enterprise automation patterns including background processes, inter-process communication, and polyglot scripts.",
    url: "https://github.com/adhesh04/Advanced-Robotic-Process-Automation-Practices",
    tags: ["UiPath", "C#", "VB.NET", "Python", "REFramework"],
  },
];
