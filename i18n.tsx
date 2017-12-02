import i18next from 'i18next';

i18next
  .init({
    "interpolation": {
      "escapeValue": false,
    },
    "lng": "zh",
    "resources": {
      "zh": {
        "translation": {
          "home": { "label": "首页", },
        },
      },
      "en": {
        "translation": {
          "home": { "label": "Home", },
        },
      },
    },
  })

export default i18next