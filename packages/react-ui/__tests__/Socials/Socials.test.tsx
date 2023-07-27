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
  it('renders correctly', () => {
    renderSocials({ props: otherProps });

    expect(getSocials()).toBeInTheDocument();
    expect(getSocials()).toHaveClass('socials');

    expect(getSocials()).toHaveAttribute('id', otherProps.id);
    expect(getSocials()).toHaveClass(otherProps.className);
    expect(getSocials()).toHaveStyle(otherProps.style);

    expect(getList()).toHaveClass('socials-list');

    getItems().forEach((item, index) => {
      const link = getLink(item);
      const social = props.socials[index];

      expect(link).toHaveAttribute('href', social.link);
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveClass('socials-link');
      expect(link).toContainElement(getIcon(link));
      expect(getIcon(link)).toHaveClass('socials-icon');
    });
  });
});
