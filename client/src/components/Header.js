import React from 'react';
import {NavLink} from 'react-router-dom';

//components
import MobileMenu from './small-components/MobileMenu';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fullSize: false,
      showMenu: false
    }
  }

  componentWillMount(){
    window.addEventListener('resize', this.updateWidth.bind(this));
  }
  componentDidMount(){
    this.updateWidth();
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateWidth.bind(this));
    this.toggleMenu();
  }

  updateWidth(){
    if(window.innerWidth < 600){
      this.setState({fullSize: false})
    }else{this.setState({fullSize: true})}
  }

  toggleMenu(){
    const showStatus = this.state.showMenu
    this.setState({showMenu: !showStatus})
  }

  render(){
    const coloredUnderline = {
      backgroundColor: `#7A423C`,
      borderColor: `#7A423C`
    }
    if(!this.state.fullSize){
      return(
        <header className="mobile_menu-header">
          <a onClick={this.toggleMenu.bind(this)}><h3>menu</h3></a>
          <div>
            <MobileMenu openStatus={this.state.showMenu} toggleMenu={this.toggleMenu.bind(this)}/>
          </div>
        </header>
      )
    } else {
      return(
        <div>
          <header className="header-subpage flex-container center">
            <nav className="full-width">
              <ul className="nav-bar flex-container">
                <li className="hover-highlight">
                  <NavLink exact to="/">home</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/photography">photography</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/dev&design">development & design</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
                <li className="hover-highlight">
                  <NavLink to="/about">about me</NavLink>
                  <hr className='link-underline' style={coloredUnderline}/>
                </li>
              </ul>
            </nav>
          </header>
          <hr className="divider-colored"/>
          <br/>
        </div>
      );
    }
  }
}

export default Header;
