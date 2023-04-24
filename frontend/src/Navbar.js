import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const NavbarItem = ({ children, href }) => (
  <li className="navbar-item">
    <Link className="navbar-link" to={href}>
      {children}
    </Link>
  </li>
);

const Navbar = () => (
  <nav className="navbar">
    <img src={`${process.env.PUBLIC_URL}/kohub.png`} alt="logo" className="logo" />
    <ul className="navbar-list">
      <NavbarItem href="/">HOME</NavbarItem>
      <NavbarItem href="/about">ABOUT</NavbarItem>
      <NavbarItem href="/">SEARCH</NavbarItem>
      <NavbarItem href="/">SERVICE</NavbarItem>
      <NavbarItem href="/">
        <button className='LoginButton'>LOG IN</button>
      </NavbarItem>
    </ul>
  </nav>
);

export default Navbar;
