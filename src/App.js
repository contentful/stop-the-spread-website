import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from "react-router-dom";
import Home from './routes/Home';
import Faq from './routes/Faq';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stop the spread</title>
        <meta name="description" content="Create a free website for Covid-19 announcements and quickly share information about support services" />
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
