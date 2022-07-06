import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <div className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <small className="portfolio-item-descriptor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repellat quidem enim error? Totam
            tempora fuga itaque numquam quod impedit quisquam necessitatibus facere, aliquid placeat quas repudiandae
            non mollitia.
          </small>
          <div className="portfolio-button-container">
            <a href="https://github.com" className="btn" target={'_blank'} rel="noreferrer">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <small className="portfolio-item-descriptor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repellat quidem enim error? Totam
            tempora fuga itaque numquam quod impedit quisquam necessitatibus facere, aliquid placeat quas repudiandae
            non mollitia.
          </small>
          <div className="portfolio-button-container">
            <a href="https://github.com" className="btn" target={'_blank'} rel="noreferrer">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio-item" id="heavier-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <small className="portfolio-item-descriptor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae repellat quidem enim error? Totam
            tempora fuga itaque numquam quod impedit quisquam necessitatibus facere, aliquid placeat quas repudiandae
            non mollitia.
          </small>
          <div className="portfolio-button-container">
            <a href="https://github.com" className="btn" target={'_blank'} rel="noreferrer">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default portfolio;
