import * as React from 'react';
import * as UI from '@packages/react-ui';
// import { BlogPosts } from '../components';
// import { BLOG_POSTS } from '../utilities/posts';

export default function PageBlog() {
  return (
    <UI.Page label="blog page" className="page-blog">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>Blog</UI.Heading>
          <UI.Text>Learn web development with great articles.</UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/about">about myself</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <UI.Image
          alt="typewriter blog article"
          src="assets/svgo/undraw_typewriter.svg"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-blog" label="blog">
        <UI.Heading level={2}>Articles I&apos;ve written</UI.Heading>
        {/* <BlogPosts posts={BLOG_POSTS} /> */}
      </UI.Region>
    </UI.Page>
  );
}
