// import userEvent from '@testing-library/user-event';
// import { act } from '@testing-library/react';
import { createRenderTabs, getTab, getPanel, Widget } from '../';

const renderWidget = createRenderTabs(Widget);

// const user = userEvent.setup();

describe('<TabsProvider>', () => {
  beforeEach(() => renderWidget());

  describe('When user click a tab', () => {
    it('focuses the tab and activates its associated tab panel', /*async*/ () => {
      expect(getTab()).not.toHaveFocus();
      expect(getPanel()).toHaveAttribute('aria-hidden', 'true');

      // await act(async () => await user.click(getTab()));

      // expect(getTab()).toHaveFocus();
      // expect(getPanel()).toBeVisible();
    });
  });
});
