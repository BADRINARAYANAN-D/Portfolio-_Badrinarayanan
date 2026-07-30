import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { heroData } from '../data/replitData';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroData.taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#0071E3]/20 to-transparent blur-md" />

              <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border bg-secondary shadow-xl">
                <img
                  src={heroData.profileImg}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-1 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-foreground">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-5">
                {heroData.name}
              </h1>

              <div className="h-8 md:h-10 overflow-hidden relative flex lg:justify-start justify-center mb-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={taglineIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ ease: 'circOut', duration: 0.5 }}
                    className="text-lg md:text-2xl text-muted-foreground font-medium absolute"
                  >
                    {heroData.taglines[taglineIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-base md:text-lg text-muted-foreground/90 leading-relaxed"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-foreground text-background rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={heroData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium flex items-center gap-2 hover:bg-secondary/80 transition-colors"
              >
                Request Resume <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-border text-foreground rounded-full font-medium flex items-center gap-2 hover:bg-secondary transition-colors"
              >
                Let's Connect <Mail className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {heroData.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
