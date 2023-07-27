import { screen } from '@testing-library/react';
import { Cite, CiteProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderCite = createRender<CiteProps>(Cite, { props });

function getCite() {
  return screen.getByText(props.children);
}

describe('<Cite />', () => {
  it('renders correctly', () => {
    renderCite({ props: otherProps });

    expect(getCite()).toBeInTheDocument();
    expect(getCite()).toHaveClass('cite');

    expect(getCite()).toHaveAttribute('id', otherProps.id);
    expect(getCite()).toHaveClass(otherProps.className);
    expect(getCite()).toHaveStyle(otherProps.style);
  });
});
