"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "th" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T>(translations: { th: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: ({ en }) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage first (user preference)
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "th" || saved === "en") {
      setLangState(saved);
    } else {
      // Detect browser language — default to "en" for non-Thai
      const browserLang = navigator.language || "";
      setLangState(browserLang.startsWith("th") ? "th" : "en");
    }
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = <T,>({ th, en }: { th: T; en: T }): T => (lang === "th" ? th : en);

  // Avoid hydration mismatch — render with default until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ lang: "en", setLang, t: ({ en }) => en }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
