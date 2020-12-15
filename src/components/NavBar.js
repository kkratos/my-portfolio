import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header>
      <div className="container mx-auto flex justify-around">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inline-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            KP
          </NavLink>

          {/* <NavLink
            to="/post"
            activeClassName="text-black-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700"
          >
            Blog
          </NavLink> */}
          <NavLink
            to="/project"
            // activeClassName="text-black-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            // activeClassName="text-white-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-700 hover:text-black-700"
          >
            About Me!
          </NavLink>
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