import { SeparatorColors, SeparatorColorsProps } from '../../src';
import {
  ratioFullScreen,
  ratioWideScreen,
} from '../../src/Separators/utilities';
import {
  createRender,
  getSeparator,
  getSeparatorChild,
  querySeparatorPath,
  querySeparatorRect,
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

      expect(getSeparatorChild()).toBeInTheDocument();
    });

    it('renders with viewBox to screen ratio', () => {
      const { rerender } = renderSeparator();

      expect(getSeparatorChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'full' });

      expect(getSeparatorChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioFullScreen.join(' ')}`,
      );

      rerender({ ratioScreen: 'wide' });

      expect(getSeparatorChild()).toHaveAttribute(
        'viewBox',
        `0 0 ${ratioWideScreen.join(' ')}`,
      );
    });

    it('renders with stroke to none', () => {
      renderSeparator();

      expect(getSeparatorChild()).toHaveAttribute('stroke', 'none');
    });

    it('renders with height and width to 100%', () => {
      renderSeparator();

      expect(getSeparatorChild()).toHaveAttribute('height', '100%');
      expect(getSeparatorChild()).toHaveAttribute('width', '100%');
    });
  });

  describe('<rect />', () => {
    it('renders with fill to backgroundColor', () => {
      renderSeparator();

      expect(querySeparatorRect()).toHaveAttribute(
        'fill',
        defaultProps.colorBackground,
      );
    });

    it('renders with height and width to 100%', () => {
      renderSeparator();

      expect(querySeparatorRect()).toHaveAttribute('height', '100%');
      expect(querySeparatorRect()).toHaveAttribute('width', '100%');
    });
  });

  describe('<path />', () => {
    it('renders with fill to foregroundColor', () => {
      renderSeparator();

      expect(querySeparatorPath()).toHaveAttribute(
        'fill',
        defaultProps.colorForeground,
      );
    });

    it('renders with path commands', () => {
      renderSeparator({ ratioEnd: 0.5, ratioStart: 0.5 });

      expect(querySeparatorPath()).toHaveAttribute('d');
    });
  });
});
