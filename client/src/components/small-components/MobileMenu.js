import React from 'react';
import {NavLink} from 'react-router-dom';

const whiteUnderline = {
  backgroundColor: `white`,
  borderColor: `white`
}


const MobileMenu = (props) => (
    <div className={`mobile_menu-container ${props.openStatus ? 'menu-open' : 'menu-close'}`}>
      <a onClick={props.toggleMenu} className="button-exit">exit</a>
      <ul className="flex-container top-center column">
      <li className="text-inverse hover-highlight" onClick={props.toggleMenu}>
        <NavLink exact to="/"><h3>home</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="text-inverse hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/photography"><h3>photography</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="text-inverse hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/dev&design"><h3>development & design</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="text-inverse hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/about"><h3>about me</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      </ul>
    </div>
)

export default MobileMenu;
