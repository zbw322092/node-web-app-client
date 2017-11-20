const resolveAppPath = require('../utils/resolveAppPath.js');

module.exports = {
  appRoot: resolveAppPath(''),
  public: resolveAppPath('./public')
};