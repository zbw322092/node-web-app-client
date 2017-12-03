import i18next from 'i18next';

i18next
  .init({
    "interpolation": {
      "escapeValue": false,
    },
    "debug": true,
    "whitelist": ['zh-CN', 'en-US'],
    "load": "currentOnly",
    "lng": "zh-CN",
    "fallbackLng": "zh-CN"
  })

export default i18next;