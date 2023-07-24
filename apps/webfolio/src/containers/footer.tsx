import * as React from 'react';
import {
  NavigationInfos,
  NavigationMain,
  NavigationSocials,
} from '../components';
import { Copyright, Signature } from '@packages/react-ui';

export default function Footer() {
  return (
    <footer>
      <NavigationSocials />
      <NavigationMain />
      <NavigationInfos />
      <Copyright
        author="MenSeb."
        className="copyright"
        statement="All righs reserved."
      />
      <Signature
        author="Sébastien Menard"
        className="signature"
        link="https://www.linkedin.com/in/menseb/"
        statement="Proudly made by"
      />
    </footer>
  );
}
