import { Separator, SeparatorProps } from '../../src';
import { createRender, otherProps } from '../';
import { getSeparator } from '.';

const renderSeparator = createRender<SeparatorProps>(Separator);

describe('<Separator />', () => {
  it('renders with role separator', () => {
    renderSeparator();

    expect(getSeparator()).toBeInTheDocument();
  });

  it('renders with children', () => {
    renderSeparator({ children: 'children' });

    expect(getSeparator()).toHaveTextContent('children');
  });

  it('renders with attribute aria-orientation when provided', () => {
    const { rerender } = renderSeparator();

    expect(getSeparator()).not.toHaveAttribute('aria-orientation');

    rerender({ orientation: 'horizontal' });

    expect(getSeparator()).toHaveAttribute('aria-orientation', 'horizontal');

    rerender({ orientation: 'vertical' });

    expect(getSeparator()).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with additional props', () => {
    renderSeparator(otherProps);

    expect(getSeparator()).toHaveAttribute('id', otherProps.id);
    expect(getSeparator()).toHaveClass(otherProps.className);
    expect(getSeparator()).toHaveStyle(otherProps.style);
  });
});
