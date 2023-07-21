import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Navigation, NavigationProps } from '..';
import { ListU } from '..';

/**
 * The props types for component {@link Menu}
 */
export type MenuProps = NavigationProps & {
  links: NavLinkProps[];
};

/**
 * Renders a navigation menu.
 *
 * @category Component
 */
export function Menu({ links, ...props }: MenuProps) {
  return (
    <Navigation {...props}>
      <ListU>
        {links.map((link, index) => (
          <NavLink {...link} key={index} />
        ))}
      </ListU>
    </Navigation>
  );
}
