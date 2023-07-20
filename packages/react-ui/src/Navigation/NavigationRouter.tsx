import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { Navigation, NavigationProps } from '.';
import { ListU } from '..';

/**
 * The props types for component {@link NavigationRouter}
 */
export type NavigationRouterProps = NavigationProps & {
  links: NavLinkProps[];
};

/**
 * Renders a navigation with router.
 *
 * @category Component
 */
export function NavigationRouter({ links, ...props }: NavigationRouterProps) {
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
