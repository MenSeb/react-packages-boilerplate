import * as React from 'react';

export default function useVariablesCSS(
  variables: Record<string, string>,
  element: HTMLElement,
) {
  React.useEffect(() => {
    for (const variable in variables)
      element.style.setProperty(`--${variable}`, variables[variable]);
  }, [element, variables]);
}
