import * as React from 'react';
import * as UI from '@packages/react-ui';
import { ImageSVG, Newsletter, Projects } from '../components';
import { PROJECTS } from '../utilities';

export default function PageProjects() {
  return (
    <UI.Page label="projects page" className="page-projects">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>projects</UI.Heading>
          <UI.Text>
            I work diligently to ensure your project becomes a reality.
          </UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/services">explore services</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <ImageSVG
          label="developer showing projects"
          name="ImageProjectsHeader"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-projects" label="projects">
        <UI.Heading level={2}>Achievements I did</UI.Heading>
        <Projects projects={PROJECTS} />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-newsletter" label="newsletter">
        <Newsletter />
      </UI.Region>
    </UI.Page>
  );
}
