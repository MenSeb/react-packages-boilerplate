declare module '*.svg' {
  import * as React from 'react';
  export const Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default Icon;
}
