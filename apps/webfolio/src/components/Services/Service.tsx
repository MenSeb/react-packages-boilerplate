import * as React from 'react';
import { CallToAction, Container, Heading, Text } from '@packages/react-ui';

export type ServiceProps = {
  description: string;
  icon: React.ElementType;
  name: string;
};

export function Service({ description, icon: Icon, name }: ServiceProps) {
  return (
    <Container className="service">
      <Icon className="service-icon" role="presentation" />
      <Heading className="service-heading" level={3}>
        {name}
      </Heading>
      <Text className="service-text">{description}</Text>
      <CallToAction className="service-cta" to="services">
        learn more
      </CallToAction>
    </Container>
  );
}
