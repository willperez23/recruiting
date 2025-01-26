import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div id="navFlex">
      <nav>
        <NavLink to="/" className="brand">Will Perez</NavLink>
        <span id="links">
          <NavLink to="/about">About</NavLink>
          <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ca0acd3f-b3a3-38e3-b3fe-2526b16efddb" target="_blank" rel="noopener noreferrer">
            <button id="resumeBtn" type="button">resume </button>
          </a>
        </span>
      </nav>
      <div className="divider" />
    </div>
  );
}

export default Nav;
