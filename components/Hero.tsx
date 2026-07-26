"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useReveal } from "./RevealProvider";

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Next.js Specialist",
  "Open to Work",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text.length > 0 ? text : words[wordIdx].slice(0, charIdx);
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const { reveal } = useReveal();

  return (
    <section className="relative flex flex-col md:flex-row h-screen overflow-hidden pt-16 box-border">
      {/* Left — photo half */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-full overflow-hidden">
        <img
          src="/BSIT_LAYLO_white_bg.jpg"
          alt="Mark Lexter Laylo"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

      {/* Right — dark content half */}
      <div
        className="relative w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-14 lg:px-20 py-16 md:py-24"
        style={{ background: "#141414" }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="hero-badge-dark">
            <span className="available-dot" />
            Available for work
          </span>
        </motion.div>

        {/* Kicker / role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hero-kicker mb-5 h-4"
        >
          {role}
          <span className="animate-pulse ml-0.5">|</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-black text-white leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="flex items-center">
            <span className="hero-heading-line" />
            My
          </span>
          <span className="block hero-gradient-text">Portfolio</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm leading-relaxed mb-10 max-w-sm"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          I design and build reliable, full-stack web applications — from
          polished user interfaces to robust backend systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-8"
        >
          <button type="button" onClick={() => reveal("projects")} className="hero-btn-explore">
            Explore Now
          </button>
          <a href="/CV_MARK_LEXTER_LAYLO.docx" download className="hero-btn-outline">
            <span className="hero-play-circle">
              <Download className="w-4 h-4" />
            </span>
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
