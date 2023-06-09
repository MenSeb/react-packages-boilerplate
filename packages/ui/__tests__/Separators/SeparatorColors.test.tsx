import { SeparatorColors, SeparatorColorsProps } from '../../src';
import {
  ratioFullScreen,
  ratioWideScreen,
} from '../../src/Separators/utilities';
import { createRender } from '../';
import {
  getPresentation,
  getSeparator,
  queryPath,
  queryRect,
  querySvg,
} from '.';

const defaultProps = {
  colorBackground: 'blue',
  colorForeground: 'red',
  numberOfWaves: 5,
};

const renderSeparator = createRender<SeparatorColorsProps>(
  SeparatorColors,
  defaultProps,
);

describe('<SeparatorColors />', () => {
  it('renders the divider', () => {
    renderSeparator();

    expect(getSeparator()).toBeInTheDocument();
  });

  describe('<svg />', () => {
    it('renders with role presentation', () => {
      renderSeparator();

      expect(querySvg()).toBe(getPresentation());
    });

    it('renders with viewBox to screen ratio', () => {
      const { rerender } = renderSeparator();

      expect(querySvg()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'full' });

      expect(querySvg()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'wide' });

      expect(querySvg()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioWideScreen.join(' ')}`,
      );
    });

    it('renders with stroke to none', () => {
      renderSeparator();

      expect(querySvg()).toHaveAttribute('stroke', 'none');
    });

    it('renders with height and width to 100%', () => {
      renderSeparator();

      expect(querySvg()).toHaveAttribute('height', '100%');
      expect(querySvg()).toHaveAttribute('width', '100%');
    });
  });

  describe('<rect />', () => {
    it('renders with fill to backgroundColor', () => {
      renderSeparator();

      expect(queryRect()).toHaveAttribute('fill', defaultProps.colorBackground);
    });

    it('renders with height and width to 100%', () => {
      renderSeparator();

      expect(queryRect()).toHaveAttribute('height', '100%');
      expect(queryRect()).toHaveAttribute('width', '100%');
    });
  });

  describe('<path />', () => {
    it('renders with fill to foregroundColor', () => {
      renderSeparator();

      expect(queryPath()).toHaveAttribute('fill', defaultProps.colorForeground);
    });

    it('renders with path commands', () => {
      renderSeparator({ ratioEnd: 0.5, ratioStart: 0.5 });

      expect(queryPath()).toHaveAttribute('d');
    });
  });
});
