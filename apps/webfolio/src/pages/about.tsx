import * as React from 'react';
import * as UI from '@packages/react-ui';
import { About } from '../components';

export default function AboutPage() {
  return (
    <UI.Page label="about page" className="page-about">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>about</UI.Heading>
          <UI.Text>Please allow me to introduce myself.</UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/blog">browse blog</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <UI.Image
          alt="profile section overview"
          src="assets/svgo/undraw_profile.svg"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-about" label="about">
        <UI.Heading level={2}>About Myself</UI.Heading>
        <About
          author="Sébastien Menard"
          image="assets/svgo/undraw_source_code.svg"
          title="Something about me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et malesuada libero. Duis in metus erat. Vivamus accumsan mi ac nibh dapibus placerat. Maecenas facilisis ex eu magna finibus, at porta nulla vehicula."
        />
      </UI.Region>
    </UI.Page>
  );
}
