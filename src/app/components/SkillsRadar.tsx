import { motion } from 'motion/react';
import { useState } from 'react';

const radarData = [
  { category: 'Frontend', score: 88, color: '#3b82f6' },
  { category: 'Backend', score: 72, color: '#8b5cf6' },
  { category: 'Database', score: 68, color: '#6366f1' },
  { category: 'DevTools', score: 75, color: '#3b82f6' },
  { category: 'UI/UX', score: 85, color: '#8b5cf6' },
  { category: 'Systems', score: 70, color: '#6366f1' },
];

export function SkillsRadar() {
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

  const centerX = 200;
  const centerY = 200;
  const maxRadius = 140;
  const levels = 5;

  // Calculate points for polygon
  const calculatePoint = (angle: number, value: number) => {
    const rad = (angle * Math.PI) / 180;
    const radius = (value / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(rad - Math.PI / 2),
      y: centerY + radius * Math.sin(rad - Math.PI / 2),
    };
  };

  // Generate polygon path
  const generatePolygonPath = () => {
    const angleStep = 360 / radarData.length;
    const points = radarData.map((data, i) => {
      const angle = i * angleStep;
      return calculatePoint(angle, data.score);
    });

    return points.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ') + ' Z';
  };

  // Generate axis lines and labels
  const generateAxes = () => {
    const angleStep = 360 / radarData.length;
    return radarData.map((data, i) => {
      const angle = i * angleStep;
      const endPoint = calculatePoint(angle, 100);
      const labelPoint = calculatePoint(angle, 115);
      const isHovered = hoveredAxis === i;

      return (
        <g key={i}>
          {/* Axis line */}
          <line
            x1={centerX}
            y1={centerY}
            x2={endPoint.x}
            y2={endPoint.y}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={isHovered ? 2 : 1}
            className="transition-all"
          />
          {/* Label */}
          <text
            x={labelPoint.x}
            y={labelPoint.y}
            fill={isHovered ? '#ffffff' : '#9ca3af'}
            fontSize="14"
            fontWeight={isHovered ? 'bold' : 'normal'}
            textAnchor="middle"
            dominantBaseline="middle"
            className="transition-all cursor-pointer select-none"
            onMouseEnter={() => setHoveredAxis(i)}
            onMouseLeave={() => setHoveredAxis(null)}
          >
            {data.category}
          </text>
          {/* Score indicator */}
          {isHovered && (
            <text
              x={labelPoint.x}
              y={labelPoint.y + 18}
              fill="#3b82f6"
              fontSize="12"
              textAnchor="middle"
              className="font-semibold"
            >
              {data.score}%
            </text>
          )}
        </g>
      );
    });
  };

  // Generate concentric circles
  const generateLevels = () => {
    return Array.from({ length: levels }, (_, i) => {
      const radius = ((i + 1) / levels) * maxRadius;
      const angleStep = 360 / radarData.length;
      const points = Array.from({ length: radarData.length }, (_, j) => {
        const angle = j * angleStep;
        return calculatePoint(angle, ((i + 1) / levels) * 100);
      });

      const path = points.map((point, j) => `${j === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ') + ' Z';

      return (
        <path
          key={i}
          d={path}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="max-w-full h-auto"
      >
        {/* Grid levels */}
        {generateLevels()}

        {/* Axes */}
        {generateAxes()}

        {/* Data polygon */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          d={generatePolygonPath()}
          fill="url(#radarGradient)"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Data points */}
        {radarData.map((data, i) => {
          const angleStep = 360 / radarData.length;
          const angle = i * angleStep;
          const point = calculatePoint(angle, data.score);
          const isHovered = hoveredAxis === i;

          return (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
              cx={point.x}
              cy={point.y}
              r={isHovered ? 6 : 4}
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
              className="transition-all cursor-pointer"
              onMouseEnter={() => setHoveredAxis(i)}
              onMouseLeave={() => setHoveredAxis(null)}
            />
          );
        })}
      </svg>

      {/* Category chips */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        {radarData.map((data, i) => (
          <button
            key={i}
            onMouseEnter={() => setHoveredAxis(i)}
            onMouseLeave={() => setHoveredAxis(null)}
            className={`px-4 py-2 rounded-full border transition-all ${
              hoveredAxis === i
                ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                : 'border-white/20 bg-white/5 text-gray-400 hover:border-white/30 hover:text-gray-300'
            }`}
          >
            {data.category}
          </button>
        ))}
      </div>
    </div>
  );
}
