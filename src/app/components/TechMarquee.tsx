import { motion } from 'motion/react';

const technologies = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Python',
  'Git',
  'Figma',
  'REST APIs',
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12 border-y border-[#2563EB]/10 bg-[#0F172A]/30">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#2563EB]/20 bg-[#0F172A] backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F97316]" />
            <span className="text-[#94A3B8] font-medium">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
