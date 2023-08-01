import * as React from 'react';
import * as UI from '@packages/react-ui';

export default function Home() {
  return (
    <UI.Page label="home page" className="page-home">
      <UI.Header>
        <UI.Container className="content">
          <UI.Heading>
            <span className="heading-span">Web</span>
            <span className="heading-span">Developper</span>
          </UI.Heading>
          <UI.Text>
            Let&apos;s bring your ideas to life in the digital realm!
          </UI.Text>
          <UI.Container className="ctas">
            <UI.CallToAction emphasize to="/contact">
              get in touch
            </UI.CallToAction>
            <UI.CallToAction to="/services">see services</UI.CallToAction>
          </UI.Container>
        </UI.Container>
        <UI.Image
          alt="web development"
          src="assets/svgo/undraw_progressive_app.svg"
        />
      </UI.Header>

      <UI.Separator />

      <UI.Region className="region-services" label="services">
        <UI.Container>
          <UI.Heading level={2}>
            Are you looking for a specific web service?
          </UI.Heading>
          <UI.Text>
            Find the web services adapted to your needs and requirements.
          </UI.Text>
          <UI.CallToAction emphasize to="/services">
            see services
          </UI.CallToAction>
        </UI.Container>
        <UI.Image alt="services" src="assets/svgo/undraw_services.svg" />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-projects" label="projects">
        <UI.Container>
          <UI.Heading level={2}>
            Learn why people put trust in my work!
          </UI.Heading>
          <UI.Text>
            Feel free to consult my previous projects and achievements.
          </UI.Text>
          <UI.CallToAction emphasize to="/projects">
            consult projects
          </UI.CallToAction>
        </UI.Container>
        <UI.Image alt="projects" src="assets/svgo/undraw_feeling_proud.svg" />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-blog" label="blog">
        <UI.Container>
          <UI.Heading level={2}>
            Eager to learn about web development?
          </UI.Heading>
          <UI.Text>
            Feel free to browse my blog for various web development articles.
          </UI.Text>
          <UI.CallToAction emphasize to="/blog">
            browse blog
          </UI.CallToAction>
        </UI.Container>
        <UI.Image alt="blog" src="assets/svgo/undraw_online_learning.svg" />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-about" label="about">
        <UI.Container>
          <UI.Heading level={2}>Something about me</UI.Heading>
          <UI.Blockquote className="about-blockquote">
            <UI.Text className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              malesuada libero. Duis in metus erat. Vivamus accumsan mi ac nibh
              dapibus placerat. Maecenas facilisis ex eu magna finibus, at porta
              nulla vehicula.
            </UI.Text>
            <UI.Cite className="about-cite">Sébastien Menard</UI.Cite>
          </UI.Blockquote>
          <UI.CallToAction className="about-cta" emphasize to="/about">
            about myself
          </UI.CallToAction>
        </UI.Container>
        <UI.Image
          className="about-image"
          alt="programming with coffee & view"
          src="assets/svgo/undraw_programming.svg"
        />
      </UI.Region>

      <UI.Separator />

      <UI.Region className="region-newsletter newsletter" label="newsletter">
        <UI.Heading className="newsletter-heading" level={2}>
          Newsletter
        </UI.Heading>
        <UI.Text className="newsletter-text">
          Get notified of the new articles in my blog, the exclusive promotions
          on my services and the latest projects brought to life, all
          conveniently in your inbox.
        </UI.Text>
        <UI.Form
          onSubmit={(e: React.FormEvent) => e.preventDefault()}
          className="newsletter-form"
        >
          <UI.Input
            className="newsletter-form-input"
            type="email"
            placeholder="Your email..."
          />
          <UI.Input
            className="newsletter-form-input"
            type="text"
            placeholder="Your name..."
          />
          <UI.Input
            className="newsletter-form-input"
            type="submit"
            value="subscribe"
          />
          <UI.Text className="newsletter-form-text">
            You may unsubscribe at any time.
          </UI.Text>
        </UI.Form>
      </UI.Region>
    </UI.Page>
  );
}
