import React, { useState } from 'react'
import sjicon from './../assets/sjicon.svg';

const headerNav = [
  {
      title: "about",
      url: "#about",
  },
  {
      title: "experience",
      url: "#experience",
  },
  {
      title: "projects",
      url: "#projects",
  },
  {
      title: "contact",
      url: "#contact",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  }

  return (
    <>
      <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
              <a href="/">
                <img
                  src={sjicon}
                  width="30"
                  height="30"
                  alt="Sejin Logo"
                />
              </a>
            </div>
              <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="main nav">
                <ul>
                  {headerNav.map((nav, key) => (
                    <li key={key}>
                      <a href={nav.url}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            <div
              className="header__nav__mobile" 
              id="headerToggle" 
              aria-controls="primary-menu" 
              aria-expanded={show ? "true" : "false"} 
              role="button" 
              tabIndex="0"
              onClick={toggleMenu}
            >
              <span></span>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;