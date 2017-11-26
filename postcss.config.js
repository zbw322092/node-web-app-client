module.exports = {
  plugins: [
    require('autoprefixer', {
      browsers: [
        "ie 8",
        "last 2 versions",
        "> 1%"
      ]
    }),
    require('postcss-pxtorem')({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ]
};