import React from 'react';

import { icons } from "../constants";

const Footer = () => {

  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <ul className="footer__icons">
          {icons.map(({href, src, alt}) => (
            <li key={alt}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} width="28" height="28" alt={`${alt} Logo`} />
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__center">
          Sejin &copy;<br />
          built with React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;