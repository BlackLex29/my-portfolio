"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Certificate of Completion",
    issuer: "General Certificate",
    date: "2024",
    file: "/Cerficate.pdf"
  },
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    date: "2023",
    file: "/JavaFundamentals.pdf"
  },
  {
    title: "Oracle Certification",
    issuer: "Oracle",
    date: "2023",
    file: "/Oracle.pdf"
  },
];

export default function Certificates() {
  return (
    <section className="py-24 px-6 relative section-alt" id="certificates">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text">Certifications</span></h2>
          <p className="text-muted text-lg">Professional qualifications and ongoing learning.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group block cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                <Award className="w-8 h-8 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>{cert.title}</h3>
                <p className="text-primary font-medium mb-6">{cert.issuer}</p>
                
                <div className="flex items-center text-sm gap-2 text-muted">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
