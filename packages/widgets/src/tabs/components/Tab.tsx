import * as React from 'react';
import ContextReducer from '../setup';

export type TabProps = React.ComponentProps<'button'> & {
  controls?: string;
  id?: string;
  removable?: boolean;
  selected?: boolean;
};

export function Tab({
  children,
  controls,
  id,
  removable,
  selected,
  ...props
}: TabProps) {
  const { state, dispatch } = ContextReducer.useContextReducer();

  const refTab = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const { current: nodeTab } = refTab;

    if (nodeTab !== null && nodeTab === state.target) nodeTab.focus();
  }, [state.target]);

  return (
    <button
      {...props}
      aria-controls={controls}
      aria-selected={selected}
      data-removable={removable}
      id={id}
      onClick={dispatch.selectTab}
      ref={refTab}
      role="tab"
      tabIndex={selected ? 0 : -1}
    >
      {children}
    </button>
  );
}
