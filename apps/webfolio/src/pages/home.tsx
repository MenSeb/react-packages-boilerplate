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
import { Services } from '../components';
import { SERVICES } from '../utilities/services';

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
          <CallToAction emphasize to="contact">
            get in touch
          </CallToAction>
          <CallToAction to="services">see services</CallToAction>
        </Container>
        <Image alt="web development" src="assets/banner-home.svg" />
      </header>

      <Separator />

      <Region className="region-services" label="services">
        <Heading level={2}>A glimpse of services I offer</Heading>
        <Services services={SERVICES.slice(0, 3)} />
      </Region>

      <Separator />

      <Region className="region-projects" label="projects">
        <Container>
          <Heading level={2}>Learn why people put trust in my work!</Heading>
          <Text>
            Feel free to consult my previous projects and achievements.
          </Text>
          <CallToAction to="projects">see projects</CallToAction>
        </Container>
        <Image alt="projects" src="projects.svg" />
      </Region>

      <Separator />

      <Region className="region-blog" label="blog">
        <Container>
          <Heading level={2}>Eager to learn about web development?</Heading>
          <Text>
            Feel free to browse my blog for various web development articles.
          </Text>
          <CallToAction to="blog">see blog</CallToAction>
        </Container>
        <Image alt="blog" src="blog.svg" />
      </Region>
    </Page>
  );
}
