// i18n.js
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import i18nConfig from '../i18nConfig';

import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import  from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';
import nextI18NextConfig from '../i18nConfig';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: nextI18NextConfig.defaultLocale,
    supportedLngs: nextI18NextConfig.locales,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
