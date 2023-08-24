import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrolling = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.onscroll = handleScrolling;

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <Link to='/' className="left-navbar">Praveen</Link>
      <div
        className={
          sideBar ? "right-navbar right-navbar-active" : "right-navbar"
        }
      >
        <NavLink
          exact="true"
          to="/"
          activeclassname="active"
          className="nav-links"
          onClick={() => setSideBar(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeclassname="active"
          className="nav-links"
          onClick={() => setSideBar(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          activeclassname="active"
          className="nav-links"
          onClick={() => setSideBar(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="active"
          className="nav-links"
          onClick={() => setSideBar(false)}
        >
          Contact
        </NavLink>
      </div>
      <div className="menu-close">
        <AiOutlineMenu
          onClick={() => setSideBar(true)}
          className={`menu m-c ${sideBar ? "hide" : "show"}`}
        />
        <AiOutlineClose
          onClick={() => setSideBar(false)}
          className={`menu m-c ${sideBar ? "show" : "hide"}`}
        />
      </div>
    </div>
  );
};

export default Navbar;
