import React, { createContext, useState } from "react";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

export const LanguageContext = createContext();

const translations = {
  English: en,
  French: fr,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || key,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
