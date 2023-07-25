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
  it('renders correctly', () => {
    const { rerender } = renderCopyright({ props: otherProps });

    expect(getCopyright()).toBeInTheDocument();
    expect(getCopyright()).toHaveClass('copyright');
    expect(getCopyright()).toHaveTextContent('©');
    expect(getCopyright()).toHaveTextContent(props.author);
    expect(getCopyright()).toHaveTextContent(props.year);
    expect(getCopyright()).toHaveTextContent(props.statement);
    expect(getCopyright()).toHaveTextContent(props.children);

    expect(getCopyright()).toHaveAttribute('id', otherProps.id);
    expect(getCopyright()).toHaveClass(otherProps.className);
    expect(getCopyright()).toHaveStyle(otherProps.style);

    rerender({ statement: undefined, year: undefined });

    expect(getCopyright()).not.toHaveTextContent(props.statement);
    expect(getCopyright()).toHaveTextContent(
      new Date().getFullYear().toString(),
    );
  });
});
