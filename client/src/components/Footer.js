import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="w-8 text-deep-purple-accent-400">
              <FaFacebook />
            </span>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Naari Sanrakshan Seva
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Naari Sanrakshan Seva is an initiative to create an online
              platform for women to be able to file complaints of sexual
              harassment at workplace with their Local Committees with ease.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              The App also supports Local Committees to keep in touch with
              aggrieved women, and manage their complaints in a time-bound
              manner.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <span className="mr-1 text-gray-800">
              <MdPhone />
            </span>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <span className="mr-1 text-gray-800">
              <MdEmail />
            </span>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@naarisanrakshan.mail
            </a>
          </div>
          <div className="flex">
            <span className="mr-1 text-gray-800">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0zm0 22c-5.522 0-10-4.478-10-10S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"></path>
                <path d="M10.712 7.277l4.294 4.294 1.706-1.706c.39-.39 1.022-.39 1.414 0s.39 1.024 0 1.414l-2.588 2.588c-.39.39-1.024.39-1.414 0l-4.3-4.295 2.588-2.587c.39-.39 1.024-.39 1.414 0s.39 1.024 0 1.414l-1.706 1.706z"></path>
              </svg>
            </span>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Saffron Tower, Vadodara
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-200">
          © Copyright 2024 Naari Sanrakshan Seva Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
