import { Application, PageEvent, ParameterType, Renderer } from 'typedoc';
import { copyFileSync, readdirSync } from 'node:fs';
import { JSDOM } from 'jsdom';

export default function logo(app: Application) {
  app.options.addDeclaration({
    name: 'logo',
    help: 'Specify the path to the logo file.',
    type: ParameterType.String,
    defaultValue: 'logo.svg',
  });

  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    const dom = new JSDOM(page.contents);
    const {
      window: { document },
    } = dom;
    const title = document.querySelector('h1') as HTMLHeadingElement;
    const text = title.textContent as string;
    const [, packageName] = text.split('/');

    document
      .querySelector('img[src="logo.svg"]')
      ?.setAttribute('src', `${packageName}.svg`);

    page.contents = dom.serialize();
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
