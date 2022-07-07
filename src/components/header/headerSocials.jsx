import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/aseel-alnassiry-5b82991aa/" target="_blank" rel='noopener noreferrer'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/AseelAlnassiry" target="_blank" rel='noopener noreferrer'>
        <BsGithub />
      </a>
      <a href="https://instagram.com/carbine_fever?r=nametag" target="_blank" rel='noopener noreferrer'>
        <BsInstagram />
      </a>
    </div>
  );
};

export default headerSocials;
