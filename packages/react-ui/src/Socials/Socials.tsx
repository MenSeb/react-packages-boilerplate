import * as React from 'react';
import { Navigation, NavigationProps } from '..';

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
};

/**
 * Renders a social follow navigation.
 *
 * @category Component
 */
export function Socials({ socials, ...props }: SocialsProps) {
  return (
    <Navigation {...props}>
      {socials.map(({ link, icon: Icon }) => (
        <a href={link} key={link} rel="noopener noreferrer" target="_blank">
          {<Icon />}
        </a>
      ))}
    </Navigation>
  );
}
