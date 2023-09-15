import { NavLinkProps } from 'react-router-dom';
import {
  AiFillCodepenCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';

export const ROUTES_INFOS = createRoutesLinks([
  'privacy policy',
  'terms & conditions',
  'accessibility',
  'sitemap',
  'carriere',
]);

export const ROUTES_MAIN = createRoutesLinks([
  'home',
  'services',
  'projects',
  'blog',
  'about',
  'contact',
]);

export const ROUTES_SOCIALS = [
  { link: 'https://www.linkedin.com/in/menseb/', icon: AiFillLinkedin },
  { link: 'https://github.com/MenSeb', icon: AiFillGithub },
  {
    link: 'https://www.youtube.com/@MenSebCode',
    icon: AiFillYoutube,
  },
  { link: 'https://codepen.io/MenSeb', icon: AiFillCodepenCircle },
  { link: 'https://twitter.com/MenSebCode', icon: AiFillTwitterSquare },
];

export function createRoutesLinks(routes: string[]): NavLinkProps[] {
  return routes.map((route) => {
    const to = route.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    return { children: route, to: to === 'home' ? '.' : to };
  });
}
