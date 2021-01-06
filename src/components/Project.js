import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub } from 'react-icons/fa'

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        pimage,
        title,
        date,
        place,
        language,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="lg:w-11/12 max-w-screen-lg m-auto min-h-screen p-4 my-7">
      <section>
        <h1 className="flex text-4xl font-bold justify-center p-10">
          Projects
        </h1>
        <div className="md:flex">
          {projectData &&
            projectData.map((project, index) => (
              <div className="grid grid-flow-row w-full lg:w-1/2 md:px-4 lg:px-6 py-5" key={index}>
                <div className="bg-white hover:shadow-xl">
                  <div className="">
                    <img src={urlFor(project.pimage).url()} alt=""
                      className="h-56 w-full border-white border-8 hover:opacity-25" />
                  </div>
                  <div className="px-2 py-4">
                    <h1 className="font-bold text-lg">{project.title}</h1>
                    <p className="py-4">
                      {project.description}
                    </p>
                    <div>
                      {project.tags.map((tag, index) => (
                        <li className="inline-flex mr-2 p-1 bg-blue-100 rounded-md" key={index}>{tag}</li>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-end pt-5 ">
                      <a href={project.link} alt={project.title} target="_blank" rel="noreferrer">
                        <FaGithub style={{ height: 25, width: 25 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* {projectData &&
          projectData.map((project, index) => (

            <div classNameName="md:flex my-5 shadow-lg" key={index}>

              <div classNameName="mb-3 md:m-0">
                <div classNameName="flex justify-center py-3">
                  <h3 classNameName="text-lg md:text-2xl inline-block uppercase">{project.title}</h3>
                </div>
                <div classNameName="">
                  <img classNameName="" src={urlFor(project.pimage).url()} alt="projects" />
                </div>
              </div>


              <div classNameName="flex flex-col px-3 justify-between">
                <div classNameName="">
                  <h2 classNameName="md:text-2xl">Technology Used</h2>
                </div>
                <div classNameName="text-lg ">
                  <ul>
                    {project.tags.map((tag, index) => (
                      <li classNameName="bg-blue-50" key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div classNameName="">{project.description}</div>
              </div>

            </div>
          ))} */}
        </div>
      </section>
    </main >
  );
}

// flex flex-col md:flex-row mb-5 md:p-5 shadow-lg