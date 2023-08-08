import * as React from 'react';
import * as UI from '@packages/react-ui';
import { ImageSVG, Newsletter } from '../components';

export default function PageContact() {
  return (
    <UI.Page label="contact page" className="page-contact">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>Contact</UI.Heading>
          <UI.Text>I look forward to hearing about your project.</UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/services">
              explore services
            </UI.CallToAction>
            <UI.CallToAction to="/projects">view projects</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <ImageSVG
          label="different ways to get in touch"
          name="ImageContactHeader"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-contact" label="contact">
        <UI.Heading level={2}>Contact me</UI.Heading>
        <UI.Text>
          Please select the services you would require and briefly describe the
          project for which they are required.
        </UI.Text>
        <UI.Form className="contact-form">
          <UI.Label>
            First Name
            <UI.Input type="text" placeholder="Your first name..." />
          </UI.Label>
          <UI.Label>
            Last Name
            <UI.Input type="text" placeholder="Your last name..." />
          </UI.Label>
          <UI.Label>
            Email
            <UI.Input type="email" placeholder="Your email..." />
          </UI.Label>
          <UI.Label>
            Services
            <UI.Select>
              <option value="">Your services...</option>
            </UI.Select>
          </UI.Label>
          <UI.Label>
            Project
            <UI.Textarea placeholder="Your project..." />
          </UI.Label>
          <UI.Input type="submit" value="Send message" />
        </UI.Form>
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-newsletter" label="newsletter">
        <Newsletter />
      </UI.Region>
    </UI.Page>
  );
}
