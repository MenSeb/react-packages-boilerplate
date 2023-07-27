import * as React from 'react';
import { Container, ListUnordered } from '@packages/react-ui';
import { Service, ServiceProps } from '.';

export type ServicesProps = {
  services: ServiceProps[];
};

export function Services({ services }: ServicesProps) {
  return (
    <Container className="services">
      <ListUnordered className="services-list">
        {services.map((service, index) => (
          <Service {...service} key={index} />
        ))}
      </ListUnordered>
    </Container>
  );
}
