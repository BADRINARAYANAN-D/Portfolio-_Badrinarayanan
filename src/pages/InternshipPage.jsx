import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Radio, Cpu, GitBranch, Shield, AlertTriangle, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { internshipData } from '../data';

// Icon map — data uses string keys
const ICON_MAP = { Battery, Zap, Radio, Cpu, GitBranch, Shield, AlertTriangle, Code };

function JourneyStep({ step, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const isLeft = index % 2 === 0;
  const Icon = ICON_MAP[step.icon] ?? Cpu;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 }}
      className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-10"
    >
      {/* Left content or spacer */}
      {isLeft ? (
        <div className="card p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl flex-shrink-0" style={{ background: 'rgba(0,113,227,0.1)' }}>
              <Icon size={15} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>{step.title}</h3>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
          <p className="text-xs leading-relaxed italic" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
            {step.detail}
          </p>
        </div>
      ) : <div />}

      {/* Center node */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: 'var(--accent)', zIndex: 2, flexShrink: 0 }}
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Right content or spacer */}
      {!isLeft ? (
        <div className="card p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl flex-shrink-0" style={{ background: 'rgba(0,113,227,0.1)' }}>
              <Icon size={15} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>{step.title}</h3>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
          <p className="text-xs leading-relaxed italic" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
            {step.detail}
          </p>
        </div>
      ) : <div />}
    </motion.div>
  );
}

export default function InternshipPage() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const { meta, context, journey, skillsAcquired, lessons } = internshipData;

  // Overview stat cards
  const stats = [
    { label: 'Domain', value: 'Embedded Systems' },
    { label: 'Hardware', value: 'Teensy 4.1' },
    { label: 'Protocol', value: 'CAN Bus' },
    { label: 'Year', value: meta.year },
  ];

  return (
    <>
      <Helmet>
        <title>EV Internship Case Study — Badrinarayanan D</title>
        <meta
          name="description"
          content="Engineering case study documenting practical exposure to Battery Management Systems, CAN Bus communication, Teensy 4.1 embedded firmware, and automotive engineering workflows at an EV startup."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20 min-h-screen"
        style={{ background: 'var(--bg)' }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-10 text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={15} /> Back
          </button>

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="section-label">Engineering Case Study</span>
            <h1
              className="font-black tracking-tighter mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text)', letterSpacing: '-0.04em' }}
            >
              {meta.title}
            </h1>
            <p className="text-lg font-light mb-2" style={{ color: 'var(--text-secondary)' }}>
              {meta.subtitle}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {meta.location} · {meta.year}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              {meta.tags.map((tag) => (
                <span key={tag} className="tag tag-accent">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {stats.map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>
                  {s.label}
                </p>
                <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{s.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Context */}
          <div className="card p-8 mb-14">
            <h2 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              The Context
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {context}
            </p>
          </div>

          {/* Journey */}
          <div className="mb-14">
            <h2
              className="font-black tracking-tighter text-center mb-12"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              The Learning Journey
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--border) 5%, var(--border) 95%, transparent)' }}
                aria-hidden
              />
              {journey.map((step, i) => (
                <JourneyStep key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Skills Acquired */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8 mb-8"
          >
            <h2 className="font-bold text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
              Skills & Tools Encountered
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {skillsAcquired.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Lessons Learned */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h2 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              Engineering Lessons
            </h2>
            <div className="flex flex-col gap-3">
              {lessons.map((lesson, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  {lesson}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
