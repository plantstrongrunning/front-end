import React from 'react'
import '../styles/banner.scss'

const Banner = (props) => {

  return (
    <header className={props.background}>
    {props.background === 'banner_home' &&
      <div className="header-homepage-content">
        <h1>Take Charge Of Your Life</h1>
        <h2>Eat Good. Feel Good. Look Good.</h2>
        <p>Are you ready to eat, feel, and look your best&#63; Let me walk you through the ambiguity of healthy eating and show you how great life can be when you are <em>plant strong</em>.</p>
      
        <div className="header-buttons desktop">
          <a className="get-started" href="pages/coaching_programs.html">
            <div><p>Get Started</p></div>
          </a>
      
          <a className="contact-me" href="pages/contact.html">    
            <div><p>Contact Me</p></div>  
          </a>
        </div>
      </div>
    }
    </header>
  );
}

export default Banner;