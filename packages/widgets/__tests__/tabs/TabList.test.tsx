import * as React from 'react';
import { render } from '@testing-library/react';
import { TabList } from '../../src/tabs';

describe('<TabList />', () => {
  it('renders correctly', () => {
    expect(render(<TabList />).container).not.toBeEmptyDOMElement();
  });
});
