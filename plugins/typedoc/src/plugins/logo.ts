import {
  Application,
  PageEvent,
  ParameterType,
  Renderer,
  RendererEvent,
} from 'typedoc';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

export const PATH_ASSETS = 'assets/icons';
export const PATH_DOCS = 'docs';
export const PATH_ICONS = `${PATH_DOCS}/${PATH_ASSETS}`;
export const PATH_LOGO = 'logo.svg';
export const PATH_MODULES = 'modules/_';

export function extractFileName(url: string) {
  return url.substring(
    url.indexOf('_', PATH_MODULES.length) + 1,
    url.lastIndexOf('.'),
  );
}

export function extractPackageName(url: string) {
  return url.substring(
    PATH_MODULES.length,
    url.indexOf('_', PATH_MODULES.length),
  );
}

export function createPathLogo({
  file,
  folder,
  format = '.svg',
  path = PATH_ASSETS,
}: {
  file: string;
  folder: string;
  format?: string;
  path?: string;
}) {
  return `${path}/${folder}/${file}${file.endsWith(format) ? '' : format}`;
}

export default function pluginLogo(app: Application) {
  app.options.addDeclaration({
    name: 'url',
    help: 'Specify the logo url.',
    type: ParameterType.String,
    defaultValue: PATH_LOGO,
  });

  const urlLogo = app.options.getValue('url') as string;

  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    const { url } = page;

    const file = extractFileName(url);
    const folder = extractPackageName(url);
    const path =
      url === 'index.html'
        ? `${PATH_ASSETS}/${urlLogo}`
        : `../${createPathLogo({ file, folder })}`;

    page.contents = page.contents?.replace(`src="${urlLogo}"`, `src="${path}"`);
  });

  app.renderer.on(Renderer.EVENT_END, (event: RendererEvent) => {
    const { urls = [] } = event;

    mkdirSync(PATH_ICONS);

    if (existsSync(urlLogo)) copyFileSync(urlLogo, `${PATH_ICONS}/${urlLogo}`);

    for (const { url } of urls) {
      if (url === 'index.html') continue;

      const fileName = extractFileName(url);
      const packageName = extractPackageName(url);
      const pathPackage = `${PATH_ICONS}/${packageName}`;

      if (!existsSync(pathPackage)) mkdirSync(pathPackage);

      copyFileSync(
        createPathLogo({
          file: urlLogo,
          folder: fileName.replace(/_/g, '-'),
          path: packageName,
        }),
        createPathLogo({
          file: fileName,
          folder: packageName,
          path: PATH_ICONS,
        }),
      );
    }
  });
}
