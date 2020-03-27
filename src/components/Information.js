import React from 'react'
import { ReactComponent as GithubLogo } from '../assets/github.svg';
import { ReactComponent as StackbitLogo } from '../assets/stackbit-logo.svg';
import leftScreenshot from '../assets/covid-19-site-template-shot-1.png';
import rightScreenshot from '../assets/covid-19-site-template-shot-2.png';
import { urlFor } from './Links';

export default () => (
  <section className="flex justify-center flex-col text-center py-20">
    <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 tracking-wide">Getting information to your community <br />
    is more important than ever</h2>
    <p className="text-base px-2 lg:text-lg mb-10 text-gray-800">This customizable template website for Covid-19 news enables local and international <br />
    organizations to quickly share announcements, links to resources and local news updates <br />
    with a customizable website built with Gatsby, Netlify and Contentful.</p>
    <div className="mb-8">
      <a href={urlFor('templateRepository')}
        className="inline-block items-center hover:bg-blue-800 hover:border-blue-800 bg-blue-700 border-blue-700 border-2 text-white px-6 py-2 m-4">
          <GithubLogo className="inline-block mr-2 -mt-1" title="Github logo" />
          Get Started
      </a>
      <a href="https://demo.stop-the-spread.dev"
        className="inline-block bg-white border-2 border-blue-700 hover:text-white hover:bg-blue-700 text-blue-700 px-6 py-2">
          View demo website
      </a>
      <a href={urlFor('createWithStackbit')}
         className="inline-block items-center hover:bg-blue-800 hover:border-blue-800 bg-blue-700 border-blue-700 border-2 text-white px-6 py-2 m-4">
          <StackbitLogo className="inline-block fill-current mr-2 -mt-1" title="Stackbit logo" />
          Create With Stackbit
      </a>
    </div>
    <div className="flex mx-auto flex-wrap flex-row lg:flex-no-wrap container">
      <div className="p-10 lg:p-12">
        <img src={leftScreenshot} alt="Covid-19 site template screenshot for recreational center" />
      </div>
      <div className="p-10 lg:p-12">
        <img src={rightScreenshot} alt="Covid-19 site template screenshot for elementary school" />
      </div>
    </div>
  </section>
)