import { Divider, DividerProps } from '../../src';
import { createRender, getDivider, otherProps } from './';

const renderDivider = createRender<DividerProps>(Divider);

describe('<Divider />', () => {
  it('renders with role separator', () => {
    renderDivider();

    expect(getDivider()).toBeInTheDocument();
  });

  it('renders with children', () => {
    renderDivider({ children: 'children' });

    expect(getDivider()).toHaveTextContent('children');
  });

  it('renders with attribute aria-orientation when provided', () => {
    const { rerender } = renderDivider();

    expect(getDivider()).not.toHaveAttribute('aria-orientation');

    rerender({ orientation: 'horizontal' });

    expect(getDivider()).toHaveAttribute('aria-orientation', 'horizontal');

    rerender({ orientation: 'vertical' });

    expect(getDivider()).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders with additional props', () => {
    renderDivider(otherProps);

    expect(getDivider()).toHaveAttribute('id', otherProps.id);
    expect(getDivider()).toHaveClass(otherProps.className);
    expect(getDivider()).toHaveStyle(otherProps.style);
  });
});
