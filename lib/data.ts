export const projects = [
  {
    id: 1,
    featured: true,
    name: 'Train Train',
    subtitle: 'AI Fitness Coach',
    year: 2026,
    description:
      'Hackathon-built AI fitness coach that turns training goals into structured lifting plans and form-aware feedback.',
    role: 'Built the product end to end during the Vercel × Google DeepMind hackathon.',
    impact:
      'A concrete example of how I apply systems thinking to AI products — owning the backend and integration layer end to end.',
    highlights: [
      'Used Gemini 2.5 Flash plus Zod to generate structured workouts instead of free-form chat output.',
      'Prototyped a squat-feedback experience and explored a MediaPipe-based pose-analysis direction beyond planning.',
      'Built a demoable Next.js product prototype with a clear AI fitness-coach workflow, beyond a simple model wrapper.',
    ],
    tags: ['Next.js', 'TypeScript', 'Gemini', 'Vercel AI SDK', 'Zod'],
    demoUrl: 'https://youtu.be/DHIldujLmE4',
  },
  {
    id: 2,
    name: 'Skindex',
    subtitle: 'Product Discovery for Skincare',
    year: 2019,
    description:
      'Search and discovery experience for skincare products, designed to help users find options that match their needs faster.',
    role: 'Worked on a user-facing product concept that blended search relevance, product data, and decision support.',
    impact:
      'Shows product sensibility alongside technical execution and an early interest in applied AI.',
    highlights: [
      'Focused on matching people to products with clearer decision support instead of overwhelming catalog browsing.',
      'Combined product thinking, search, and personalization-oriented ideas in a domain with messy user needs.',
      'Helped frame AI as a practical tool for discovery and recommendations, not just novelty.',
    ],
    tags: ['AI', 'Search', 'UC Berkeley'],
  },
  {
    id: 3,
    name: 'LettuceEat',
    subtitle: 'Behavior Change App',
    year: 2017,
    description:
      'Mobile app for building healthier eating habits through daily challenges, reminders, and lightweight accountability.',
    role: 'Explored how product design can shape repeat behavior instead of relying on one-time motivation.',
    impact:
      'Rounds out the portfolio with product and behavior-design thinking, not only infrastructure work.',
    highlights: [
      'Designed around habit formation and repeat engagement instead of one-off task completion.',
      'Connected UX decisions directly to user behavior and product outcomes.',
      'Rounds out the portfolio by showing breadth across engineering and product design.',
    ],
    tags: ['Mobile', 'UX Design', 'UC Berkeley'],
  },
]

export const experience = [
  {
    id: 1,
    company: 'Oracle',
    role: 'Senior Software Engineer, Analytics Cloud',
    dates: 'Apr 2025 – Present',
    summary:
      'Backend APIs, internal DevOps tooling, and workflow orchestration for Oracle Analytics Cloud.',
    highlights: [
      'Built an internal DevOps UI action letting engineers trigger backend APIs and fetch debugging data directly, speeding triage and support workflows.',
      'Delivered API and workflow changes across 8 tracked features and fixes — including 4 Private Endpoint APIs, RCE status visibility, pod lifecycle updates, and OKE workflow changes.',
      'Built backend integrations across metadata services, deployment orchestration, and PAC that tied Private Endpoint, RCE, and lifecycle workflow changes together across multiple releases.',
      'Diagnosed and fixed workflow failures in batch execution, pod placement, and PAC operations; coordinated patch backports, validation builds, and runbook updates.',
    ],
    skills: ['Java', 'REST APIs', 'Oracle Cloud (OCI)', 'Distributed Systems', 'Incident Response', 'Agentic Workflows'],
  },
  {
    id: 2,
    company: 'Oracle',
    role: 'Senior Software Engineer, Cloud Infrastructure',
    dates: 'Jan 2021 – Apr 2025',
    summary:
      'Automated infrastructure workflows across 60+ sites in 6+ regions while owning production reliability and incident response.',
    highlights: [
      'Automated OCI Classic infrastructure workflows — bare-metal patching, SSL rotations, Windows VM decommissioning, and private network changes — across 60+ sites in 6+ regions.',
      'Maintained production reliability across cloud networking, portal, monitoring, and site-management systems through troubleshooting and incident response.',
      'Mentored teammates, documented runbooks and design notes, and participated in 20+ interviews and debriefs.',
    ],
    skills: ['Python', 'Oracle Cloud (OCI)', 'Infrastructure Automation', 'System Deployment', 'Networking'],
  },
  {
    id: 3,
    company: 'Splunk',
    role: 'Software Engineer, ML Toolkit Performance',
    dates: 'Sep 2019 – Dec 2020',
    summary:
      'Refactored testing infrastructure and migrated 20+ performance test cases to cloud-based workflows.',
    highlights: [
      'Refactored a shared Python library and migrated 20+ performance test cases from on-prem to cloud, improving automated testing for the Splunk ML Toolkit.',
      'Improved the reliability and maintainability of performance testing directly tied to developer trust in ML tooling.',
    ],
    skills: ['Python', 'Performance Engineering', 'Machine Learning', 'AWS', 'Test Automation'],
  },
  {
    id: 4,
    company: 'HTC',
    role: 'Senior Software Engineer, System Power and Performance',
    dates: 'Jun 2013 – Jul 2016',
    summary:
      'System power, thermal, and performance engineering for HTC flagship phones, including a patented adaptive CPU scaling algorithm.',
    highlights: [
      'Filed a patent for adaptive CPU scaling based on wireless network conditions, balancing power, thermal, and performance trade-offs in real time.',
      'Coordinated battery life, thermal, and performance optimization across 10+ teams for HTC flagship devices.',
      'Worked across the device stack on embedded and system-level engineering, with deep exposure to the physical trade-offs of power, heat, and compute — a foundation that maps directly to modern AI hardware infrastructure.',
    ],
    skills: ['C/C++', 'Embedded Systems', 'Power & Thermal Management', 'System Performance', 'Cross-functional Collaboration', 'Algorithm Design', 'Android', 'Linux'],
  },
]

export const education = [
  {
    id: 1,
    institution: 'UC Berkeley',
    degree: 'Master of Information Management and Systems (MIMS)',
    year: 2019,
  },
  {
    id: 2,
    institution: 'National Tsing Hua University',
    degree: 'M.S. and B.S. in Computer Science',
    year: 2013,
  },
]

export const aboutParagraphs = [
  `I'm Jeffery, a San Francisco-based engineer with a background in backend systems, cloud infrastructure, and developer tooling. At Oracle, I've worked on large-scale infrastructure automation and analytics workflows; at Splunk, I worked on ML-tooling performance; earlier at HTC, I built systems foundations across embedded and device-level engineering.`,
  `What ties that work together is systems thinking: making complex platforms more reliable, operable, and useful. More recently, I've been applying that same mindset to AI products and agentic workflows, and I'm looking for senior Backend or Platform Engineer roles, especially on teams building AI infrastructure — where strong engineering fundamentals still matter.`,
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jefferyycc',
    icon: 'github',
    label: 'github.com/jefferyycc',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jefferyycc/',
    icon: 'linkedin',
    label: 'linkedin.com/in/jefferyycc',
  },
]
