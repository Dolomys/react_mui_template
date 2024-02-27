import { Locales, translations } from "@assets/locales";
import dayjs from "dayjs";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const formatTranslation = (value: any, format?: string, locale?: string) => {
  if (value instanceof Date && locale && format) {
    return dayjs(value).locale(locale).format(format);
  }

  if (typeof value === "string" && format === "uppercase") {
    return value.toUpperCase();
  }

  if (typeof value === "string" && format === "capitalize") return value.charAt(0).toUpperCase() + value.slice(1);

  if (typeof value === "string" && format === "lowercase") {
    return value.toLowerCase();
  }

  return value;
};

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: Locales.FR,
  lng: window.navigator.language,
  returnObjects: true,
  returnNull: true,
  interpolation: {
    escapeValue: false,
    format: formatTranslation,
  },
});

export default i18n;
