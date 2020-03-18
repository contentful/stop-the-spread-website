import React from 'react';
import Header from '../components/Header';
import Information from '../components/Information';
import BuildWebsite from '../components/BuildWebsite';
import Additional from '../components/Additional';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

export default () => (
  <>
    <Header />
    <PageTitle 
      title="Stop the spread"
      className="py-40"
      desc={`Create a free website for Covid-19 announcements \n and quickly share information about support services`} />
    <Information />
    <BuildWebsite />
    <Additional />
    <Footer />
  </>
)
