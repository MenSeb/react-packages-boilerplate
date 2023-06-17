import { Application, PageEvent } from 'typedoc';

/**
 * Prefixes each table of contents link of the readme file.
 *
 * @param app the Typedoc application.
 */
export default function pluginTableOfContents(app: Application): void {
  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    if (page.contents === undefined) return;

    const links = page.contents.match(/<li><a href="#(?!md:).*">.+<\/a>/g);

    if (links === null) return;

    for (const link of links) {
      page.contents = page.contents.replace(link, link.replace('#', '#md:'));
    }
  });
}
