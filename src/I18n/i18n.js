// i18n.js (separate config file)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)// use the language detector to detect the language of the user
  .use(HttpApi) // use the http backend to load the translations from the server
  .init({
    fallbackLng: "en",
    debug: true,
    supportedLngs: ["en", "ar"],
    detection: {
      order: [
        "queryString",
        "path",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "subdomain",
      ],
      lookupQuerystring: "lang", // Explicitly specify query parameter
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
      addPath: "/locales/add/{{lng}}/translations.json",
      allowMultiLoading: false,
      crossDomain: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;