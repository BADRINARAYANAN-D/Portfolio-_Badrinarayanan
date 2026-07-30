import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/replitData';

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

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title="My Journey" />

        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-background -translate-x-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven
                        ? 'md:pr-16 md:text-right'
                        : 'md:order-2 md:pl-16'
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-secondary text-foreground text-sm font-bold rounded-full mb-3 shadow-sm border border-border">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? 'md:order-2' : ''
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
