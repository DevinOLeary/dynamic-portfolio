import React from 'react';
import {NavLink} from 'react-router-dom';

const whiteUnderline = {
  backgroundColor: `rgba(240, 89, 65, .6)`,
  borderColor: `rgba(240, 89, 65, .1)`
}
const clearBackground = {
  backgroundColor: 'rgba(240, 89, 65, 0)'
}

const Nav = () => {
    return(
      <nav className="full-width forefront">
        <ul className="flex-container nav-bar row text-inverse">
          <li className="hover-highlight">
            <NavLink to="/photography" style={clearBackground}>photography</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
          <li className="hover-highlight">
            <NavLink to="/dev&design" style={clearBackground}>development & design</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
          <li className="hover-highlight">
            <NavLink to="/about" style={clearBackground}>about me</NavLink>
            <hr className='link-underline' style={whiteUnderline}/>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;
