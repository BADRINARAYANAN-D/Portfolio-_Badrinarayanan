// ─── Hero Section Data ────────────────────────────────────────────────────────
// Replicated from Replit Portfolio System

export const heroData = {
  name: {
    line1: 'BADRI',
    line2: 'NARAYANAN',
  },

  statusBadge: {
    text: 'Open to opportunities',
    active: true,
  },

  tagline: [
    'Engineering student. AI/ML practitioner.',
    'Building at the intersection of intelligence and embedded systems.',
  ],

  taglines: [
    'Engineering student. AI/ML practitioner.',
    'Building at the intersection of intelligence and embedded systems.',
    'Learning deeply. Implementing deliberately.',
  ],

  subtitle:
    'Computer Science Engineering undergraduate exploring Machine Learning, Deep Learning, Embedded Systems, and Electric Vehicle Technology. I prefer understanding systems from first principles and building things that work.',

  roles: [
    'Engineering student. AI/ML practitioner.',
    'Building at the intersection of intelligence and embedded systems.',
    'Learning deeply. Implementing deliberately.',
  ],

  chips: [
    'AI',
    'ML',
    'Deep Learning',
    'Embedded Systems',
    'BMS',
    'Electric Vehicles',
    'Python',
    'Flutter',
  ],

  cta: {
    primary: { label: 'View Projects', action: 'scrollToProjects' },
    contact: { label: 'Contact Me', action: 'scrollToContact' },
    projects: { label: 'View Projects', action: 'scrollToProjects' },
    resume: {
      label: 'Request Resume',
      url: 'https://mail.google.com/mail/?view=cm&to=badrinarayanan1177%40gmail.com&su=Resume+Request+%E2%80%93+Badrinarayanan&body=Hi+Badrinarayanan%2C%0A%0AI+came+across+your+portfolio+and+would+like+to+request+a+copy+of+your+resume.%0A%0AThank+you.',
    },
  },

  badges: {
    location: { line1: 'Chennai, India', line2: 'Open to Remote' },
    status: { text: 'Open to opportunities' },
  },
} as const;
