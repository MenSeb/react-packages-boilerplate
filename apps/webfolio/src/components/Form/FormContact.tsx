import * as React from 'react';
import * as UI from '@packages/react-ui';
import * as ReactForm from '@packages/react-form';
import { SentMessageInfo } from 'nodemailer';

export interface FetchContactEmail {
  info: SentMessageInfo;
  error: Error | null;
}

export type ContactEmailResponse = Omit<Response, 'json'> & {
  json: () => Promise<FetchContactEmail>;
};

async function sendContactEmail(formData: FormData) {
  const response: ContactEmailResponse = await fetch('webfolio/api/contact', {
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  });

  return await response.json();
}

export function FormContact() {
  const [, setData] = React.useState<FetchContactEmail | null>(null);

  const submitForm = React.useCallback(async (formData: FormData) => {
    setData(await sendContactEmail(formData));
  }, []);

  return (
    <ReactForm.Form
      className="contact-form"
      aria-label="request for a project"
      onSubmit={submitForm}
    >
      <UI.Label>
        First Name
        <ReactForm.Input
          name="firstname"
          placeholder="Your first name..."
          required
          type="text"
        />
      </UI.Label>
      <UI.Label>
        Last Name
        <ReactForm.Input
          name="lastname"
          placeholder="Your last name..."
          required
          type="text"
        />
      </UI.Label>
      <UI.Label>
        Email
        <ReactForm.Input
          name="email"
          placeholder="Your email..."
          required
          type="email"
        />
      </UI.Label>
      <UI.Label>
        Website
        <ReactForm.Select
          name="website"
          options={[
            'blog',
            'business',
            'e-commerce',
            'portfolio',
            'brochure',
            'catalogue',
            'educational',
            'infopreneur',
            'non-profit',
            'personal',
            'other',
          ]}
          placeholder="Your website..."
          required
        />
      </UI.Label>
      <UI.Label>
        Project
        <ReactForm.TextArea name="project" placeholder="Your project..." />
      </UI.Label>
      <ReactForm.Input type="submit" defaultValue="Send message" />
    </ReactForm.Form>
  );
}
