// commonJS version, used by the laoder code itself
const { TwingEnvironment, TwingLoaderRelativeFilesystem } = require('twing');

const env = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);

module.exports = env;