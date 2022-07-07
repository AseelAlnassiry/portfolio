import React from 'react';
import './experience.css';
import { BsPatchCheck } from 'react-icons/bs';

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>HTML</h4>
                <small className="text-light">Modern HTML5</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>React</h4>
                <small className="text-light">Hooks, Redux</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>CSS</h4>
                <small className="text-light">Responsive, Transitions</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>SASS</h4>
                <small className="text-light">Responsive, Transitions</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Queries, Effects</small>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Implementation, package management</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>NPM</h4>
                <small className="text-light">Including NPX</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>Express</h4>
                <small className="text-light">MVC Routing</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Along with Mongoose</small>
              </div>
            </div>
            <div className="experience-details">
              <div className="experience-icon">
                <BsPatchCheck />
              </div> 
              <div>
                <h4>Python</h4>
                <small className="text-light">Object oriented programming</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
