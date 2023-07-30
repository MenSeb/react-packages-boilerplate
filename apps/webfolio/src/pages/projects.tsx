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
// import { Projects } from '../components';
// import { PROJECTS } from '../utilities/projects';

export default function PageProjects() {
  return (
    <Page label="projects page" className="page-projects">
      <header>
        <Container>
          <Heading>projects</Heading>
          <Text>
            I work diligently to ensure your project becomes a reality.
          </Text>
          <CallToAction emphasize to="contact">
            get in touch
          </CallToAction>
        </Container>
        <Image
          alt="working closely with client"
          src="assets/svgo/undraw_working.svg"
        />
      </header>

      <Separator />

      <Region className="region-projects" label="projects">
        <Heading level={2}>Achievements I did</Heading>
        {/* <Projects projects={PROJECTS} /> */}
      </Region>
    </Page>
  );
}
