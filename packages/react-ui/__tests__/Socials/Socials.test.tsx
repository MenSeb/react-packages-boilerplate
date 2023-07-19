import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Socials, SocialsProps } from '../../src';
import { createRender, otherProps } from '..';
import { getIcon, getLinks, getSocials } from '.';

const props = {
  socials: [
    { link: 'youtube', icon: AiFillYoutube },
    { link: 'linkedin', icon: AiFillLinkedin },
  ],
};

const renderSocials = createRender<SocialsProps>(Socials, { props });

describe('<Socials />', () => {
  it('renders with role navigation', () => {
    renderSocials();

    expect(getSocials()).toBeInTheDocument();
  });

  it('renders with socials links', () => {
    renderSocials();

    getLinks().forEach((link, index) => {
      const social = props.socials[index];

      expect(link).toHaveAttribute('href', social.link);
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toContainElement(getIcon(link));
    });
  });

  it('renders with additional props', () => {
    renderSocials({ props: otherProps });

    expect(getSocials()).toHaveAttribute('id', otherProps.id);
    expect(getSocials()).toHaveClass(otherProps.className);
    expect(getSocials()).toHaveStyle(otherProps.style);
  });
});
