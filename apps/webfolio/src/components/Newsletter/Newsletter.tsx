import * as React from 'react';
import * as UI from '@packages/react-ui';

export function Newsletter() {
  return (
    <UI.Container className="newsletter">
      <UI.Heading className="newsletter-title" level={2}>
        Newsletter
      </UI.Heading>
      <UI.Text className="newsletter-text">
        Get notified of the new articles in my blog, the exclusive promotions on
        my services and the latest projects brought to life, all conveniently in
        your inbox.
      </UI.Text>
      <UI.Form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className="newsletter-form"
      >
        <UI.Input
          className="newsletter-input"
          type="email"
          placeholder="Your email..."
        />
        <UI.Input
          className="newsletter-input"
          type="text"
          placeholder="Your name..."
        />
        <UI.Input
          className="newsletter-input"
          type="submit"
          value="subscribe"
        />
        <UI.Text className="newsletter-info">
          You may unsubscribe at any time.
        </UI.Text>
      </UI.Form>
    </UI.Container>
  );
}
