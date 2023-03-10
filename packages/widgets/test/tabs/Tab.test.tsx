import * as React from 'react';
import { render } from '@testing-library/react';
import { Tab } from '../../src/tabs';

describe('<Tab />', () => {
  it('renders correctly', () => {
    expect(render(<Tab />).container).not.toBeEmptyDOMElement();
  });
});
