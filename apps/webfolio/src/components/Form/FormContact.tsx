import * as React from 'react';
import * as UI from '@packages/react-ui';
import { SentMessageInfo } from 'nodemailer';

export type FetchContactInfo = {
  info: SentMessageInfo;
  error?: never;
};

export type FetchContactError = {
  info?: never;
  error: Error | null;
};

export type FetchContactEmail = FetchContactInfo | FetchContactError;

export type ContactEmailResponse = Omit<Response, 'json'> & {
  json: () => Promise<FetchContactEmail>;
};

async function sendContactEmail(formData: FormData) {
  const response: ContactEmailResponse = await fetch('webfolio/api/contact', {
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  });

  return response.json();
}

export function FormContact() {
  const onSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      await sendContactEmail(formData);
    },
    [],
  );

  return (
    <UI.Form className="contact-form" onSubmit={onSubmit}>
      <UI.Label>
        First Name
        <UI.Input
          name="firstname"
          type="text"
          placeholder="Your first name..."
        />
      </UI.Label>
      <UI.Label>
        Last Name
        <UI.Input name="lastname" type="text" placeholder="Your last name..." />
      </UI.Label>
      <UI.Label>
        Email
        <UI.Input name="email" type="email" placeholder="Your email..." />
      </UI.Label>
      <UI.Label>
        Website
        <UI.Select name="website">
          <option value="">Your website...</option>
          <option>Blog</option>
          <option>Business</option>
          <option>E-Commerce</option>
          <option>Portfolio</option>
          <option>Brochure</option>
          <option>Catalogue</option>
          <option>Educational</option>
          <option>Informational</option>
          <option>Infopreneur</option>
          <option>Non-profit</option>
          <option>Personal</option>
          <option>Other</option>
        </UI.Select>
      </UI.Label>
      <UI.Label>
        Project
        <UI.TextArea name="project" placeholder="Your project..." />
      </UI.Label>
      <UI.Input type="submit" value="Send message" />
    </UI.Form>
  );
}
