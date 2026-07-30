import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useTheme } from './hooks/useTheme';

// Lazy-loaded pages
const HomePage       = lazy(() => import('./pages/HomePage'));
const ProjectDetail  = lazy(() => import('./pages/ProjectDetail'));
const BlogPost       = lazy(() => import('./pages/BlogPost'));
const InternshipPage = lazy(() => import('./pages/InternshipPage'));

// Simple page loader
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"                 element={<HomePage />} />
            <Route path="/projects/:slug"   element={<ProjectDetail />} />
            <Route path="/blog/:slug"       element={<BlogPost />} />
            <Route path="/internship"       element={<InternshipPage />} />
            <Route path="/internship/:slug" element={<InternshipPage />} />
            <Route path="*"                 element={<HomePage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default function App() {
  useTheme();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  // Determine basename dynamically for GitHub Pages or local dev
  const basename = process.env.NODE_ENV === 'production' ? '/Portfolio-_Badrinarayanan' : '';

  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <AppRoutes />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                fontSize: '0.875rem',
              },
            }}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}



