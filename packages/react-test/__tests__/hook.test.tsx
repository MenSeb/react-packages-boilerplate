import { createRenderHook } from '../src';

interface Props {
  other?: string;
  test: string;
}

interface Result {
  test: string;
}

function useHook({ other, test }: Props): Result {
  return { test: other ?? test };
}

const spyDefault = jest.fn();
function WrapperDefault() {
  spyDefault();

  return null;
}

const spyCustom = jest.fn();
function WrapperCustom() {
  spyCustom();

  return null;
}

const props: Props = { test: 'test' };

const renderHook = createRenderHook(useHook, props);

const renderHookOptions = createRenderHook(useHook, props, {
  wrapper: WrapperDefault,
});

describe('createRenderHook', () => {
  it('renders with default props', () => {
    const { result } = renderHook();

    expect(result.current).toEqual({ test: props.test });
  });

  it('renders with custom props', () => {
    const { result } = renderHook({ other: 'other' });

    expect(result.current).toEqual({ test: 'other' });
  });

  it('rerenders with default props', () => {
    const { rerender, result } = renderHook();

    rerender();

    expect(result.current).toEqual({ test: props.test });
  });

  it('rerenders with custom props', () => {
    const { rerender, result } = renderHook();

    rerender({ other: 'other' });

    expect(result.current).toEqual({ test: 'other' });
  });

  it('renders with default options', () => {
    renderHookOptions();

    expect(spyDefault).toHaveBeenCalledTimes(1);
  });

  it('renders with custom options', () => {
    renderHookOptions(undefined, { wrapper: WrapperCustom });

    expect(spyCustom).toHaveBeenCalledTimes(1);
  });
});
