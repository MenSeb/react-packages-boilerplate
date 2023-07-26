import { Application, PageEvent, Renderer, RendererEvent } from 'typedoc';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

const FILE_LOGO = 'logo.svg';
const SEGMENT_ASSETS = 'assets';
const SEGMENT_DOCS = 'docs';
const SEGMENT_ICONS = 'icons';
const SEGMENT_MODULES = 'modules';
const PATH_ICONS = createURL(SEGMENT_ASSETS, SEGMENT_ICONS);
const PATH_LOGOS = createURL(SEGMENT_DOCS, PATH_ICONS);
const PATH_MODULES = createURL(SEGMENT_MODULES, '_');
const URL_LOGO = createURL(PATH_ICONS, FILE_LOGO);

/**
 * Creates a URL with a slash between each segment.
 *
 * @param segments the url segments.
 * @returns the url with slashes.
 */
function createURL(...segments: string[]): string {
  let url = '';

  for (const segment of segments) url += `${segment}/`;

  return url.slice(0, -1);
}

/**
 * Extracts the module name from its url.
 *
 * E.G. modules/_workspace_my_module.html => my_module
 *
 * @param url the module url.
 * @returns the module name.
 */
function extractModule(url: string): string {
  return url.substring(
    url.indexOf('_', PATH_MODULES.length) + 1,
    url.lastIndexOf('.'),
  );
}

/**
 * Extracts the workspace name from its url.
 *
 * E.G. modules/_workspace_my_module.html => workspace
 *
 * @param url the module url.
 * @returns the workspace name.
 */
function extractWorkspace(url: string): string {
  return url.substring(
    PATH_MODULES.length,
    url.indexOf('_', PATH_MODULES.length),
  );
}

/**
 * Creates the logo url of a module.
 *
 * @param url the module url.
 * @returns the logo url.
 */
function createLogoURL(url: string): string {
  return createURL(
    '..',
    PATH_ICONS,
    extractWorkspace(url),
    `${extractModule(url)}.svg`,
  );
}

/**
 * Copies and links modules logo.
 *
 * @param app the Typedoc application.
 */
export default function pluginLogo(app: Application): void {
  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    if (page.contents === undefined) return;

    const source = page.url.includes('index.html')
      ? URL_LOGO
      : createLogoURL(page.url);

    page.contents = page.contents.replace(
      `src="${FILE_LOGO}"`,
      `src="${source}"`,
    );
  });

  app.renderer.on(Renderer.EVENT_END, (event: RendererEvent) => {
    if (event.urls === undefined) return;

    mkdirSync(PATH_LOGOS);

    copyFileSync(FILE_LOGO, createURL(PATH_LOGOS, FILE_LOGO));

    for (const { url } of event.urls) {
      if (!url.includes(PATH_MODULES)) continue;

      // fix conflict and remove this line
      if (url.includes('classNames')) continue;

      const module = extractModule(url);
      const workspace = extractWorkspace(url);
      const path = createURL(PATH_LOGOS, workspace);

      if (!existsSync(path)) mkdirSync(path);

      copyFileSync(
        createURL(workspace, module.replace(/_/g, '-'), FILE_LOGO),
        createURL(path, `${module}.svg`),
      );
    }
  });
}
