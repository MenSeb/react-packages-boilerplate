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
import { About, Services } from '../components';
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
          <Container className="ctas">
            <CallToAction emphasize to="contact">
              get in touch
            </CallToAction>
            <CallToAction to="services">see services</CallToAction>
          </Container>
        </Container>
        <Image
          alt="web development"
          src="assets/svgo/undraw_progressive_app.svg"
        />
      </header>

      <Separator />

      <Region className="region-services" label="services">
        <Heading level={2}>Some of my services</Heading>
        <Services services={SERVICES.slice(0, 3)} />
      </Region>

      <Separator />

      <Region className="region-projects" label="projects">
        <Container>
          <Heading level={2}>Learn why people put trust in my work!</Heading>
          <Text>
            Feel free to consult my previous projects and achievements.
          </Text>
          <CallToAction to="projects">consult projects</CallToAction>
        </Container>
        <Image alt="projects" src="assets/svgo/undraw_feeling_proud.svg" />
      </Region>

      <Separator />

      <Region className="region-blog" label="blog">
        <Container>
          <Heading level={2}>Eager to learn about web development?</Heading>
          <Text>
            Feel free to browse my blog for various web development articles.
          </Text>
          <CallToAction to="blog">browse blog</CallToAction>
        </Container>
        <Image alt="blog" src="assets/svgo/undraw_online_learning.svg" />
      </Region>

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

      <Separator />
    </Page>
  );
}
