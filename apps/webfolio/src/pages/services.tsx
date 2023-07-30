import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Services } from '../components';
import { SERVICES } from '../utilities/services';

export default function PageServices() {
  return (
    <UI.Page label="services page" className="page-services">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>services</UI.Heading>
          <UI.Text>
            I offer personalized solutions for your needs on the web.
          </UI.Text>
          <UI.CallToAction emphasize to="/contact">
            get in touch
          </UI.CallToAction>
        </UI.Container>
        <UI.Image
          alt="online web services"
          src="assets/svgo/undraw_working.svg"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-services" label="services">
        <UI.Heading level={2}>Services I offer</UI.Heading>
        <Services services={SERVICES} />
      </UI.Region>
    </UI.Page>
  );
}
