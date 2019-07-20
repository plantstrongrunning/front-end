import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p><a className="call-email" href="tel:1-614-467-0421">614&#45;467&#45;0421</a></p>
          <p><a className="call-email" href="mailto:coachstephslaton@gmail.com">coachstephslaton&#64;gmail.com</a></p>
        </div>
    
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <p><a href="pages/testimonials.html">Testimonials</a></p>
          <p><a href="">Terms and Conditions</a></p>
        </div>
    
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <ul className="social-media">
            <li>
              <a href="https://www.linkedin.com/in/stephanieslaton/"><i className="fab fa-linkedin fa-2x" aria-hidden="true"></i></a>
            </li>
    
            <li>
              <a href="https://www.facebook.com/plantstrongrunning/"><i className="fab fa-facebook-square fa-2x"></i></a>
            </li>
    
            <li>
              <a href="https://www.instagram.com/stephmslaton/?hl=en"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
            </li>
    
            <li>
              <a href="https://twitter.com/StephMSlaton"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;