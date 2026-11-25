export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  graduationDate: string;
  cgpa: string;
  cgpaScale: string;
  coursework: string[];
  departmentClubs: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  category: "Award" | "Leadership" | "Competition";
  description: string;
}

export const educationData: EducationItem = {
  institution: "Rajalakshmi Engineering College",
  degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
  location: "Chennai, Tamil Nadu, India",
  duration: "2022 – 2026",
  graduationDate: "May 2026",
  cgpa: "7.87",
  cgpaScale: "10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems (Linux/Windows)",
    "Machine Learning & Deep Learning",
    "Computer Networks & Security",
    "Object-Oriented Programming (OOPS)",
    "Algorithm Design & Analysis",
    "Web Application Architectures",
  ],
  departmentClubs: [
    "LEO Club REC (Event Administrator)",
    "Intellexa AI Club (Technical Specialist)",
    "Enactus REC (Product Designer)",
  ],
};

export const achievementsData: AchievementItem[] = [
  {
    title: "Winner — Product Contest'24",
    organization: "Rajalakshmi Engineering College",
    year: "2024",
    category: "Award",
    description:
      "First prize for end-to-end product design, market feasibility, and engineering architecture of an organic, minimal-wastage consumer solution.",
  },
  {
    title: "Winner — Idea Contest'24",
    organization: "Enactus REC (Team Essenkea)",
    year: "2024",
    category: "Award",
    description:
      "Awarded top honor for ideating and prototyping an eco-conscious, sustainable consumer healthcare product model.",
  },
  {
    title: "Winner — Technical Quiz",
    organization: "CASHYUM National Symposium",
    year: "2024",
    category: "Competition",
    description:
      "Secured 1st place in computer science fundamentals, systems architecture, and algorithmic knowledge against 1,000+ national participants.",
  },
  {
    title: "Runner-Up — Coding Treasure Blazers",
    organization: "CASHYUM National Symposium",
    year: "2024",
    category: "Competition",
    description:
      "Ranked 2nd in competitive algorithmic problem solving, fast debugging, and computational logic challenges.",
  },
  {
    title: "Event Administrator",
    organization: "LEO Club, Rajalakshmi Engineering College",
    year: "2024 – 2026",
    category: "Leadership",
    description:
      "Led team of event managers coordinating university-wide social welfare programs; organized Project SIRIUS partnership for child mental health.",
  },
  {
    title: "Technical Specialist",
    organization: "Intellexa REC AI Club",
    year: "2024",
    category: "Leadership",
    description:
      "Led hardware/software prototyping for technical club builds, including the IoT Auto Hard-to-Soft Water Converter with real-time TDS telemetry.",
  },
  {
    title: "Product Recruit / Product Designer",
    organization: "Enactus REC",
    year: "2024 – 2025",
    category: "Leadership",
    description:
      "Conceptualized user-centric product requirements, economic empowerment frameworks, and customer journey validation.",
  },
  {
    title: "Delegate of Colombia",
    organization: "SSN Model United Nations",
    year: "2024",
    category: "Leadership",
    description:
      "Represented foreign policy delegations on civil rights and conflict diplomacy, sharpening strategic communication and debate skills.",
  },
];
