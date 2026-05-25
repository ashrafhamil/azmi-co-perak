"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 700;

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function format(value: number, decimals: number): string {
  return value.toFixed(decimals);
}

export default function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => format(0, decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const snap = () => setDisplay(format(target, decimals));

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      snap();
      return;
    }

    let raf = 0;
    let start = 0;

    const run = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setDisplay(format(target * easeOut(progress), decimals));
      if (progress < 1) raf = requestAnimationFrame(run);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(run);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
