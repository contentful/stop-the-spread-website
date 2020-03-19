import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './routes/Home';
import Faq from './routes/Faq';

function App() {
  return (
    <>
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
