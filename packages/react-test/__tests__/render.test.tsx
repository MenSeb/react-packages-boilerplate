import * as React from 'react';
import { screen } from '@testing-library/react';
import { createRender } from '../src';

interface TestProps {
  className: string;
  id: string;
  onClick: () => void;
}

function Test(props: TestProps) {
  return <input {...props} />;
}

function getInput() {
  return screen.getByRole('textbox');
}

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper(props: WrapperProps) {
  return <div {...props} data-testid="wrapper" />;
}

function getWrapper() {
  return screen.getByTestId('wrapper');
}

const props = {
  className: 'className',
  id: 'id',
  onClick: jest.fn(),
};

const options = {
  wrapper: Wrapper,
};

const setup = {
  skipClick: true,
};

const render = createRender<TestProps>(Test, props);
const renderOptions = createRender<TestProps>(Test, props, { options });
const renderSetup = createRender<TestProps>(Test, props, { setup });

afterEach(() => {
  props.onClick.mockReset();
});

describe('createRender', () => {
  it('renders with default props', () => {
    render();

    expect(getInput()).toBeInTheDocument();
    expect(getInput()).toHaveClass(props.className);
    expect(getInput()).toHaveAttribute('id', props.id);
  });

  it('renders with custom props', () => {
    render({ className: 'test' });

    expect(getInput()).toHaveClass('test');
    expect(getInput()).not.toHaveClass(props.className);
    expect(getInput()).toHaveAttribute('id', props.id);
  });

  it('rerenders with default props', () => {
    const { rerender } = render();

    rerender();

    expect(getInput()).toBeInTheDocument();
    expect(getInput()).toHaveClass(props.className);
    expect(getInput()).toHaveAttribute('id', props.id);
  });

  it('rerenders with custom props', () => {
    const { rerender } = render();

    rerender({ className: 'test' });

    expect(getInput()).toHaveClass('test');
    expect(getInput()).toHaveAttribute('id', props.id);
    expect(getInput()).not.toHaveClass(props.className);
  });

  it('renders user event logic', async () => {
    const { user } = render();

    await user.click(getInput());

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with default options', () => {
    renderOptions();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getInput());
  });

  it('renders with custom options', () => {
    renderOptions(undefined, { wrapper: undefined });

    expect(getInput()).toBeInTheDocument();
    expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument();
  });

  it('renders with user event options', async () => {
    const { user } = renderSetup();

    await user.type(getInput(), 'hello world!');

    expect(props.onClick).not.toHaveBeenCalled();
  });
});
