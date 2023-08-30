import {
  Application,
  Context,
  Converter,
  PageEvent,
  SourceReference,
  DeclarationReflection,
  ParameterReflection,
  SignatureReflection,
  TypeParameterReflection,
} from 'typedoc';

/**
 * Checks the sources of a reflection to see if it comes from "node_modules".
 *
 * @param sources the sources of a reflection.
 * @returns true if the reflection is from "node_modules".
 */
function checkSources(sources: SourceReference[] | undefined): boolean {
  return (
    sources !== undefined &&
    sources.some((source) => source.fileName.includes('node_modules'))
  );
}

/**
 * Removes re-exported modules from documentation.
 *
 * @param app the Typedoc application.
 */
export default function pluginExports(app: Application) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context: Context) => {
    for (const reflection of Object.values(context.project.reflections)) {
      const { parent } = reflection;

      if (
        reflection.variant === 'reference' ||
        parent?.variant === 'reference'
      ) {
        context.project.removeReflection(reflection);
        continue;
      }

      if (
        (reflection.variant === 'declaration' ||
          parent?.variant === 'declaration') &&
        checkSources(
          (reflection as DeclarationReflection).sources ??
            (parent as DeclarationReflection).sources,
        )
      ) {
        context.project.removeReflection(reflection);
        continue;
      }

      if (
        (reflection.variant === 'signature' ||
          parent?.variant === 'signature') &&
        checkSources(
          (reflection as SignatureReflection).parent.sources ??
            (parent as SignatureReflection).parent.sources,
        )
      ) {
        context.project.removeReflection(reflection);
        continue;
      }

      if (
        (reflection.variant === 'param' || parent?.variant === 'param') &&
        checkSources(
          (reflection as ParameterReflection).parent?.sources ??
            (parent as ParameterReflection).parent?.sources,
        )
      ) {
        context.project.removeReflection(reflection);
        continue;
      }

      if (
        (reflection.variant === 'typeParam' ||
          parent?.variant === 'typeParam') &&
        checkSources(
          (reflection as TypeParameterReflection).parent?.sources ??
            (parent as TypeParameterReflection).parent?.sources,
        )
      ) {
        context.project.removeReflection(reflection);
        continue;
      }
    }
  });

  /**
   * Safe method with renderer.
   * It shouldn't be necessary with converter method.
   */
  app.renderer.on(PageEvent.END, (page: PageEvent) => {
    if (
      page.contents &&
      page.contents.search(/defined in node_modules/gi) !== -1
    ) {
      page.preventDefault();
    }
  });
}
