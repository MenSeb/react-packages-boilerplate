import * as React from 'react';
import { screen } from '@testing-library/react';
import { createRender, createRenderWrapper, createWrapper } from '../src';

interface Props extends React.PropsWithChildren {
  className: string;
}

function Provider(props: Props) {
  return <div {...props} data-testid="wrapper" />;
}

function Test(props: Props) {
  return <div {...props} data-testid="test" />;
}

function getTest() {
  return screen.getByTestId('test');
}

function getWrapper() {
  return screen.getByTestId('wrapper');
}

const propsProvider = {
  className: 'className',
};

const propsWrapper = {
  children: <Test className="test" />,
};

describe('createWrapper', () => {
  const render = createRender(
    createWrapper(Provider, propsProvider),
    propsWrapper,
  );

  it('renders with props and wrapper', () => {
    render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
    expect(getWrapper()).toHaveClass(propsProvider.className);
  });
});

describe('createRenderWrapper', () => {
  const createRender = createRenderWrapper(Provider, propsProvider);

  const renderWrapper = createRender(Test, propsProvider);

  it('renders with props and wrapper', () => {
    renderWrapper();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
    expect(getWrapper()).toHaveClass(propsProvider.className);
    expect(getTest()).toHaveClass(propsProvider.className);
  });
});
