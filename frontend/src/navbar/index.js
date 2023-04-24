import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const NavbarItem = ({ children, href }) => {
  const isActive = useLocation().pathname === href;
  return (
    <li className="navbar-item">
      <Link
        className={`navbar-link ${isActive ? "currentpage" : ""}`}
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <img
      src={`${process.env.PUBLIC_URL}/kohub.png`}
      alt="logo"
      className="logo"
    />
    <ul className="navbar-list" style={{ zIndex: 100 }}>
      <NavbarItem href="/">HOME</NavbarItem>
      <NavbarItem href="/about">ABOUT US</NavbarItem>
      <NavbarItem href="/search">SEARCH</NavbarItem>
      <NavbarItem href="/">SERVICE</NavbarItem>
      {!localStorage.getItem("token") ? (
        <NavbarItem href="/login">
          <button className="LoginButton">LOG IN</button>
        </NavbarItem>
      ) : (
        <NavbarItem>
          <img src={`${process.env.PUBLIC_URL}/chat.png`} alt="profile" className="profilepic" />
          <img src={`${process.env.PUBLIC_URL}/notification.png`} alt="profile" className="profilepic" />
          <img
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="profile"
            className="profilepic"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          />
        </NavbarItem>
      )}
    </ul>
  </nav>
);

export default Navbar;
