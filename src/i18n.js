import { createI18n } from 'vue-i18n';

export default createI18n({
  globalInjection: true,
  legacy: true,
  allowComposition: true,
  locale: navigator && navigator.language ? navigator.language.substring(0, 2) : 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: 'hello!',
    },
  },
});
