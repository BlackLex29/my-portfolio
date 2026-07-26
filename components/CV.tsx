"use client";

import { motion } from "framer-motion";
import { Download, User, Mail, FileText, Briefcase, GraduationCap, Code2 } from "lucide-react";

const SKILLS = [
  { label: "Next.js / React", level: 90 },
  { label: "Node.js / Express", level: 82 },
  { label: "PostgreSQL / Prisma", level: 80 },
  { label: "TypeScript", level: 75 },
  { label: "TailwindCSS", level: 92 },
  { label: "REST APIs / Socket.io", level: 78 },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer Intern (OJT)",
    company: "On-the-Job Training",
    period: "2024",
    description:
      "Developed and maintained full-stack web features using React and Node.js. Collaborated in an agile team environment, delivering production-ready code within tight deadlines.",
    accent: "#71717a",
  },
];

const SKILL_GROUPS = [
  { label: "Frontend", skills: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
  { label: "Database", skills: ["PostgreSQL", "NeonDB", "MongoDB", "Firebase", "MySQL", "Prisma ORM"] },
  { label: "Tools & Platforms", skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"] },
  {
    label: "IT Support",
    skills: [
      "Technical Support",
      "Hardware Troubleshooting",
      "Network Setup (LAN/WiFi)",
      "OS Installation (Windows/Linux)",
      "Printer & Peripheral Setup",
      "Software Installation",
      "Basic Cybersecurity",
      "Documentation & Reporting",
    ],
  },
];

function SkillBar({ label, level, delay = 0 }: { label: string; level: number; delay?: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{label}</span>
        <span className="text-xs font-semibold" style={{ color: "var(--accent-text)" }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <section className="py-24 px-6 relative" id="cv">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-3">
            <span className="section-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /></svg>
              Resume
            </span>
          </div>
          <h2
            className="section-heading text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Curriculum <span className="gradient-text">Vitae</span>
          </h2>
          <p className="text-muted">A summary of my background, skills, and experience.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Profile header bar */}
          <div
            className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden"
                style={{ boxShadow: "0 4px 16px var(--glow-primary)" }}
              >
                <img
                  src="/BSIT_LAYLO_white_bg.jpg"
                  alt="Mark Lexter Laylo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: "var(--font-outfit), sans-serif", color: "var(--foreground)" }}
                >
                  Mark Lexter Laylo
                </h3>
                <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--accent-text)" }}>
                  Full-Stack Developer
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <a
                    href="mailto:lexterlaylo02918@gmail.com"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    lexterlaylo02918@gmail.com
                  </a>
                  <a
                    href="https://wa.me/639635319660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +63 963 531 9660
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/CV_MARK_LEXTER_LAYLO.docx"
              download
              className="inline-flex items-center gap-2 font-semibold py-2.5 px-6 rounded-full text-sm text-white transition-all hover:opacity-90 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                boxShadow: "0 3px 14px var(--glow-primary)",
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Main content — 2-column on md+ */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--border-subtle)" }}>

            {/* Left col */}
            <div className="p-6 md:p-8 flex flex-col gap-8">

              {/* About */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4" style={{ color: "var(--accent-text)" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted">About</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  I specialize in designing and building reliable full-stack web applications, from intuitive user interfaces
                  to scalable and secure backend systems. I built a strong foundation through my On-the-Job Training (OJT),
                  where I honed my practical skills in a professional environment.
                </p>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Briefcase className="w-4 h-4" style={{ color: "var(--accent-text)" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted">Experience</h4>
                </div>
                <div className="flex flex-col gap-5">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <div className="timeline-dot" style={{ background: exp.accent }} />
                        <div className="timeline-line flex-1 mt-2" style={{ background: `linear-gradient(180deg, ${exp.accent}, transparent)` }} />
                      </div>
                      <div className="pb-2">
                        <h5
                          className="font-bold text-sm mb-0.5"
                          style={{ fontFamily: "var(--font-outfit), sans-serif", color: "var(--foreground)" }}
                        >
                          {exp.role}
                        </h5>
                        <p className="text-xs font-semibold mb-1" style={{ color: exp.accent }}>{exp.company}</p>
                        <p className="text-xs text-muted mb-2">{exp.period}</p>
                        <p className="text-xs text-muted leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Bars */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Code2 className="w-4 h-4" style={{ color: "var(--accent-text)" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted">Proficiency</h4>
                </div>
                <div className="flex flex-col gap-4">
                  {SKILLS.map((s, i) => (
                    <SkillBar key={s.label} label={s.label} level={s.level} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right col */}
            <div className="p-6 md:p-8 flex flex-col gap-8">

              {/* Technical Skills Grid */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap className="w-4 h-4" style={{ color: "var(--accent-text)" }} />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted">Technical Skills</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {SKILL_GROUPS.map((group) => (
                    <div
                      key={group.label}
                      className="rounded-xl p-4"
                      style={{ background: "var(--toggle-bg)", border: "1px solid var(--border-subtle)" }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: "var(--accent-text)" }}>
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                            style={{
                              background: "var(--background)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--nav-link)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
