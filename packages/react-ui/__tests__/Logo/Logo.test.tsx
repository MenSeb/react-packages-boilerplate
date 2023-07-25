import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Logo, LogoProps } from '../../src';
import { createRender, otherProps } from '..';
import { getBrand, getImage, getLogo, queryImage } from '.';

const props = {
  ...otherProps,
  brand: 'brand',
  children: 'children',
  image: 'image',
};

const renderLogo = createRender<LogoProps>(Logo, {
  props,
  options: { wrapper: BrowserRouter },
});

describe('<Logo />', () => {
  it('renders correctly', () => {
    const { rerender } = renderLogo();

    expect(getLogo()).toBeInTheDocument();
    expect(getLogo()).toHaveClass('logo');
    expect(getLogo()).toHaveTextContent(props.children);
    expect(getLogo()).toHaveAttribute('id', otherProps.id);
    expect(getLogo()).toHaveClass(otherProps.className);
    expect(getLogo()).toHaveStyle(otherProps.style);

    expect(getImage()).toHaveClass('logo-image');
    expect(getImage()).toHaveAttribute('src', props.image);
    expect(getImage()).toHaveAttribute('alt', `Logo ${props.brand}`);

    expect(getBrand(props.brand)).toHaveClass('logo-brand');

    rerender({ image: undefined });

    expect(queryImage()).not.toBeInTheDocument();
  });

  it('redirects correctly', async () => {
    renderLogo();

    const user = userEvent.setup();

    history.pushState({}, '', 'about');

    expect(location.href).toBe('http://localhost/about');

    await act(async () => {
      await user.click(getLogo());
    });

    expect(location.href).toBe('http://localhost/');
  });
});
