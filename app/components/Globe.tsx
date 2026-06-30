"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let rafId: number;
    let globe: ReturnType<typeof createGlobe>;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [0.6, 0.72, 0.95],
        markerColor: [0.08, 0.35, 0.9],
        glowColor: [0.6, 0.75, 1.0],
        markers: [
          { location: [51.5074, -0.1278], size: 0.06 },
          { location: [48.8566, 2.3522], size: 0.05 },
          { location: [52.52, 13.405], size: 0.05 },
          { location: [40.7128, -74.006], size: 0.07 },
          { location: [35.6762, 139.6503], size: 0.05 },
          { location: [1.3521, 103.8198], size: 0.05 },
          { location: [25.2048, 55.2708], size: 0.04 },
          { location: [-23.5505, -46.6333], size: 0.04 },
          { location: [55.7558, 37.6173], size: 0.04 },
          { location: [22.3193, 114.1694], size: 0.05 },
        ],
      });

      const animate = () => {
        phi += 0.003;
        globe.update({ phi });
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(rafId);
      try { globe?.destroy(); } catch (_) {}
    };
  }, []);

  return (
    <div className="rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden shadow-xl">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, display: "block" }}
      />
    </div>
  );
}
