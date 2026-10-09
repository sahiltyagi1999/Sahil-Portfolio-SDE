/**
 * Central portfolio data — generated from Sahil's resume (public/assets/Sahil_Tyagi_Resume.pdf)
 * and his previous portfolio site (github.com/sahiltyagi1999/SkillSetScribeTwo).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sahil Tyagi',
  displayName: 'Sahil Tyagi',
  firstName: 'SAHIL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A TYAGI ORIGINAL',
  role: 'Software Engineer',
  tagline: ['Software Engineer', 'Full-Stack', 'AI Agents'],
  intro:
    'An M.Tech graduate from IIT Guwahati building scalable full-stack products — from pixel-perfect React interfaces to Redis-backed Node.js microservices handling 50K+ monthly requests, and AI agents that ship to real users.',
  location: 'India',
  email: 'sahiltyagi1999@gmail.com',
  phone: '+91 79854 76796',
  links: {
    linkedin: 'https://www.linkedin.com/in/sahil-tyagi-a9256420b/',
    github: 'https://github.com/sahiltyagi1999',
  },
  resumePdf: '/assets/Sahil_Tyagi_Resume.pdf',
  resumeFileName: 'Sahil_Tyagi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sahil Tyagi',
  },
  interests: ['System Design', 'AI Agents & RAG', 'Distributed Systems', 'Developer Experience'],
};

export const education = [
  {
    school: 'Indian Institute of Technology (IIT) Guwahati',
    short: 'IIT Guwahati',
    place: 'Guwahati',
    degree: 'Master of Technology',
    period: 'July 2022 – July 2024',
    score: 'GPA 7.8',
  },
  {
    school: 'University Institute of Engineering and Technology',
    short: 'UIET Kanpur',
    place: 'Kanpur',
    degree: 'Bachelor of Technology',
    period: 'July 2017 – July 2021',
    score: 'CPI 6.85',
  },
];

export const experience = [
  {
    company: 'GoKwik',
    role: 'Application Engineer',
    place: 'India',
    period: 'Dec 2025 – Present',
    points: [
      'Migrated a legacy Shopify dashboard to React & Polaris, improving client satisfaction by 40%, cutting load time by 30% and driving a 20% increase in merchant metrics.',
      'Architected an AI-driven popup-generation system using the Shopify Admin & Polaris APIs, reducing merchant setup time by 40%.',
      'Built TTL-based cache invalidation with A/B testing, handling concurrency for 50K+ monthly requests and improving SLA by 15%.',
    ],
  },
  {
    company: 'Edify',
    role: 'Software Development Engineer',
    place: 'Bengaluru',
    period: 'Apr 2025 – Dec 2025',
    points: [
      'Implemented a high-performance logging system tracking 7,500+ assets, reducing audit query time by 40%.',
      'Led a ticketing service featuring an AI agent, boosting first-call resolution by 25%; AI agents now automate Tier-1 support, cutting manual effort by 70%.',
      'Deployed a Dockerized workflow on AWS EC2 with cross-functional teams, boosting SLA adherence by 50%.',
      'Facilitated Agile ceremonies and coached two sprint teams, driving a 15% improvement in release speed.',
    ],
  },
  {
    company: 'Edify',
    role: 'Backend Consultant',
    place: 'Bengaluru',
    period: 'Dec 2024 – Mar 2025',
    points: [
      'Moved a monolithic backend to a modular architecture serving 10,000+ customers, reducing server costs by 20% at peak.',
      'Built low-latency REST APIs with Redis caching, cutting DB queries by 60% and latency by 40%.',
      'Built a Redis-based atomic lock for product selection and payments — safe concurrency for 50K+ monthly transactions and 40% fewer payment failures.',
      'Integrated 10+ third-party apps via OAuth.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Live deployment, shown as a "Watch Live" button. */
  live?: string;
  /** Optional screenshot used as the key art behind the generated poster. */
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'edify-club',
    title: 'Edify.Club',
    year: '2025',
    genre: 'E-Commerce • Backend • Microservices',
    logline: 'An industrial-scale e-commerce platform — the backend behind product selection, payments and support for 10,000+ customers.',
    stack: ['Node.js', 'Redis', 'MySQL', 'AWS EC2', 'Docker', 'Microservices'],
    build: [
      'Moved the monolithic backend to a modular, microservice architecture serving 10,000+ customers and cutting server costs by 20% at peak.',
      'Built a Redis-backed atomic lock with TTL for product selection and payments — safe concurrency for 50K+ monthly transactions and 40% fewer payment failures.',
      'Shipped low-latency REST APIs with Redis caching (60% fewer DB queries, 40% lower latency) and an AI-agent ticketing service that lifted first-call resolution by 25%.',
    ],
    features: [
      'Redis atomic locks for payments',
      'TTL-based caching layer',
      'Node.js microservices on AWS EC2',
      'Load balancing & health-check monitoring',
      'AI agent for Tier-1 support tickets',
      '10+ OAuth third-party integrations',
    ],
    metrics: [
      { value: '10K+', label: 'customers served' },
      { value: '50K+', label: 'monthly transactions' },
      { value: '40%', label: 'fewer payment failures' },
      { value: '60%', label: 'fewer DB queries' },
      { value: '20%', label: 'lower server cost' },
    ],
    live: 'https://www.edify.club',
    image: '/assets/projects/edify.webp',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'therapist-ai',
    title: 'Therapist AI',
    year: '2025',
    genre: 'AI • LLM • RAG',
    logline: 'A full-stack therapy chatbot powered by RAG-backed LLMs, with encrypted messaging and context memory.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'LLM', 'RAG'],
    build: [
      'Built a full-stack therapy chatbot with RAG-powered LLMs, onboarding 50+ users in the first month.',
      'Designed a secure messaging system with AES encryption and JWT authentication at ~20ms end-to-end latency for encrypted messages.',
      'Optimised the LLM pipeline — 40% faster responses and context memory that improved answer accuracy by 60%; sentiment scoring cut user-reported bugs by 25%.',
    ],
    features: [
      'Retrieval-augmented generation',
      'Conversation context memory',
      'AES-encrypted messages',
      'JWT authentication',
      'Sentiment scoring',
    ],
    metrics: [
      { value: '50+', label: 'users in month one' },
      { value: '20ms', label: 'encrypted message latency' },
      { value: '40%', label: 'faster LLM responses' },
      { value: '60%', label: 'better accuracy' },
      { value: '25%', label: 'fewer reported bugs' },
    ],
    github: 'https://github.com/sahiltyagi1999/Therapist_AI',
    live: 'https://therapist-ai-eosin.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'fix-mate-ai',
    title: 'Fix Mate AI',
    year: '2025',
    genre: 'AI • SaaS',
    logline: 'AI-powered IT diagnostics that walks users through device problems and solves them instantly.',
    stack: ['TypeScript', 'React', 'LLM'],
    build: [
      'Built an AI-powered IT diagnostics assistant that turns a plain-language description of a device problem into a step-by-step fix.',
      'Designed and deployed the SaaS front end on Vercel.',
    ],
    features: ['Conversational troubleshooting', 'Step-by-step fixes', 'Deployed on Vercel'],
    metrics: [],
    github: 'https://github.com/sahiltyagi1999/Fix_Mate_AI',
    live: 'https://fix-mate-ai-three.vercel.app/',
    image: '/assets/projects/fix-mate-ai.webp',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'ai-agent',
    title: "Sahil's AI Agent",
    year: '2025',
    genre: 'AI • Agents • Tool',
    logline: 'A custom AI agent built on Vortex AI with a clean conversational interface.',
    stack: ['TypeScript', 'React', 'Vortex AI'],
    build: ['Built a custom AI agent on Vortex AI with a conversational interface, and deployed it on Vercel.'],
    features: ['Conversational UI', 'Custom agent behaviour', 'Deployed on Vercel'],
    metrics: [],
    github: 'https://github.com/sahiltyagi1999/my_AI',
    live: 'https://my-ai-rosy-one.vercel.app/',
    image: '/assets/projects/ai-agent.webp',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'cpu-simulation',
    title: 'CPU Simulation',
    year: '2024',
    genre: 'Systems • C++ • OS',
    logline: 'A C++ library that simulates five OS CPU-scheduling algorithms and measures how each one performs.',
    stack: ['C++', 'OOP', 'Data Structures'],
    build: [
      'Built, with a team, a C++ library automating five OS scheduling algorithms (FCFS, RR, SPN, SRT, HRRN), improving code efficiency by 18%.',
      'Benchmarked the algorithms on arrival, burst, finish and turnaround times, reaching a 98% pass rate on test cases.',
      'Applied OOP and data structures for a flexible module, raising the code-modularity score by 20%.',
    ],
    features: ['FCFS, RR, SPN, SRT & HRRN', 'Turnaround & waiting-time analysis', 'Pluggable, object-oriented design'],
    metrics: [
      { value: '5', label: 'scheduling algorithms' },
      { value: '98%', label: 'test-case pass rate' },
      { value: '18%', label: 'more efficient code' },
      { value: '20%', label: 'higher modularity score' },
    ],
    github: 'https://github.com/sahiltyagi1999/Scheduling_Algorithms-CPU',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'gericht',
    title: 'Gericht Restaurant',
    year: '2023',
    genre: 'React • Web App',
    logline: 'An immersive restaurant website built with React — responsive across every screen size.',
    stack: ['React', 'CSS', 'JavaScript'],
    build: ['Built an immersive, fully responsive restaurant website in React and deployed it on GitHub Pages.'],
    features: ['Responsive layout', 'Component-driven React UI', 'Deployed on GitHub Pages'],
    metrics: [],
    github: 'https://github.com/sahiltyagi1999/My_Restaurant',
    live: 'https://sahiltyagi1999.github.io/My_Restaurant/',
    image: '/assets/projects/gericht.webp',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#d9b46a' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'iit-guwahati',
    title: 'M.Tech Graduate',
    org: 'IIT Guwahati',
    detail: 'Master of Technology from the Indian Institute of Technology Guwahati (2022 – 2024).',
    laurel: 'IIT Alumnus',
  },
  {
    id: 'production-merge',
    title: 'Merged to Production',
    org: 'Hackathon • Internship',
    detail: 'Led a hackathon project and was the only backend intern to have code merged into the main branch — improving application performance by 30%.',
    laurel: 'Only Intern',
  },
  {
    id: 'dsa',
    title: '500+ Problems Solved',
    org: 'LeetCode • GFG',
    detail: 'Over 500 data structures and algorithms problems solved across LeetCode and GeeksforGeeks.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'scale',
    title: '50K+ Monthly Requests',
    org: 'Edify • GoKwik',
    detail: 'Built Redis-backed locks and TTL caching that handle 50K+ monthly requests and transactions in production.',
    laurel: 'Production Scale',
  },
  {
    id: 'ai-automation',
    title: '70% Less Manual Work',
    org: 'AI Agents • Edify',
    detail: 'AI-powered agents automating Tier-1 support queries, saving the support team about 6 hours every week.',
    laurel: 'AI in Production',
  },
];

/** Live deployments shown in the "Now streaming" rail under the achievements. */
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Live', name: 'Edify.Club', link: 'https://www.edify.club' },
  { issuer: 'Live', name: 'Therapist AI', link: 'https://therapist-ai-eosin.vercel.app' },
  { issuer: 'Live', name: 'Fix Mate AI', link: 'https://fix-mate-ai-three.vercel.app/' },
  { issuer: 'Live', name: "Sahil's AI Agent", link: 'https://my-ai-rosy-one.vercel.app/' },
  { issuer: 'Live', name: 'Gericht Restaurant', link: 'https://sahiltyagi1999.github.io/My_Restaurant/' },
  { issuer: 'Live', name: 'Password Generator', link: 'https://password-generator-virid-nu.vercel.app' },
  { issuer: 'Live', name: 'Tailwind BG Changer', link: 'https://tailwind-bg-changer-wfwb.vercel.app/' },
  { issuer: 'GitHub', name: 'All repositories', link: 'https://github.com/sahiltyagi1999?tab=repositories' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript & TypeScript every day',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Pixel-perfect interfaces',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Shopify Polaris', mono: 'Po' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML & CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs built for growth',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Hibernate', mono: 'Hb' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT / OAuth2', mono: 'Jw' },
      { name: 'Webhooks', mono: 'Wh' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL, NoSQL & caching',
    skills: [
      { name: 'Redis', mono: 'Rd' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Elasticsearch', mono: 'Es' },
    ],
  },
  {
    id: 'cloud',
    title: 'DevOps & Cloud',
    subtitle: 'Shipping to production',
    skills: [
      { name: 'AWS (EC2, S3)', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'GCP', mono: 'Gc' },
      { name: 'RabbitMQ', mono: 'Rq' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'LLMs in real products',
    skills: [
      { name: 'LLMs', mono: 'Lm' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'AI Agents', mono: 'Ag' },
    ],
  },
  {
    id: 'concepts',
    title: 'Concepts',
    subtitle: 'The foundations',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Design Patterns', mono: 'Dp' },
      { name: 'SOLID', mono: 'So' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['GoKwik', 'Edify', 'Gericht Restaurant'],
  TypeScript: ['Therapist AI', 'Fix Mate AI', "Sahil's AI Agent"],
  'C++': ['CPU Simulation', '500+ DSA problems'],
  'React.js': ['GoKwik dashboard migration', 'Therapist AI', 'Gericht Restaurant'],
  'Shopify Polaris': ['GoKwik dashboard migration', 'AI popup generator'],
  'Node.js': ['Edify microservices', 'Therapist AI', 'GoKwik'],
  'Express.js': ['Therapist AI', 'Edify'],
  'REST APIs': ['Edify — 60% fewer DB queries'],
  'JWT / OAuth2': ['Therapist AI', 'Edify — 10+ OAuth integrations'],
  Redis: ['Edify atomic locks', 'GoKwik TTL cache'],
  MySQL: ['Edify'],
  MongoDB: ['Therapist AI'],
  'AWS (EC2, S3)': ['Edify — Dockerized EC2 deployment'],
  Docker: ['Edify — 50% better SLA adherence'],
  Microservices: ['Edify.Club'],
  LLMs: ['Therapist AI', 'Fix Mate AI', 'GoKwik AI popups'],
  RAG: ['Therapist AI'],
  'AI Agents': ['Edify Tier-1 support agents', "Sahil's AI Agent"],
  DSA: ['500+ problems on LeetCode & GFG'],
  OOP: ['CPU Simulation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2017 – 2021',
    synopsis: 'Bachelor of Technology at the University Institute of Engineering and Technology, Kanpur.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'B.Tech at UIET Kanpur — where the first C++ programs, data structures and web pages were written.',
        tags: ['B.Tech', 'UIET Kanpur'],
        runtime: 'Jul 2017 – Jul 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The First Builds',
        description: 'Early projects in C++ and JavaScript — a bank management system, a billing system and a string of small web apps.',
        tags: ['C++', 'JavaScript', 'HTML & CSS'],
        runtime: 'Side projects',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: IIT Guwahati',
    period: '2022 – 2024',
    synopsis: 'Master of Technology at the Indian Institute of Technology Guwahati.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'M.Tech at IIT Guwahati, graduating with a GPA of 7.8.',
        tags: ['M.Tech', 'IIT Guwahati'],
        runtime: 'Jul 2022 – Jul 2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Simulator',
        description: 'CPU Simulation — a C++ library for five OS scheduling algorithms with a 98% test-case pass rate.',
        tags: ['C++', 'OS', 'OOP'],
        runtime: 'Mar – Jul 2024',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: '500+ data structures and algorithms problems across LeetCode and GeeksforGeeks.',
        tags: ['DSA', 'LeetCode', 'GFG'],
        runtime: '500+ problems',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Edify Years',
    period: '2024 – 2025',
    synopsis: 'Backend Consultant, then Software Development Engineer at Edify in Bengaluru.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Consultant',
        description: 'Broke up a monolith for 10,000+ customers and built Redis atomic locks for 50K+ monthly transactions.',
        tags: ['Node.js', 'Redis', 'REST'],
        runtime: 'Dec 2024 – Mar 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Engineer',
        description: 'A logging system for 7,500+ assets and an AI-agent ticketing service that lifted first-call resolution by 25%.',
        tags: ['AI Agents', 'Logging', 'Agile'],
        runtime: 'Apr – Dec 2025',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'A Dockerized workflow on AWS EC2 with load balancing and health checks — 50% better SLA adherence.',
        tags: ['Docker', 'AWS EC2'],
        runtime: 'Edify',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The AI Builder',
    period: '2025',
    synopsis: 'Side projects that put LLMs in front of real users.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Listener',
        description: 'Therapist AI — a RAG-powered therapy chatbot with AES-encrypted messages and 50+ users in month one.',
        tags: ['MERN', 'RAG', 'LLM'],
        runtime: 'Aug – Sep 2025',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Fixer',
        description: 'Fix Mate AI — AI-powered IT diagnostics that solves device problems instantly.',
        tags: ['AI', 'SaaS'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Agent',
        description: "Sahil's AI Agent — a custom agent built on Vortex AI with a conversational interface.",
        tags: ['AI Agents', 'TypeScript'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Now Streaming: GoKwik',
    period: '2025 – Present',
    synopsis: 'Application Engineer at GoKwik, building for Shopify merchants.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Migration',
        description: 'Moved a legacy Shopify dashboard to React & Polaris — 30% faster loads and 40% higher client satisfaction.',
        tags: ['React', 'Polaris'],
        runtime: 'Dec 2025 – Present',
        palette: amber,
      },
      {
        code: 'S05 E02',
        title: 'The Generator',
        description: 'An AI-driven popup-generation system on the Shopify Admin APIs, cutting merchant setup time by 40%.',
        tags: ['AI', 'Shopify API'],
        runtime: 'GoKwik',
        palette: crimson,
      },
      {
        code: 'S05 E03',
        title: 'The Cache',
        description: 'TTL-based cache invalidation with A/B testing for 50K+ monthly requests — 15% better SLA.',
        tags: ['Redis', 'Node.js', 'A/B testing'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Alma mater', title: 'IIT Guwahati', detail: 'Master of Technology', palette: violet },
  { label: 'Now playing', title: 'GoKwik', detail: 'Application Engineer', palette: crimson },
  { label: 'Production scale', title: '50K+', detail: 'Monthly requests & transactions', palette: amber },
  { label: 'The AI Original', title: 'Therapist AI', detail: 'RAG • 50+ users in month one', palette: crimson },
  { label: 'Signature move', title: 'Redis Locks', detail: '40% fewer payment failures', palette: ocean },
  { label: 'Support automated', title: '70%', detail: 'Tier-1 queries handled by AI agents', palette: jade },
  { label: 'Problems solved', title: '500+', detail: 'LeetCode & GFG', palette: violet },
  { label: 'Customers served', title: '10K+', detail: 'Edify modular backend', palette: amber },
  { label: 'Only intern', title: 'Merged to Prod', detail: 'Code merged into the main branch', palette: ocean },
  { label: 'Current focus', title: 'System Design', detail: 'with AI agents & distributed systems', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'M.Tech · IIT Guwahati',
    lines: ['Indian Institute of Technology Guwahati', 'July 2022 – July 2024'],
    chips: ['IIT', 'M.Tech'],
  },
  {
    kicker: 'Skills',
    title: 'Full stack, end to end.',
    lines: ['JavaScript, TypeScript, Java, C++, Python', 'React · Node.js · Redis · MySQL · AWS · Docker'],
    chips: ['React', 'Node.js', 'Redis', 'AWS', 'Docker', 'LLMs'],
  },
  {
    kicker: 'Experience',
    title: 'The Production Arc',
    lines: ['Backend Consultant → SDE · Edify', 'Application Engineer · GoKwik', '50K+ monthly requests · 10K+ customers'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: ['Edify.Club — 40% fewer payment failures', 'Therapist AI — RAG chatbot, 50+ users', 'CPU Simulation — 5 algorithms, 98% pass rate'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Only backend intern merged to production', '500+ DSA problems solved', 'AI agents cut support effort by 70%'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Shopify merchant tools at GoKwik · AI agents · System Design'],
  },
];

export type ProfileId = 'sahil' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sahil',
    name: 'Sahil',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2023 – 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 career highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Live links`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
