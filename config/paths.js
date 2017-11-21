const resolveAppPath = require('../utils/resolveAppPath.js');

module.exports = {
  appRoot: resolveAppPath(''),
  public: resolveAppPath('./public'),
  tsconfigFile: resolveAppPath('./tsconfig.json'),
  defaultTemplate: resolveAppPath('./webpack/plugins/index.template.ejs')
};