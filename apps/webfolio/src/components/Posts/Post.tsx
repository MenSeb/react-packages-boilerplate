import * as React from 'react';
import * as UI from '@packages/react-ui';
import { FaHeart } from 'react-icons/fa';
import { ImageSVG, ImageSVGType } from '..';

export interface PostProps {
  author: string;
  date: Date;
  id: string;
  image: ImageSVGType;
  time: number;
  text: string;
  title: string;
}

export function Post({
  author,
  date,
  id,
  image,
  text,
  time,
  title,
}: PostProps) {
  return (
    <UI.Container className="post">
      <UI.Heading className="post-title" level={4}>
        {title}
      </UI.Heading>
      <ImageSVG className="post-image" label={image.label} name={image.name} />
      <UI.Text className="post-text">{text}</UI.Text>
      <UI.Container className="post-infos">
        <UI.Container className="post-date">
          <span>Redaction date</span>
          <span>{date.toLocaleDateString()}</span>
        </UI.Container>
        <UI.Container className="post-time">
          <span>Time to read</span>
          <span>{`${time} min`}</span>
        </UI.Container>
        <UI.Container className="post-author">
          <span>Written by</span>
          <span>{author}</span>
        </UI.Container>
        <UI.Container className="post-like">
          <UI.Input className="post-like-input" type="checkbox" />
          <FaHeart className="post-like-icon" strokeWidth={20} />
        </UI.Container>
      </UI.Container>
      <UI.CallToAction
        className="post-cta"
        id={id}
        to="/blog"
        // to={`post/${id}`}
      >
        read full article
      </UI.CallToAction>
    </UI.Container>
  );
}
