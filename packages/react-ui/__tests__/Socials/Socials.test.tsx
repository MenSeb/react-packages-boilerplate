import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Socials, SocialsProps } from '../../src';
import { createRender, otherProps } from '..';
import { getIcon, getItems, getLink, getList, getSocials } from '.';

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

  it('renders with a list of socials links', () => {
    renderSocials();

    expect(getSocials()).toContainElement(getList());

    getItems().forEach((item, index) => {
      const link = getLink(item);
      const social = props.socials[index];

      expect(getList()).toContainElement(item);
      expect(item).toContainElement(link);
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
