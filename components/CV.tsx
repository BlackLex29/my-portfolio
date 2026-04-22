"use client";

import { motion } from "framer-motion";
import { Download, User, Mail, FileText } from "lucide-react";

export default function CV() {
  return (
    <section className="py-24 px-6 relative" id="cv">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">
            Curriculum <span className="gradient-text">Vitae</span>
          </h2>
          <p className="text-muted">
            A summary of my background, skills, and experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="glass-card rounded-xl p-8 md:p-10"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8"
            style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 border flex items-center justify-center shrink-0"
                style={{ borderColor: "var(--border)" }}>
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                  Mark Lexter Laylo
                </h3>
                <p className="text-primary text-sm font-medium mt-0.5">Full-Stack Developer</p>
                <a
                  href="mailto:lexterlaylo02918@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors mt-1"
                >
                  <Mail className="w-3 h-3" />
                  lexterlaylo02918@gmail.com
                </a>
              </div>
            </div>
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-5 rounded-md transition-all duration-200 text-sm shrink-0"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* About */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">About</h4>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              I specialize in designing and building reliable full-stack web applications, from intuitive user interfaces
              to scalable and secure backend systems. I built a strong foundation through my On-the-Job Training (OJT),
              where I honed my practical skills in a professional environment.
            </p>
          </div>

          {/* Divider */}
          <div className="mb-8" style={{ borderTop: "1px solid var(--border)" }} />

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Frontend", skills: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"] },
                { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
                { label: "Database", skills: ["PostgreSQL", "NeonDB", "MongoDB", "Firebase", "MySQL", "Prisma ORM"] },
                { label: "Tools & Platforms", skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code"] },
              ].map((group) => (
                <div key={group.label} className="rounded-lg p-4"
                  style={{ background: "var(--toggle-bg)", border: "1px solid var(--border)" }}>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs text-muted rounded"
                        style={{ background: "var(--toggle-bg)", border: "1px solid var(--border)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8" style={{ borderTop: "1px solid var(--border)" }} />

          {/* Key Projects */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Key Projects
            </h4>
            <ul className="space-y-2.5">
              {[
                "Holy Event — Modern, welcoming UI design for a church community landing page.",
                "Vault Breaker — Modern anime-style UI/UX landing page design for an urban freerunning game.",
                "Girlies Birthing Home Client — Admin dashboard SPA for patient, EMR, and appointment management.",
                "Rendezvous Café (Admin System) — Café management web app with auth and order management, deployed on Vercel.",
                "Rendezvous Café (Customer Portal) — The customer-facing portal allowing users to browse the menu and place orders.",
                "FurSure Care — Pet health platform with vaccination tracking, appointments, and smart reminders.",
                "Girlies Inquiry Portal — Public patient portal for cost estimation and appointment booking.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
