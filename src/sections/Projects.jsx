import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Cpu, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projectsData } from '../data/replitData';

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

const categories = [
  'All',
  'Machine Learning',
  'Deep Learning',
  'Mobile Development',
  'In Progress',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'In Progress') return p.status === 'In Progress';
    return p.category === activeCategory;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="Projects" />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2">
                          {project.short}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
                            aria-label="View Github repository"
                          >
                            <GithubIcon size={20} />
                          </a>

                        )}

                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="p-2.5 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
                          aria-label={isExpanded ? 'Hide details' : 'Show details'}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>

                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-secondary text-xs font-medium rounded-md text-foreground">
                        {project.category}
                      </span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/50 text-xs font-medium rounded-md text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-border space-y-6 text-sm text-muted-foreground leading-relaxed">
                            {project.problem && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Problem & Context
                                </h4>
                                <p>{project.problem}</p>
                              </div>
                            )}

                            {project.objective && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Objective
                                </h4>
                                <p>{project.objective}</p>
                              </div>
                            )}

                            {project.approach && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Approach
                                </h4>
                                <p>{project.approach}</p>
                              </div>
                            )}

                            {project.implementation && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Implementation Details
                                </h4>
                                <p>{project.implementation}</p>
                              </div>
                            )}

                            {project.outcome && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Outcome & Evaluation
                                </h4>
                                <p>{project.outcome}</p>
                              </div>
                            )}

                            {project.lessons && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Lessons Learned
                                </h4>
                                <p>{project.lessons}</p>
                              </div>
                            )}

                            {project.future && (
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  Future Scope
                                </h4>
                                <p>{project.future}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
