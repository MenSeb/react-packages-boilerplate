import { Application, PageEvent } from 'typedoc';

export const REGEXP_LINK = /<li><a href="#(?!md:).*">.+<\/a>/g;

/**
 * Prefixes each table of contents link of the readme file.
 *
 * @param app the Typedoc application.
 * @category plugins
 */
export default function pluginTableOfContents(app: Application): void {
  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    if (page.contents === undefined) return;

    const links = page.contents.match(REGEXP_LINK);

    if (links === null) return;

    for (const link of links) {
      page.contents = page.contents.replace(link, link.replace('#', '#md:'));
    }
  });
}
