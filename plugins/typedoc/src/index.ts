import { Application } from 'typedoc';
import * as plugins from './plugins';

export * from './plugins';

/**
 * The type for plugin.
 */
export type Plugin = (app: Application) => void;

/**
 * Loads Typedoc application with plugins.
 *
 * You shouldn't be modifying this function to use a new plugin.
 *
 * Instead, export your plugin via the plugins index file.
 *
 * @param app the Typedoc application.
 */
export function load(app: Application): void {
  for (const plugin of Object.values<Plugin>(plugins)) plugin(app);
}
