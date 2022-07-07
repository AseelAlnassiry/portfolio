import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/yelpcamp.png';
import IMG2 from '../../assets/etchasketch.png';
import IMG3 from '../../assets/calculator.png';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        <div className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>YelpCamp</h3>
          <small className='portfolio-item-descriptor'>
            A website that creates a social network of campgrounds across the world with full registration, CRUD
            implementation, and database security. Based on Udemy learnings under Colt Steele's web development course.
          </small>
          <div className='portfolio-button-container'>
            <a href='https://github.com/AseelAlnassiry/YelpCamp' className='btn' target={'_blank'} rel='noreferrer'>
              Github
            </a>
            <a
              href='https://immense-cliffs-60923.herokuapp.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='portfolio-item'>
          <div className='portfolio-item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Etch-A-Sketch</h3>
          <small className='portfolio-item-descriptor'>
            A web based Etch-A-Sketch utilizing Javascript to create a functional color grid, including a fully
            customizable color picker and an adjustable grid size. Can be reset to be enjoyed again!
          </small>
          <div className='portfolio-button-container'>
            <a
              href='https://github.com/AseelAlnassiry/Etch-a-Sketch'
              className='btn'
              target={'_blank'}
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://aseelalnassiry.github.io/Etch-a-Sketch/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className='portfolio-item' id='heavier-item'>
          <div className='portfolio-item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Simple Calculator</h3>
          <small className='portfolio-item-descriptor'>
            A calculator utilizing basic html, Javascript, and CSS. Built using a flex system. Able to multiply, devide,
            add, and subtract, as well as saving results and clearing.
          </small>
          <div className='portfolio-button-container'>
            <a href='https://github.com/AseelAlnassiry/calculator' className='btn' target={'_blank'} rel='noreferrer'>
              Github
            </a>
            <a
              href='https://aseelalnassiry.github.io/calculator/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default portfolio;
