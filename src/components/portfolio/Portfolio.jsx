import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./portfolio.css";
import IMG from "../../assets/portfolio1.jpg";
import { experiences } from '../../constants';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
    contentStyle={{ background: "#2c2c6c", color: "#fff" }}
    contentArrowStyle={{borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img src={experience.icon} alt={experience.company} style={{ borderRadius: "50%" }}/>
      </div>
    }
  >
    <div>
      <h3>{experience.title}</h3>
      <p className="text">{experience.company_name}</p>  
    </div>

    <ul style={{ marginTop: 5, marginLeft: 15, fontSize: 14}}>
      {experience.points.map((point, index) => (
        <li key={experience-point-`${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I have done</h5>
      <h2>Work Experience</h2>

      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Portfolio;


{/* <div className="container portfolio__container">
<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={IMG} alt="" />
  </div>
  <h3>This is portfolio item title</h3>
  <div className='portfolio__item-cta'>
    <a href="https://github.com" className="btn" target="_blank">Github</a>
    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
  </div>
</article>

<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={IMG} alt="" />
  </div>
  <h3>This is portfolio item title</h3>
  <div className='portfolio__item-cta'>
    <a href="https://github.com" className="btn" target="_blank">Github</a>
    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
  </div>
</article>

<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={IMG} alt="" />
  </div>
  <h3>This is portfolio item title</h3>
  <div className='portfolio__item-cta'>
    <a href="https://github.com" className="btn" target="_blank">Github</a>
    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
  </div>
</article>

<article className="portfolio__item">
  <div className="portfolio__item-image">
    <img src={IMG} alt="" />
  </div>
  <h3>This is portfolio item title</h3>
  <div className='portfolio__item-cta'>
    <a href="https://github.com" className="btn" target="_blank">Github</a>
    <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
  </div>
</article>
</div> */}
