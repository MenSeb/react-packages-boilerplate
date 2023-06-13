import { Application, PageEvent } from 'typedoc';

const REGEXP_LINK = /<li><a href="#(?!md:).*">.+<\/a>/g;

export default function pluginReadme(app: Application) {
  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    if (page.contents === undefined) return;

    const links = page.contents.match(REGEXP_LINK);

    if (links === null) return;

    for (const link of links) {
      page.contents = page.contents.replace(link, link.replace('#', '#md:'));
    }
  });
}
