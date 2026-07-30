import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenLine } from 'lucide-react';

/**
 * Blog section — placeholder state.
 * No fake/demo blog posts are shown because there are no published blog posts to display.
 * When you start writing, replace this component with actual blog cards.
 */
export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Writing</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            Blog & Notes
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Technical writing, engineering notes, and learning journals — coming soon.
          </p>
        </motion.div>

        {/* Coming soon state */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card p-10 flex flex-col items-center gap-5 text-center max-w-lg mx-auto"
        >
          <div
            className="w-16 h-16 rounded-3xl flex items-center justify-center"
            style={{ background: 'rgba(0,113,227,0.08)' }}
          >
            <PenLine size={28} style={{ color: 'var(--accent)', opacity: 0.8 }} />
          </div>
          <div>
            <p className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>
              Writing in progress
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm working on articles about CAN Bus communication, ML pipeline design,
              and embedded systems patterns. Stay tuned.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
