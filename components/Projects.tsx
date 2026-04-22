"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"

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

const PROJECTS = [
  {
    title: "FurSure Care",
    description:
      "A pet health management platform that helps pet owners track vaccinations, medical records, medications, and vet appointments — with smart reminders and GCash/Cash payment support.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/lexterlaylo",
    live: "https://www.fursurecare.online/",
    image: "/fursure.png",
    status: "Done",
  },
  {
    title: "Holy Event (Church Platform)",
    description:
      "A welcoming, modern landing page for a church community. Features event and prayer tracking, clean typography, and a warm, inviting UI design to attract new members.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://holyevent.vercel.app/",
    image: "/holy-event.png",
    status: "Done",
  },
  {
    title: "Vault Breaker (Parkour Games UI)",
    description:
      "A modern, anime-style landing page design for an urban freerunning game. Features character showcases, map progression UI, and smooth animations.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://parkour-mt3o.vercel.app/",
    image: "/Vault-breaker.png",
    status: "Done",
  },
  {
    title: "Girlies Birthing Home Client",
    description:
      "The admin dashboard for the Girlies Birthing Home management system — a React-based SPA for staff to manage patients, appointments, EMR records, lab results, and inquiries.",
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/lexterlaylo",
    live: "https://girlies-birthing-client.vercel.app/",
    image: "/Girlies-Client.png",
    status: "Done",
  },
  {
    title: "Rendezvous Café (Admin System)",
    description:
      "A full-featured café management web app with user authentication, menu browsing, and order management. Deployed live on Vercel for real customers to use.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "TypeScript"],
    github: "https://github.com/lexterlaylo",
    live: "https://rendezvouscafe.vercel.app/",
    image: "/rendezvous.png",
    status: "Done",
  },
  {
    title: "Rendezvous Café (Customer Portal)",
    description:
      "The customer-facing portal for Rendezvous Café, allowing users to browse the menu, place orders, and manage their profiles.",
    tech: ["Next.js", "Vercel", "TailwindCSS", "UI/UX Design"],
    github: "https://github.com/lexterlaylo",
    live: "https://rendezvous-cafe.vercel.app/",
    image: "/rendezvous-customer-portal.png",
    status: "Done",
  },


  {
    title: "Girlies Inquiry Portal",
    description:
      "A public-facing inquiry and appointment booking portal for patients to estimate service costs and schedule appointments. Deployed on Vercel with CORS-protected backend APIs.",
    tech: ["Next.js", "Vercel", "REST API", "TailwindCSS"],
    github: "https://github.com/lexterlaylo",
    live: "https://girlies-inquire.vercel.app",
    image: "/girlies-inquiry.png",
    status: "Done",
  },
];

type Project = typeof PROJECTS[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted text-lg">
            A collection of real-world projects I have built and shipped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="w-full h-48 overflow-hidden relative" style={{ borderBottom: "1px solid var(--border)" }}>
                <img
                  src={project.image || `https://image.thum.io/get/width/600/crop/800/${project.live}`}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm bg-black/20">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1" style={{ color: 'var(--foreground)' }}>
                  {project.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-md"
                      style={{ background: 'var(--toggle-bg)', color: 'var(--nav-link)', border: '1px solid var(--border)' }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md" style={{ background: 'var(--toggle-bg)', color: 'var(--nav-link)', border: '1px solid var(--border)' }}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 9999 }}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col shadow-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-64 sm:h-80 md:h-[450px] relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
                <img
                  src={selectedProject.image || `https://image.thum.io/get/width/1200/crop/800/${selectedProject.live}`}
                  alt={`${selectedProject.title} preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6 sm:p-10 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                      {selectedProject.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-500 border border-green-500/30 w-fit">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                      {selectedProject.status}
                    </span>
                  </div>
                  
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-200 text-sm shrink-0 whitespace-nowrap"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-muted leading-relaxed text-lg mb-8">
                  {selectedProject.description}
                </p>

                <div className="mt-auto pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm font-medium rounded-full"
                        style={{ background: 'var(--toggle-bg)', color: 'var(--nav-link)', border: '1px solid var(--border)' }}
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
