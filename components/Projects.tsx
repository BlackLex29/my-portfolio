"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Star } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18" height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.9 13.9 0 0 0-7 0c-2.7-1.9-4-1.5-4-1.5a5.3 5.3 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.6-5-2.5-7-3" />
  </svg>
);

type Category = "All" | "Web App" | "UI/UX";

const PROJECTS = [
  {
    title: "FurSure Care",
    description:
      "A pet health management platform that helps pet owners track vaccinations, medical records, medications, and vet appointments — with smart reminders and GCash/Cash payment support.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/lexterlaylo",
    live: "https://www.fursurecare.online/",
    image: "/fursure.png",
    status: "Live",
    category: "Web App" as Category,
    featured: true,
  },
  {
    title: "Holy Event (Church Platform)",
    description:
      "A welcoming, modern landing page for a church community. Features event and prayer tracking, clean typography, and a warm, inviting UI design to attract new members.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://holyevent.vercel.app/",
    image: "/holy-event.png",
    status: "Live",
    category: "UI/UX" as Category,
    featured: false,
  },
  {
    title: "Vault Breaker (Parkour Games UI)",
    description:
      "A modern, anime-style landing page design for an urban freerunning game. Features character showcases, map progression UI, and smooth animations.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://parkour-mt3o.vercel.app/",
    image: "/Vault-breaker.png",
    status: "Live",
    category: "UI/UX" as Category,
    featured: false,
  },
  {
    title: "Girlies Birthing Home Client",
    description:
      "The admin dashboard for the Girlies Birthing Home management system — a React-based SPA for staff to manage patients, appointments, EMR records, lab results, and inquiries.",
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/lexterlaylo",
    live: "https://girlies-birthing-client.vercel.app/",
    image: "/Girlies-Client.png",
    status: "Live",
    category: "Web App" as Category,
    featured: false,
  },
  {
    title: "Rendezvous Café (Admin System)",
    description:
      "A full-featured café management web app with user authentication, menu browsing, and order management. Deployed live on Vercel for real customers to use.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "TypeScript"],
    github: "https://github.com/lexterlaylo",
    live: "https://rendezvouscafe.vercel.app/",
    image: "/rendezvous.png",
    status: "Live",
    category: "Web App" as Category,
    featured: false,
  },
  {
    title: "Rendezvous Café (Customer Portal)",
    description:
      "The customer-facing portal for Rendezvous Café, allowing users to browse the menu, place orders, and manage their profiles.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://rendezvous-cafe.vercel.app/",
    image: "/rendezvous-customer-portal.png",
    status: "Live",
    category: "UI/UX" as Category,
    featured: false,
  },
  {
    title: "Girlies Inquiry Portal",
    description:
      "A public-facing inquiry and appointment booking portal for patients to estimate service costs and schedule appointments. Deployed on Vercel with CORS-protected backend APIs.",
    tech: ["Next.js", "Vercel", "REST API", "TailwindCSS"],
    github: "https://github.com/lexterlaylo",
    live: "https://girlies-inquire.vercel.app",
    image: "/girlies-inquiry.png",
    status: "Live",
    category: "Web App" as Category,
    featured: false,
  },
];

type Project = typeof PROJECTS[0];

const TECH_COLORS: Record<string, string> = {
  "Next.js": "#000000",
  "React": "#61dafb",
  "Node.js": "#43853d",
  "PostgreSQL": "#336791",
  "TailwindCSS": "#06b6d4",
  "TypeScript": "#3178c6",
  "Vercel": "#000000",
  "Vite": "#646cff",
  "Firebase": "#ffca28",
  "MongoDB": "#47a248",
  "REST API": "#ff6b35",
  "UI/UX Design": "#e879f9",
};

const FILTERS: Category[] = ["All", "Web App", "UI/UX"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Category>("All");

  const featured = PROJECTS.find((p) => p.featured)!;
  const filtered = PROJECTS.filter(
    (p) => !p.featured && (filter === "All" || p.category === filter)
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center mb-3">
            <span className="section-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /></svg>
              Portfolio
            </span>
          </div>
          <h2
            className="section-heading text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Real-world applications I&apos;ve designed, built, and shipped.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="featured-card mb-10 cursor-pointer group"
          onClick={() => setSelectedProject(featured)}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="h-64 md:h-auto overflow-hidden relative" style={{ borderRight: "1px solid var(--border-subtle)" }}>
              <img
                src={featured.image}
                alt={`${featured.title} preview`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-tag" style={{ marginBottom: 0 }}>
                  <Star className="w-2.5 h-2.5" fill="currentColor" strokeWidth={0} />
                  Featured Project
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  {featured.status}
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-black mb-3 group-hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-outfit), sans-serif", color: "var(--foreground)" }}
              >
                {featured.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{ background: "var(--toggle-bg)", color: "var(--nav-link)", border: "1px solid var(--border-subtle)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 font-semibold py-2.5 px-6 rounded-full text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 3px 14px var(--glow-primary)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Live
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 font-semibold py-2.5 px-5 rounded-full text-sm transition-all duration-200 text-muted hover:text-foreground"
                  style={{ background: "var(--toggle-bg)", border: "1px solid var(--border-subtle)" }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-tab${filter === f ? " filter-tab-active" : ""}`}
            >
              {f}
            </button>
          ))}
          <span className="text-xs text-muted self-center ml-1">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card card-glow rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full h-44 overflow-hidden relative flex-shrink-0" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      View Details →
                    </span>
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/20 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold mb-1.5 group-hover:text-accent transition-colors line-clamp-1"
                    style={{ fontFamily: "var(--font-outfit), sans-serif", color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md"
                        style={{
                          background: "var(--toggle-bg)",
                          color: "var(--nav-link)",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        className="px-2 py-0.5 text-xs font-medium rounded-md"
                        style={{ background: "var(--toggle-bg)", color: "var(--nav-link)", border: "1px solid var(--border-subtle)" }}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col shadow-2xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-full h-64 sm:h-80 md:h-[420px] relative overflow-hidden flex-shrink-0" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/25 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <h3
                    className="text-2xl sm:text-3xl font-black"
                    style={{ fontFamily: "var(--font-outfit), sans-serif", color: "var(--foreground)" }}
                  >
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-3 flex-shrink-0">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold py-2.5 px-5 rounded-full text-sm text-white transition-all"
                      style={{
                        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                        boxShadow: "0 3px 14px var(--glow-primary)",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit Live
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold py-2.5 px-5 rounded-full text-sm text-muted hover:text-foreground transition-all"
                      style={{ background: "var(--toggle-bg)", border: "1px solid var(--border-subtle)" }}
                    >
                      <Github />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-muted leading-relaxed text-base mb-8">{selectedProject.description}</p>

                <div className="pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm font-medium rounded-full"
                        style={{ background: "var(--toggle-bg)", color: "var(--nav-link)", border: "1px solid var(--border-subtle)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
