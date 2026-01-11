import { initReactI18next } from 'react-i18next';
import i18n from './i18n';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { en: { translations: {} } },
  });

export default i18n;
