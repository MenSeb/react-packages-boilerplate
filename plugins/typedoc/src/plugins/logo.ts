import { Application, PageEvent, Renderer, RendererEvent } from 'typedoc';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import {
  createURL,
  extractFileName,
  extractFolderName,
  formatFileExtension,
} from '../utilities';

/**
 * The logo file name for each workspace packages.
 */
export const FILE_LOGO = 'logo.svg';
/**
 * The assets folder.
 */
export const SEGMENT_ASSETS = 'assets';
/**
 * The icons folder.
 */
export const SEGMENT_DOCS = 'docs';
export const SEGMENT_ICONS = 'icons';
export const SEGMENT_MODULES = 'modules';
export const PATH_ICONS = createURL(SEGMENT_ASSETS, SEGMENT_ICONS);
export const PATH_LOGOS = createURL(SEGMENT_DOCS, PATH_ICONS);
export const PATH_MODULES = createURL(SEGMENT_MODULES, '_');
export const URL_LOGO = createURL(PATH_LOGOS, FILE_LOGO);

/**
 * Creates the logo url of a Typedoc page.
 *
 * @param url the page url.
 * @returns the logo url.
 * @internal
 */
export function createLogoURL(url: string): string {
  const file = extractFileName(url, PATH_MODULES);
  const folder = extractFolderName(url, PATH_MODULES);

  return createURL('..', PATH_LOGOS, folder, file);
}

/**
 * Creates and loads each module logo.
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

    if (existsSync(URL_LOGO)) copyFileSync(URL_LOGO, PATH_LOGOS);

    for (const { url } of event.urls) {
      if (!url.includes(PATH_MODULES)) continue;

      const file = extractFileName(url, PATH_MODULES);
      const folder = extractFolderName(url, PATH_MODULES);
      const path = createURL(PATH_LOGOS, folder);

      if (!existsSync(path)) mkdirSync(path);

      copyFileSync(
        createURL(folder, file.replace(/_/g, '-'), FILE_LOGO),
        createURL(path, formatFileExtension(file, 'svg')),
      );
    }
  });
}
