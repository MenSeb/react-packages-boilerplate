import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Navigation, NavigationProps } from '.';
import { classNames, ClassNames, ListUnordered } from '..';

/**
 * The props types for component {@link NavigationMenu}
 */
export type NavigationMenuProps = NavigationProps & {
  links: NavLinkProps[];
} & ClassNames;

/**
 * Renders a navigation menu.
 *
 * @category Component
 */
export function NavigationMenu({
  className,
  links,
  ...props
}: NavigationMenuProps) {
  return (
    <Navigation {...props} className={classNames('navigation-menu', className)}>
      <ListUnordered className="navigation-menu-list">
        {links.map((link, index) => (
          <NavLink {...link} className="navigation-menu-link" key={index} />
        ))}
      </ListUnordered>
    </Navigation>
  );
}
