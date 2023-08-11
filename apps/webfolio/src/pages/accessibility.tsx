import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Construction } from '../sections';

export default function Accessibility() {
  return (
    <UI.Page className="page-accessibility" label="accessibility page">
      <UI.Separator />
      <Construction />
      <UI.Separator />
    </UI.Page>
  );
}
