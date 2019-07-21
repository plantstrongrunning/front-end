import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/banner.scss'

const Banner = (props) => {

  return (
    <header className={props.background}>
    {props.background === 'banner_home' &&
      <div className="header-homepage-content">
        <h1>Take Charge Of Your Life</h1>
        <h2>Eat Good. Feel Good. Look Good.</h2>
        <p>Are you ready to eat, feel, and look your best&#63; Let me walk you through the ambiguity of healthy eating and show you how great life can be when you are <em>plant strong</em>.</p>
      
        <div className="header-buttons">
          <Link className="get-started" Path="/">
            <div><p>Get Started</p></div>
          </Link>
      
          <Link className="contact-me" Path="/">    
            <div><p>Contact Me</p></div>  
          </Link>
        </div>
      </div>
    }
    </header>
  );
}

export default Banner;