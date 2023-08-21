import * as React from 'react';
import { screen } from '@testing-library/react';
import { createRender, createWrapper } from '../src';

interface Props extends React.PropsWithChildren {
  className: string;
}

function Provider(props: Props) {
  return <div {...props} data-testid="wrapper" />;
}

function Test() {
  return <div data-testid="test" />;
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
  children: <Test />,
};

const render = createRender(
  createWrapper(Provider, propsProvider),
  propsWrapper,
);

describe('createWrapper', () => {
  it('renders with props and wrapper', () => {
    render();

    expect(getWrapper()).toBeInTheDocument();
    expect(getWrapper()).toContainElement(getTest());
    expect(getWrapper()).toHaveClass(propsProvider.className);
  });
});
