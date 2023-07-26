import * as React from 'react';
import { CallToAction, Heading, Text } from '@packages/react-ui';

export default function Home() {
  return (
    <section aria-label="home page" className="page-home">
      <header>
        <div className="container">
          <Heading className="title">
            <span className="title-span">Application, Website &</span>
            <span className="title-span">WordPress Developper</span>
          </Heading>
          <Text className="subtitle">
            Let&apos;s bring your ideas to life in the digital realm!
          </Text>
          <CallToAction to="contact">get in touch</CallToAction>
          <CallToAction to="services">see services</CallToAction>
        </div>
        <div className="container">
          <img alt="web development" src="assets/banner-home.svg" />
        </div>
      </header>
    </section>
  );
}
