declare module '*.svg' {
  import * as React from 'react';
  export const Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default Icon;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    [key: string]: string | undefined;
    BACKEND_PORT: string;
    FRONTEND_PORT: string;
    NODE_MAILER_EMAIL: string;
    NODE_MAILER_HOST: string;
    NODE_MAILER_PORT: string;
    NODE_MAILER_USERNAME: string;
    NODE_MAILER_PASSWORD: string;
  }
}
