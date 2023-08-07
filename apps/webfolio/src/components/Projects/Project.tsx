import * as React from 'react';
import * as UI from '@packages/react-ui';

export type Task = {
  icon: React.ElementType;
  name: string;
};

export type Techno = {
  icon: React.ElementType;
  name: string;
};

export type ProjectProps = {
  tasks: Task[];
  image: string;
  name: string;
  technos: Techno[];
  website?: string;
};

export function Project({
  tasks,
  image,
  name,
  technos,
  website,
}: ProjectProps) {
  return (
    <UI.Container className="project">
      {image ? (
        <UI.Image alt={`${name} logo`} className="project-image" src={image} />
      ) : null}
      <UI.Heading className="project-name" level={3}>
        {name}
      </UI.Heading>
      <UI.Container className="project-tasks">
        <UI.Heading className="project-tasks-title" level={4}>
          Completed tasks
        </UI.Heading>
        <UI.ListUnordered className="project-tasks-list">
          {tasks.map(({ icon: Icon, name }) => (
            <>
              <Icon
                className="project-task-icon"
                key={name}
                role="presentation"
              />
              <UI.Text className="project-task-text">{name}</UI.Text>
            </>
          ))}
        </UI.ListUnordered>
      </UI.Container>
      <UI.Container className="project-technos">
        <UI.Heading className="project-technos-title" level={4}>
          Technlogies used
        </UI.Heading>
        <UI.ListUnordered className="project-technos-list">
          {technos.map(({ icon: Icon, name }) => (
            <>
              <Icon
                className="project-technos-icon"
                key={name}
                role="presentation"
              />
              <UI.Text className="project-technos-text">{name}</UI.Text>
            </>
          ))}
        </UI.ListUnordered>
      </UI.Container>
      {website ? (
        <UI.LinkNewTab className="project-link cta" href={website}>
          visit website
        </UI.LinkNewTab>
      ) : null}
    </UI.Container>
  );
}
