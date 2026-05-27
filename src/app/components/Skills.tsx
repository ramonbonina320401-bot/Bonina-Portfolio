import { motion } from 'motion/react';
import { useState } from 'react';
import { SkillsRadar } from './SkillsRadar';

const skills = [
  {
    name: 'React.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.87S13.03 13.85 12 13.85s-1.87-.84-1.87-1.87S10.97 10.11 12 10.11zM7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96zM16.63 4c-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.31-3.96z" />
      </svg>
    ),
    color: 'from-[#2563EB] to-[#F97316]',
    level: 88,
  },
  {
    name: 'HTML5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 17.56l-4.5 2.5 1.12-5.14L4.5 10.94l5.18-.44L12 5.5l2.32 5 5.18.44-3.62 3.98 1.12 5.14z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-500',
    level: 90,
  },
  {
    name: 'CSS3',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
    level: 88,
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-500',
    level: 85,
  },
  {
    name: 'Firebase',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6.5 13.5L12 19l-6.5-3.5v-7L12 5l6.5 3.5v7z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-600',
    level: 82,
  },
  {
    name: 'Supabase',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.8 3.9v7.84L12 19.82l-7.8-3.9V8.08L12 4.18z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
    level: 80,
  },
  {
    name: 'Java',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    color: 'from-red-600 to-orange-600',
    level: 78,
  },
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    color: 'from-blue-500 to-yellow-500',
    level: 75,
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    color: 'from-blue-600 to-cyan-600',
    level: 80,
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    color: 'from-blue-700 to-indigo-600',
    level: 78,
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C8 2 5.5 4 4.5 8c1.5-2 3.25-2.75 5.25-2.25.57.14 1.03.6 1.58 1.15C12.59 8.16 14.12 10 18 10c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-.57-.14-1.03-.6-1.58-1.15C17.41 3.84 15.88 2 12 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    level: 85,
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6.5 13.5L12 19l-6.5-3.5v-7L12 5l6.5 3.5v7z" />
      </svg>
    ),
    color: 'from-orange-600 to-red-600',
    level: 82,
  },
];

export function Skills() {
  const [viewMode, setViewMode] = useState<'radar' | 'grid'>('radar');

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Technologies I work with</p>

          {/* View toggle */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setViewMode('radar')}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === 'radar'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Radar Chart
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* Radar chart view */}
        {viewMode === 'radar' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SkillsRadar />
          </motion.div>
        )}

        {/* Skills grid view */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${skill.color} p-3 transform transition-transform group-hover:rotate-6`}
                  >
                    <div className="text-white">{skill.icon}</div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center font-semibold text-white mb-3">
                  {skill.name}
                </h3>

                {/* Proficiency bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}
                />
              </div>
            </motion.div>
          ))}
          </motion.div>
        )}

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
