import { Application } from 'typedoc';
import { pluginLogo } from './plugins';

export function load(app: Application) {
  // import * as plugins from './plugins';
  // for (const pluginName in plugins) {
  //   plugins[pluginName](app);
  // }

  pluginLogo(app);
}
