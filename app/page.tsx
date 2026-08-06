"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import CV from "../components/CV";
import RevealProvider, { useReveal } from "../components/RevealProvider";
import { AnimatePresence, motion } from "framer-motion";

const CONTACT_CARDS = [
  {
    id: "contact-email",
    label: "Email",
    value: "lexterlaylo02918@gmail.com",
    href: "mailto:lexterlaylo02918@gmail.com",
    accent: "#71717a",
    accentBg: "rgba(113, 113, 122, 0.08)",
    accentBorder: "rgba(113, 113, 122, 0.2)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "contact-telegram",
    label: "Telegram",
    value: "@Lexzm",
    href: "https://t.me/Lexzm",
    target: "_blank",
    accent: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.08)",
    accentBorder: "rgba(56, 189, 248, 0.2)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    id: "contact-whatsapp",
    label: "WhatsApp",
    value: "+63 963 531 9660",
    href: "https://wa.me/639635319660",
    target: "_blank",
    accent: "#22c55e",
    accentBg: "rgba(34, 197, 94, 0.08)",
    accentBorder: "rgba(34, 197, 94, 0.2)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "Mark Lexter Laylo",
    href: "https://www.linkedin.com/in/mark-lexter-laylo-9509a53a0/",
    target: "_blank",
    accent: "#0A66C2",
    accentBg: "rgba(10, 102, 194, 0.08)",
    accentBorder: "rgba(10, 102, 194, 0.2)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

function HomeContent() {
  const { revealed } = useReveal();

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="pt-16"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Projects />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Certificates />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CV />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              {/* Contact Section */}
              <section id="contact" className="py-24 px-6 section-alt">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Section tag */}
                  <div className="flex justify-center mb-3">
                    <span className="section-tag">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /></svg>
                      Let&apos;s Connect
                    </span>
                  </div>

                  <h2
                    className="section-heading text-4xl md:text-5xl font-black mb-4"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    Get In <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-muted text-lg mb-3 max-w-md mx-auto">
                    Have a project in mind or just want to connect? I&apos;d love to hear from you.
                  </p>
                  <p className="text-sm text-muted mb-12 flex items-center justify-center gap-2">
                    <span className="available-dot" style={{ width: 6, height: 6, flexShrink: 0 }} />
                    Usually replies within 24 hours
                  </p>

                  {/* Contact Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CONTACT_CARDS.map((card) => (
                      <a
                        key={card.id}
                        id={card.id}
                        href={card.href}
                        target={(card as { target?: string }).target}
                        rel={(card as { target?: string }).target === "_blank" ? "noopener noreferrer" : undefined}
                        className="contact-card"
                      >
                        {/* Icon */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: card.accentBg, border: `1px solid ${card.accentBorder}`, color: card.accent }}
                        >
                          {card.icon}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted">{card.label}</span>
                        <span
                          className="text-sm font-semibold break-all"
                          style={{ color: "var(--foreground)" }}
                        >
                          {card.value}
                        </span>
                        <span
                          className="text-xs font-semibold mt-1 flex items-center gap-1"
                          style={{ color: card.accent }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          Message me
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <p className="text-muted text-sm">
                  © {new Date().getFullYear()} Mark Lexter Laylo. Built with{" "}
                  <span style={{ color: "var(--accent-text)" }}>Next.js</span> &amp; passion.
                </p>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function Home() {
  return (
    <RevealProvider>
      <HomeContent />
    </RevealProvider>
  );
}
