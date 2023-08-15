import * as React from 'react';
import {
  classNames,
  ClassNames,
  LinkNewTab,
  ListUnordered,
  Navigation,
  NavigationProps,
} from '..';

export interface Social {
  /**
   * The social icon.
   */
  icon: React.ElementType;
  /**
   * The social link.
   */
  link: string;
}

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
    <Navigation {...props} className={classNames('socials', className)}>
      <ListUnordered className="socials-list">
        {socials.map(({ link, icon: Icon }) => (
          <LinkNewTab className="socials-link" href={link} key={link}>
            {<Icon className="socials-icon" />}
          </LinkNewTab>
        ))}
      </ListUnordered>
    </Navigation>
  );
}
