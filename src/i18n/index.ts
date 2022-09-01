import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ja from './resources/ja.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ja',
    resources: {
      ja: {
        translation: ja
      }
    },
    debug: process.env.NODE_ENV === 'development'
  });


export default i18n;
