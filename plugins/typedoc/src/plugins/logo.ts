import { Application, PageEvent, Renderer, RendererEvent } from 'typedoc';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import {
  createURL,
  extractFileName,
  extractFolderName,
  formatFileExtension,
} from '../utilities';

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
 * Creates the logo url of a module.
 *
 * @param url the page url.
 * @returns the logo url.
 */
function createLogoURL(url: string): string {
  const file = extractFileName(url, PATH_MODULES);
  const folder = extractFolderName(url, PATH_MODULES);

  return createURL('..', PATH_ICONS, folder, formatFileExtension(file, 'svg'));
}

/**
 * Copies and links modules logo.
 *
 * @param app the Typedoc application.
 * @category plugins
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
