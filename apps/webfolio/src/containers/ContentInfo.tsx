import * as React from 'react';
import * as UI from '@packages/react-ui';
import {
  NavigationInfos,
  NavigationMain,
  NavigationSocials,
} from '../components';

export function ContentInfo() {
  return (
    <UI.Footer className="content-info">
      <UI.Container className="wrapper">
        <NavigationSocials />
        <NavigationMain />
        <NavigationInfos />
        <UI.Copyright
          author="MenSeb."
          className="copyright"
          statement="All righs reserved."
        />
        <UI.Signature
          author="Sébastien Menard"
          className="signature"
          link="https://www.linkedin.com/in/menseb/"
          statement="Proudly made by"
        />
      </UI.Container>
    </UI.Footer>
  );
}
