import { Application } from 'typedoc';
import * as plugins from './plugins';

export function load(app: Application) {
  for (const plugin of Object.values(plugins)) plugin(app);
}
