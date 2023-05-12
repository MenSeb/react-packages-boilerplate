import { act } from '@testing-library/react';
import {
  getActivePanel,
  getActiveTab,
  getPanel,
  getTab,
  renderWidgetTabs,
} from '.';

describe('Interactivity', () => {
  describe('Mouse', () => {
    describe('When user click a tab', () => {
      it('focuses the tab and activates its associated tab panel', async () => {
        const { user } = renderWidgetTabs();

        expect(getTab()).not.toHaveFocus();
        expect(getPanel()).not.toBeVisible();

        await act(() => user.click(getTab()));

        expect(getTab()).toHaveFocus();
        expect(getPanel()).toBeVisible();
      });
    });
  });

  describe('Keyboard', () => {
    describe('When user press Tab outside the tablist', () => {
      it('moves focus into the tablist on the active tab', async () => {
        const { user } = renderWidgetTabs();

        await user.tab();

        expect(getActiveTab()).toHaveFocus();
      });
    });

    describe('When user press Tab inside the tablist', () => {
      it('moves focus on the active tabpanel', async () => {
        const { user } = renderWidgetTabs();

        await user.tab();
        await user.tab();

        expect(getActivePanel()).toHaveFocus();
      });
    });
  });
});
