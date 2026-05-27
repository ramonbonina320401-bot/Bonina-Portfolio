export function GridBackground() {
  return (
    <>
      {/* Gradient base - Rich Dark Navy to Deep Slate */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] -z-30" />

      {/* Grid pattern - Royal Blue */}
      <div
        className="fixed inset-0 -z-20 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial gradient overlays for depth - Royal Blue & Vibrant Orange */}
      <div className="fixed inset-0 -z-25">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
      </div>

      {/* Noise texture */}
      <div
        className="fixed inset-0 opacity-[0.015] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
