import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'

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
    <main className="relative w-9/12 m-auto">
      <div className="container mx-auto relative">
        <section className="rounded-xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-3xl w-32 h-32 lg:w-64 lg:h-64 mr-8 "
            alt="kamal"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-4xl text-black-300 mb-4 ">
              Hey there. I'm{" "}
              <span className="text-black-100">{author.name}</span>
            </h1>
            <p className="text-black-200 text-lg">{author.bio}</p>
          </div>
        </section>


        <section className="p-20">
          <div className="py-5 h-30 space-y-2">
            <h3 className="text-3xl font-bold">Tech Stack</h3>
            <p className="text-xl">My constantly evolving skills - these are the technology I'm capable to use.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col items-center p-8 w-32 h-32 bg-blue-100">
              <FaHtml5 size={70} />
              <h4>HTML5</h4>
            </div>
            <div className="flex flex-col items-center p-8 w-32 h-32 bg-blue-100">
              <FaNodeJs size={70} />
              <h4>CSS</h4>
            </div>
            <div className="flex flex-col items-center p-8 w-32 h-32 bg-blue-100">
              <FaJsSquare size={70} />
              <h4>Javascript</h4>
            </div>
            <div className="flex flex-col items-center p-8 w-32 h-32 bg-blue-100">
              <FaReact size={70} />
              <h4>React</h4>
            </div>
            <div className="flex flex-col items-center p-8 w-32 h-32 bg-blue-100">
              <FaNode size={70} />
              <h4>Node.js</h4>
            </div>
          </div>
        </section>

        <section className="p-20">
          <h3 className="text-3xl font-bold">These are the things I'm currently doing.</h3>
          <div className="grid grid-cols-2 gap-5 my-3 py-5">
            <div className="p-6 text-center bg-black text-white text-lg rounded-2xl border-4 border-gray-200 shadow-lg">Building my first full-stack project</div>
            <div className="p-6 text-center bg-black text-white text-lg rounded-2xl border-4 border-gray-200 shadow-lg">Learning Node.js</div>
            <div className="p-6 text-center bg-black text-white text-lg rounded-2xl border-4 border-gray-200 shadow-lg">Improving my UI/UX design Skills</div>
          </div>
        </section>
      </div>

    </main>
  );
}
