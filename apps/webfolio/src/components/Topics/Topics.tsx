import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Topic, TopicProps } from '.';

export type TopicsProps = {
  topics: TopicProps[];
};

export function Topics({ topics }: TopicsProps) {
  return (
    <UI.Container className="topics">
      <UI.ListUnordered className="topics-list">
        {topics.map((topic, index) => (
          <Topic {...topic} key={index} />
        ))}
      </UI.ListUnordered>
    </UI.Container>
  );
}
