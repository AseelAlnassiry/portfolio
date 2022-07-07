import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const footer = () => {
  return (
    <footer>
      <a href='#header' className='footer-logo'>
        Aseel Alnassiry
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#header'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>

      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/aseel-alnassiry-5b82991aa/' target='_blank' rel='noopener noreferrer'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/AseelAlnassiry' target='_blank' rel='noopener noreferrer'>
          <BsGithub />
        </a>
        <a href='https://instagram.com/carbine_fever?r=nametag' target='_blank' rel='noopener noreferrer'>
          <BsInstagram />
        </a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Aseel Alnassiry. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
