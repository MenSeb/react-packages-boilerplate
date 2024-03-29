import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Construction } from '../sections';

export default function Lost() {
  return (
    <UI.Page className="page-lost" label="lost page">
      <UI.Separator />
      <Construction />
      <UI.Separator />
    </UI.Page>
  );
}
