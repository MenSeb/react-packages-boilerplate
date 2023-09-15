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
  const response: ContactEmailResponse = await fetch('webfolio/api/carriere', {
    body: formData,
    method: 'POST',
  });

  return await response.json();
}

export default function PageCarriere() {
  const [, setData] = React.useState<FetchContactEmail | null>(null);

  const submitForm = React.useCallback(async (formData: FormData) => {
    setData(await sendContactEmail(formData));
  }, []);

  return (
    <UI.Page label="about page" className="page-about">
      <UI.Separator />

      <ReactForm.Form
        className="contact-form"
        aria-label="request for a project"
        onSubmit={submitForm}
      >
        <UI.Label>
          Nom
          <ReactForm.Input
            id="Nom-mini-form"
            name="Nom"
            placeholder="Nom..."
            required
            type="text"
          />
        </UI.Label>

        <UI.Label>
          Courriel
          <ReactForm.Input
            id="Courriel-mini-form"
            name="Courriel"
            placeholder="Courriel..."
            required
            type="email"
          />
        </UI.Label>

        <UI.Label>
          Téléphone
          <ReactForm.Input
            id="Telephone-mini-form"
            name="Telephone"
            placeholder="Téléphone..."
            required
            type="tel"
          />
        </UI.Label>

        <UI.Label>
          Adresse de l&apos;évaluation
          <ReactForm.Input
            id="Adresse-mini-form"
            name="Adresse"
            placeholder="Adresse de l'évaluation..."
            required
            type="tel"
          />
        </UI.Label>

        <UI.Label>
          Commentaires
          <ReactForm.Input
            id="Note-mini-form"
            name="Note"
            placeholder="Commentaires..."
            required
            type="text"
          />
        </UI.Label>

        <UI.Label>
          File
          <ReactForm.Input
            id="File"
            name="File"
            placeholder="File..."
            required
            type="file"
            accept=".docx,.pdf"
          />
        </UI.Label>

        <ReactForm.Input type="submit" defaultValue="Envoyer" />
      </ReactForm.Form>

      <UI.Separator />
    </UI.Page>
  );
}
