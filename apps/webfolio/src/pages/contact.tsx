import * as React from 'react';
import {
  CallToAction,
  Container,
  Heading,
  Image,
  Page,
  Region,
  Separator,
  Text,
} from '@packages/react-ui';

export default function PageContact() {
  return (
    <Page label="contact page" className="page-contact">
      <header>
        <Container>
          <Heading>Contact</Heading>
          <Text>I look forward to hearing about your project. </Text>
          <CallToAction emphasize to="/contact">
            get in touch
          </CallToAction>
        </Container>
        <Image
          alt="contact informations"
          src="assets/svgo/undraw_contact_us.svg"
        />
      </header>

      <Separator />

      <Region className="region-contact" label="contact">
        <Heading level={2}>Contact me</Heading>
      </Region>
    </Page>
  );
}
