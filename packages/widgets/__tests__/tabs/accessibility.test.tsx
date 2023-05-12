import {
  getAllPanels,
  getAllTabs,
  getPanel,
  getTab,
  getTabList,
  getTabs,
  options,
  optionsLabel,
  optionsLabelledby,
  renderWidgetTabs,
} from '.';

describe('Accessibility', () => {
  it('renders the container for tabs with role tablist', () => {
    renderWidgetTabs();

    expect(getTabs()).toContainElement(getTabList());
  });

  it('renders all tabs with role tab and within the tablist', () => {
    renderWidgetTabs();

    getAllTabs().forEach((tab) => {
      expect(getTabList()).toContainElement(tab);
    });
  });

  it('renders all content panels with role tabpanel', () => {
    renderWidgetTabs();

    getAllPanels().forEach((panel) => {
      expect(getTabs()).toContainElement(panel);
    });
  });

  it('renders the tablist with aria-labelledby if it has a visible label', () => {
    renderWidgetTabs(optionsLabelledby);

    expect(getTabList()).toHaveAttribute(
      'aria-labelledby',
      optionsLabelledby.labelledby,
    );
  });

  it('renders the tablist with aria-label if it has a label provided', () => {
    renderWidgetTabs(optionsLabel);

    expect(getTabList()).toHaveAttribute('aria-label', optionsLabel.label);
  });

  it('renders each tab with attribute aria-controls refering to its panel', () => {
    renderWidgetTabs();

    getAllTabs().forEach((tab, index) => {
      expect(tab).toHaveAttribute('aria-controls', getPanel(index).id);
    });
  });

  it('renders the only active tab with attribute aria-selected to true', () => {
    renderWidgetTabs();

    getAllTabs().forEach((tab, index) => {
      expect(tab).toHaveAttribute(
        'aria-selected',
        options.initialTabIndex === index ? 'true' : 'false',
      );
    });
  });

  it('renders each panel with attribute aria-labelledby refering to its tab', () => {
    renderWidgetTabs();

    getAllPanels().forEach((panel, index) => {
      expect(panel).toHaveAttribute('aria-labelledby', getTab(index).id);
    });
  });

  it('renders the tablist with attribute aria-orientation to horizonal by default', () => {
    renderWidgetTabs();

    expect(getTabList()).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders the tablist with attribute aria-orientation to vertical if provided', () => {
    renderWidgetTabs({ ...optionsLabel, orientation: 'vertical' });

    expect(getTabList()).toHaveAttribute('aria-orientation', 'vertical');
  });
});
