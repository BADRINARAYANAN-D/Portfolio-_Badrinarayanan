import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificationsData } from '../data/replitData';

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

export default function Certifications() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => {
            const [title, issuer] = cert.split(' — ');
            return (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-card border border-card-border p-6 rounded-2xl flex flex-col h-full hover:shadow-md transition-shadow group"
              >
                <Award className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-accent transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                  {title || cert}
                </h3>
                {issuer && (
                  <p className="text-sm font-medium text-accent mt-auto">
                    {issuer}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
