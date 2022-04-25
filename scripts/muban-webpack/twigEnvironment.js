// ESM version, used by the runtime content added to the output bundle
import { TwingEnvironment, TwingLoaderRelativeFilesystem } from 'twing';

const twingEnvironment = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);

export default twingEnvironment;