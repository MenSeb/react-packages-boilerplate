import { Application } from 'typedoc';

/**
 * Loads Typedoc plugins.
 *
 * @param app the Typedoc application.
 * @param plugins the Typedoc plugins.
 */
export function loadPlugins(
  app: Application,
  plugins: ((app: Application) => void)[],
): void {
  for (const plugin of plugins) plugin(app);
}
