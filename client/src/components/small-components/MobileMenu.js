import React from 'react';
import {NavLink} from 'react-router-dom';

const whiteUnderline = {
  backgroundColor: `white`,
  borderColor: `white`
}


const MobileMenu = (props) => (
    <div className={`mobile_menu-container ${props.openStatus ? 'menu-open' : 'menu-close'}`}>
      <a onClick={props.toggleMenu} className="button-exit text-inverse">exit</a>
      <ul className="flex-container top-center column">
      <li className="hover-highlight" onClick={props.toggleMenu}>
        <NavLink exact to="/"><h3 className="text-inverse">home</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/photography"><h3 className="text-inverse">photography</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/dev&design"><h3 className="text-inverse">development & design</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      <li className="hover-highlight" onClick={props.toggleMenu}>
        <NavLink to="/about"><h3 className="text-inverse">about me</h3><hr className='link-underline' style={whiteUnderline}/></NavLink>
      </li>
      </ul>
    </div>
)

export default MobileMenu;
