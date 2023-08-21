import { createRender, createWrapper } from '../src';
import { getWrapper, propsWrapper, Wrapper } from '.';

describe('createWrapper', () => {
  const render = createRender(createWrapper(Wrapper, propsWrapper), {
    children: 'children',
  });

  it('renders with props and wrapper', () => {
    render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toHaveTextContent('children');
    expect(getWrapper()).toHaveClass(propsWrapper.className);
  });
});
