import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Research from '../sections/Research';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Timeline from '../sections/Timeline';
import Contact from '../sections/Contact';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Badrinarayanan — Portfolio</title>
        <meta
          name="description"
          content="Computer Science Engineering undergraduate exploring Machine Learning, Deep Learning, Embedded Systems, and Electric Vehicle Technology."
        />
        <meta property="og:title" content="Badrinarayanan — Portfolio" />
        <meta
          property="og:description"
          content="Computer Science Engineering undergraduate exploring Machine Learning, Deep Learning, Embedded Systems, and Electric Vehicle Technology."
        />
      </Helmet>

      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Certifications />
        <Timeline />
        <Contact />
      </motion.main>
    </>
  );
}
