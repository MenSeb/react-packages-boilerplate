import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Construction } from '../sections';

export default function Conditions() {
  return (
    <UI.Page className="page-conditions" label="terms and conditions page">
      <UI.Separator />
      <Construction />
      <UI.Separator />
    </UI.Page>
  );
}
