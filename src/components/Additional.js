import React from 'react';
import Card from './Card';

export default () => (
  <section className="mx-auto justify-center py-20">
    <h2 className="text-2xl lg:text-4xl text-center font-semibold mb-8 text-gray-800 tracking-wide">
      Additional resources
    </h2>
    <div className="flex flex-wrap justify-center py-4">
      <div className="py-4">
        <Card 
          title={`Johns Hopkins Whiting \n School of Engineering`}
          desc="Mapping 2019-nCoV"
          url="https://github.com/CSSEGISandData/COVID-19"
        />
        <Card 
          title="Mathdroid"
          desc="Covid-19 global data"
          url="https://github.com/mathdroid/covid-19-api"
        />
        
      </div>
      <div className="py-4">
        <Card 
          title={`Tokyo Metropoliton \n Government`}
          desc="Tokyo Covid-19 Task Force "
          url="https://github.com/tokyo-metropolitan-gov/covid19"
        />
        <Card 
          title="Freakyfelt"
          desc="Daily Covid-19 stats"
          url="https://github.com/freakyfelt/gatsby-source-mathdroid-covid19"
        />
      </div>
    </div>
  </section>
)