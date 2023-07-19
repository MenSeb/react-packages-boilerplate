import { Copyright, CopyrightProps } from '../../src';
import { createRender, otherProps } from '../';
import { getCopyright } from '.';

const props = {
  author: 'author',
  children: 'children',
  statement: 'statement',
  year: '2000',
};

const renderCopyright = createRender<CopyrightProps>(Copyright, { props });

describe('<Copyright />', () => {
  it('renders with data-testid', () => {
    renderCopyright();

    expect(getCopyright()).toBeInTheDocument();
  });

  it('renders with the copyright symbol', () => {
    renderCopyright();

    expect(getCopyright()).toHaveTextContent('©');
  });

  it('renders with the copyright year', () => {
    const { rerender } = renderCopyright();

    expect(getCopyright()).toHaveTextContent(props.year);

    rerender({ year: undefined });

    expect(getCopyright()).toHaveTextContent(
      new Date().getFullYear().toString(),
    );
  });

  it('renders with the copyright author', () => {
    renderCopyright();

    expect(getCopyright()).toHaveTextContent(props.author);
  });

  it('renders with the copyright statement', () => {
    const { rerender } = renderCopyright();

    expect(getCopyright()).toHaveTextContent(props.statement);

    rerender({ statement: undefined });

    expect(getCopyright()).not.toHaveTextContent(props.statement);
  });

  it('renders with children', () => {
    renderCopyright();

    expect(getCopyright()).toHaveTextContent(props.children);
  });

  it('renders with additional props', () => {
    renderCopyright({ props: otherProps });

    expect(getCopyright()).toHaveAttribute('id', otherProps.id);
    expect(getCopyright()).toHaveClass(otherProps.className);
    expect(getCopyright()).toHaveStyle(otherProps.style);
  });
});
