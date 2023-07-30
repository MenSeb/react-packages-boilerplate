import * as React from 'react';
import {
  CallToAction,
  Container,
  Heading,
  Image,
  Page,
  Region,
  Separator,
  Text,
} from '@packages/react-ui';
// import { BlogPosts } from '../components';
// import { BLOG_POSTS } from '../utilities/posts';

export default function PageBlog() {
  return (
    <Page label="blog page" className="page-blog">
      <header>
        <Container>
          <Heading>Blog</Heading>
          <Text>Learn web development with great articles.</Text>
          <CallToAction emphasize to="contact">
            get in touch
          </CallToAction>
        </Container>
        <Image
          alt="typewriter blog article"
          src="assets/svgo/undraw_typewriter.svg"
        />
      </header>

      <Separator />

      <Region className="region-blog" label="blog">
        <Heading level={2}>Articles I&apos;ve written</Heading>
        {/* <BlogPosts posts={BLOG_POSTS} /> */}
      </Region>
    </Page>
  );
}
