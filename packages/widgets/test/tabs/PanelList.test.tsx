import * as React from 'react';
import { render } from '@testing-library/react';
import { PanelList } from '../../src/tabs';

const props = {
  children: ['children-0', 'children-1'],
};

describe('<PanelList />', () => {
  it('renders with children', () => {
    const { container } = render(<PanelList {...props} />);

    container.childNodes.forEach((child, index) => {
      expect(child).toHaveTextContent(props.children[index]);
    });
  });
});
