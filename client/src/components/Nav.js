import React from 'react';
import {NavLink} from 'react-router-dom';

const whiteUnderline = {
  backgroundColor: `rgba(240, 89, 65, .6)`,
  borderColor: `rgba(240, 89, 65, .1)`
}

const Nav = () => {
    return(
      <nav className="full-width">
        <ul className="flex-container nav-bar row text-inverse">
          <li className="hover-highlight">
            <NavLink to="/photography">photography</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
          <li className="hover-highlight">
            <NavLink to="/dev&design">development & design</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
          <li className="hover-highlight">
            <NavLink to="/about">about me</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
