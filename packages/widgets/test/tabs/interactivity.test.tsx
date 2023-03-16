import { getActivePanel, getActiveTab, renderTabsUser } from '.';

describe('Interactivity', () => {
  describe('When user press Tab outside the tablist', () => {
    it('moves focus into the tablist on the active tab', async () => {
      const { user } = renderTabsUser();

      await user.tab();

      expect(getActiveTab()).toHaveFocus();
    });
  });

  describe('When user press Tab inside the tablist', () => {
    it('moves focus on the active tabpanel', async () => {
      const { user } = renderTabsUser();

      await user.tab();
      await user.tab();

      expect(getActivePanel()).toHaveFocus();
    });
  });
});
