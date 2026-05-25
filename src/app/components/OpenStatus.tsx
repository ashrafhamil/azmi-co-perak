"use client";

import { useEffect, useState } from "react";

const OPEN_DOT = "#3fa372";
const CLOSED_DOT = "rgba(26,47,74,0.4)";

type Variant = "hero" | "compact" | "light";

function computeIsOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const h = now.getHours();
  // Mon–Fri (1–5), 9am–5pm
  return day >= 1 && day <= 5 && h >= 9 && h < 17;
}

function StatusDot({ isOpen }: { isOpen: boolean | null }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[7px] w-[7px] rounded-full"
      style={{ backgroundColor: isOpen ? OPEN_DOT : CLOSED_DOT }}
    />
  );
}

function fullLabel(isOpen: boolean | null): string {
  if (isOpen === null) return "Office hours · Mon–Fri 9 AM – 5 PM";
  return isOpen ? "Open now · closes 5 PM" : "Closed · Mon–Fri 9 AM – 5 PM";
}

function compactLabel(isOpen: boolean | null): string {
  if (isOpen === null) return "Hours";
  return isOpen ? "Open" : "Closed";
}

export default function OpenStatus({
  variant = "hero",
}: {
  variant?: Variant;
}) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    queueMicrotask(() => setIsOpen(computeIsOpen()));
  }, []);

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-espresso/85">
        <StatusDot isOpen={isOpen} />
        {isOpen !== null && compactLabel(isOpen)}
      </span>
    );
  }

  if (variant === "light") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-bean/20 bg-paper px-[0.9rem] py-[0.4rem] text-[0.72rem] uppercase tracking-[0.18em] text-bean">
        <StatusDot isOpen={isOpen} />
        {fullLabel(isOpen)}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/[0.06] px-[0.9rem] py-[0.4rem] text-[0.72rem] uppercase tracking-[0.18em] text-cream/80">
      <StatusDot isOpen={isOpen} />
      {fullLabel(isOpen)}
    </span>
  );
}
