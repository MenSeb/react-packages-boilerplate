import { createRender, createRenderWrapper, setupRender } from '../src';
import {
  getTest,
  getWrapper,
  options,
  propsTest,
  propsWrapper,
  queryWrapper,
  settings,
  setup,
  Test,
  Wrapper,
} from '.';

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
    expect(queryWrapper()).not.toBeInTheDocument();
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

describe('setupRender', () => {
  it('renders with element and wrapper', () => {
    const render = setupRender(Test, Wrapper);

    render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
  });

  it('renders with props and settings', async () => {
    const render = setupRender(
      Test,
      Wrapper,
      propsTest,
      propsWrapper,
      settings,
    );

    const { user } = render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
    expect(getWrapper()).toHaveClass(propsWrapper.className);
    expect(getTest()).toHaveAttribute(propsTest.id);
    expect(getTest()).toHaveClass(propsTest.className);

    await user.type(getTest(), 'hello world!');

    expect(propsTest.onClick).not.toHaveBeenCalled();
  });
});
