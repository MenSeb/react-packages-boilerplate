import * as React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '../../src/tabs';

describe('<Tabs />', () => {
  it('renders correctly', () => {
    expect(render(<Tabs />).container).not.toBeEmptyDOMElement();
  });
});
