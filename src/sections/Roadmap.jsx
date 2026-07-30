import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { roadmapData } from '../data';

const STATUS_CONFIG = {
  completed:   { icon: CheckCircle2, color: '#30D158', bg: 'rgba(48,209,88,0.1)',   label: 'Completed'    },
  'in-progress': { icon: Clock,       color: '#0071E3', bg: 'rgba(0,113,227,0.1)',    label: 'In Progress'  },
  planned:     { icon: Circle,       color: '#636366', bg: 'rgba(99,99,102,0.08)',  label: 'Planned'      },
};

function RoadmapStep({ step, index, total }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const cfg = STATUS_CONFIG[step.status];
  const StatusIcon = cfg.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex gap-4 group"
    >
      {/* Icon column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: cfg.bg, border: `2px solid ${cfg.color}` }}
        >
          <StatusIcon size={15} style={{ color: cfg.color }} />
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 my-1"
            style={{ background: 'var(--border)', minHeight: '24px' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-6 flex-1">
        <div className="card p-4 transition-all duration-200 group-hover:border-accent/20">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <span className="text-base">{step.icon}</span>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                {step.title}
              </h3>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ background: cfg.bg, color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const completedCount = roadmapData.steps.filter((s) => s.status === 'completed').length;
  const totalCount = roadmapData.steps.length;

  return (
    <section id="roadmap" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Direction</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            {roadmapData.title}
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--text-secondary)' }}>
            {roadmapData.subtitle}
          </p>

          {/* Progress bar */}
          <div className="mt-6 max-w-sm">
            <div className="flex items-center justify-between text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
              <span>{completedCount} of {totalCount} milestones completed</span>
              <span style={{ color: '#30D158' }}>{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(to right, #30D158, #0071E3)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(completedCount / totalCount) * 100}%` }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div>
          {roadmapData.steps.map((step, i) => (
            <RoadmapStep key={step.id} step={step} index={i} total={roadmapData.steps.length} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-5 mt-4 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {Object.entries(STATUS_CONFIG).map(([key, cfg]) => {
            const Icon = cfg.icon;
            return (
              <span key={key} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <Icon size={12} style={{ color: cfg.color }} />
                {cfg.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
