export const profileData = {
  name: "Abdur Rehman Ansari",
  title: "Full Stack Developer",
  availability: "Available for new projects",
  intro:
    "Architecting high-performance digital experiences with precision and modern engineering principles. Specializing in scalable systems and elegant interfaces.",
  about:
    "Abdur Rehman Ansari is a full stack developer focused on turning product ideas into dependable, polished web experiences. This starter portfolio uses professional placeholder copy that can be updated later while preserving a production-ready data structure.",
  location: "Global / Remote",
  email: "contact@abdurportfolio.dev",
  phone: "+92 300 0000000",
  resumeUrl: "https://example.com/abdur-rehman-ansari-resume.pdf",
  githubUrl: "https://github.com/abdurrehmanansari",
  linkedinUrl: "https://linkedin.com/in/abdurrehmanansari",
  twitterUrl: "https://twitter.com/abdurrehmanansari",
  heroImageUrl:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43?auto=format&fit=crop&w=900&q=80",
  yearsExperience: 5,
  projectCount: 24,
  educationLabel: "B.S. Computer Science",
  interests: ["Scalable Systems", "API Design", "Modern UI Engineering"],
};

export const projectData = [
  {
    title: "Enterprise Analytics Engine",
    category: "Analytics",
    description:
      "A high-performance analytics platform for real-time operational dashboards, role-based insights, and exportable reporting.",
    technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/example/enterprise-analytics-engine",
    liveUrl: "https://example.com/enterprise-analytics-engine",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    status: "Live",
    order: 1,
  },
  {
    title: "CryptoPulse Mobile App",
    category: "FinTech",
    description:
      "A product experience for crypto portfolio tracking with alerts, secure authentication, and modular API integrations.",
    technologies: ["React", "Express", "JWT", "MongoDB"],
    githubUrl: "https://github.com/example/cryptopulse",
    liveUrl: "https://example.com/cryptopulse",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    status: "In Review",
    order: 2,
  },
  {
    title: "Architect Portfolio CMS",
    category: "Portfolio",
    description:
      "A CMS-driven personal site with editable content modules, portfolio curation, and responsive design patterns.",
    technologies: ["React", "Bootstrap", "Express", "MongoDB"],
    githubUrl: "https://github.com/example/portfolio-cms",
    liveUrl: "https://example.com/portfolio-cms",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    status: "Draft",
    order: 3,
  },
  {
    title: "OpsFlow Service Desk",
    category: "SaaS",
    description:
      "A ticketing workflow tool for internal teams with dashboards, priority queues, and collaboration notes.",
    technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/example/opsflow",
    liveUrl: "https://example.com/opsflow",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    status: "Live",
    order: 4,
  },
];

export const skillData = [
  { name: "React.js", category: "Frontend", proficiency: 92, icon: "code-slash", order: 1 },
  { name: "Bootstrap", category: "Frontend", proficiency: 88, icon: "palette", order: 2 },
  { name: "Redux Toolkit", category: "Frontend", proficiency: 86, icon: "diagram-3", order: 3 },
  { name: "Node.js", category: "Backend", proficiency: 91, icon: "server", order: 1 },
  { name: "Express.js", category: "Backend", proficiency: 89, icon: "boxes", order: 2 },
  { name: "JWT Auth", category: "Backend", proficiency: 84, icon: "shield-lock", order: 3 },
  { name: "MongoDB", category: "Database", proficiency: 90, icon: "database", order: 1 },
  { name: "Mongoose", category: "Database", proficiency: 87, icon: "layers", order: 2 },
  { name: "Git & GitHub", category: "Tools", proficiency: 90, icon: "git", order: 1 },
  { name: "Postman", category: "Tools", proficiency: 82, icon: "send", order: 2 },
  { name: "Figma", category: "Tools", proficiency: 76, icon: "vector-pen", order: 3 },
];

export const experienceData = [
  {
    title: "Lead Developer",
    organization: "Tech Solutions Inc.",
    period: "2021 — Present",
    location: "Remote",
    type: "work",
    summary:
      "Leading the development of enterprise-grade cloud applications, mentoring junior developers, and defining architecture for internal products.",
    highlights: [
      "Shipped dashboard products used by distributed teams.",
      "Improved deployment speed and release confidence.",
    ],
    order: 1,
  },
  {
    title: "Full Stack Developer",
    organization: "Creative Digital Agency",
    period: "2019 — 2021",
    location: "Karachi, Pakistan",
    type: "work",
    summary:
      "Built responsive web applications for international clients with a strong focus on React, Node.js, and API integrations.",
    highlights: [
      "Delivered branded marketing sites and internal portals.",
      "Collaborated closely with designers on polished UI execution.",
    ],
    order: 2,
  },
  {
    title: "B.S. Computer Science",
    organization: "State Engineering University",
    period: "2015 — 2019",
    location: "Pakistan",
    type: "education",
    summary:
      "Focused on algorithms, data structures, software engineering, and practical full stack development principles.",
    highlights: [
      "Graduated with a strong foundation in systems thinking.",
      "Completed several capstone web application projects.",
    ],
    order: 3,
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    period: "2024",
    location: "Online",
    type: "certification",
    summary:
      "Validated baseline cloud platform knowledge for application deployment, security, and managed infrastructure planning.",
    highlights: ["Focused on deployment readiness and cloud operations."],
    order: 4,
  },
];

export const serviceData = [
  {
    title: "Web Development",
    shortDescription: "Full-cycle development from discovery to deployment.",
    description:
      "Production-ready websites and applications with modern frontend architecture, scalable backend services, and maintainable code.",
    features: ["Responsive interfaces", "REST API integration", "Production deployment"],
    icon: "globe2",
    order: 1,
  },
  {
    title: "UI/UX Design",
    shortDescription: "Clean interfaces grounded in usability and clarity.",
    description:
      "Interface systems that balance usability, visual consistency, and brand expression across desktop and mobile.",
    features: ["Wireframes", "Design systems", "User-first workflows"],
    icon: "palette2",
    order: 2,
  },
  {
    title: "API Development",
    shortDescription: "Robust backend APIs with clean contracts and auth.",
    description:
      "Express-based APIs with validation, authentication, modular architecture, and database integration that teams can scale confidently.",
    features: ["JWT auth", "Validation", "Scalable structure"],
    icon: "hdd-network",
    order: 3,
  },
  {
    title: "Database Design",
    shortDescription: "Schema design for real-world product workflows.",
    description:
      "Thoughtful MongoDB schema design, query planning, and maintainable document structures for content-heavy products.",
    features: ["Mongoose models", "Seed data", "Query optimization"],
    icon: "database-fill",
    order: 4,
  },
];

export const messageData = [
  {
    name: "Sarah Mitchell",
    email: "s.mitchell@agency.co",
    subject: "Potential collaboration",
    message:
      "Hi Abdur, we are impressed by your portfolio and would love to discuss a dashboard rebuild for one of our fintech clients.",
    status: "new",
  },
  {
    name: "David Chen",
    email: "d.chen@design.io",
    subject: "UI redesign follow-up",
    message:
      "Regarding the UI redesign for the analytics dashboard, the client is thrilled and wants to discuss phase two.",
    status: "read",
  },
];
