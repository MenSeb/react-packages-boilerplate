import * as React from 'react';
import * as UI from '@packages/react-ui';
import { ImageSVG, Newsletter, Services } from '../components';
import { SERVICES } from '../utilities';

export default function PageServices() {
  return (
    <UI.Page label="services page" className="page-services">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>services</UI.Heading>
          <UI.Text>
            I offer personalized solutions for your needs on the web.
          </UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/projects">view projects</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <ImageSVG
          label="developer working with client"
          name="ImageServicesHeader"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-services" label="services">
        <UI.Heading level={2}>Services I offer</UI.Heading>
        <Services services={SERVICES} />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-newsletter" label="newsletter">
        <Newsletter />
      </UI.Region>
    </UI.Page>
  );
}
