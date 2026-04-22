"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-5 text-muted">
            Full-Stack Developer
          </p>
          <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-5 tracking-tight leading-tight"
          >
            Mark Lexter{" "}
            <span className="gradient-text">Laylo</span>
          </motion.h1>
          <p className="text-lg text-muted mb-6 max-w-xl mx-auto leading-relaxed">
            I design and build reliable, full-stack web applications — from
            polished user interfaces to robust backend systems.
          </p>
          <a
            href="mailto:lexterlaylo02918@gmail.com"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm mb-10"
          >
            <Mail className="w-4 h-4" />
            lexterlaylo02918@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-7 rounded-md transition-all duration-200 text-sm"
          >
            View Projects
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 font-medium py-2.5 px-7 rounded-md transition-all duration-200 text-sm border text-muted hover:text-foreground"
            style={{ borderColor: "var(--border)", background: "var(--toggle-bg)" }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-medium py-2.5 px-7 rounded-md transition-all duration-200 text-sm border text-muted hover:text-foreground"
            style={{ borderColor: "var(--border)", background: "var(--toggle-bg)" }}
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <ChevronDown className="w-6 h-6 text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}
