import React from 'react';
import './index.css';
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
    <ul className="navbar-list" style={{ zIndex: 100 }}>
      <NavbarItem href="/">HOME</NavbarItem>
      <NavbarItem href="/about">ABOUT US</NavbarItem>
      <NavbarItem href="/">SEARCH</NavbarItem>
      <NavbarItem href="/">SERVICE</NavbarItem>
      <NavbarItem href="/login">
        <button className='LoginButton'>LOG IN</button>
      </NavbarItem>
    </ul>
  </nav>
);

export default Navbar;