/**
 * Central portfolio data — generated from Sahil's resume (the Google Drive PDF linked in `profile.resume`)
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
  tagline: ['Software Engineer', 'Backend & Full-Stack', 'AI Pipelines'],
  intro:
    'An M.Tech graduate from IIT Guwahati, now a Software Development Engineer at AiSensy — building revenue pipelines over 50M+ records, Kafka-streamed analytics, Redis-backed microservices and AI pipelines powered by Claude.',
  location: 'Gurugram, India',
  email: 'sahiltyagi1999@gmail.com',
  phone: '+91 79854 76796',
  links: {
    linkedin: 'https://www.linkedin.com/in/sahil-tyagi-a9256420b/',
    github: 'https://github.com/sahiltyagi1999',
  },
  /** Resume lives on Google Drive so new versions show up without a redeploy. */
  resume: {
    view: 'https://drive.google.com/file/d/1x7T_6W_kfXnpSFHWBNH5nWswLDmW9kT8/view?usp=drive_link',
    preview: 'https://drive.google.com/file/d/1x7T_6W_kfXnpSFHWBNH5nWswLDmW9kT8/preview',
    download: 'https://drive.google.com/uc?export=download&id=1x7T_6W_kfXnpSFHWBNH5nWswLDmW9kT8',
  },
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 587w',
    alt: 'Portrait of Sahil Tyagi',
  },
  interests: ['System Design', 'Event Streaming', 'AI Pipelines', 'Distributed Systems'],
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
    company: 'AiSensy',
    role: 'Software Development Engineer',
    place: 'Gurugram',
    period: 'Aug 2026 – Present',
    points: [
      'Extended the revenue-attribution pipeline to WooCommerce, unifying abandoned-cart & COD tracking into a 50M+ record tracker with backfill, cron rollups & ROI computation across 3 databases and multi-tenant partners.',
      'Root-caused a critical bug that fired premature order-confirmation messages, pre-payment, across 6K+ Shopify merchants.',
    ],
  },
  {
    company: 'GoKwik',
    role: 'Application Engineer',
    place: 'Remote',
    period: 'Dec 2025 – May 2026',
    points: [
      'Architected a publish-gated billing feature that triggers subscription prompts at popup-publish intent, enforcing tiered entitlements while keeping creation unrestricted — driving 60%+ growth in popup creation and app adoption.',
      'Migrated the legacy Shopify dashboard app to React and Polaris with client-side caching and paginated API calls, cutting load time by 35% and driving a 20% increase in merchant installs.',
      'Streamed app events (views, clicks, conversions, billing) via Kafka into the analytics pipeline, powering real-time merchant insights across 10K+ weekly sessions.',
      'Architected an AI-driven popup-generation pipeline on the Shopify Admin & Storefront APIs, cutting campaign setup time by 80% and enabling personalised storefronts at scale.',
    ],
  },
  {
    company: 'Edify',
    role: 'Backend Consultant → Software Development Engineer',
    place: 'Bengaluru',
    period: 'Dec 2024 – Dec 2025',
    points: [
      'Integrated 10+ third-party apps via OAuth with rate limiting and token caching, and wired up AI-powered agents automating Tier-1 workflows — 70% less manual effort, 6 hours saved every week.',
      'Orchestrated a Redis-based atomic lock with TTL-based cache invalidation for safe concurrency across 50K+ monthly transactions, cutting DB queries by 45%.',
      'Crafted an AI-assisted ticketing framework with an L1 auto-resolution layer before escalation to IT Help, cutting manual ticket handling by 50%.',
      'Deployed containerised microservices on AWS EC2 with Docker, CI/CD and load balancing, reducing deployment time by 40% and lifting uptime to 99.9%.',
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
    id: 'featurepulse-ai',
    title: 'FeaturePulse AI',
    year: '2026',
    genre: 'AI • Claude API • Real-time',
    logline: 'An AI review-intelligence desk that reads app-store reviews, prioritises what matters and streams every step of the analysis live.',
    stack: ['Express.js', 'TypeScript', 'PostgreSQL', 'BullMQ', 'React', 'Claude API', 'Socket.IO'],
    build: [
      'Eliminated 10+ hours/week of manual review triage with an AI pipeline that analyses 150+ reviews in under 3 minutes using the Anthropic Claude API with structured JSON prompting.',
      'Architected real-time job progress with BullMQ + Socket.IO, streaming 10 granular steps live to the UI at sub-100ms latency through a WebSocket gateway and Upstash Redis.',
      'Built an AI review-prioritisation engine that improved product-triage productivity by 60%.',
    ],
    features: [
      'Track iOS & Android apps',
      'Claude-powered review analysis',
      'Structured JSON prompting',
      'Live 10-step job progress over WebSockets',
      'Review prioritisation engine',
    ],
    metrics: [
      { value: '10+ hrs', label: 'manual triage saved per week' },
      { value: '150+', label: 'reviews analysed in under 3 min' },
      { value: '<100ms', label: 'live progress latency' },
      { value: '10', label: 'streamed job steps' },
      { value: '60%', label: 'better triage productivity' },
    ],
    github: 'https://github.com/sahiltyagi1999/FeaturePulse_AI',
    live: 'https://futurepulseai.netlify.app/login',
    image: '/assets/projects/featurepulse-ai.webp',
    palette: { from: '#1a1206', via: '#7a5a1c', to: '#0a0806', accent: '#e9c47a' },
    motif: 'flow',
  },
  {
    id: 'revive',
    title: 'Revive',
    year: '2026',
    genre: 'Microservices • gRPC • Kafka',
    logline: 'An e-commerce backend split into six isolated microservices, wired together with gRPC, Kafka and an atomic Razorpay checkout.',
    stack: ['Java', 'Spring Boot', 'Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'gRPC'],
    build: [
      'Decomposed the backend into 6 isolated microservices, each with its own database, to eliminate shared-state coupling.',
      'Shipped 15+ REST/gRPC APIs with JWT auth and BCrypt hashing; strongly-typed inter-service contracts via gRPC cut serialisation overhead by 40%.',
      'Chained cart → PostgreSQL order → Razorpay into an atomic checkout pipeline with Redis TTL-based session cleanup, clearing 100% of expired cart sessions.',
      'Cut payment-confirmation latency by 60% by routing notifications through a Kafka consumer.',
    ],
    features: ['Database-per-service architecture', 'gRPC service contracts', 'JWT + BCrypt auth', 'Atomic Razorpay checkout', 'Kafka-driven notifications'],
    metrics: [
      { value: '6', label: 'isolated microservices' },
      { value: '15+', label: 'REST / gRPC APIs' },
      { value: '40%', label: 'less serialisation overhead' },
      { value: '60%', label: 'faster payment confirmation' },
      { value: '100%', label: 'expired carts auto-cleared' },
    ],
    github: 'https://github.com/sahiltyagi1999/Revive',
    palette: { from: '#041a1c', via: '#0e5560', to: '#05090a', accent: '#3fd6d0' },
    motif: 'tenants',
  },
  {
    id: 'edify-club',
    title: 'Edify.Club',
    year: '2025',
    genre: 'E-Commerce • Backend • Microservices',
    logline: 'An industrial-scale e-commerce platform — the backend behind product selection, payments, integrations and support automation.',
    stack: ['Node.js', 'Redis', 'MySQL', 'AWS EC2', 'Docker', 'Microservices'],
    build: [
      'Orchestrated a Redis-based atomic lock with TTL-based cache invalidation for product selection and payments — safe concurrency for 50K+ monthly transactions and 45% fewer DB queries.',
      'Deployed containerised microservices on AWS EC2 with Docker, CI/CD and load balancing — 40% faster deployments and 99.9% uptime.',
      'Integrated 10+ third-party apps via OAuth and shipped AI agents plus an L1 auto-resolution ticketing layer, cutting manual effort by 70% and ticket handling by 50%.',
    ],
    features: [
      'Redis atomic locks for payments',
      'TTL-based cache invalidation',
      'Dockerised microservices on AWS EC2',
      'CI/CD & load balancing',
      'AI agents for Tier-1 support',
      '10+ OAuth integrations with rate limiting',
    ],
    metrics: [
      { value: '50K+', label: 'monthly transactions' },
      { value: '99.9%', label: 'uptime' },
      { value: '45%', label: 'fewer DB queries' },
      { value: '40%', label: 'faster deployments' },
      { value: '70%', label: 'less manual support effort' },
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
    id: 'scale',
    title: '50M+ Records',
    org: 'AiSensy',
    detail: 'A revenue-attribution tracker unifying abandoned-cart & COD tracking with backfill, cron rollups and ROI across 3 databases.',
    laurel: 'Data at Scale',
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
    id: 'growth',
    title: '60%+ Growth',
    org: 'GoKwik',
    detail: 'A publish-gated billing feature that drove 60%+ growth in popup creation and app adoption.',
    laurel: 'Product Impact',
  },
];

/** Live deployments shown in the "Now streaming" rail under the achievements. */
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Live', name: 'FeaturePulse AI', link: 'https://futurepulseai.netlify.app/login' },
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
    subtitle: 'TypeScript every day',
    skills: [
      { name: 'TypeScript', mono: 'Ts', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Golang', mono: 'Go' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs built for growth',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'NestJS', mono: 'Ne' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Hibernate', mono: 'Hb' },
      { name: 'Gin', mono: 'Gi' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'gRPC', mono: 'Rp' },
      { name: 'JWT / OAuth2', mono: 'Jw' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Merchant-grade interfaces',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Shopify Polaris', mono: 'Po' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL, NoSQL & caching',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Elasticsearch', mono: 'Es' },
    ],
  },
  {
    id: 'streaming',
    title: 'Messaging & Streaming',
    subtitle: 'Events in motion',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf' },
      { name: 'RabbitMQ', mono: 'Rq' },
      { name: 'BullMQ', mono: 'Bq' },
      { name: 'Socket.IO', mono: 'Io' },
    ],
  },
  {
    id: 'cloud',
    title: 'DevOps & Cloud',
    subtitle: 'Shipping to production',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'EC2 · S3 · Lambda · ECS/EKS' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'GCP', mono: 'Gc' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Kibana & Grafana', mono: 'Kg' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'LLMs in real products',
    skills: [
      { name: 'Claude API', mono: 'Cl' },
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
  TypeScript: ['FeaturePulse AI', 'Therapist AI', 'Fix Mate AI'],
  Java: ['Revive'],
  Golang: ['Revive'],
  'C++': ['CPU Simulation', '500+ DSA problems'],
  'Node.js': ['AiSensy', 'Edify microservices', 'Revive'],
  'Express.js': ['FeaturePulse AI', 'Therapist AI'],
  'Spring Boot': ['Revive'],
  gRPC: ['Revive — 40% less serialisation overhead'],
  'JWT / OAuth2': ['Revive', 'Edify — 10+ OAuth integrations'],
  'React.js': ['GoKwik dashboard migration', 'FeaturePulse AI', 'Therapist AI'],
  'Shopify Polaris': ['GoKwik dashboard migration'],
  PostgreSQL: ['FeaturePulse AI', 'Revive'],
  Redis: ['Edify atomic locks', 'FeaturePulse AI (Upstash)', 'Revive'],
  MongoDB: ['Therapist AI', 'Revive'],
  'Apache Kafka': ['GoKwik — 10K+ weekly sessions', 'Revive'],
  BullMQ: ['FeaturePulse AI'],
  'Socket.IO': ['FeaturePulse AI'],
  AWS: ['Edify — 99.9% uptime on EC2'],
  Docker: ['Edify — 40% faster deployments'],
  'Claude API': ['FeaturePulse AI'],
  LLMs: ['FeaturePulse AI', 'Therapist AI', 'GoKwik AI popups'],
  RAG: ['Therapist AI'],
  'AI Agents': ['Edify Tier-1 automation', "Sahil's AI Agent"],
  Microservices: ['Revive', 'Edify.Club'],
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
    period: 'Dec 2024 – Dec 2025',
    synopsis: 'Backend Consultant, then Software Development Engineer at Edify in Bengaluru.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Lock',
        description: 'A Redis atomic lock with TTL cache invalidation for 50K+ monthly transactions — 45% fewer DB queries.',
        tags: ['Node.js', 'Redis'],
        runtime: 'Backend Consultant',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Automator',
        description: '10+ OAuth integrations, AI agents for Tier-1 workflows and an L1 auto-resolution ticketing layer.',
        tags: ['AI Agents', 'OAuth'],
        runtime: 'SDE',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Containerised microservices on AWS EC2 with CI/CD and load balancing — 99.9% uptime.',
        tags: ['Docker', 'AWS EC2', 'CI/CD'],
        runtime: 'Edify',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The GoKwik Arc',
    period: 'Dec 2025 – May 2026',
    synopsis: 'Application Engineer at GoKwik, building popups, billing and analytics for Shopify merchants.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Migration',
        description: 'Moved the legacy Shopify dashboard to React & Polaris — 35% faster loads and 20% more merchant installs.',
        tags: ['React', 'Polaris'],
        runtime: 'Dec 2025',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The Generator',
        description: 'An AI-driven popup-generation pipeline on the Shopify Admin & Storefront APIs — 80% faster campaign setup.',
        tags: ['AI', 'Shopify API'],
        runtime: 'GoKwik',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Stream',
        description: 'App events streamed through Kafka into analytics — real-time merchant insights across 10K+ weekly sessions.',
        tags: ['Kafka', 'Analytics'],
        runtime: 'GoKwik',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Paywall',
        description: 'Publish-gated billing with tiered entitlements, driving 60%+ growth in popup creation and adoption.',
        tags: ['Billing', 'Product'],
        runtime: 'May 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Builder',
    period: '2025 – 2026',
    synopsis: 'Side projects — AI products and distributed systems built end to end.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Listener',
        description: 'Therapist AI — a RAG-powered therapy chatbot with AES-encrypted messages and 50+ users in month one.',
        tags: ['MERN', 'RAG', 'LLM'],
        runtime: 'Aug – Sep 2025',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Splitter',
        description: 'Revive — six isolated microservices with gRPC contracts, Kafka notifications and an atomic Razorpay checkout.',
        tags: ['Spring Boot', 'Go', 'gRPC', 'Kafka'],
        runtime: 'Mar – Apr 2026',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'The Reader',
        description: 'FeaturePulse AI — Claude analyses 150+ app reviews in under 3 minutes, with every step streamed live.',
        tags: ['Claude API', 'BullMQ', 'Socket.IO'],
        runtime: 'Apr – May 2026',
        palette: amber,
      },
    ],
  },
  {
    number: 6,
    title: 'Now Streaming: AiSensy',
    period: 'Aug 2026 – Present',
    synopsis: 'Software Development Engineer at AiSensy in Gurugram.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Attribution',
        description: 'Revenue attribution extended to WooCommerce — a 50M+ record tracker with backfill, cron rollups and ROI across 3 databases.',
        tags: ['WooCommerce', 'Data pipelines'],
        runtime: 'Aug 2026 – Present',
        palette: violet,
      },
      {
        code: 'S06 E02',
        title: 'The Bug Hunt',
        description: 'Root-caused a critical bug firing premature order-confirmation messages across 6K+ Shopify merchants.',
        tags: ['Debugging', 'Shopify'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Now playing', title: 'AiSensy', detail: 'Software Development Engineer', palette: violet },
  { label: 'Data at scale', title: '50M+', detail: 'Records in the revenue-attribution tracker', palette: crimson },
  { label: 'The AI Original', title: 'FeaturePulse AI', detail: '150+ reviews in under 3 minutes', palette: amber },
  { label: 'Setup time cut', title: '80%', detail: 'AI popup generation at GoKwik', palette: ocean },
  { label: 'Event streaming', title: 'Kafka', detail: '10K+ weekly sessions of merchant insights', palette: jade },
  { label: 'Alma mater', title: 'IIT Guwahati', detail: 'Master of Technology', palette: violet },
  { label: 'Signature move', title: 'Redis Locks', detail: '50K+ monthly transactions', palette: crimson },
  { label: 'Uptime', title: '99.9%', detail: 'Dockerised microservices on AWS', palette: amber },
  { label: 'Problems solved', title: '500+', detail: 'LeetCode & GFG', palette: ocean },
  { label: 'Only intern', title: 'Merged to Prod', detail: 'Code merged into the main branch', palette: jade },
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
    title: 'Backend to browser.',
    lines: ['TypeScript, Java, Go, Python, C++', 'Node.js · Spring Boot · Kafka · Redis · PostgreSQL · AWS'],
    chips: ['TypeScript', 'Node.js', 'Kafka', 'Redis', 'AWS', 'Claude API'],
  },
  {
    kicker: 'Experience',
    title: 'The Production Arc',
    lines: ['Edify → GoKwik → AiSensy', '50M+ records · 50K+ monthly transactions', '10K+ weekly sessions · 99.9% uptime'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: ['FeaturePulse AI — Claude-powered review triage', 'Revive — 6 microservices over gRPC & Kafka', 'Therapist AI — RAG chatbot, 50+ users'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Only backend intern merged to production', '500+ DSA problems solved', '60%+ growth from publish-gated billing'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Revenue attribution at AiSensy · AI pipelines · System Design'],
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
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2023 – 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 career highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Live links`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
