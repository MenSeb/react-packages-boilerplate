import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Navigation, NavigationProps } from '.';
import { ListUnordered } from '..';

/**
 * The props types for component {@link NavigationMenu}
 */
export type NavigationMenuProps = NavigationProps & {
  links: NavLinkProps[];
};

/**
 * Renders a navigation menu.
 *
 * @category Component
 */
export function NavigationMenu({ links, ...props }: NavigationMenuProps) {
  return (
    <Navigation {...props}>
      <ListUnordered>
        {links.map((link, index) => (
          <NavLink {...link} key={index} />
        ))}
      </ListUnordered>
    </Navigation>
  );
}
