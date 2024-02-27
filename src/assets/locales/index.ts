import translationFR from './fr/translations.json';
import translationEN from './en/translations.json';

export enum Locales {
  FR = 'fr',
  EN = 'en'
}

export const translations = {
  [Locales.FR]: {
    translation: translationFR
  },
  [Locales.EN]: {
    translation: translationEN
  }
};
