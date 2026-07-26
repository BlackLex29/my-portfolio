"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface RevealContextType {
  revealed: boolean;
  reveal: (targetId?: string) => void;
  goHome: () => void;
}

const RevealContext = createContext<RevealContextType>({
  revealed: false,
  reveal: () => {},
  goHome: () => {},
});

export function useReveal() {
  return useContext(RevealContext);
}

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const pendingTarget = useRef<string | null>(null);

  const reveal = (targetId?: string) => {
    // Already showing the content view — just scroll to the section.
    if (revealed) {
      if (targetId) {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        });
      }
      return;
    }
    pendingTarget.current = targetId ?? null;
    setRevealed(true);
  };

  const goHome = () => {
    pendingTarget.current = null;
    setRevealed(false);
    window.scrollTo(0, 0);
  };

  // Lock scrolling to a single viewport while the landing page is showing.
  useEffect(() => {
    document.documentElement.style.overflow = revealed ? "" : "hidden";
    document.body.style.overflow = revealed ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [revealed]);

  // Scroll to the requested section once it has mounted and painted.
  useEffect(() => {
    if (!revealed || !pendingTarget.current) return;
    const id = pendingTarget.current;
    pendingTarget.current = null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, [revealed]);

  return (
    <RevealContext.Provider value={{ revealed, reveal, goHome }}>
      {children}
    </RevealContext.Provider>
  );
}
