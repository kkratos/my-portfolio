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
    <main className="lg:w-11/12 max-w-screen-lg m-auto p-6 my-7">

      <div className="my-5">
        <h3 className="text-3xl">Experience</h3>
      </div>

      <div className="my-5 border-b-2 border-gray-200">
        <div className="text-md md:text-xl flex flex-col md:grid md:grid-cols-2">
          <h4 className="text-gray-500"><span className="bg-purple-100">Self-taught Developer</span></h4>
          <h4 className="flex md:justify-end">India</h4>
        </div>
        <div className="text-md md:text-xl flex flex-col my-3 md:m-0 md:grid md:grid-cols-2">
          <h4 className="italic">Fullstack web developer</h4>
          <h4 className="flex md:justify-end">June 2020 - Present</h4>
        </div>

        <div>
          <ul className="py-4 list-disc text-justify">
            <li>Building fullstack application with Reactjs.</li>
          </ul>
        </div>

      </div>

      <div className="my-5 border-b-2 border-gray-200">
        <div className="text-md md:text-xl flex flex-col md:grid md:grid-cols-2">
          <h4 className="text-gray-500"><span className="bg-purple-100">Instahub - Automation Simplified</span></h4>
          <h4 className="flex md:justify-end">Philadelphia, PA</h4>
        </div>
        <div className="text-md md:text-xl flex flex-col my-3 md:m-0 md:grid md:grid-cols-2">
          <h4 className="italic">Mechanical Design Engineer (intern)</h4>
          <h4 className="flex md:justify-end">Sept 2019 - Dec 2019</h4>
        </div>

        <div>
          <ul className="py-4 list-disc text-justify">
            <li>Worked with engineers in design, assembly, test and modification of electro-mechanical product Snap-on Lightning
                Automation Retrofit Device.</li>
            <li>Assisted the supervisor with part design/calculation and drafted detailed 2D manufacturing drawings using Solidworks
                and AutoCAD.</li>
            <li>Iterated the part design and prototyping of the device using the Prusa3D printers and conducted the repair and
                installation of new printers.</li>
            <li>
              <strong>Updated 20 CAD files</strong> and created accessible drawings of the existing products for reference for other engineers.
            </li>
          </ul>
        </div>

      </div>

      <div className="my-5 border-b-2 border-gray-200">
        <div className="text-md md:text-xl flex flex-col md:grid md:grid-cols-2">
          <h4 className="md:text-xl text-gray-500"><span className="bg-purple-100">NYU Composite Material and Mechanics Laboratory</span></h4>
          <h4 className="flex md:justify-end">New York, NY</h4>
        </div>
        <div className="text-md md:text-xl flex flex-col my-3 md:m-0 md:grid md:grid-cols-2">
          <h4 className="italic">Graduate Researcher</h4>
          <h4 className="flex md:justify-end">June 2019 - Aug 2019</h4>
        </div>

        <div>
          <ul className="py-4 list-disc text-justify">
            <li>Researched ways to improve structural health monitoring system for wind turbine blade using low-cost fiber-optic sensor.</li>
            <li>Designed a 3D model of wind turbine blade in Solidworks and performed structural and modal analysis in ANSYS.</li>
            <li>Compiled 15-20 research papers for a review article on residual thermal stress in metal additive manufacturing.</li>
          </ul>
        </div>
      </div>

      <div className="my-5 border-b-2 border-gray-200">
        <div className="text-md md:text-xl flex flex-col md:grid md:grid-cols-2">
          <h4 className="text-gray-500"><span className="bg-purple-100">NYU Vertically Integrated Project - Soft Robotics</span></h4>
          <h4 className="flex md:justify-end">New York, NY</h4>
        </div>
        <div className="text-md md:text-xl flex flex-col my-3 md:m-0 md:grid md:grid-cols-2">
          <h4 className="italic">Graduate Assistant</h4>
          <h4 className="flex md:justify-end">Oct 2019 - Nov 2019</h4>
        </div>

        <div>
          <ul className="py-4 list-disc text-justify">
            <li>Conducted brainstorming and problem solving sessions for undergraduate students in soft robotics course.</li>
            <li>Tutored students in Solidworks and 3D printing/Cura software with hands-on exercise and  training on Ultimaker 3D Printers.</li>
            <li><strong>Assisted 18-20 students</strong> with material selection, design, construction and testing of soft robotics structures for a credit
            course.</li>
          </ul>
        </div>
      </div>
      <div className="my-5 border-b-2 border-gray-200">
        <div className="text-md md:text-xl flex flex-col md:grid md:grid-cols-2">
          <h4 className="text-gray-500"><span className="bg-purple-100">NYU Autonomous vehicle - Mechanical Team</span></h4>
          <h4 className="flex md:justify-end">New York, NY</h4>
        </div>
        <div className="text-md md:text-xl flex flex-col my-3 md:m-0 md:grid md:grid-cols-2">
          <h4 className="italic">Mechanical Design Engineer</h4>
          <h4 className="flex md:justify-end">Sept 2017 - July 2018</h4>
        </div>

        <div>
          <ul className="py-4 list-disc text-justify">
            <li>Collaboratively designed an autonomous vehicle for annual Intelligent Ground Vehicle Competition (IGVC'18). Placed <strong>3rd out of 10 teams</strong> for a self-drive challenge.</li>
            <li>Worked closely with purchasing team to procure hardware and tools required and assisted in securing sponsorship.</li>
            <li>Assisted the <strong>team of 10 engineers</strong> in converting a golf cart into an self-driving vehicle under <strong>$6000</strong> using inexpensive
            micro-controllers and 3D printing.</li>
            <li>Responsible for assembling and disassembling of vehicle, electrical wiring routing and installation of hardware.</li>
            <li>3D printed prototypes for sensor mounts and conducted fit and functionality test on the vehicle.</li>
          </ul>
        </div>
      </div>


      {
        //! removed from this page and moved to home page. 
      }

      <div className="hidden container mx-auto relative">
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
          <div className="md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:my-3">
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Building an e-commerce full-stack project</div>
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Learning Node.js</div>
            <div className="p-6 text-center bg-blue-300 text-black my-2 md:text-lg md:rounded-2xl md:border-4 md:border-gray-200 shadow-lg">Improving my UI/UX design Skills</div>
          </div>
        </section>
      </div>

    </main>
  );
}
