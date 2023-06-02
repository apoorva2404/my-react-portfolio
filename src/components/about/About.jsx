import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineFolderOpen } from 'react-icons/hi';


import "./about.css";
import ME from "../../assets/me.JPG";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>4 clients worldwide</small>
            </article>

            <article className="about__card">
              <HiOutlineFolderOpen className='about-icon'/>
              <h5>Projects</h5>
              <small>5 completed projects</small>
            </article>

          </div>

          <p>
          Experienced Software Engineer with a demonstrated history of working in the web industry. Skilled in React, Firebase, Communication, HTML, Technical Writing, and Teamwork. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science from Chitkara University. 
          Currently pursuing Masters of Engineering in Applied Computer Science from Concordia University.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  );
};

export default About;
