import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";
import it from "@/locales/it.json";

const detectedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;
const initialLanguage = detectedLanguage || "fr";

const resources = {
  fr: { translation: fr },
  ar: { translation: ar },
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  it: { translation: it },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "fr",
  supportedLngs: ["fr", "ar", "en", "es", "de", "it"],
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }
};

export const getCurrentDirection = () => (i18n.dir() === "rtl" ? "rtl" : "ltr");

export default i18n;
