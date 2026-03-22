/* =============================================
   PORTFOLIO DATA — Edit this file to customise
   ============================================= */

export const personal = {
  name: 'Sachinkumar',
  role: 'Frontend Developer',
  tagline: 'I build fast, beautiful web experiences that people actually enjoy using.',
  location: 'Raichur, Karnataka 🇮🇳',
  email: 'sachinkumardadmi2006@gmail.com',
  github: 'https://github.com/sachinkumardadmi2006-droid',
  linkedin: 'https://www.linkedin.com/in/sachinkumar-dadmi-90036436a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvK7E2ZIWSZyMDeYHxxdjNg%3D%3D',
  twitter: 'https://twitter.com/yourname',
  resumeUrl: './resume.pdf',
  availableForWork: true,
}

export const about = {
  bio: `I'm a passionate frontend developer who loves turning ideas into pixel-perfect, performant web apps. I enjoy working at the intersection of design and engineering — where great UX meets clean code.

When I'm not coding, I'm probably exploring new tech, contributing to open source, or sharing what I've learned with the community.`,
  highlights: [
    { value: '15+', label: 'Projects built' },
    { value: '2+',  label: 'Years coding' },
    { value: '5+',  label: 'Happy clients' },
    { value: '100%', label: 'Passion for craft' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'Bootstrap', 'React.js', 'TailwindCSS', 'Next.js', 'Framer Motion'],
  },
  {
    category: 'Styling',
    items: ['CSS3', 'Styled Components', 'CSS Animations', 'Responsive Design'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub', 'Figma', 'VS Code', 'Vercel', 'Netlify', 'Render', 'Chrome DevTools'],
  },
  {
    category: 'Learning',
    items: ['Javascript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Express', ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'CraftCV — AI Resume Builder',
    description: 'SaaS platform that uses AI to build ATS-optimised resumes and auto-generate portfolio websites. Features live preview, PDF export, and job description matching.',
    tags: ['React', 'Claude API', 'TailwindCSS', 'Firebase'],
    github: 'https://github.com/yourname/craftcv',
    live: 'https://craftcv.vercel.app',
    featured: true,
    color: '#6ee7b7',
    year: '2025',
  },
  {
    id: 2,
    title: 'pathAI — Career Guidance Platform',
    description: 'Helps confused students find their ideal career path through a skill-based quiz, AI suggestions, personalised roadmap generator, and live job trends dashboard.',
    tags: ['React', 'Vite', 'Claude API', 'Chart.js'],
    github: 'https://github.com/yourname/pathai',
    live: 'https://pathai.vercel.app',
    featured: true,
    color: '#818cf8',
    year: '2025',
  },
  {
    id: 3,
    title: 'GreenScore — Carbon Tracker',
    description: 'Personal carbon footprint tracker with daily action logging, team challenges, leaderboard, and an interactive impact map.',
    tags: ['React', 'Leaflet.js', 'Firebase', 'PWA'],
    github: 'https://github.com/yourname/greenscore',
    live: 'https://greenscore.vercel.app',
    featured: false,
    color: '#4ade80',
    year: '2024',
  },
  {
    id: 4,
    title: 'FlashGenius — AI Flashcard Maker',
    description: 'Upload any PDF or notes — AI instantly generates smart flashcards and a quiz. Features spaced repetition and shareable decks.',
    tags: ['React', 'Claude API', 'PDF.js', 'LocalStorage'],
    github: 'https://github.com/yourname/flashgenius',
    live: 'https://flashgenius.vercel.app',
    featured: false,
    color: '#fb923c',
    year: '2024',
  },
]

export const certificates = [
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Startup',
    period: 'Jun 2024 – Sep 2024',
    type: 'Internship',
    points: [
      'Built 4 production features used by 3,000+ active users daily',
      'Reduced page load time by 42% through code splitting and lazy loading',
      'Collaborated with design team to implement pixel-perfect UI components',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Jan 2024 – Present',
    type: 'Freelance',
    points: [
      'Delivered 5+ client projects including e-commerce sites and landing pages',
      'Maintained 100% on-time delivery rate across all client engagements',
      'Specialised in React + Vite projects with performance budgets under 100kb',
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 – Present',
    type: 'Open Source',
    points: [
      'Contributed UI improvements and bug fixes to 3 popular React libraries',
      'Wrote technical documentation improving onboarding for new contributors',
    ],
  },
]
