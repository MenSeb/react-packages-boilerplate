import * as React from 'react';
import * as Widgets from '@packages/react-widgets';
import { IconContext } from 'react-icons';
import { ScrollRestoration } from 'react-router-dom';
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
        <Widgets.ScrollToTop />
        <ScrollRestoration />
      </IconContext.Provider>
    </>
  );
}
