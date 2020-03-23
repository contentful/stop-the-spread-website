import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { urlFor } from "./Links";

export default () => {
  const [hidden, setHidden] = useState(true);
  return (
    <header className="bg-white">
      <nav
        className="container mx-auto grid-cols-2 py-2 grid lg:flex lg:justify-between"
        aria-label="Main Navigation"
      >
        <Link className="flex items-center" to="/">
          <Logo className="mr-2" title="Stop the spread - Covid-19" />
          <strong>Stop the spread</strong>
        </Link>
        <div className="flex justify-end py-2 px-4 lg:hidden">
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
            aria-expanded={!hidden}
            className="flex items-center self-end px-3 py-2 text-grey-800 border border-gray-800 rounded hover:text-blue hover:border-blue"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu button</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            hidden ? "hidden" : ""
          }`}
        >
          <li>
            <a
              className="block p-4 hover:text-blue-700"
              href={urlFor("templateRepository")}
            >
              Documentation
            </a>
          </li>
          <li>
            <Link className="block p-4 hover:text-blue-700" to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <a
              className="block p-4 hover:text-blue-700"
              href={urlFor("newHelpNeededForm")}
            >
              Ask for support
            </a>
          </li>
          <li>
            <a
              className="block p-4 hover:text-blue-700"
              href={urlFor("newVolunteerForm")}
            >
              Volunteer to support
            </a>
          </li>
          <li>
            <a
              className="block p-4 hover:text-blue-700"
              href={urlFor("imprint")}
            >
              Imprint
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
