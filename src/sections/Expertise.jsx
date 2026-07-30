import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Code2 } from 'lucide-react';

const EXPERTISE = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    subtitle: 'ML · DL · CV · NLP',
    description:
      'Building intelligent systems using modern deep learning techniques, from CNNs for computer vision to transformers for NLP.',
    skills: [
      'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
      'Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV',
      'Data Analysis', 'Model Deployment', 'Jupyter',
    ],
    color: '#0071E3',
    bg: 'rgba(0,113,227,0.05)',
  },
  {
    icon: Zap,
    title: 'Electric Vehicle Technology',
    subtitle: 'BMS · Embedded · Automotive',
    description:
      'Hands-on engineering experience in EV architecture, battery management systems, and automotive-grade communication protocols.',
    skills: [
      'Battery Management Systems', 'Embedded Systems', 'Teensy 4.1',
      'PlatformIO', 'CAN Bus', 'Vector CANdb++', 'Kvaser',
      'DBC Files', 'Firmware Development', 'Engineering Validation',
      'Communication Boards', 'High Voltage Safety',
    ],
    color: '#30D158',
    bg: 'rgba(48,209,88,0.05)',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    subtitle: 'Full-Stack · System Design',
    description:
      'Designing and building reliable software from mobile apps to REST APIs, with a focus on clean architecture and engineering principles.',
    skills: [
      'Java', 'React', 'Flutter', 'Dart', 'SQL',
      'REST APIs', 'Git', 'System Design', 'Docker',
      'Node.js', 'Firebase', 'Agile',
    ],
    color: '#FF6B00',
    bg: 'rgba(255,107,0,0.05)',
  },
];

function ExpertiseCard({ icon: Icon, title, subtitle, description, skills, color, bg, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card card-hover p-8 flex flex-col gap-6"
    >
      {/* Icon + title */}
      <div className="flex items-start gap-4">
        <div
          className="p-3 rounded-2xl flex-shrink-0"
          style={{ background: bg, border: `1px solid ${color}22` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
        <div>
          <h3
            className="font-bold leading-tight"
            style={{ color: 'var(--text)', fontSize: '1.125rem', letterSpacing: '-0.01em' }}
          >
            {title}
          </h3>
          <p className="text-xs font-medium mt-0.5" style={{ color }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-lg font-medium"
            style={{
              background: `${color}12`,
              color,
              border: `1px solid ${color}25`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="expertise" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Domains</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Areas of Expertise
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Three distinct engineering domains. One cohesive engineering identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {EXPERTISE.map((ex, i) => (
            <ExpertiseCard key={ex.title} {...ex} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
