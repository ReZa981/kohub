import React from 'react';
import './Navbar.css'

const NavbarItem = ({ children, href }) => (
  <li className="navbar-item">
    <a className="navbar-link" href={href}>
      {children}
    </a>
  </li>
);

const Navbar = () => (
  <nav className="navbar">
    <img src={`${process.env.PUBLIC_URL}/kohub.png`} className="logo" />
    <ul className="navbar-list">
      <NavbarItem href="/">HOME</NavbarItem>
      <NavbarItem href="/">ABOUT</NavbarItem>
      <NavbarItem href="/">SEARCH</NavbarItem>
      <NavbarItem href="/">SERVICE</NavbarItem>
      <NavbarItem href="/">
        <button className='LoginButton'>LOG IN</button>
      </NavbarItem>
    </ul>
  </nav>
);

export default Navbar;
