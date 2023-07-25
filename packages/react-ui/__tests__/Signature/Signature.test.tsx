import { Signature, SignatureProps } from '../../src';
import { createRender, otherProps } from '..';
import { getAuthor, getLink, getSignature, getStatement, queryLink } from '.';

const props = {
  author: 'author',
  children: 'children',
  link: 'link',
  statement: 'statement',
};

const renderSignature = createRender<SignatureProps>(Signature, { props });

describe('<Signature />', () => {
  it('renders correctly', () => {
    const { rerender } = renderSignature({ props: otherProps });

    expect(getSignature()).toBeInTheDocument();
    expect(getSignature()).toHaveClass('signature');
    expect(getSignature()).toHaveTextContent(props.children);

    expect(getSignature()).toHaveAttribute('id', otherProps.id);
    expect(getSignature()).toHaveClass(otherProps.className);
    expect(getSignature()).toHaveStyle(otherProps.style);

    expect(getLink()).toHaveTextContent(props.author);
    expect(getLink()).toHaveAttribute('href', props.link);
    expect(getLink()).toHaveClass('signature-link');

    expect(getStatement(props.statement)).toHaveClass('signature-statement');

    rerender({ link: undefined });

    expect(getAuthor(props.author)).toBeInTheDocument();
    expect(getAuthor(props.author)).toHaveClass('signature-author');
    expect(queryLink()).not.toBeInTheDocument();
  });

  // it('renders with data-testid', () => {
  //   renderSignature();

  //   expect(getSignature()).toBeInTheDocument();
  // });

  // it('renders with the signature author', () => {
  //   renderSignature({ props: { link: undefined } });

  //   expect(getSignature()).toHaveTextContent(props.author);
  //   expect(queryLink()).not.toBeInTheDocument();
  // });

  // it('renders with the signature author link', () => {
  //   renderSignature();

  //   expect(getSignature()).toContainElement(getLink());
  //   expect(getLink()).toHaveTextContent(props.author);
  //   expect(getLink()).toHaveAttribute('href', props.link);
  // });

  // it('renders with the signature statement', () => {
  //   renderSignature();

  //   expect(getSignature()).toHaveTextContent(props.statement);
  // });

  // it('renders with children', () => {
  //   renderSignature();

  //   expect(getSignature()).toHaveTextContent(props.children);
  // });

  // it('renders with additional props', () => {
  //   renderSignature({ props: otherProps });

  //   expect(getSignature()).toHaveAttribute('id', otherProps.id);
  //   expect(getSignature()).toHaveClass(otherProps.className);
  //   expect(getSignature()).toHaveStyle(otherProps.style);
  // });
});
