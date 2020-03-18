import React from 'react';
import Header from './components/Header';
import Information from './components/Information';
import BuildWebsite from './components/BuildWebsite';
import Additional from './components/Additional';
import Footer from './components/Footer';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <>
      <Header />
      <PageTitle />
      <Information />
      <BuildWebsite />
      <Additional />
      <Footer />
    </>
  );
}

export default App;
