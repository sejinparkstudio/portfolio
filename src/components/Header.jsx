import React from 'react'
import sjicon from './../assets/sjicon.svg';

const Header = () => {

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
            <nav className="header__nav" role="navigation" aria-label="main nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
            <div 
                className="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded="false" 
                role="button" 
                tabIndex="0"
            >
                <span></span>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;