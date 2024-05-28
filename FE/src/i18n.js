import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Use the Backend plugin to load translation files
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the current language doesn't have translations
    backend: {
      // Path to translation files
      loadPath: "/src/localLang/{{lng}}-lang.json",
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
