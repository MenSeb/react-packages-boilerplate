import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { createRenderHook } from '@packages/react-test';
import { UseVariablesCSS, useVariablesCSS } from '../../src/css-variables';

const element = document.createElement('div');
const style = 'color: red; --key1: value1; --key-2: value-2;';

const props: UseVariablesCSS = {
  elementOrRef: element,
  variables: { key1: 'value1', 'key-2': 'value-2' },
};

const renderVariablesCSS = createRenderHook(useVariablesCSS, props);

beforeEach(() => {
  element.style.removeProperty('--key1');
  element.style.removeProperty('--key-2');
  element.style.setProperty('color', 'red');
});

describe('useVariablesCSS', () => {
  it('injects css variables on the element', () => {
    renderVariablesCSS();

    expect(element).toHaveStyle(style);
  });

  it('injects css variables on a ref object', () => {
    const { result } = renderHook(() => React.useRef(element));

    renderVariablesCSS({ elementOrRef: result.current });

    expect(element).toHaveStyle(style);
  });
});
