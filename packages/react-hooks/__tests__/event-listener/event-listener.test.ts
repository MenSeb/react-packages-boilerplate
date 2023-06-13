import { renderHook } from '@testing-library/react';
import { useEventListener } from '../../src/event-listener';
import { listener, options, target, type } from '.';

describe('useEventListener', () => {
  it('handles addEventListener and removeEventListener', () => {
    const addEventListener = jest.spyOn(target, 'addEventListener');
    const removeEventListener = jest.spyOn(target, 'removeEventListener');

    const { unmount } = renderHook(() =>
      useEventListener(target, type, listener, options),
    );

    expect(addEventListener).toHaveBeenCalledWith(type, listener, options);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith(type, listener, options);
  });
});
