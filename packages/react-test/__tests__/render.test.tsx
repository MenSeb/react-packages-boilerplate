import { screen } from '@testing-library/react';
import { createRender, createRenderWrapper } from '../src';
import { getTest, getWrapper, propsTest, propsWrapper, Test, Wrapper } from '.';

const options = {
  wrapper: Wrapper,
};

const setup = {
  skipClick: true,
};

const render = createRender(Test, propsTest);
const renderOptions = createRender(Test, propsTest, { options });
const renderSetup = createRender(Test, propsTest, { setup });

describe('createRender', () => {
  it('renders with default props', () => {
    render();

    expect(getTest()).toBeInTheDocument();
    expect(getTest()).toHaveClass(propsTest.className);
    expect(getTest()).toHaveAttribute('id', propsTest.id);
  });

  it('renders with custom props', () => {
    render({ className: 'test' });

    expect(getTest()).toHaveClass('test');
    expect(getTest()).not.toHaveClass(propsTest.className);
    expect(getTest()).toHaveAttribute('id', propsTest.id);
  });

  it('rerenders with default props', () => {
    const { rerender } = render();

    rerender();

    expect(getTest()).toBeInTheDocument();
    expect(getTest()).toHaveClass(propsTest.className);
    expect(getTest()).toHaveAttribute('id', propsTest.id);
  });

  it('rerenders with custom props', () => {
    const { rerender } = render();

    rerender({ className: 'test' });

    expect(getTest()).toHaveClass('test');
    expect(getTest()).toHaveAttribute('id', propsTest.id);
    expect(getTest()).not.toHaveClass(propsTest.className);
  });

  it('renders user event logic', async () => {
    const { user } = render();

    await user.click(getTest());

    expect(propsTest.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with default options', () => {
    renderOptions();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
  });

  it('renders with custom options', () => {
    renderOptions(undefined, { wrapper: undefined });

    expect(getTest()).toBeInTheDocument();
    expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument();
  });

  it('renders with user event options', async () => {
    const { user } = renderSetup();

    await user.type(getTest(), 'hello world!');

    expect(propsTest.onClick).not.toHaveBeenCalled();
  });
});

describe('createRenderWrapper', () => {
  const createRender = createRenderWrapper(Wrapper, propsWrapper);

  const renderWrapper = createRender(Test, propsTest);

  it('renders with props and wrapper', () => {
    renderWrapper();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
    expect(getWrapper()).toHaveClass(propsWrapper.className);
  });
});
