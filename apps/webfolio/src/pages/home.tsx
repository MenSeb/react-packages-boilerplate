import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section aria-label="home page" className="page-home">
      <header>
        <div className="container">
          <h1 className="title">
            <span className="title-span">Application, Website &</span>
            <span className="title-span">WordPress Developper</span>
          </h1>
          <p className="subtitle">
            Let&apos;s bring your ideas to life in the digital realm!
          </p>
          <Link to="contact">get in touch</Link>
          <Link to="services">see services</Link>
        </div>
        <img alt="web development" src="assets/banner-home.svg" />
      </header>
    </section>
  );
}
