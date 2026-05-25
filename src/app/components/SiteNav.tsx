"use client";

import { useEffect, useState } from "react";
import OpenStatus from "./OpenStatus";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#why", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="grid h-[42px] w-[42px] place-items-center rounded-[3px] border border-caramel bg-espresso font-display text-[1.05rem] font-semibold text-crema">
        A&C
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.25rem] font-semibold text-espresso">
          Azmi &amp; Co
        </span>
        <span className="mt-[0.35rem] text-[0.6rem] uppercase tracking-[0.28em] text-bean/60">
          Perak Branch
        </span>
      </span>
    </a>
  );
}

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => obs.observe(section));
    return () => obs.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-[400ms] ease-in-out ${
        scrolled
          ? "border-b border-bean/15 bg-paper/[0.95] py-[0.85rem] shadow-sm backdrop-blur-[12px]"
          : "border-b border-transparent bg-paper/0 py-[1.4rem]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <BrandMark />

        <div className="hidden items-center gap-[2.2rem] min-[680px]:flex">
          {LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-[0.82rem] uppercase tracking-[0.12em] transition-colors hover:text-caramel ${
                  isActive ? "text-caramel" : "text-espresso/85"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <OpenStatus variant="compact" />
          <a
            href="#contact"
            className="rounded-[2px] border border-caramel bg-caramel px-[1.3rem] py-[0.6rem] text-[0.82rem] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-crema hover:border-crema active:scale-[.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
          >
            Enquire
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="z-[101] flex flex-col gap-[5px] min-[680px]:hidden"
        >
          <span className="h-[2px] w-[24px] bg-espresso" />
          <span className="h-[2px] w-[24px] bg-espresso" />
          <span className="h-[2px] w-[24px] bg-espresso" />
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeMenu}
          className="fixed inset-0 z-[100] bg-espresso/40 min-[680px]:hidden"
        />
      )}

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 right-0 z-[100] flex w-[78%] max-w-[320px] flex-col items-center justify-center gap-[2.2rem] border-l border-bean/15 bg-cream transition-transform duration-[400ms] ease-in-out min-[680px]:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            tabIndex={menuOpen ? undefined : -1}
            className="text-[0.95rem] uppercase tracking-[0.12em] text-espresso transition-colors hover:text-caramel"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          tabIndex={menuOpen ? undefined : -1}
          className="rounded-[2px] border border-caramel bg-caramel px-[1.3rem] py-[0.6rem] text-[0.82rem] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-crema"
        >
          Enquire
        </a>
      </div>
    </nav>
  );
}
