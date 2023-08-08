import * as React from 'react';
import * as UI from '@packages/react-ui';
import { ImageSVG, Newsletter, Posts, Topics } from '../components';
import { POSTS, TOPICS } from '../utilities';

export default function PageBlog() {
  return (
    <UI.Page label="blog page" className="page-blog">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>Blog</UI.Heading>
          <UI.Text>Learn about web development with great articles.</UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/about">learn about me</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <ImageSVG
          label="writting a blog article with typewritter"
          name="ImageBlogHeader"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-blog" label="blog">
        <UI.Heading level={2}>Articles I&apos;ve written</UI.Heading>
        <UI.Text>Find the latest of my writing here.</UI.Text>
        <UI.Input type="search" placeholder="Search..." />
        <UI.Heading level={3}>Search articles by topics</UI.Heading>
        <Topics topics={TOPICS} />
        <Posts posts={POSTS} />
        <UI.Button className="link cta">Load more articles</UI.Button>
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-newsletter" label="newsletter">
        <Newsletter />
      </UI.Region>
    </UI.Page>
  );
}
