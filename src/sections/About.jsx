import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/replitData';

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

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="About" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aboutData.cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-12"
        >
          <h3 className="text-lg font-medium text-foreground mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {aboutData.learningTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
