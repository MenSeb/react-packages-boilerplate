import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Post, PostProps } from '.';

export interface PostsProps {
  posts: PostProps[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <UI.Container className="posts">
      <UI.ListUnordered className="posts-list">
        {posts.map((topic, index) => (
          <Post {...topic} key={index} />
        ))}
      </UI.ListUnordered>
    </UI.Container>
  );
}
