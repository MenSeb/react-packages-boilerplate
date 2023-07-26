import * as React from 'react';
import {
  CallToAction,
  Container,
  Heading,
  Image,
  Page,
  Text,
} from '@packages/react-ui';

export default function Home() {
  return (
    <Page label="home page" className="page-home">
      <header>
        <Container>
          <Heading>
            <span className="span">Application, Website &</span>
            <span className="span">WordPress Developper</span>
          </Heading>
          <Text>Let&apos;s bring your ideas to life in the digital realm!</Text>
          <CallToAction to="contact">get in touch</CallToAction>
          <CallToAction to="services">see services</CallToAction>
        </Container>
        <Image alt="web development" src="assets/banner-home.svg" />
      </header>
    </Page>
  );
}
