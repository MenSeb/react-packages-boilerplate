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
import { About } from '../components';

export default function AboutPage() {
  return (
    <Page label="about page" className="page-about">
      <header>
        <Container>
          <Heading>about</Heading>
          <Text>Something about me.</Text>
          <CallToAction emphasize to="contact">
            get in touch
          </CallToAction>
        </Container>
      </header>

      <Separator />

      <Region className="region-about" label="about">
        <About
          author="Sébastien Menard"
          image="assets/svgo/undraw_programming.svg"
          title="Something about me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et malesuada libero. Duis in metus erat. Vivamus accumsan mi ac nibh dapibus placerat. Maecenas facilisis ex eu magna finibus, at porta nulla vehicula."
        >
          <CallToAction className="about-cta" emphasize to="about">
            about me
          </CallToAction>
        </About>
      </Region>
    </Page>
  );
}
