import { Separator, SeparatorProps } from '../../src';
import { createRender, otherProps } from '../';
import { getSeparator } from '.';

const props = {
  children: 'children',
};

const renderSeparator = createRender<SeparatorProps>(Separator, { props });

describe('<Separator />', () => {
  it('renders correctly', () => {
    const { rerender } = renderSeparator({ props: otherProps });

    expect(getSeparator()).toBeInTheDocument();
    expect(getSeparator()).toHaveTextContent('children');
    expect(getSeparator()).toHaveClass('separator');

    expect(getSeparator()).toHaveAttribute('id', otherProps.id);
    expect(getSeparator()).toHaveClass(otherProps.className);
    expect(getSeparator()).toHaveStyle(otherProps.style);

    expect(getSeparator()).not.toHaveAttribute('aria-orientation');

    rerender({ orientation: 'horizontal' });

    expect(getSeparator()).toHaveAttribute('aria-orientation', 'horizontal');

    rerender({ orientation: 'vertical' });

    expect(getSeparator()).toHaveAttribute('aria-orientation', 'vertical');
  });
});
