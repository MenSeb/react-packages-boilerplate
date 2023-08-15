import * as React from 'react';
import * as UI from '@packages/react-ui';
import { ImageSVG, ImageSVGType } from '..';

export interface Credit {
  link: string;
  name: string;
}

export interface AboutProps {
  author: string;
  children?: React.ReactNode;
  credit?: Credit;
  image: ImageSVGType;
  text: string;
  title: string;
}

export function About({
  author,
  children,
  credit,
  image,
  text,
  title,
}: AboutProps) {
  return (
    <UI.Container className="about">
      <UI.Figure className="about-figure">
        <ImageSVG
          className="about-image"
          label={image.label}
          name={image.name}
        />
        {credit ? (
          <UI.Figcaption className="about-figcaption">
            Credit:
            <UI.Cite className="about-cite">
              {credit.link ? (
                <UI.LinkNewTab className="about-link" href={credit.link}>
                  {credit.name}
                </UI.LinkNewTab>
              ) : (
                credit.name
              )}
            </UI.Cite>
          </UI.Figcaption>
        ) : null}
      </UI.Figure>
      <UI.Container className="about-content">
        <UI.Heading className="about-heading" level={2}>
          {title}
        </UI.Heading>
        <UI.Blockquote className="about-blockquote">
          <UI.Text className="about-text">{text}</UI.Text>
          <UI.Cite className="about-cite">{author}</UI.Cite>
        </UI.Blockquote>
        {children}
      </UI.Container>
    </UI.Container>
  );
}
