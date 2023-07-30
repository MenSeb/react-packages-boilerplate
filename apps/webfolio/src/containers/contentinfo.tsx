import * as React from 'react';
import { Container, Copyright, Footer, Signature } from '@packages/react-ui';
import {
  NavigationInfos,
  NavigationMain,
  NavigationSocials,
} from '../components';

export default function ContentInfo() {
  return (
    <Footer className="content-info">
      <Container className="wrapper">
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
      </Container>
    </Footer>
  );
}
