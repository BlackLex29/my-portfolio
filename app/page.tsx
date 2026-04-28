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
            <div className="flex flex-wrap gap-4 justify-center">
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
              <a
                href="https://t.me/Lexzm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg border"
                style={{ borderColor: "var(--border)", background: "var(--toggle-bg)", color: "var(--foreground)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                @Lexzm
              </a>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}
