import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 id='about-me-h2'>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={ME} alt='' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <div className='about-card'>
              <FiAward className='about-icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>

            <div className='about-card'>
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>

            <div className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p id='about-main'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum eum cumque nihil laboriosam!
            Distinctio expedita dolores, at nihil suscipit facilis, voluptatum, soluta incidunt voluptate a nisi commodi
            dolor cumque?
          </p>

          <a href="#contact" className='btn btn-primary' id='about-btn'>Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
