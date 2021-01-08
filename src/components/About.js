import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
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
    <main className="relative lg:w-11/12 max-w-screen-lg m-auto p-8 my-7">
      <div className="container mx-auto relative">
        <section className="rounded-xl lg:flex lg:py-20 my-10">
          {/* <div className="flex justify-center"> */}
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-3xl mb-4 w-32 h-32 lg:w-64 lg:h-64 lg:mr-8"
            alt="kamal"
          />
          {/* </div> */}
          <div className="flex flex-col justify-center">
            <h1 className="cursive md:text-3xl text-black-300 mb-2 ">
              Hey there. I'm{" "}
              <span className="text-black-100">{author.name}. 👋</span>
            </h1>
            <p className="m-0 text-black-200 text-md md:text-xl text-justify">{author.bio}</p>
          </div>
        </section>

        <section>
          <div className="py-5">
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

        <section className="md:py-20 my-10">
          <div className="py-5 space-y-2">
            <h3 className="text-xl md:text-3xl font-bold">Tech Stack</h3>
            <p className=" m-0 text-md md:text-xl">My constantly evolving skills - these are the technology I'm capable to use.</p>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-5">
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaHtml5 size={70} />
              <h4>HTML5</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaNodeJs size={70} />
              <h4>CSS</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaJsSquare size={70} />
              <h4>Javascript</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaReact size={70} />
              <h4>React</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaNode size={70} />
              <h4>Node.js</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaGit size={70} />
              <h4>Git</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaSass size={70} />
              <h4>Sass</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaNpm size={70} />
              <h4>NPM</h4>
            </div>
            <div className="flex flex-grow md:flex-grow-0 flex-col items-center w-20 h-20 p-2 md:p-8 md:w-32 md:h-32 bg-blue-300">
              <FaPython size={70} />
              <h4>Python</h4>
            </div>
          </div>
        </section>

        <section className="md:py-20">
          <h3 className="text-xl md:text-3xl font-bold my-5">These are the things I'm currently doing.</h3>
          <div className="md:grid md:grid-cols-2 md:gap-5 md:my-3 md:py-5">
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Building an e-commerce full-stack project</div>
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Learning Node.js</div>
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Improving my UI/UX design Skills</div>
          </div>
        </section>
      </div>

    </main>
  );
}
