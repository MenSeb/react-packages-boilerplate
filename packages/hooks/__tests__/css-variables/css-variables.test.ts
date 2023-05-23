import { renderHook } from '@testing-library/react';
import { useVariablesCSS } from '../../src/css-variables';

const element = document.documentElement;
const variables = {
  key1: 'value1',
  'key-2': 'value-2',
};

beforeAll(() => {
  element.style.setProperty('color', 'red');
});

describe('useVariablesCSS', () => {
  it('injects css variables on the element', () => {
    renderHook(() => useVariablesCSS(variables, element));

    expect(element).toHaveStyle(
      'color: red; --key1: value1; --key-2: value-2;',
    );
  });
});
