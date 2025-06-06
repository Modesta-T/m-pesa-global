import React, { createContext, useState } from "react";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import zh from "./i18n/zh.json";
import ko from "./i18n/ko.json";
import es from "./i18n/es.json";
import ar from "./i18n/ar.json";
import hi from "./i18n/hi.json";
import de from "./i18n/de.json";
import pt from "./i18n/pt.json";

export const LanguageContext = createContext();

const languages = {
  en,
  fr,
  zh,
  ko,
  es,
  ar,
  hi,
  de,
  pt,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translations = languages[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
