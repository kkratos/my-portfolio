import React, { useEffect, useState } from "react";
// import image from "../assets/nyc.jpeg";
// import Post from "./Post";


//About setion
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";

import SvgCss from '../Icons/Css'
import SvgFirebase from '../Icons/Firebase'
import SvgGit from '../Icons/Git'
import SvgHtml from '../Icons/Html'
import SvgJs from '../Icons/Js'
import SvgNodeJS from '../Icons/NodeJs'
import SvgNpm from '../Icons/Npm'
import SvgReact from '../Icons/React'
import SvgSass from '../Icons/Sass'
import SvgGithub from '../Icons/Github'
import SvgExpress from '../Icons/Expressjs'
import SvgTailwindcss from '../Icons/Tailwindcss'
import SvgPython from '../Icons/Python'
import SvgTypescript from '../Icons/Typescript'
import SvgNestjs from '../Icons/Nestjs'

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

function Home() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div className="md:w-11/12 max-w-screen-lg m-auto">Loading...</div>;

  return (
    <main className="md:w-11/12 max-w-screen-lg m-auto p-6 my-7">
      <section className="md:flex">
        <div className="flex justify-center">
          <div className="w-48">
            <img src={author.authorImage} alt="profile" className="max-w-full h-auto rounded-full my-5 md:m-0" />
          </div>
        </div>

        <div className="md:flex md:flex-col justify-center">
          <div className="md:mx-7">
            <h1 className="text-xl md:text-2xl text-center md:text-left">Hello, I'm Kamal</h1>
            <h3 className="text-md md:text-2xl text-gray-500 text-center md:text-left"><span className="text-red-400">Mechanical Engineer</span> / Self-taught Developer.</h3>
            <p className="m-0 text-md md:text-2xl text-gray-500 text-center md:text-left">Aspiring <span className="text-blue-600">Full-Stack Developer.</span></p>
          </div>
        </div>
      </section>


      <section className="">
        <section className="rounded-xl lg:flex mt-10 lg:py-16">

          <div className="flex flex-col justify-center">

            <p className="m-0 text-black-200 text-md md:text-xl text-justify">{author.bio}</p>
          </div>
        </section>

        <section>
          <div className="my-20 md:my-20">
            <h3 className="text-xl md:text-3xl font-bold">Education</h3>
            <div className="mt-2">
              <p className="m-0 text-md md:text-xl m-0">MS Mechanical Engineering</p>
            </div>
            <div className="mt-1">
              <p className='m-0 bg-purple-300 inline-block w-44 italic'>New York University '19</p>
            </div>
          </div>
        </section>

        <section className="my-20 md:my-20">
          <div className="space-y-2">
            <h3 className="text-xl md:text-3xl font-bold">Technologies I've Worked With</h3>
            <p className="text-md md:text-xl"> </p>
          </div>
          {/* <div className="flex flex-wrap gap-3 sm:gap-3 lg:gap-3 mt-8 "> */}
          <div className=" flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-4 mt-8">

            <div className="border-2  my-4 p-3">
              <h1 className="text-2xl mb-2 font-medium text-blue-500">Frontend</h1>
              <div className="flex flex-wrap gap-6  md:gap-4 ">
                <div className="flex flex-col justify-center">
                  <SvgHtml />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgCss />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgReact />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgSass />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgTailwindcss />
                </div>
              </div>
            </div>
            <div className="border-2 my-4 p-3">
              <h1 className="text-2xl mb-2 font-medium text-blue-500">Backend</h1>
              <div className="flex flex-wrap gap-3  md:gap-4">
                <div className="flex flex-col justify-center">
                  <SvgNodeJS />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgExpress />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgFirebase />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgNestjs />
                </div>

              </div>
            </div>

            <div className="border-2 my-4 p-3">
              <h1 className="text-2xl mb-2 font-medium text-blue-500">Programming</h1>
              <div className="flex flex-wrap gap-4 md:grap-4">
                <div className="flex flex-col justify-center">
                  <SvgJs />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgPython />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgTypescript />
                </div>
              </div>
            </div>

            <div className="border-2 my-4 p-3">
              <h1 className="text-2xl font-medium text-blue-500">Tools</h1>
              <div className="flex flex-wrap gap-4 md:gap-4">
                <div className="flex flex-col justify-center">
                  <SvgGit />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgNpm />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgGithub />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
