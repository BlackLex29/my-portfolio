"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
export type Accent = "mono" | "navy" | "slate" | "teal" | "burgundy" | "forest";

export const ACCENTS: { id: Accent; label: string; swatch: string }[] = [
  { id: "mono", label: "Charcoal", swatch: "#52525b" },
  { id: "navy", label: "Navy", swatch: "#1e3a5f" },
  { id: "slate", label: "Slate Blue", swatch: "#475569" },
  { id: "teal", label: "Teal", swatch: "#0f766e" },
  { id: "burgundy", label: "Burgundy", swatch: "#7f1d3d" },
  { id: "forest", label: "Forest", swatch: "#166534" },
];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  accent: Accent;
  setAccent: (accent: Accent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  accent: "mono",
  setAccent: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [accent, setAccentState] = useState<Accent>("mono");

  // On mount, read saved preferences or fall back to defaults
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme ?? "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const savedAccent = localStorage.getItem("accent") as Accent | null;
    const initialAccent = savedAccent ?? "mono";
    setAccentState(initialAccent);
    document.documentElement.setAttribute("data-accent", initialAccent);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  const setAccent = (next: Accent) => {
    localStorage.setItem("accent", next);
    document.documentElement.setAttribute("data-accent", next);
    setAccentState(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}
