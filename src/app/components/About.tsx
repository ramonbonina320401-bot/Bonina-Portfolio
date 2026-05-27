import { motion } from 'motion/react';
import { Download, Code2, Sparkles, Target, Coffee, Zap, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable solutions',
  },
  {
    icon: Sparkles,
    title: 'Modern Tech',
    description: 'Staying updated with latest frameworks',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on delivering results',
  },
];

const quickFacts = [
  { icon: Coffee, label: 'Coffee consumed', value: '∞' },
  { icon: Zap, label: 'Projects completed', value: '10+' },
  { icon: Clock, label: 'GWA (1.0 Highest)', value: '1.26' },
];

const certifications = [
  'Strategic Project Management (2024)',
  'Full Stack Web Developer (2024)',
  'Network & Cybersecurity (2024)',
  'Game Testing Best Practices (2024)',
  'Sui Devsync (2025)',
  'VITSploration IT Industries (2023)',
];

export function About() {
  const handleDownloadResume = () => {
    // Create resume content
    const resumeContent = `
RAMON D. BONINA JR.
Valenzuela City, Metro Manila  •  0968 310 4763  •  ramon.bonina.320401@gmail.com

EDUCATION
Pamantasan ng Lungsod ng Valenzuela (PLV) - 2023–2027 (Expected)
Bachelor of Science in Information Technology
Cumulative GWA: 1.26  •  Dean's List, 2nd Semester AY 2023–2024

SKILLS
Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)
Backend & Cloud: Firebase, Supabase
Programming: Java, Python, C#
Database: MySQL, PostgreSQL, Firestore
Tools: Figma, Git/GitHub, Agile Project Management

PROJECTS
JRC SportSync (2026) - Project Manager | Client-Based Capstone
ATT Travel & Tours Website (2025) - Lead Developer
AttendScan (2025) - Developer & Project Manager
Game Development Portfolio (2025) - Project Manager

CERTIFICATIONS
• Strategic Project Management (2024)
• Full Stack Web Developer (2024)
• Network & Cybersecurity Operations (2024)
• Best Practices in Game Testing (2024)
• VITSploration: IT Industries (2023)
• Sui Devsync (2025)
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ramon_Bonina_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative py-32 px-6">
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
            <span className="bg-gradient-to-r from-[#2563EB] to-[#F97316] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTY5OTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#F97316]/20 blur-3xl transform scale-95" />
          </motion.div>

          {/* Bio and info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F8FAFC] text-lg leading-relaxed">
                I'm a <span className="text-[#2563EB] font-semibold">BS Information Technology</span> student at <span className="text-[#F97316] font-semibold">Pamantasan ng Lungsod ng Valenzuela (PLV)</span>, maintaining a 1.26 GWA and proudly part of the Dean's List.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Currently seeking <span className="text-[#2563EB]">internship opportunities</span> to apply my full-stack development skills in real-world projects. I've led multiple client-based projects including JRC SportSync (capstone) and ATT Travel & Tours website, managing teams from requirements gathering to deployment.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Beyond development, I'm passionate about <span className="text-[#F97316]">project management</span> and game design. When I'm not coding, you'll find me organizing basketball leagues as Head Commissioner of the ValSci Alumni Association or exploring the latest web development frameworks.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-[#0F172A]/50 border border-[#2563EB]/20 backdrop-blur-sm hover:bg-[#0F172A]/70 transition-all"
                >
                  <highlight.icon className="w-6 h-6 text-[#2563EB] mb-2" />
                  <h3 className="font-semibold text-[#F8FAFC] mb-1 text-sm">{highlight.title}</h3>
                  <p className="text-[#94A3B8] text-xs">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-6 pt-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#F97316]/20">
                    <fact.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F8FAFC]">{fact.value}</div>
                    <div className="text-xs text-[#94A3B8]">{fact.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-[#F97316]" />
                <h3 className="text-sm font-semibold text-[#F8FAFC]">Recent Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-[#2563EB]/30 bg-[#2563EB]/10 text-[#94A3B8] hover:bg-[#2563EB]/20 text-xs"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Download resume button */}
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-[#2563EB] to-[#F97316] hover:from-[#1d4ed8] hover:to-[#ea580c] text-[#F8FAFC] px-6 py-6 rounded-2xl shadow-lg shadow-[#2563EB]/30 transition-all hover:shadow-xl hover:shadow-[#2563EB]/40 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
