import * as React from 'react';

export function setVariablesCSS(
  variables: Record<string, string>,
  element: HTMLElement,
) {
  for (const variable in variables)
    element.style.setProperty(`--${variable}`, variables[variable]);
}

export interface UseVariablesCSS {
  variables: Record<string, string>;
  elementOrRef: HTMLElement | React.RefObject<HTMLElement>;
}

export function useVariablesCSS({ variables, elementOrRef }: UseVariablesCSS) {
  React.useEffect(() => {
    if (elementOrRef instanceof HTMLElement) {
      setVariablesCSS(variables, elementOrRef);
    } else if (elementOrRef.current !== null) {
      setVariablesCSS(variables, elementOrRef.current);
    }
  }, [elementOrRef, variables]);
}
