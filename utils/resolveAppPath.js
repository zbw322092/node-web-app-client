const path = require('path');
const fs = require('fs');

const appRootDirectory = fs.realpathSync(process.cwd());

module.exports = (relativePath) => {
  return path.resolve(appRootDirectory, relativePath);
}