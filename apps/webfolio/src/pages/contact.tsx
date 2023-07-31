import * as React from 'react';
import * as UI from '@packages/react-ui';

export default function PageContact() {
  return (
    <UI.Page label="contact page" className="page-contact">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>Contact</UI.Heading>
          <UI.Text>I look forward to hearing about your project.</UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/services">
              see services
            </UI.CallToAction>
            <UI.CallToAction to="/projects">see projects</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <UI.Image
          alt="contact informations"
          src="assets/svgo/undraw_contact_us.svg"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-contact" label="contact">
        <UI.Heading level={2}>Contact me</UI.Heading>
      </UI.Region>
    </UI.Page>
  );
}
