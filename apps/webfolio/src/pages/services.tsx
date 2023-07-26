import * as React from 'react';
import {
  CallToAction,
  Container,
  Heading,
  Page,
  Region,
  Separator,
  Text,
} from '@packages/react-ui';
import { Services } from '../components';
import { SERVICES } from '../utilities/services';

export default function PageServices() {
  return (
    <Page label="services page" className="page-services">
      <header>
        <Container>
          <Heading>services</Heading>
          <Text>I offer personalized solutions for your needs on the web.</Text>
          <CallToAction emphasize to="contact">
            get in touch
          </CallToAction>
        </Container>
      </header>

      <Separator />

      <Region className="region-services" label="services">
        <Heading level={2}>Services I offer</Heading>
        <Services services={SERVICES} />
      </Region>
    </Page>
  );
}
