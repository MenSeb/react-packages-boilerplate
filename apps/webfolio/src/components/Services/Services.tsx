import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Service, ServiceProps } from '.';

export type ServicesProps = {
  services: ServiceProps[];
};

export function Services({ services }: ServicesProps) {
  return (
    <UI.Container className="services">
      <UI.ListUnordered className="services-list">
        {services.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </UI.ListUnordered>
    </UI.Container>
  );
}
