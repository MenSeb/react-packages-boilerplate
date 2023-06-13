import * as React from 'react';

function setVariablesCSS(
  variables: Record<string, string>,
  element: HTMLElement,
) {
  for (const variable in variables)
    element.style.setProperty(`--${variable}`, variables[variable]);
}

export default function useVariablesCSS(
  variables: Record<string, string>,
  elementOrRef: HTMLElement | React.RefObject<HTMLElement>,
) {
  React.useEffect(() => {
    if (elementOrRef instanceof HTMLElement)
      return setVariablesCSS(variables, elementOrRef);

    if (elementOrRef.current !== null)
      return setVariablesCSS(variables, elementOrRef.current);
  }, [elementOrRef, variables]);
}
