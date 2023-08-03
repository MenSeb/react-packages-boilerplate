import * as React from 'react';
import { IconContext } from 'react-icons';
import { Banner, ContentInfo, Main } from '.';

export function Layout() {
  return (
    <>
      <IconContext.Provider
        value={{
          attr: { stroke: undefined, fill: undefined },
          className: 'icon',
        }}
      >
        <Banner />
        <Main />
        <ContentInfo />
      </IconContext.Provider>
    </>
  );
}
