import React from 'react'

function Header() {
  return (
    <nav className="navigation">
      <img className="img-center" src="img/logo-white-transparent.png" alt="Plant Strong Running logo" />
    
      <div className="nav-links">
        <div id="burger-menu" className="burger-menu-border"><i className="fas fa-bars"></i></div>
    
        <ul id="nav-links">
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/coaching_programs"><li>Coaching Programs</li></a>
          <a href="/blog"><li>Blog</li></a>
          <a href="/contact"><li>Contact</li></a>      
        </ul>
      </div>
    </nav>
  );
}

export default Header;
