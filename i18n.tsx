import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

let i18nextLng = localStorage.getItem('i18nextLng');
if (i18nextLng === null) {
  localStorage.setItem('i18nextLng','zh-CN');  
}


i18next
  .use(LanguageDetector)
  .init({
    "interpolation": {
      "escapeValue": false,
    },
    "debug": true,
    "whitelist": ['zh-CN', 'en-US'],
    "load": "currentOnly",
    "lng": i18nextLng,
    "fallbackLng": "zh-CN"
  });


export default i18next;