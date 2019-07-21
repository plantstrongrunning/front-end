import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/homepage/Homepage'
import IIN from './components/IIN'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>   
      <IIN />
      <Footer />
    </div>
  );
}

export default App;
