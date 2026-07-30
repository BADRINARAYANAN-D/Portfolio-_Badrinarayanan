import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { researchData } from '../data/replitData';

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

export default function Research() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          title="Research Interests"
          subtitle="Areas I am actively exploring and want to go deeper into."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card border border-card-border p-6 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-secondary rounded-xl text-accent shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
