import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Router><App /></Router>, rootElement);
} else {
  render(<Router><App /></Router>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
