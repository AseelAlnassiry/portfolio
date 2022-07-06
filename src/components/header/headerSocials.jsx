import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com/" target="_blank" rel='noopener noreferrer'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel='noopener noreferrer'>
        <BsGithub />
      </a>
      <a href="https://instagram.com/" target="_blank" rel='noopener noreferrer'>
        <BsInstagram />
      </a>
    </div>
  );
};

export default headerSocials;
