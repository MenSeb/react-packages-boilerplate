import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <svg></svg>
      </Link>
      <nav>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
  );
}
