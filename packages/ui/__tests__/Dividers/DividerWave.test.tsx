import { DividerWave, DividerWaveProps } from '../../src';
import { ratioFullScreen, ratioWideScreen } from '../../src/Dividers/utilities';
import {
  createRender,
  getDivider,
  getDividerChild,
  queryDividerPath,
  queryDividerRect,
} from './';

const defaultProps = {
  colorBackground: 'blue',
  colorForeground: 'red',
  numberOfWaves: 5,
};

const renderDivider = createRender<DividerWaveProps>(DividerWave, defaultProps);

describe('<DividerWave />', () => {
  it('renders the divider', () => {
    renderDivider();

    expect(getDivider()).toBeInTheDocument();
  });

  describe('<svg />', () => {
    it('renders with role presentation', () => {
      renderDivider();

      expect(getDividerChild()).toBeInTheDocument();
    });

    it('renders with viewBox to screen ratio', () => {
      const { rerender } = renderDivider();

      expect(getDividerChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'full' });

      expect(getDividerChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'wide' });

      expect(getDividerChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioWideScreen.join(' ')}`,
      );
    });

    it('renders with stroke to none', () => {
      renderDivider();

      expect(getDividerChild()).toHaveAttribute('stroke', 'none');
    });

    it('renders with height and width to 100%', () => {
      renderDivider();

      expect(getDividerChild()).toHaveAttribute('height', '100%');
      expect(getDividerChild()).toHaveAttribute('width', '100%');
    });
  });

  describe('<rect />', () => {
    it('renders with fill to backgroundColor', () => {
      renderDivider();

      expect(queryDividerRect()).toHaveAttribute(
        'fill',
        defaultProps.colorBackground,
      );
    });

    it('renders with height and width to 100%', () => {
      renderDivider();

      expect(queryDividerRect()).toHaveAttribute('height', '100%');
      expect(queryDividerRect()).toHaveAttribute('width', '100%');
    });
  });

  describe('<path />', () => {
    it('renders with fill to foregroundColor', () => {
      renderDivider();

      expect(queryDividerPath()).toHaveAttribute(
        'fill',
        defaultProps.colorForeground,
      );
    });

    it('renders with path commands', () => {
      renderDivider({ ratioEnd: 0.5, ratioStart: 0.5 });

      expect(queryDividerPath()).toHaveAttribute('d');
    });
  });
});
