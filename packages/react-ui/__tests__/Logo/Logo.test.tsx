import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Logo, LogoProps } from '../../src';
import { createRender, otherProps } from '..';
import { getImage, getLogo, queryImage } from '.';

const props = {
  brand: 'brand',
  children: 'children',
  image: 'image',
};

const renderLogo = createRender<LogoProps>(Logo, {
  props,
  options: { wrapper: BrowserRouter },
});

describe('<Logo />', () => {
  it('renders with role link', () => {
    renderLogo();

    expect(getLogo()).toBeInTheDocument();
  });

  it('renders with the logo brand', () => {
    renderLogo();

    expect(getLogo()).toHaveTextContent(props.brand);
  });

  it('renders with the logo image when provided', () => {
    const { rerender } = renderLogo();

    expect(getLogo()).toContainElement(getImage());
    expect(getImage()).toHaveAttribute('src', props.image);
    expect(getImage()).toHaveAttribute('alt', `Logo ${props.brand}`);

    rerender({ image: undefined });

    expect(queryImage()).not.toBeInTheDocument();
  });

  it('renders with children', () => {
    renderLogo();

    expect(getLogo()).toHaveTextContent(props.children);
  });

  it('renders with additional props', () => {
    renderLogo({ props: otherProps });

    expect(getLogo()).toHaveAttribute('id', otherProps.id);
    expect(getLogo()).toHaveClass(otherProps.className);
    expect(getLogo()).toHaveStyle(otherProps.style);
  });

  it('redirects to the home page', async () => {
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
