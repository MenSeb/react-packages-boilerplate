import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Construction } from '../sections';

export default function Privacy() {
  return (
    <UI.Page className="page-privacy" label="privacy policy page">
      <UI.Separator />
      <Construction />
      <UI.Separator />
    </UI.Page>
  );
}
