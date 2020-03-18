import React from 'react';
import contentful from '../assets/contentful.svg';
import netlify from '../assets/netlify.svg';
import gatsby from '../assets/gatsby.svg';

export default () => (
  <footer className="bg-gray-100 py-20">
    <h2 className="text-4xl text-center font-semibold mb-12 text-gray-800 tracking-wide">
      Stop the spread is hosted and maintained by
    </h2>
    <ul className="flex justify-center">
      <li className="px-12">
        <a href="https://contentful.com">
          <img src={contentful} alt="Contenful" />
        </a>
      </li>
      <li className="px-12">
        <a href="https://netlify.com">
          <img src={netlify} alt="Netlify" />
        </a>
      </li>
      <li className="px-12">
        <a href="https://gatsbyjs.org">
          <img src={gatsby} alt="Contenful" />
        </a>
      </li>
    </ul>
  </footer>
)