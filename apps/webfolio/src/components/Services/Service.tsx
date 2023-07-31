import * as React from 'react';
import * as UI from '@packages/react-ui';

export type ServiceProps = {
  description: string;
  icon: React.ElementType;
  name: string;
};

export function Service({ description, icon: Icon, name }: ServiceProps) {
  return (
    <UI.Container className="service">
      <Icon className="service-icon" role="presentation" />
      <UI.Heading className="service-heading" level={3}>
        {name}
      </UI.Heading>
      <UI.Text className="service-text">{description}</UI.Text>
      <UI.CallToAction className="service-cta" to="contact">
        contact me
      </UI.CallToAction>
    </UI.Container>
  );
}
