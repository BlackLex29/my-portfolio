"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Coffee, Database, Building2, GraduationCap } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Certificate of Completion",
    issuer: "General Certificate",
    date: "2024",
    file: "/Cerficate.pdf",
    accent: "#71717a",
    accentBg: "rgba(113, 113, 122, 0.08)",
    accentBorder: "rgba(113, 113, 122, 0.2)",
    icon: Award,
  },
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    date: "2023",
    file: "/JavaFundamentals.pdf",
    accent: "#ef4444",
    accentBg: "rgba(239, 68, 68, 0.08)",
    accentBorder: "rgba(239, 68, 68, 0.2)",
    icon: Coffee,
  },
  {
    title: "Oracle Certification",
    issuer: "Oracle",
    date: "2023",
    file: "/Oracle.pdf",
    accent: "#f97316",
    accentBg: "rgba(249, 115, 22, 0.08)",
    accentBorder: "rgba(249, 115, 22, 0.2)",
    icon: Database,
  },
  {
    title: "Introduction to S/4HANA using Global Bike",
    issuer: "SAP University Alliances",
    date: "2024",
    file: "/SAP-LAYLO.pdf",
    accent: "#0070f2",
    accentBg: "rgba(0, 112, 242, 0.08)",
    accentBorder: "rgba(0, 112, 242, 0.2)",
    icon: Building2,
  },
  {
    title: "Skills to Succeed Academy",
    issuer: "Accenture",
    date: "2025",
    file: "/S2SAcademy-achievement-certificate.pdf",
    accent: "#a100ff",
    accentBg: "rgba(161, 0, 255, 0.08)",
    accentBorder: "rgba(161, 0, 255, 0.2)",
    icon: GraduationCap,
  },
];

export default function Certificates() {
  return (
    <section className="py-24 px-6 relative section-alt" id="certificates">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center mb-3">
            <span className="section-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /></svg>
              Credentials
            </span>
          </div>
          <h2
            className="section-heading text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted text-lg max-w-sm mx-auto">
            Professional qualifications and ongoing learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card card-glow rounded-2xl p-7 relative overflow-hidden group flex flex-col"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
              />

              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: cert.accentBg, border: `1px solid ${cert.accentBorder}`, color: cert.accent }}
              >
                <cert.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-1 transition-colors leading-snug"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    color: "var(--foreground)",
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: cert.accent }}
                >
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1.5 text-sm text-muted mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 w-fit"
                style={{
                  background: cert.accentBg,
                  border: `1px solid ${cert.accentBorder}`,
                  color: cert.accent,
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
