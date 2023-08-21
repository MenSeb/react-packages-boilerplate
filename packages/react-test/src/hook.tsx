import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react';
import { createWrapper } from '.';

export type Hook<Result, Props> = (props: Props) => Result;

export type CustomRerenderHook<Props> = (props?: Partial<Props>) => void;

export type CustomRenderHookOptions<Props> = Omit<
  RenderHookOptions<Props>,
  'initialProps'
>;

export type CustomRenderHookResult<Result, Props> = {
  rerender: CustomRerenderHook<Props>;
} & Omit<RenderHookResult<Result, Props>, 'rerender'>;

export type CustomRenderHook<Result, Props> = (
  props?: Partial<Props>,
  options?: CustomRenderHookOptions<Props>,
) => CustomRenderHookResult<Result, Props>;

export type CreateRenderHook<Result, Props> = (
  hook: Hook<Result, Props>,
  props?: Props,
  options?: CustomRenderHookOptions<Props>,
) => CustomRenderHook<Result, Props>;

export function createRenderHook<Result, Props>(
  hook: Hook<Result, Props>,
  props?: Props,
  options?: CustomRenderHookOptions<Props>,
): CustomRenderHook<Result, Props> {
  return function customRenderHook(
    customProps?: Partial<Props>,
    customOptions?: CustomRenderHookOptions<Props>,
  ): CustomRenderHookResult<Result, Props> {
    const { rerender, ...rest } = renderHook(
      (initialProps: Props) => {
        return hook({ ...initialProps, ...customProps });
      },
      { ...options, ...customOptions, initialProps: props },
    );

    function customRerenderHook(rerenderProps?: Partial<Props>): void {
      rerender({ ...props, ...customProps, ...rerenderProps } as Props);
    }

    return { ...rest, rerender: customRerenderHook };
  };
}

export function createRenderHookWrapper<PropsWrapper>(
  wrapper: React.ElementType,
  propsWrapper?: PropsWrapper,
) {
  return function renderHookWrapper<ResultHook, PropsHook>(
    hook: Hook<ResultHook, PropsHook>,
    props?: PropsHook,
    options?: CustomRenderHookOptions<PropsHook>,
  ): CustomRenderHook<ResultHook, PropsHook> {
    return createRenderHook(hook, props, {
      ...options,
      wrapper: createWrapper(wrapper, propsWrapper),
    });
  };
}

export function setupRenderHook<ResultHook, PropsHook, PropsWrapper>(
  hook: Hook<ResultHook, PropsHook>,
  wrapper: React.ElementType,
  propsHook?: PropsHook,
  propsWrapper?: PropsWrapper,
  options?: CustomRenderHookOptions<PropsHook>,
) {
  return createRenderHookWrapper(wrapper, propsWrapper)(
    hook,
    propsHook,
    options,
  );
}
