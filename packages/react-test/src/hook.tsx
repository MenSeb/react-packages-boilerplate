import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react';

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

export function createRenderHook<Result, Props>(
  hook: Hook<Result, Props>,
  props: Props,
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
      rerender({ ...props, ...rerenderProps });
    }

    return { ...rest, rerender: customRerenderHook };
  };
}
