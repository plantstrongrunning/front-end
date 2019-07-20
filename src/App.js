import React from 'react'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import IIN from './components/IIN'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner background={'banner_home'} />
   
      <IIN />
      <Footer />
    </div>
  );
}

export default App;
