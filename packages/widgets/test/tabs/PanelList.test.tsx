import * as React from 'react';
import { render } from '@testing-library/react';
import { PanelList } from '../../src/tabs';

describe('<PanelList />', () => {
  it('renders correctly', () => {
    expect(render(<PanelList />).container).not.toBeEmptyDOMElement();
  });
});
