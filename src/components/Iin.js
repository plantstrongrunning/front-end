import React from 'react'
import '../styles/iin.scss'

const images = [
  {src: './images/free-class.jpg', alt: 'free class', href: 'https://geti.in/2HdNE1w'},
  {src: './images/curriculum.jpg', alt: 'curriculum', href: 'http://geti.in/2kPf036'},
  {src: './images/new-ambassador.jpg', alt: 'new ambassador', href: 'http://geti.in/2cQQcHW'},
  {src: './images/ebook-banner.jpg', alt: 'ebook banner', href: 'http://geti.in/29GKdVY'}
]

const Iin = () => {
  return (
    <div className="homepage-iin">
      <h2>Institute for Integrative Nutrition</h2>
      <p className="margin-top-20px text-center">Passionate about health, wellness, and helping others&#63; Integrative Nutrition fuels your passion and helps you turn it into a career that you will love. Contact me or click on the images below for more information&#33;</p>

      <div className="row">
        {images.map((image) => <IINImage image={image} />)}  
      </div>
    </div>
  );
}

const IINImage = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <a href={props.image.href}>
        <img src={props.image.src} alt={props.image.alt} />
      </a>
  </div>
  )
}

export default Iin;