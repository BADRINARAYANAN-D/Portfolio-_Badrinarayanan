// ─── Timeline Data ────────────────────────────────────────────────────────────
// Replicated from Replit Portfolio System

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'education' | 'experience' | 'project' | 'certification' | 'milestone';
  tags?: string[];
  isCurrent?: boolean;
}

export const timelineData: TimelineEntry[] = [
  {
    id: 't1',
    year: '2024',
    title: 'Started B.E. Computer Science Engineering',
    subtitle: "St. Joseph's College of Engineering, Chennai",
    description: 'Admitted into Computer Science Engineering undergraduate program.',
    category: 'education',
  },
  {
    id: 't2',
    year: '2024',
    title: 'Programming Foundations',
    description: 'Deepened knowledge of Python, Java, and SQL through coursework and self-study.',
    category: 'milestone',
  },
  {
    id: 't3',
    year: '2024',
    title: 'Machine Learning',
    description: 'Completed NPTEL Python for Data Science. Began implementing supervised and unsupervised models.',
    category: 'certification',
  },
  {
    id: 't4',
    year: '2025',
    title: 'Deep Learning',
    description: 'Built LSTM sentiment analysis model and breast cancer classifier using TensorFlow and Keras. Earned IBM CognitiveClass Deep Learning certification.',
    category: 'project',
  },
  {
    id: 't5',
    year: '2025',
    title: 'Mobile Development',
    description: 'Developed Flutter community app during internship at Scode Software Solutions. Completed Flutter certification.',
    category: 'experience',
  },
  {
    id: 't6',
    year: '2025',
    title: 'Certifications',
    description: 'Completed Infosys Data Science Foundation, Cisco Modern AI and Cybersecurity courses, and MongoDB basics.',
    category: 'certification',
  },
  {
    id: 't7',
    year: '2026',
    title: 'EV and Embedded Systems Internship',
    description: 'Three-week internship at Giroskop Mobility Pvt. Ltd. Practical exposure to BMS, CAN communication, Teensy 4.1, PlatformIO, and Engineering Validation Testing.',
    category: 'experience',
  },
  {
    id: 't8',
    year: '2026',
    title: 'Current Focus',
    description: 'Expanding knowledge in computer vision, advanced deep learning, and embedded systems. Continuing ML and mobile projects.',
    category: 'milestone',
    isCurrent: true,
  },
  {
    id: 't9',
    year: 'Future',
    title: 'Looking Ahead',
    description: 'Targeting internships and research opportunities in AI/ML engineering and embedded EV systems. Open to higher studies.',
    category: 'milestone',
  },
];
