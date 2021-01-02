import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="w-9/12 m-auto">
      <div className="container flex justify-between ">
        <nav className="flex items-center">

          <NavLink
            to="/"
            exact
            className="flex px-3 text-xl hover:underline">
            Home
          </NavLink>


          <NavLink
            to="/about"
            className="flex px-3 text-xl hover:underline">
            About
          </NavLink>
          <NavLink
            to="/project"
            className="flex px-3 text-xl hover:underline">
            Projects
          </NavLink>
          <a
            rel="noreferrer"
            href="https://hashnode.com/@KamalPatel"
            className="flex px-3 text-xl hover:underline"
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