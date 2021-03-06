import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'From side' },
  { to: '/full', label: 'Full' },
  { to: '/eye', label: 'SPEye' },
  { to: '/house', label: 'House' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  );

  return <nav>{ links }</nav>;
};

export default Nav
