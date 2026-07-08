export const profile = {
  name: "Aman Dixit",
  title: "Full-Stack MERN Developer",
  location: "Bengaluru, Karnataka, India",
  email: "dixitaman.nov.wwe@gmail.com",
  phone: "+91 85956 04117",
  linkedin: "https://www.linkedin.com/in/aman-dixit-1a999117a/",
  github: "https://github.com/Aman0111",
  resume: "https://drive.google.com/file/d/1J7ONEkAnz4KgWist5mAUIrxnb7TC8uKK/view?usp=sharing"
};

export const roles = [
  "Full-Stack MERN Developer",
  "React.js + Node.js Engineer",
  "Agentic AI & LLM Integrator",
  "Problem Solver"
];

export const aboutStats = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "", label: "Companies" },
  { value: 4, suffix: "", label: "Major Products Shipped" },
  { value: 8, suffix: "+", label: "Engineers Mentored/Led" },
  { value: 80, suffix: "%+", label: "Test Coverage Achieved" },
  { value: 99.5, suffix: "%", label: "Uptime Delivered" }
];

export const education = [
  { degree: "Bachelor of Computer Applications (BCA)", school: "IFIM College, Bengaluru", year: "Apr 2020" },
  { degree: "Senior Secondary — Commerce", school: "Little Flower School, Gorakhpur", year: "Mar 2017" }
];

export const skillsData = [
  { category: "Frontend", items: ["React.js","Next.js","React Native","TypeScript","JavaScript (ES6+)","Redux","MobX","Context API","HTML5","CSS3","Material-UI","Bootstrap","Webpack","Vite"] },
  { category: "Backend", items: ["Node.js","Express.js","Python","PHP","C#","REST APIs","GraphQL","Microservices","WebSockets","JWT","OAuth 2.0"] },
  { category: "Databases", items: ["MongoDB","MySQL","PostgreSQL","Redis"] },
  { category: "Mobile", items: ["React Native","Android Studio","Xcode"] },
  { category: "AI & GenAI", items: ["LLMs","Agentic AI","OpenAI GPT","Claude API","Prompt Engineering","RAG","MCP"] },
  { category: "DevOps & Cloud", items: ["Docker","Jenkins","CI/CD","Git","GitHub","GitLab","AWS","GCP","Nginx","Linux"] },
  { category: "Testing", items: ["Jest","Mocha","PHPUnit","Selenium","TDD"] }
];

export const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Advantage AI Engineering Private Limited",
    location: "Bengaluru, India",
    period: "Jul 2024 – Mar 2026",
    bullets: [
      "Led full-stack development of 3 AI-powered healthcare applications (React.js, Express.js, Node.js, MongoDB) integrated with Python microservices, handling 50,000+ API requests daily at 99.5% uptime.",
      "Engineered Node.js/Express.js REST APIs and FastAPI microservices for real-time chat, video consultation, and medical data processing, cutting API latency by 35%.",
      "Optimized MongoDB schemas, indexing, and aggregation pipelines, improving query performance by 40% and reducing peak server load.",
      "Built agentic AI workflows and LLM integration (OpenAI GPT, Claude API) using RAG architecture for intelligent document processing and context-aware responses.",
      "Directed CI/CD pipelines with Jenkins and Docker, cutting release cycles by 40%, and led code reviews for a team of 8 engineers, lifting code quality metrics by 35%."
    ],
    tags: ["React.js","Node.js","MongoDB","Python/FastAPI","RAG","Docker","Jenkins"]
  },
  {
    role: "Senior Software Engineer",
    company: "NIIT",
    location: "Bengaluru, India",
    period: "Sep 2023 – Apr 2024",
    bullets: [
      "Delivered 15+ full-stack features end-to-end across React.js (TypeScript, Redux), Node.js/Express APIs, and PHP/MySQL back ends.",
      "Designed REST endpoints for authentication and business logic, improving cross-service reliability by 30%.",
      "Refactored legacy PHP/JavaScript into modern TypeScript + React architecture, shrinking bundle size by 25%.",
      "Mentored 3 junior developers through pair programming, lifting team productivity by 20% and cutting bug escape rate by 45%."
    ],
    tags: ["React.js","TypeScript","Node.js","PHP","MySQL"]
  },
  {
    role: "Senior Software Developer",
    company: "Ksolves India Limited",
    location: "Bengaluru, India",
    period: "Dec 2021 – Jun 2023",
    bullets: [
      "Shipped 12+ major SaaS features using React.js, Next.js (SSR/SSG), Node.js, Express.js, and MongoDB for 10,000+ monthly active users.",
      "Built backend services with JWT/OAuth authentication and third-party integrations for payments and email.",
      "Optimized MongoDB data models and aggregation queries, reducing page load times by 30%.",
      "Wrote Jest/Mocha test suites reaching 80% coverage, cutting regression bugs by 55%.",
      "Ran 50+ code reviews across the stack, enforcing clean code and design patterns."
    ],
    tags: ["React.js","Next.js","Node.js","MongoDB","Jest"]
  },
  {
    role: "Software Developer",
    company: "LitSpark Solutions",
    location: "Bengaluru, India",
    period: "Jun 2020 – Nov 2021",
    bullets: [
      "Built 6 full-stack web applications using React.js, Node.js, PHP, and MySQL for education and retail clients.",
      "Developed REST APIs and MySQL schemas, improving performance by 25% for 5,000+ concurrent users.",
      "Implemented AJAX-driven React interfaces with real-time data updates."
    ],
    tags: ["React.js","Node.js","PHP","MySQL"]
  },
  {
    role: "Software Engineer",
    company: "Get Ahead Education Limited",
    location: "Bengaluru, India",
    period: "Jun 2019 – Apr 2020",
    bullets: [
      "Built an end-to-end HR management system (PHP, MySQL) automating recruitment, onboarding, and separation for 200+ employees with role-based access control.",
      "Developed a student challenge registration platform processing 1,000+ registrations with authentication and session management.",
      "Created an automated reporting engine that cut manual reporting effort by 80%."
    ],
    tags: ["PHP","MySQL","JavaScript"]
  }
];

export const projectsData = [
  {
    title: "Diagnostic Healthcare Platform",
    role: "Full-Stack & AI Engineer",
    desc: "A HIPAA-compliant telehealth platform pairing a React.js front end with Node.js/Express APIs and Python (FastAPI) AI microservices, real-time over WebSockets.",
    bullets: [
      "Agentic AI features: LLM-based symptom analysis and a RAG pipeline for context-aware patient–doctor interactions.",
      "Microservices architecture behind an API gateway handling 10,000+ daily requests at 99.9% availability, sub-2-second response times."
    ],
    tags: ["React.js","Node.js","Python/FastAPI","MongoDB","WebSockets","RAG"],
    github: "https://github.com/Aman0111",
    demo: "#"
  },
  {
    title: "Countabout Financial Platform",
    role: "Full-Stack Developer",
    desc: "A financial transaction system with role-based React dashboards and an ACID-compliant Node.js/MongoDB backend.",
    bullets: [
      "React dashboards tailored to 5 distinct user roles, serving 500+ active accounts.",
      "Secure payment API integration with a real-time balance calculation engine."
    ],
    tags: ["React.js","Node.js","MongoDB","REST API"],
    github: "https://github.com/Aman0111",
    demo: "#"
  },
  {
    title: "Gezeno E-Commerce Platform",
    role: "Full-Stack Developer",
    desc: "A complete e-commerce solution — React storefront, Node.js/Express REST APIs, MongoDB catalog, and a custom CMS.",
    bullets: [
      "Multi-gateway payment integration processing 2,000+ monthly transactions.",
      "Full order lifecycle: cart, checkout, inventory management, automated email notifications, and real-time stock updates."
    ],
    tags: ["React.js","Node.js","MongoDB","Payments","CMS"],
    github: "https://github.com/Aman0111",
    demo: "#"
  },
  {
    title: "Restaurant Management System",
    role: "Full-Stack Developer",
    desc: "A restaurant POS system with a React.js interface, Node.js backend, and MySQL database.",
    bullets: [
      "Multi-payment gateway support including cash-on-delivery and online payments.",
      "Session-based authentication, order tracking API, and a real-time admin sales dashboard."
    ],
    tags: ["React.js","Node.js","MySQL","POS"],
    github: "https://github.com/Aman0111",
    demo: "#"
  }
];

export const achievementsData = [
  { value: 60, suffix: "%", label: "Fewer critical production incidents" },
  { value: 40, suffix: "%", label: "Faster release cycles" },
  { value: 35, suffix: "%", label: "Improvement in code quality metrics" },
  { value: 55, suffix: "%", label: "Fewer regression bugs" },
  { value: 99.5, suffix: "%", label: "Average API uptime" },
  { value: 50, suffix: "K+", label: "Daily API requests handled" }
];

export const certsData = [
  { name: "MERN Full-Stack Development Certification", issuer: "Udemy", detail: "MongoDB · Express.js · React.js · Node.js — production-grade full-stack e-commerce applications" },
  { name: "Google Project Management Professional Certificate", issuer: "Coursera", detail: "Agile Project Management · Sprint Planning · Stakeholder Communication · Scrum Delivery" }
];

export const allTech = [...new Set(skillsData.flatMap((s) => s.items))];
