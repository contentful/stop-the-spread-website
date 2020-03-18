import React from 'react';

export default () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto" aria-label="Main Navigation">
        <ul className="flex justify-end">
          <li>
            <a className="block p-4 hover:text-blue-700" href="https://github.com/contentful/covid-19-site-template">Documentation</a>
          </li>
          <li>
            <a className="block p-4 hover:text-blue-700" href="#">FAQ</a>
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
