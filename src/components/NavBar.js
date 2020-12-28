import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header>
      <div className="container flex mx-auto justify-between lg:justify-around ">
        <nav className="flex">

          {/* <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inline-flex items-center py-6 px-3 mr-4 text-black-100 text-2xl font-bold cursive tracking-widest">
            Kamal Patel
          </NavLink> */}


          <NavLink
            to="/about"
            // activeClassName="text-white-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700">
            About
          </NavLink>
          <NavLink
            to="/project"
            // activeClassName="text-black-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700">
            Projects
          </NavLink>
          <a
            rel="noreferrer"
            href="https://hashnode.com/@KamalPatel"
            activeClassName="text-black-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700"
            target="_blank">
            Blog
          </a>

        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/iamkamalpatel"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/kkratos"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#000"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kamalpatel/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}