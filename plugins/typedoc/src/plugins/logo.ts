import { Application, PageEvent, ParameterType, Renderer } from 'typedoc';
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import lernaConfig from '../../../../lerna.json';

export default function logo(app: Application) {
  app.options.addDeclaration({
    name: 'logo',
    help: 'Specify the path to the logo file.',
    type: ParameterType.String,
    defaultValue: 'logo.svg',
  });

  const logoFileName = app.options.getValue('logo') as string;

  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    const { filename } = page;

    const filePath = filename.substring(
      filename.lastIndexOf('_') + 1,
      filename.lastIndexOf('.'),
    );

    page.contents = page.contents?.replace(
      'src="logo.svg"',
      `src="assets/logos/${
        filename.includes('index.html') ? logoFileName : `${filePath}.svg`
      }"`,
    );
  });

  app.renderer.on(Renderer.EVENT_END, () => {
    mkdirSync('docs/assets/logos');

    copyFileSync(logoFileName, `docs/assets/logos/${logoFileName}`);

    const { packages: pathPackages } = lernaConfig;

    for (const pathPackage of pathPackages) {
      const packageNames = readdirSync(pathPackage);

      for (const packageName of packageNames) {
        copyFileSync(
          `${pathPackage}/${packageName}/${logoFileName}`,
          `docs/assets/logos/${packageName}.svg`,
        );
      }
    }
  });
}
