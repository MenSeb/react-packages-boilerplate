import { createRender, createWrapper } from '../src';
import { getWrapper, propsWrapper, Wrapper } from '.';

describe('createWrapper', () => {
  const render = createRender(
    createWrapper(Wrapper, propsWrapper),
    propsWrapper,
  );

  it('renders with props and wrapper', () => {
    render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toHaveClass(propsWrapper.className);
    expect(getWrapper()).toHaveTextContent(propsWrapper.children);
  });
});
