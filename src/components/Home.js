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

  if (!author) return <div>Loading...</div>;

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
            <h1 className="text-xl md:text-2xl text-blue-700 text-center md:text-left">Hello, I'm Kamal</h1>
            <h3 className="text-md md:text-2xl text-gray-500 text-center md:text-left">Mechanical Engineer / Self-taught Developer.</h3>
            <p className="m-0 text-md md:text-2xl text-gray-500 text-center md:text-left">who is willing to learn and create outstanding applications!</p>
          </div>
        </div>
      </section>

      {/**
      <section className="hidden flex flex-col mt-10">
        <h3 className="text-center md:text-left text-xl md:text-3xl font-bold my-5">Articles</h3>
        <Post />
      </section>
      */}

      <section className="">
        <section className="rounded-xl lg:flex mt-10 lg:py-16">
          {/* <div className="flex justify-center"> */}
          {/* <img
            src={urlFor(author.authorImage).url()}
            className="rounded-3xl mb-4 w-32 h-32 lg:w-64 lg:h-64 lg:mr-8"
            alt="kamal"
          /> */}
          {/* </div> */}
          <div className="flex flex-col justify-center">
            {/* <h1 className="cursive md:text-3xl text-black-300 mb-2 ">
              Hey there. I'm{" "}
              <span className="text-black-100">{author.name}. 👋</span>
            </h1> */}
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
              <h4 className="italic">Major - Control and Dynamics for Robotics Systems</h4>
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
              <h1 className="text-2xl text-center md:text-left mb-2 font-medium text-blue-500">Frontend</h1>
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
              <h1 className="text-2xl text-center md:text-left mb-2 font-medium text-blue-500">Backend</h1>
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

              </div>
            </div>

            <div className="border-2 my-4 p-3">
              <h1 className="text-2xl text-center md:text-left mb-2 font-medium text-blue-500">Programming</h1>
              <div className="flex flex-wrap gap-4 md:grap-4">
                <div className="flex flex-col justify-center">
                  <SvgJs />
                </div>
                <div className="flex flex-col justify-center">
                  <SvgPython />
                </div>

              </div>
            </div>

            <div className="border-2 my-4 p-3">
              <h1 className="text-2xl text-center md:text-left font-medium text-blue-500">Tools</h1>
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

        <section className="my-20 md:my-20">
          <h3 className="text-xl md:text-3xl font-bold">These are the things I'm currently doing.</h3>
          <div className="my-5 md:grid md:grid-cols-2 md:gap-y-1 md:gap-x-4 md:my-3">
            <div className="flex justify-center items-center text-center bg-blue-300 text-black my-2 md:text-md rounded-2xl shadow-lg"><p className="py-3">Building an e-commerce full-stack project</p></div>
            <div className="flex justify-center items-center text-center bg-blue-300 text-black my-2 md:text-md rounded-2xl shadow-lg"><p className="py-3">Learning Node.js</p></div>
            <div className="flex justify-center items-center text-center bg-blue-300 text-black my-2 md:text-md rounded-2xl shadow-lg"><p className="py-3">Improving my UI/UX design Skills</p></div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
