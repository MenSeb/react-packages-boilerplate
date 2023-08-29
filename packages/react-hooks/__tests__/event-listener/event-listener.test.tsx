import { createRenderHook } from '@packages/react-test';
import { useEventListener, UseEventListener } from '../../src/event-listener';

const props: UseEventListener = {
  listener: jest.fn(),
  options: { capture: false },
  target: document.createElement('div'),
  type: 'resize',
};

const renderEventListener = createRenderHook(useEventListener, props);

describe('useEventListener', () => {
  it('handles addEventListener and removeEventListener', () => {
    const addEventListener = jest.spyOn(props.target, 'addEventListener');
    const removeEventListener = jest.spyOn(props.target, 'removeEventListener');

    const { unmount } = renderEventListener();

    expect(addEventListener).toHaveBeenCalledWith(
      props.type,
      props.listener,
      props.options,
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith(
      props.type,
      props.listener,
      props.options,
    );
  });
});
