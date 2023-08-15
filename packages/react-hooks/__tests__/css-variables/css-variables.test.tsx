import { useRef } from 'react';
import { renderHook } from '@testing-library/react';
import { useVariablesCSS } from '../../src/css-variables';

const element = document.createElement('div');
const style = 'color: red; --key1: value1; --key-2: value-2;';
const variables = { key1: 'value1', 'key-2': 'value-2' };

beforeAll(() => {
  element.style.setProperty('color', 'red');
});

describe('useVariablesCSS', () => {
  it('injects css variables on the element', () => {
    renderHook(() => {
      useVariablesCSS(variables, element);
    });

    expect(element).toHaveStyle(style);
  });

  it('injects css variables on a ref object', () => {
    const { result } = renderHook(() => useRef(element));

    renderHook(() => {
      useVariablesCSS(variables, result.current);
    });

    expect(element).toHaveStyle(style);
  });
});
