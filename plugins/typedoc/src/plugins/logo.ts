import { Application, PageEvent, ParameterType, Renderer } from 'typedoc';
import { copyFileSync, readdirSync } from 'node:fs';

export default function logo(app: Application) {
  app.options.addDeclaration({
    name: 'logo',
    help: 'Specify the path to the logo file.',
    type: ParameterType.String,
    defaultValue: 'logo.svg',
  });

  app.renderer.on(PageEvent.END, (/*page: PageEvent*/) => {
    // update img src with {packageName}.svg
  });

  app.renderer.on(Renderer.EVENT_END, () => {
    const packages = readdirSync('packages');

    packages.forEach((packageName: string) => {
      copyFileSync(
        `packages/${packageName}/${app.options.getValue('logo') as string}`,
        `docs/modules/${packageName}.svg`,
      );
    });
  });
}
