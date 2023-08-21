import { createRenderHook, createRenderHookWrapper } from '../src';
import {
  contextValue,
  propsHook,
  propsProvider,
  useHook,
  useTest,
  Provider,
  ProviderTest,
} from '.';

const renderHook = createRenderHook(useHook, propsHook);

const renderHookTest = createRenderHook(useTest, propsHook, {
  wrapper: Provider,
});

describe('createRenderHook', () => {
  it('renders with default props', () => {
    const { result } = renderHook();

    expect(result.current).toEqual(propsHook);
  });

  it('renders with custom props', () => {
    const { result } = renderHook({ test: 'test' });

    expect(result.current).toEqual({ ...propsHook, test: 'test' });
  });

  it('rerenders with default props', () => {
    const { rerender, result } = renderHook();

    rerender();

    expect(result.current).toEqual(propsHook);
  });

  it('rerenders with custom props', () => {
    const { rerender, result } = renderHook();

    rerender({ test: 'test' });

    expect(result.current).toEqual({ ...propsHook, test: 'test' });
  });

  it('renders with default options', () => {
    const { result } = renderHookTest();

    expect(result.current).toEqual(contextValue);
  });

  it('renders with custom options', () => {
    const { result } = renderHookTest(undefined, { wrapper: ProviderTest });

    expect(result.current).toEqual({ ...contextValue, test: 'test' });
  });
});

describe('createRenderHookWrapper', () => {
  const createRenderHook = createRenderHookWrapper(Provider, propsProvider);

  const renderHookWrapper = createRenderHook(useTest);

  it('renders with props and wrapper', () => {
    const { result } = renderHookWrapper();

    expect(result.current).toEqual({ ...contextValue, test: 'test' });
  });
});
