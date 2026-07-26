import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mark Lexter Laylo | Full-Stack Developer",
  description: "Portfolio of Mark Lexter Laylo — Full-Stack Developer specializing in Next.js, Node.js, and PostgreSQL. Explore my projects, certifications, and CV.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Node.js", "PostgreSQL", "Web Developer Philippines"],
  authors: [{ name: "Mark Lexter Laylo" }],
  openGraph: {
    title: "Mark Lexter Laylo | Full-Stack Developer",
    description: "Full-Stack Developer specializing in Next.js, Node.js, and PostgreSQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`} data-theme="dark">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
