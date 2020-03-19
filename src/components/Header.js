import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto py-2 flex justify-between" aria-label="Main Navigation">
        <Link className="flex items-center" to="/">
          <Logo className="mr-2" title="Stop the spread - Covid-19" />
          <strong>Stop the spread</strong>  
        </Link>
        <ul className="flex justify-end">
          <li>
            <a className="block p-4 hover:text-blue-700" href="https://github.com/contentful/covid-19-site-template">Documentation</a>
          </li>
          <li>
            <Link className="block p-4 hover:text-blue-700" to="/faq">FAQ</Link>
          </li>
          <li>
            <a className="block p-4 hover:text-blue-700" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcdITGcpw1kWxEunHVUz6aQZzgvrGOPs3UnJvzFNafWa3M3A/viewform?usp=sf_link">
                Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
