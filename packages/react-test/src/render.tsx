import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { Options } from '@testing-library/user-event/options';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { createWrapper } from '.';

export interface Settings {
  options?: RenderOptions;
  setup?: Options;
}

export type CustomSettings = Omit<Settings, 'setup'>;

export type CustomResult = Omit<RenderResult, 'rerender'>;

export type CustomRerender<Props> = (props?: Partial<Props>) => void;

export interface CustomRenderResult<Props> {
  result: CustomResult;
  rerender: CustomRerender<Props>;
  user: UserEvent;
}

export type CustomRender<Props> = (
  props?: Partial<Props>,
  options?: RenderOptions,
) => CustomRenderResult<Props>;

export type CreateRender<Props> = (
  UI: React.ElementType,
  props: Props,
  settings?: Settings,
) => CustomRender<Props>;

export function createRender<Props>(
  UI: React.ElementType,
  props?: Props,
  settings?: Settings,
): CustomRender<Props> {
  const user = userEvent.setup(settings?.setup);

  return function customRender(
    customProps?: Partial<Props>,
    options?: RenderOptions,
  ): CustomRenderResult<Props> {
    const renderOptions = { ...settings?.options, ...options };
    const renderProps = { ...props, ...customProps };

    const { rerender, ...result } = render(
      <UI {...renderProps} />,
      renderOptions,
    );

    function customRerender(rerenderProps?: Partial<Props>): void {
      rerender(<UI {...renderProps} {...rerenderProps} />);
    }

    return { result, rerender: customRerender, user };
  };
}

export function createRenderWrapper<PropsWrapper>(
  wrapper: React.ElementType,
  propsWrapper?: PropsWrapper,
) {
  return function renderWrapper<Props>(
    element: React.ElementType,
    propsElement?: Props,
    settings?: Settings,
  ): CustomRender<Props> {
    return createRender(element, propsElement, {
      options: {
        ...settings?.options,
        wrapper: createWrapper(wrapper, propsWrapper),
      },
      setup: settings?.setup,
    });
  };
}

export function setupRender<PropsElement, PropsWrapper>(
  element: React.ElementType,
  wrapper: React.ElementType,
  propsElement?: PropsElement,
  propsWrapper?: PropsWrapper,
  settings?: Settings,
) {
  return createRenderWrapper(wrapper, propsWrapper)(
    element,
    propsElement,
    settings,
  );
}
