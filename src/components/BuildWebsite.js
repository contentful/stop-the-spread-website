import React from 'react'
export default () => (
  <section className="mx-auto text-center justify-center bg-gray-100 py-20">
    <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-gray-800 tracking-wide">
      Build a website in five minutes or less
    </h2>
    <p className="text-lg mb-10 text-gray-800">Communicate to your community easily with a simple, free JAMstack-based<br /> website builder that is scalable by default. </p>
    <ol className="flex-wrap lg flex justify-center">
      <li className="px-6 py-4 lg:py-0">
        <small className="bg-blue-400 inline-flex text-xl text-white mb-6 w-12 h-12 items-center justify-center rounded-full" 
          aria-hidden="true">1</small>
        <h3 className="text-lg font-semibold text-gray-800">Sign-up for a<br /> Contentful Account</h3>
      </li>
      <li className="px-6">
        <small className="bg-blue-400 inline-flex text-xl text-white mb-6 w-12 h-12 items-center justify-center rounded-full" 
          aria-hidden="true">2</small>
        <h3 className="text-lg font-semibold text-gray-800">Deploy the Gatsby starter <br/> template to Netlify</h3>
      </li>
      <li className="px-6">
        <small className="bg-blue-400 inline-flex text-xl text-white mb-6 w-12 h-12 items-center justify-center rounded-full" 
          aria-hidden="true">3</small>
        <h3 className="text-lg font-semibold text-gray-800">Configure the Netlify<br /> Contentful App</h3>
      </li>
    </ol>
  </section>
)