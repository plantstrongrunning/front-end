import React from 'react'
import Banner from './../Banner'
import NewsLetter from './../NewsLetter'

const text = 'Not sure where to start? Sign up for my FREE weekly newsletter below.';

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner background={'banner_home'} />
      <NewsLetter text={text} />
    </div>
  );
}

export default Homepage;