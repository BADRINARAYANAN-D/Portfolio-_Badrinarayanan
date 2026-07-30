import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { achievementsData } from '../data';

function AchievementCard({ item, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card card-hover p-6 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: `${item.categoryColor}18`,
            color: item.categoryColor,
          }}
        >
          {item.category}
        </span>
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.date}</span>
      </div>
      <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {item.description}
      </p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-xs flex items-center gap-1"
          style={{ color: 'var(--accent)' }}
        >
          <ExternalLink size={11} /> View
        </a>
      )}
    </motion.div>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Recognition</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Achievements
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Milestones and experiences from my engineering journey — documented accurately.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.map((item, i) => (
            <AchievementCard key={item.id} item={item} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
