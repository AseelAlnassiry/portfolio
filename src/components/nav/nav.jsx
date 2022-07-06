import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { TbMessage } from 'react-icons/tb';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBookAlt />
      </a>
      <a href='#portfolio' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>
        <TbMessage />
      </a>
    </nav>
  );
};

export default Nav;
