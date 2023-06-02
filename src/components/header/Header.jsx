import React from 'react'
import "./header.css"

import ME from "../../assets/me.JPG";
import CallToAction from './CallToAction'
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Apoorva Sharma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <CallToAction />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt=""/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header
