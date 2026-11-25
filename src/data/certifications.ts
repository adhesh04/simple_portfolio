export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  featured: boolean;
  prominent: boolean;
  date?: string;
  credentialId?: string;
  description: string;
  skills: string[];
  issuerBadge?: string;
  statusText?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cca-f",
    name: "Claude Certified Architect – Foundations (CCA-F)",
    issuer: "Anthropic / Claude",
    featured: true,
    prominent: true,
    description:
      "Advanced certification verifying architectural proficiency in designing, orchestrating, and deploying enterprise-grade Claude LLM applications, prompt workflows, and context protocols.",
    skills: ["Enterprise Claude Architecture", "LLM Orchestration", "Prompt Engineering", "System Design"],
    statusText: "Verified Credential",
  },
  {
    id: "sap-genai",
    name: "SAP Certified – SAP Generative AI Developer",
    issuer: "SAP",
    featured: true,
    prominent: true,
    description:
      "Industry credential validating expertise in developing generative AI applications, prompt strategies, and AI-driven extensions within enterprise software and SAP business environments.",
    skills: ["Enterprise Generative AI", "SAP Ecosystem", "Enterprise Automation", "Business AI"],
    statusText: "Verified Credential",
  },
  {
    id: "aws-cloud-architect",
    name: "AWS Academy Graduate — Cloud Architecting / AWS Cloud Architect (Basic)",
    issuer: "Amazon Web Services (AWS)",
    featured: true,
    prominent: false,
    date: "November 2023",
    description:
      "Comprehensive cloud architecture credential covering VPC design, distributed system elasticity, high availability, and cloud security frameworks on AWS.",
    skills: ["AWS Cloud Architecture", "VPC & Networking", "Cloud Security", "High Availability"],
    statusText: "Verified Graduate",
  },
  {
    id: "google-genai",
    name: "Generative AI — Level 3 GenAI: Prompt Engineering",
    issuer: "Google",
    featured: true,
    prominent: false,
    date: "October 2023",
    credentialId: "5794993",
    description:
      "Specialized credential focusing on advanced prompt engineering methodologies, foundational model tuning, and zero-shot/few-shot task formulation.",
    skills: ["Prompt Engineering", "Foundational Models", "Zero-Shot Learning", "Google Cloud AI"],
    statusText: "Credential ID: 5794993",
  },
  {
    id: "uipath-automation-explorer",
    name: "UiPath Automation Explorer",
    issuer: "UiPath",
    featured: true,
    prominent: false,
    description:
      "Official RPA certification validating competence with UiPath Studio, Orchestrator queues, and enterprise Robotic Enterprise Framework (REFramework).",
    skills: ["UiPath Studio", "REFramework", "Robotic Process Automation", "Orchestrator Queues"],
    statusText: "Verified Professional",
  },
  {
    id: "oracle-sql",
    name: "Database Programming with SQL",
    issuer: "Oracle",
    featured: true,
    prominent: false,
    description:
      "Rigorous certification validating relational database schema design, complex query optimization, joins, transactions, and indexing strategies.",
    skills: ["SQL", "Relational Database Design", "Query Optimization", "Transaction Control"],
    statusText: "Verified Specialist",
  },
];

export const additionalCredentials = [
  {
    name: "Database Programming with PL/SQL",
    issuer: "Oracle",
    skills: ["PL/SQL", "Stored Procedures", "Triggers", "Database Logic"],
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google",
    skills: ["GCP Infrastructure", "Cloud Security", "Compute Engine"],
    credentialId: "5838902",
  },
  {
    name: "Introduction to MongoDB for Students & Professionals",
    issuer: "MongoDB",
    skills: ["Document Modeling", "Aggregation Framework", "NoSQL Querying"],
    credentialId: "MDBuzsblsz7gu",
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft + LinkedIn",
    skills: ["Generative AI", "Computer Ethics", "Applied AI Tools"],
  },
  {
    name: "Design & Implementation of Human-Computer Interfaces",
    issuer: "NPTEL",
    skills: ["HCI", "UX Research", "Usability Engineering"],
  },
  {
    name: "Cyber Security and Privacy",
    issuer: "NPTEL",
    skills: ["Information Security", "Network Protocols", "Threat Modeling"],
  },
  {
    name: "Machine Learning Bootcamp",
    issuer: "TensorFlow User Group (TFUG)",
    skills: ["TensorFlow", "Deep Learning Fundamentals", "Model Evaluation"],
  },
  {
    name: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    skills: ["AI Fundamentals", "Knowledge Representation", "Search Algorithms"],
  },
];
