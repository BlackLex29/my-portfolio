import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import CV from "../components/CV";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Header />
      {/* pt-16 to offset fixed header height */}
      <div className="pt-16">
        <Hero />
        <Projects />
        <Certificates />
        <CV />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 section-alt">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted text-lg mb-10">
              Have a project in mind or just want to connect? Feel free to reach out!
            </p>
            <a
              href="mailto:lexterlaylo02918@gmail.com"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              lexterlaylo02918@gmail.com
            </a>
          </div>
        </section>

        <footer className="py-8 text-center border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--nav-link)" }}>
            © {new Date().getFullYear()} Mark Lexter Laylo. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
