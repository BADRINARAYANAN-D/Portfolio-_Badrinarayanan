import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye } from 'lucide-react';
import { heroData } from '../data';

// TODO: Replace RESUME_URL with your actual hosted resume PDF URL
// Options: Google Drive (direct link), Dropbox, GitHub, or any CDN
const RESUME_URL = heroData.cta.resume.url;

export default function Resume() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Whether a real resume URL has been configured
  const hasResume = RESUME_URL && !RESUME_URL.includes('TODO') && RESUME_URL !== '/resume.pdf';

  return (
    <section id="resume" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Resume</span>
          <h2
            className="font-black tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
          >
            My Resume
          </h2>
          <p className="mt-4 text-base" style={{ color: 'var(--text-secondary)' }}>
            A concise record of my education, skills, projects, and professional experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card p-8 flex flex-col gap-6"
        >
          {hasResume ? (
            <>
              {/* PDF Preview */}
              <div className="rounded-2xl overflow-hidden" style={{ height: '520px', border: '1px solid var(--border)' }}>
                <iframe
                  src={`${RESUME_URL}#toolbar=0`}
                  title="Resume Preview"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Eye size={16} /> Preview Full
                </a>
                <a
                  href={RESUME_URL}
                  download="Badrinarayanan_D_Resume.pdf"
                  className="btn-primary"
                >
                  <Download size={16} /> Download PDF
                </a>
              </div>
            </>
          ) : (
            /* Placeholder state — shown until resume URL is configured */
            <div className="flex flex-col items-center gap-6 py-16 text-center">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                style={{ background: 'var(--bg)' }}
              >
                <FileText size={36} style={{ color: 'var(--accent)', opacity: 0.7 }} />
              </div>
              <div>
                <p className="font-semibold text-lg mb-2" style={{ color: 'var(--text)' }}>
                  Resume
                </p>
                <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  To enable PDF preview and download, update <code className="text-xs px-1 py-0.5 rounded" style={{ background: 'var(--bg)' }}>src/data/hero.ts</code> with your resume URL.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`mailto:${''}`}
                  className="btn-secondary"
                >
                  Request Resume via Email
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
