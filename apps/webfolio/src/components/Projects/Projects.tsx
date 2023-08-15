import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Project, ProjectProps } from '.';

export interface ProjectsProps {
  projects: ProjectProps[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <UI.Container className="projects">
      <UI.ListUnordered className="projects-list">
        {projects.map((service, index) => (
          <Project {...service} key={index} />
        ))}
      </UI.ListUnordered>
    </UI.Container>
  );
}
