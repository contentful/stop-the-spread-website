import React from 'react'
import './PageTitle.css';

export default ({title, desc, className}) => (
  <section className={`page-title text-white py-20 flex flex-col justify-center text-center ${className}`}>
    <h1 className="text-6xl font-bold tracking-wider">{title}</h1>
    {desc && 
      <p className="text-3xl font-light whitespace-pre-line tracking-wide">{desc}</p>
    }
  </section>
)