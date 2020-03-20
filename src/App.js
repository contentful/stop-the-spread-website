import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from "react-router-dom";
import Home from './routes/Home';
import Faq from './routes/Faq';
import screenshot from './assets/screenshot.png';

const metaData = {
  title: 'Stop the spread',
  description: 'Create a free website for Covid-19 announcements and quickly share information about support services',
  author: 'Contentful, Netlify, GatsbyJs',
  image: screenshot,
  url: 'https://stop-the-spread.dev'
}

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:url" content={metaData.url} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
      </Switch>

    </>
  );
}

export default App;
