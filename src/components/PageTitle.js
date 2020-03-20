import React from 'react'
import './PageTitle.css';

export default ({title, children, className}) => (
  <section className={`page-title text-white flex flex-col justify-center text-center ${className}`}>
    <h1 className="text-6xl font-bold tracking-wider">{title}</h1>
    <div className="subtitle">{children}</div>
  </section>
)