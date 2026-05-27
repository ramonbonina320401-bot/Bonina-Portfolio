import { motion } from 'motion/react';
import { Heart, Coffee, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>using React, Tailwind CSS & Motion</span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="w-5 h-5 text-blue-400" />
            </motion.div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ramon D. Bonina Jr. Crafted with passion.
            </p>
          </div>

          <div className="pt-2">
            <p className="text-xs text-gray-600">
              Open to opportunities · Let's build something amazing together! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
