import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Masthead from './components/Masthead';
import Information from './components/Information';
import BuildWebsite from './components/BuildWebsite';
import Additional from './components/Additional';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Masthead />
      <Information />
      <BuildWebsite />
      <Additional />
      <Footer />
    </div>
  );
}

export default App;
