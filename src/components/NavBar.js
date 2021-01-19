import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="md:w-11/12 max-w-screen-lg m-auto md:mt-10 mt-4 p-6 ">
      <div className="flex justify-center md:justify-between">
        <nav className="flex md:py-3 md:my-6 items-center">

          <NavLink
            to="/"
            exact
            className="px-3 text-lg md:text-xl hover:underline">
            Home
          </NavLink>


          <NavLink
            to="/about"
            className=" px-3 text-lg md:text-xl hover:underline">
            About
          </NavLink>
          
          <NavLink
            to="/project"
            className=" px-3 text-lg md:text-xl hover:underline">
            Project
          </NavLink>
          <a
            rel="noreferrer"
            href="https://hashnode.com/@KamalPatel"
            className=" px-3 text-lg md:text-xl hover:underline"
            target="_blank">
            Blog
          </a>

        </nav>
        <div className="inline-flex py-3 my-6 hidden md:inline-flex">
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