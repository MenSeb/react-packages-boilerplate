import * as React from 'react';
import {
  Blockquote,
  Cite,
  Container,
  Figure,
  Figcaption,
  Heading,
  Image,
  LinkNewTab,
  Text,
} from '@packages/react-ui';

export type Credit = {
  link: string;
  name: string;
};

export type AboutProps = {
  author: string;
  children?: React.ReactNode;
  credit?: Credit;
  image: string;
  text: string;
  title: string;
};

export function About({
  author,
  children,
  credit,
  image,
  text,
  title,
}: AboutProps) {
  return (
    <Container className="about">
      <Figure className="about-figure">
        <Image className="about-image" alt={`Image ${author}`} src={image} />
        {credit ? (
          <Figcaption className="about-figcaption">
            Credit:
            <Cite className="about-cite">
              {credit.link ? (
                <LinkNewTab className="about-link" href={credit.link}>
                  {credit.name}
                </LinkNewTab>
              ) : (
                credit.name
              )}
            </Cite>
          </Figcaption>
        ) : null}
      </Figure>
      <Container className="about-content">
        <Heading className="about-heading" level={2}>
          {title}
        </Heading>
        <Blockquote className="about-blockquote">
          <Text className="about-text">{text}</Text>
          <Cite className="about-cite">{author}</Cite>
        </Blockquote>
        {children}
      </Container>
    </Container>
  );
}
