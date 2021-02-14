import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
        poster,
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
    <main className="lg:w-11/12 max-w-screen-lg m-auto min-h-screen p-6 my-7">
      <section>
        <h1 className="flex text-4xl font-bold justify-center p-10">
          Projects
        </h1>
        <div className="grid grid-col-1 md:mx-auto w-4/5 2 p-4">
          {projectData &&
            projectData.map((project, index) => (
              <div className="grid grid-flow-row md:px-4 lg:px-6 py-5" key={index}>
                <div className="flex flex-col bg-white hover:shadow-xl rounded-xl p-3 shadow-lg">
                  <div className="overflow-hidden">
                    <img src={urlFor(project.poster).url()} alt={project.title} />
                  </div>
                  <div className="px-2 py-4">
                    <h1 className="font-bold text-lg"><span className="bg-red-100">{project.title}</span></h1>
                    <p className="py-4">
                      {project.description}
                    </p>

                  </div>
                  <div className="mt-auto">
                    <div className="flex m-2">
                      {project.tags.map((tag, index) => (
                        <li className="list-none text-center text-sm mr-2 p-1 bg-blue-100 rounded-md" key={index}>{tag}</li>
                      ))}
                    </div>
                    <div className="flex mt-auto py-2 px-2">
                      <a href="https://www.github.com/kkratos" alt={project.title} target="_blank" rel="noreferrer">
                        <FaGithub className="mr-3" style={{ height: 25, width: 25 }} />
                      </a>
                      <a href={project.link} alt={project.title} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="mr-3" style={{ height: 25, width: 25 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main >
  );
}
