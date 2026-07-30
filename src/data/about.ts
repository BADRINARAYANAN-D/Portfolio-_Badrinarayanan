// ─── About Section Data ───────────────────────────────────────────────────────
// Replicated from Replit Portfolio System

export const aboutData = {
  sectionLabel: 'About',
  heading: 'About Me',
  subheading:
    'Computer Science Engineering undergraduate with a strong foundation in machine learning, deep learning, and embedded systems.',

  philosophy: {
    quote:
      'I prefer understanding a system before using it. Whether it is a neural network or a CAN bus, I work to understand what is actually happening before building on top of it.',
    attribution: 'Engineering Philosophy',
  },

  cards: [
    {
      id: 'education',
      icon: 'GraduationCap',
      label: 'Education',
      content: 'St. Joseph\'s College of Engineering, Chennai, 2024–2028 (Expected)',
      sub: 'B.E. Computer Science and Engineering',
      accent: true,
    },
    {
      id: 'focus',
      icon: 'Target',
      label: 'Academic & Project Focus',
      content: 'Machine Learning and Deep Learning using Python, TensorFlow, and Scikit-learn. Mobile development with Flutter. Exploring embedded firmware and electric vehicle systems through academic and internship work.',
      sub: 'AI/ML & Embedded Systems Focus',
    },
    {
      id: 'philosophy',
      icon: 'Cpu',
      label: 'Engineering Philosophy',
      content: 'I prefer understanding a system before using it. Whether it is a neural network or a CAN bus, I work to understand what is actually happening before building on top of it.',
      sub: 'First Principles Approach',
      highlight: true,
    },
    {
      id: 'trajectory',
      icon: 'Rocket',
      label: 'Career Trajectory',
      content: 'Targeting roles in AI/ML engineering, embedded systems development, or EV technology. Open to research opportunities, internships, and collaborative projects that involve building and understanding complex systems.',
      sub: 'Future Goals',
    },
  ],

  interests: [
    'Advanced Deep Learning',
    'Automotive Communication Protocols',
    'Battery Management Systems',
    'Computer Vision',
    'Real-Time Embedded Firmware',
  ],
} as const;
