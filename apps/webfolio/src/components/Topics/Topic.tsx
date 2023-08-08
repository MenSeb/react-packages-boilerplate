import * as React from 'react';
import * as UI from '@packages/react-ui';

export type TopicProps = {
  icon: React.ElementType;
  name: string;
};

export function Topic({ icon: Icon, name }: TopicProps) {
  return (
    <UI.Button className="topic">
      <Icon className="topic-icon" role="presentation" />
      {name}
    </UI.Button>
  );
}
