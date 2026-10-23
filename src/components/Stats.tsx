import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/apartmentsData';

export const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(STATS.map((stat) => Number((stat.value * ease).toFixed(stat.value % 1 === 0 ? 0 : 1))));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                <span className="text-[#C8A27A]">
                  {hasAnimated ? counts[idx].toLocaleString() : '0'}
                </span>
                <span>{stat.suffix}</span>
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-white/60 font-light">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
