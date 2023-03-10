import * as React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../../src/tabs';

describe('<Panel />', () => {
  it('renders correctly', () => {
    expect(render(<Panel />).container).not.toBeEmptyDOMElement();
  });
});
