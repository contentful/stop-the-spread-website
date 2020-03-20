import React from 'react'
import {ReactComponent as GithubLogo} from '../assets/github-lg.svg'

export default ({title, desc, url}) => (
  <div className="flex pt-4 pb-6 px-4 lg:px-20">
    <GithubLogo className="pt-1" />
    <div className="px-4">
      <h3 className="text-lg font-semibold whitespace-pre-line text-gray-800">{title}</h3>
      <p className="text-gray-700 mb-3 py-2">{desc}</p>
      <a className="underline text-blue-600" href={url}>View on github</a>
    </div>
  </div>
)