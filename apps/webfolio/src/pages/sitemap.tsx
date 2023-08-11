import * as React from 'react';
import * as UI from '@packages/react-ui';
import { Construction } from '../sections';

export default function Sitemap() {
  return (
    <UI.Page className="page-sitemap" label="sitemap page">
      <UI.Separator />
      <Construction />
      <UI.Separator />
    </UI.Page>
  );
}
