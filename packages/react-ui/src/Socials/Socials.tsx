import * as React from 'react';
import {
  classNames,
  ClassNames,
  ListUnordered,
  Navigation,
  NavigationProps,
} from '..';

export type Social = {
  /**
   * The social icon.
   */
  icon: React.ElementType;
  /**
   * The social link.
   */
  link: string;
};

/**
 * The props types for component {@link Socials}
 */
export type SocialsProps = NavigationProps & {
  /**
   * The socials links.
   */
  socials: Social[];
} & ClassNames;

/**
 * Renders a social follow navigation.
 *
 * @category Component
 */
export function Socials({ className, socials, ...props }: SocialsProps) {
  return (
    <Navigation
      {...props}
      className={classNames('navigation-socials', className)}
    >
      <ListUnordered className="navigation-socials-list">
        {socials.map(({ link, icon: Icon }) => (
          <a
            className="navigation-socials-link"
            href={link}
            key={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {<Icon className="navigation-socials-icon" />}
          </a>
        ))}
      </ListUnordered>
    </Navigation>
  );
}
