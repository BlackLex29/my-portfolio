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
          <div className="inline-flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="mailto:lexterlaylo02918@gmail.com"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              lexterlaylo02918@gmail.com
            </a>
            <a
              href="https://t.me/Lexzm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              @Lexzm
            </a>
          </div>
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
