import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

export function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    followers: 0,
    topLanguage: 'JavaScript',
  });
  const [loading, setLoading] = useState(true);
  const [animatedStats, setAnimatedStats] = useState({
    repos: 0,
    stars: 0,
    followers: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Initialize with mock data (replace with actual GitHub stats)
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setStats({
        repos: 24,
        stars: 156,
        followers: 89,
        topLanguage: 'JavaScript',
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animate counters when in viewport
  useEffect(() => {
    if (loading || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [loading, hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const animate = () => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        repos: Math.floor(stats.repos * progress),
        stars: Math.floor(stats.stars * progress),
        followers: Math.floor(stats.followers * progress),
      });

      if (currentStep < steps) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedStats(stats);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Github className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                GitHub Stats
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Public Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-700 rounded mb-3" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ) : (
              <>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.repos}
                </div>
                <div className="text-gray-400 text-sm">Public Repos</div>
              </>
            )}
          </motion.div>

          {/* Total Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-700 rounded mb-3" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ) : (
              <>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.stars}
                </div>
                <div className="text-gray-400 text-sm">Total Stars</div>
              </>
            )}
          </motion.div>

          {/* Followers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-700 rounded mb-3" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ) : (
              <>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.followers}
                </div>
                <div className="text-gray-400 text-sm">Followers</div>
              </>
            )}
          </motion.div>

          {/* Top Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-700 rounded mb-3" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ) : (
              <>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2 truncate">
                  {stats.topLanguage}
                </div>
                <div className="text-gray-400 text-sm">Top Language</div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
