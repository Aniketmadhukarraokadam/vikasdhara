import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (enText: string, mrText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("vvf_language_pref");
    return (saved === "mr" || saved === "en") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("vvf_language_pref", lang);
    document.documentElement.lang = lang === "mr" ? "mr-IN" : "en-IN";
  };

  useEffect(() => {
    document.documentElement.lang = language === "mr" ? "mr-IN" : "en-IN";
  }, [language]);

  const t = (enText: string, mrText: string) => {
    return language === "mr" ? (mrText || enText) : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
