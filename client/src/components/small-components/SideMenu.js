import React from 'react';
import {Link} from 'react-scroll';

const SideMenu = (props) => {

  const menuList = props.menu.reverse().map(item => {
    return(
      <Link to={item} key={item} smooth={true} className="button-action">
          <li><h4>{item}</h4></li>
      </Link>
    );
  });

  return(
    <aside>
      <ul className="flex-container center row text-inverse">
        {menuList}
      </ul>
    </aside>
  );
}

export default SideMenu;
