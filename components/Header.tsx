"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useReveal } from "./RevealProvider";

const Moon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Sun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { revealed, reveal, goHome } = useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // While the landing page is showing, "Home" is the only active link.
  useEffect(() => {
    if (!revealed) setActiveSection("home");
  }, [revealed]);

  // Scrolled state for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver — re-runs once the
  // gated sections mount after Explore Now / a nav link reveals them.
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", "")).filter((id) => id !== "home");
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [revealed]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "home") {
      goHome();
    } else {
      reveal(id);
    }
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 header-always${scrolled ? " header-scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — profile photo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goHome();
            setMenuOpen(false);
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <div
            className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
            style={{ boxShadow: "0 2px 10px var(--glow-primary)" }}
          >
            <img
              src="/BSIT_LAYLO_white_bg.jpg"
              alt="Mark Lexter Laylo"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="text-sm font-bold hidden sm:inline tracking-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Mark Lexter
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, id)}
                className={`nav-link text-sm font-medium transition-colors${isActive ? " nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right — Hire Me + theme toggle + hamburger */}
        <div className="flex items-center gap-2.5 ml-auto md:ml-0">
          {/* Hire Me CTA — desktop only */}
          <a
            href="mailto:lexterlaylo02918@gmail.com"
            className="hire-btn hidden md:inline-flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Hire Me
          </a>

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle-btn w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden nav-link p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu border-t px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, id)}
                className={`nav-link text-sm font-medium${isActive ? " nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:lexterlaylo02918@gmail.com"
            className="hire-btn inline-flex items-center justify-center gap-1.5 mt-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
