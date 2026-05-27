import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { SplashScreen } from './components/SplashScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { SectionIndicator } from './components/SectionIndicator';
import { GridBackground } from './components/GridBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechMarquee } from './components/TechMarquee';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubStats } from './components/GitHubStats';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Scroll to top button */}
          <ScrollToTop />

          {/* Section indicator dots */}
          <SectionIndicator />

          <div className="min-h-screen bg-[#020617] text-[#F8FAFC]">
            {/* Unique grid background */}
            <GridBackground />

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main className="relative">
              <Hero />
              <About />
              <TechMarquee />
              <Skills />
              <Projects />
              <GitHubStats />
              <Education />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Toast notifications */}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: 'rgba(15, 15, 15, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  backdropFilter: 'blur(12px)',
                },
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
