import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import logo from '../images/logo-white-transparent.png'
import '../styles/header.scss'

const Header = () => {
  return (
    <Router>
      <nav className="navigation">
        <img className="img-center" src={logo} alt="Plant Strong Running logo" />
      
        <div className="nav-links">
          <div id="burger-menu" className="burger-menu-border">
            <i className="fas fa-bars"></i>
          </div>
      
          <ul id="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/coaching_programs">Coaching Programs</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>    
          </ul>
        </div>
      </nav>
    </Router>
  );
}

export default Header;
