import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Pamantasan ng Lungsod ng Valenzuela (PLV)',
    location: 'Maysan, Valenzuela City',
    period: '2023 - 2027',
    status: 'In Progress',
    description:
      'Currently maintaining a cumulative GWA of 1.26 with focus on Full-Stack Development, Project Management, and Systems Analysis.',
    achievements: [
      "Dean's List - 2nd Semester AY 2023-2024",
      'Member of Valenzuela Information Technology Society (VITS)',
      'Capstone Project Manager - JRC SportSync',
    ],
    coursework: [
      'Web Development',
      'Systems Analysis & Design',
      'Database Management',
      'Agile Project Management',
      'Game Development',
    ],
  },
  {
    degree: 'Senior High School - STEM Strand',
    institution: 'Valenzuela City School of Mathematics and Science (ValMaSci)',
    location: 'Valenzuela City, Metro Manila',
    period: '2017 - 2023',
    status: 'Completed',
    description:
      'Science, Technology, Engineering, and Mathematics strand with consistent academic excellence throughout junior and senior high school.',
    achievements: [
      'With High Honors (Grade 10)',
      'With Honors (Grade 9, Grade 12)',
      'Completed 80-hour Work Immersion at Valenzuela City Health Office',
    ],
    coursework: [
      'Computer Programming',
      'Calculus',
      'Physics',
      'Statistics',
    ],
  },
  {
    degree: 'Elementary Education',
    institution: 'Malinta Elementary School',
    location: 'Valenzuela City, Metro Manila',
    period: '2011 - 2017',
    status: 'Completed',
    description:
      'Completed elementary education with academic honors.',
    achievements: [
      'With Honors (Grade 5)',
      'With Honors (Grade 6)',
    ],
    coursework: [
      'Mathematics',
      'Science',
      'English',
      'Filipino',
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500/50 origin-top"
            />
          </div>

          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Content card */}
                <div className="flex-1 md:max-w-lg">
                  <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                    {/* Status badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'In Progress'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}
                      >
                        {item.status}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </div>
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-start gap-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300 font-medium">
                          {item.institution}
                        </p>
                        <p className="text-gray-500 text-sm">{item.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </div>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className="text-violet-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-violet-400">
                        <BookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 rounded-3xl transition-all duration-500 -z-10" />
                  </div>
                </div>

                {/* Timeline glowing node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 blur-lg opacity-60 animate-pulse" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

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
              Currently maintaining a strong GPA while actively pursuing internship opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
