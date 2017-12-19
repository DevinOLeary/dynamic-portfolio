import React from 'react';

import github from '../images/github-logo.png';
import instagram from '../images/instagram-logo.png';
import mail from '../images/mail-icon.png';


const Footer = () => {
  const clearBackground = {
    backgroundColor: 'rgba(240, 89, 65, 0)'
  }
  return(
    <footer className="footer-container flex-container center column text-inverse">
      <h3 style={clearBackground}>get in touch</h3>
      <br/>
      <a href="mailto:djoleary07@gmail.com" style={clearBackground}><img src={mail} alt="djoleary07@gmail.com" className='img-social'/></a>
      <br/>
      <ul className="flex-container row center">
        <li><a href="https://github.com/DevinOLeary" target="_blank" rel="noopener noreferrer" style={clearBackground}><img src={github} alt='github' className='img-social' /></a></li>
        <br/>
        <li><a href="https://www.instagram.com/devin_oleary/" target="_blank" rel="noopener noreferrer" style={clearBackground}><img src={instagram} alt='instagram' className='img-social'/></a></li>
      </ul>
      <br/>
      <hr className="divider-colored"/>
      <br/>
      <h4 style={clearBackground}>bloomington, indiana</h4>
    </footer>

  );
}

export default Footer;
