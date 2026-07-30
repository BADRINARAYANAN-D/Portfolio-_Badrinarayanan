import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Smartphone, Wrench, Users } from 'lucide-react';
import { skillsData, aiPhilosophy } from '../data/replitData';

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

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Programming Languages':
      return <Code className="w-5 h-5" />;
    case 'AI and Machine Learning':
      return <Brain className="w-5 h-5" />;
    case 'Embedded and EV':
      return <Cpu className="w-5 h-5" />;
    case 'Mobile Development':
      return <Smartphone className="w-5 h-5" />;
    case 'Developer Tools':
      return <Wrench className="w-5 h-5" />;
    case 'Soft Skills':
      return <Users className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card border border-card-border p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <div className="p-2 bg-secondary rounded-lg">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/50 border border-border p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <h3 className="text-xl font-bold text-foreground mb-4">
            {aiPhilosophy.title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl relative z-10">
            {aiPhilosophy.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
