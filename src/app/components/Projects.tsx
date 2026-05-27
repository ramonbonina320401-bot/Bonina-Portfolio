import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BrowserMockup } from './BrowserMockup';

const projects = [
  {
    title: 'JRC SportSync',
    description:
      'Client-based capstone project - A comprehensive sports synchronization and management platform. Led a team through full development lifecycle including sprint planning, task delegation, and client communication.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtYW5hZ2VtZW50fGVufDB8fHx8MTcxNTI2MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React.js', 'Firebase', 'Agile', 'Figma', 'Project Management'],
    github: 'https://github.com',
    demo: '#',
    url: 'jrc-sportsync',
    featured: true,
  },
  {
    title: 'ATT Travel & Tours Website',
    description:
      'Complete business website developed from requirements gathering through UI design to deployment. Delivered a responsive, client-ready web solution for a travel and tours company.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3ZWJzaXRlfGVufDB8fHx8MTcxNTI2MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React.js', 'CSS3', 'Figma', 'Responsive Design'],
    github: 'https://github.com',
    demo: '#',
    url: 'att-travel.com',
    featured: true,
  },
  {
    title: 'AttendScan',
    description:
      'QR code-based attendance tracking system that eliminated manual logging. Managed end-to-end technical development and project coordination as both Developer and Project Manager.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBhdHRlbmRhbmNlfGVufDB8fHx8MTcxNTI2MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React.js', 'Firebase', 'QR Code API', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://my-project-attend-scan.vercel.app',
    url: 'https://my-project-attend-scan.vercel.app',
    featured: false,
  },
  {
    title: 'Game Development Portfolio',
    description:
      'Led design and production of original Philippine-themed games: Hari ng Kalsada (tabletop/hybrid), Road Rumble (spin-off), and The Final Draft (narrative game). Created comprehensive Wiki Fandom documentation for all titles.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBkZXNpZ258ZW58MHx8fHwxNzE1MjYxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Game Design', 'Wiki Documentation', 'Project Management', 'Figma'],
    github: 'https://github.com',
    demo: '#',
    url: 'game-dev-portfolio',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500 glass-card">
                {/* Project image with browser mockup */}
                <div className="relative p-4">
                  <BrowserMockup url={project.url}>
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </BrowserMockup>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-8 right-8 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-violet-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-all duration-500 pointer-events-none -z-10" />
              </div>

              {/* Card shadow glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 transform scale-95" />
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-6 text-base rounded-2xl transition-all hover:border-white/30"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
