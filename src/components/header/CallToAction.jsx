import React from 'react'
import CV from '../../assets/cv.pdf';


const CallToAction = () => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CallToAction
