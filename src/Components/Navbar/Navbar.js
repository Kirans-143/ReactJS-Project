import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_left">Coding Master</div>
      <div className="navbar_right">
        <NavItem title="Home" />
        <NavItem title="Blog" />
        <NavItem title="Courses" />
        <NavItem title="Contact" />
        <NavItem title="Login/Signup" />
      </div>
    </div>
  );
}

export default Navbar;
