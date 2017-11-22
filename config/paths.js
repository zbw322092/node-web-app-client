const resolveAppPath = require('../utils/resolveAppPath.js');

module.exports = {
  appRoot: resolveAppPath(''),
  src: resolveAppPath('./src'),
  public: resolveAppPath('./public'),
  tsconfigFile: resolveAppPath('./tsconfig.json'),
  defaultTemplate: resolveAppPath('./webpack/plugins/index.template.ejs'),
  postConfig: resolveAppPath('./postcss.config.js')
};