import { useState, useEffect } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkHoverElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('glass-card') ||
        target.closest('.glass-card') !== null;

      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', checkHoverElements);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', checkHoverElements);
    };
  }, []);

  // Spring lag effect for ring
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationFrameId: number;

    const animate = () => {
      setRingPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <>
      {/* Dot cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />

      {/* Ring cursor */}
      <div
        className={`fixed top-0 left-0 border-2 border-blue-400 rounded-full pointer-events-none z-[9998] transition-all duration-300 mix-blend-difference ${
          isHovering ? 'w-14 h-14 opacity-100' : 'w-9 h-9 opacity-60'
        }`}
        style={{
          transform: `translate(${ringPosition.x - (isHovering ? 28 : 18)}px, ${
            ringPosition.y - (isHovering ? 28 : 18)
          }px)`,
        }}
      />
    </>
  );
}
