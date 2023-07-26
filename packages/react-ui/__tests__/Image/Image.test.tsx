import { Image, ImageProps } from '../../src';
import { createRender, otherProps } from '..';
import { getImage } from '.';

const props = {
  alt: 'alt',
  src: 'src',
};

const renderImage = createRender<ImageProps>(Image, { props });

describe('<Image />', () => {
  it('renders correctly', () => {
    renderImage({ props: otherProps });

    expect(getImage()).toBeInTheDocument();
    expect(getImage()).toHaveClass('image');
    expect(getImage()).toHaveAttribute('alt', props.alt);
    expect(getImage()).toHaveAttribute('src', props.src);

    expect(getImage()).toHaveAttribute('id', otherProps.id);
    expect(getImage()).toHaveClass(otherProps.className);
    expect(getImage()).toHaveStyle(otherProps.style);
  });
});
