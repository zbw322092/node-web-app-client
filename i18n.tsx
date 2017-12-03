import i18next from 'i18next';

i18next
  .init({
    "interpolation": {
      "escapeValue": false,
    },
    "debug": true,
    "whitelist": ['zh-CN', 'en-US'],
    "lng": "zh-CN"
  })

export default i18next;