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
    <PageTitle title="Stop the spread">
      <p className="text-3xl font-light whitespace-pre-line tracking-wide">
        Create a free website for Covid-19 announcements and quickly share information about support services
      </p>
    </PageTitle>
    <Information />
    <BuildWebsite />
    <Additional />
    <Footer />
  </>
)
