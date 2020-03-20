import React from 'react'
import './BuildWebsite.scss';

export default () => (
  <section className="mx-auto text-center justify-center bg-gray-100 py-20">
    <h2 className="text-4xl font-semibold mb-6 text-gray-800 tracking-wide">
      Build a website in five minutes or less
    </h2>
    <p className="text-lg mb-10 text-gray-800">Communicate to your community easily with a simple, free JAMstack-based website builder that is scalable by default. </p>
    <ol className="flex justify-center build-steps-list">
      <li>
        <div className="list-number" aria-hidden="true">
          1
        </div>
        <p className="text-lg font-semibold text-gray-800">Sign-up for a Contentful Account</p>
      </li>
      <li>
        <div className="list-number" aria-hidden="true">
          2
        </div>
        <p className="text-lg font-semibold text-gray-800">Deploy the Gatsby starter template to Netlify</p>
      </li>
      <li>
        <div className="list-number" aria-hidden="true">
          3
        </div>
        <p className="text-lg font-semibold text-gray-800">Configure the Netlify Contentful App</p>
      </li>
    </ol>
  </section>
)