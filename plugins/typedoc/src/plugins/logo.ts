import { Application, PageEvent, ParameterType, Renderer } from 'typedoc';
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';

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

    const paths = ['packages', 'plugins'];

    for (const path of paths) {
      const folders = readdirSync(path);

      for (const folder of folders) {
        copyFileSync(
          `${path}/${folder}/${logoFileName}`,
          `docs/assets/logos/${folder}.svg`,
        );
      }
    }
  });
}
