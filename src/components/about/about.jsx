import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FiAward } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
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
              <small>2+ Years Working/Learning</small>
            </div>

            <div className='about-card'>
              <SiLeetcode className='about-icon' />
              <h5>Leetcode</h5>
              <small>200+ Completed</small>
            </div>

            <div className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </div>
          </div>
          <p id='about-main'>
            I am a mechanical engineer turned software engineer. I have a long held a passion for math and software development. Priding myself on deligence and dedication, I would like to contribute to the ever changing world of technology.
          </p>

          <a href="#contacts" className='btn btn-primary' id='about-btn'>Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
