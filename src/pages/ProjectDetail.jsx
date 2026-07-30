import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projectsData } from '../data';

export default function ProjectDetail() {
  const { slug }   = useParams();
  const navigate   = useNavigate();

  const project = projectsData.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24">
        <p className="text-lg font-semibold" style={{ color: 'var(--text)' }}>Project not found</p>
        <Link to="/" className="btn-primary">← Back Home</Link>
      </div>
    );
  }

  const caseSections = [
    { label: '01 — Problem Statement', content: project.problem },
    { label: '02 — Objective',         content: project.objective },
    { label: '03 — Approach',          content: project.approach },
    { label: '04 — Implementation',    content: project.implementation },
    { label: '05 — Outcome',           content: project.outcome },
  ];

  return (
    <>
      <Helmet>
        <title>{project.title} — Badrinarayanan D</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-20 min-h-screen"
        style={{ background: 'var(--bg)' }}
      >
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-10 text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={15} /> Back to Projects
          </button>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag tag-accent">{project.category}</span>
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1
              className="font-black tracking-tighter mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              {project.title}
            </h1>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: '640px' }}>
              {project.overview}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                <GithubIcon size={15} /> GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>

          <div className="divider mb-12" />

          {/* Case study sections */}
          {caseSections.map(({ label, content }) =>
            content ? (
              <section key={label} className="mb-12">
                <h2 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--accent)' }}>
                  {label}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {content}
                </p>
              </section>
            ) : null
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--accent)' }}>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </section>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned?.length > 0 && (
            <section className="card p-6 mb-8">
              <h2 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
                Lessons Learned
              </h2>
              <div className="flex flex-col gap-2.5">
                {project.lessonsLearned.map((lesson, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    {lesson}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future improvements */}
          {project.futureImprovements?.length > 0 && (
            <section className="card p-6">
              <h2 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
                Future Improvements
              </h2>
              <div className="flex flex-col gap-2.5">
                {project.futureImprovements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(0,113,227,0.4)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </>
  );
}
