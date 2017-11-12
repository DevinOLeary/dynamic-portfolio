import React from 'react';

import github from '../images/github-logo.png';
import instagram from '../images/instagram-logo.png';
import mail from '../images/mail-icon.png';


const Footer = () => {
  return(
    <footer className="footer-container flex-container center column text-inverse">
      <h3>get in touch</h3>
      <br/>
      <a href="mailto:djoleary07@gmail.com"><img src={mail} alt="djoleary07@gmail.com" className='img-social'/></a>
      <br/>
      <ul className="flex-container row center">
        <li><a href="https://github.com/djoleary007" target="_blank" rel="noopener noreferrer"><img src={github} alt='github' className='img-social' /></a></li>
        <br/>
        <li><a href="https://www.instagram.com/devin_oleary/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' className='img-social'/></a></li>
      </ul>
      <br/>
      <hr className="divider-colored"/>
      <br/>
      <h4>bloomington, indiana</h4>
    </footer>

  );
}

export default Footer;
