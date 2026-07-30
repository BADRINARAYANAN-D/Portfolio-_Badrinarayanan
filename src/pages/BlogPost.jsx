import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, PenLine } from 'lucide-react';

/**
 * Blog post page — placeholder until actual posts are written.
 * No Sanity or PortableText dependency.
 */
export default function BlogPost() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blog — Badrinarayanan D</title>
        <meta name="description" content="Engineering blog posts coming soon." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20 min-h-screen"
        style={{ background: 'var(--bg)' }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-10 text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={15} /> Back
          </button>

          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <div
              className="w-16 h-16 rounded-3xl flex items-center justify-center"
              style={{ background: 'rgba(0,113,227,0.08)' }}
            >
              <PenLine size={28} style={{ color: 'var(--accent)', opacity: 0.8 }} />
            </div>
            <div>
              <p className="font-semibold text-xl mb-2" style={{ color: 'var(--text)' }}>
                Blog posts coming soon
              </p>
              <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
                I'm working on articles about CAN Bus, ML pipelines, and embedded systems.
              </p>
            </div>
            <Link to="/" className="btn-primary">← Back to Portfolio</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
