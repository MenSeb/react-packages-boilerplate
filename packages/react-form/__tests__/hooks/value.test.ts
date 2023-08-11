import { act, renderHook } from '@testing-library/react';
import { useValue } from '../../src/hooks';

describe('useValue', () => {
  it('returns an object with value and helpers', () => {
    const { result } = renderHook(() => useValue());

    expect(result.current).toMatchObject({
      value: expect.any(String) as string,
      changeValue: expect.any(Function) as () => void,
    });
  });

  it('returns an empty string value by default', () => {
    const { result } = renderHook(() => useValue());

    expect(result.current.value).toBe('');
  });

  it('returns the default value if provided', () => {
    const defaultValue = 'test';

    const { result } = renderHook(() => useValue(defaultValue));

    expect(result.current.value).toBe(defaultValue);
  });

  it('updates the value correctly', () => {
    const value = 'value';
    const event = {
      currentTarget: { value },
    } as React.ChangeEvent<HTMLInputElement>;

    const { result } = renderHook(() => useValue<HTMLInputElement>());

    expect(result.current.value).toBe('');

    act(() => result.current.changeValue(event));

    expect(result.current.value).toBe(value);
  });
});
