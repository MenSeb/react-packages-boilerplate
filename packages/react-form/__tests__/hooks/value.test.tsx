import { createRenderHook } from '@packages/react-test';
import { act } from '@testing-library/react';
import { useValue } from '../../src/hooks';
import { defaultValue, value } from '..';

const renderValue = createRenderHook(useValue);

describe('useValue', () => {
  it('returns an object with value and helpers', () => {
    const { result } = renderValue();

    expect(result.current).toMatchObject({
      value: expect.any(String) as string,
      changeValue: expect.any(Function) as () => void,
    });
  });

  it('returns an empty string value by default', () => {
    const { result } = renderValue();

    expect(result.current.value).toBe('');
  });

  it('returns the default value if provided', () => {
    const { result } = renderValue({ defaultValue });

    expect(result.current.value).toBe(defaultValue);
  });

  it('updates the value correctly', () => {
    const event = {
      currentTarget: { value },
    } as React.ChangeEvent<HTMLInputElement>;

    const { result } = renderValue();

    expect(result.current.value).toBe('');

    act(() => {
      result.current.changeValue(event);
    });

    expect(result.current.value).toBe(value);
  });
});
