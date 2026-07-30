import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/replitData';

function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="Industry Exposure" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border">
            <div>
              <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                <Briefcase className="w-5 h-5" />
                <span>{experienceData.company}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {experienceData.domain}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full w-fit">
              <Calendar className="w-4 h-4" />
              <span>{experienceData.duration}</span>
            </div>
          </div>

          <div className="py-8 space-y-8">
            {experienceData.phases.map((p, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.phase}
                </span>
                <h4 className="text-lg font-semibold text-foreground mt-1 mb-2">
                  {p.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {experienceData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-md border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Key Outcomes
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {experienceData.outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-secondary/50 rounded-xl border border-border/50 flex flex-col justify-between"
                >
                  <span className="text-xs font-medium text-foreground">
                    {item.title}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-accent mt-1">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-4">
            <p>
              <strong className="text-foreground">Mentor:</strong>{' '}
              {experienceData.mentor}
            </p>
            <p className="max-w-md italic">{experienceData.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
