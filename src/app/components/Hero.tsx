import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ParticleCanvas } from './ParticleCanvas';
import { useScrambleText } from '../hooks/useScrambleText';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const { displayText: nameText } = useScrambleText('Ramon D. Bonina Jr.', 500);
  const { displayText: typewriterText, showCursor } = useTypewriter([
    'Developer',
    'Project Manager',
    'Capstone Project Lead',
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle constellation canvas */}
      <div className="absolute inset-0 -z-10">
        <ParticleCanvas />
      </div>

      {/* Accent shapes for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#2563EB]/20 rounded-3xl rotate-12 -z-10" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#F97316]/20 rounded-2xl -rotate-12 -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
              </span>
              <span className="text-sm text-[#F97316] font-medium">Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#2563EB] text-lg font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name with scramble effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#2563EB] via-[#F97316] to-[#2563EB] bg-clip-text text-transparent">
              {nameText}
            </span>
          </motion.h1>

          {/* Title with typewriter effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#94A3B8] font-light min-h-[2rem]"
          >
            BS Information Technology Student |{' '}
            <span className="text-[#2563EB]">
              {typewriterText}
              {showCursor && <span className="inline-block w-0.5 h-6 bg-[#2563EB] ml-1 animate-pulse align-middle" />}
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#94A3B8] max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Dean's List student from PLV, passionate about full-stack development and project management.
            Building impactful web applications and leading teams to success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#2563EB] to-[#F97316] hover:from-[#1d4ed8] hover:to-[#ea580c] text-[#F8FAFC] px-8 py-6 text-base rounded-2xl shadow-lg shadow-[#2563EB]/50 transition-all hover:shadow-xl hover:shadow-[#2563EB]/60 hover:scale-105"
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#2563EB]/30 bg-[#0F172A] backdrop-blur-sm hover:bg-[#2563EB]/10 text-[#F8FAFC] px-8 py-6 text-base rounded-2xl transition-all hover:border-[#2563EB]/50"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0F172A] border border-[#2563EB]/20 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/40 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 text-[#94A3B8]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0F172A] border border-[#2563EB]/20 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/40 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-[#94A3B8]" />
            </a>
            <a
              href="mailto:ramon.bonina.320401@gmail.com"
              className="p-3 rounded-xl bg-[#0F172A] border border-[#2563EB]/20 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/40 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-[#94A3B8]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
