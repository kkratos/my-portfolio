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
        <div className="grid md:grid-cols-2 gap-2">
          {projectData &&
            projectData.map((project, index) => (
              <div className="grid grid-flow-row md:px-4 lg:px-6 py-5" key={index}>
                <div className="flex flex-col bg-white shadow-xl rounded-lg">
                  <div className="">
                    <img src={urlFor(project.pimage).url()} alt=""
                      className="h-56 w-full" />
                  </div>
                  <div className="px-2 py-4">
                    <h1 className="font-bold text-lg">{project.title}</h1>
                    <p className="py-4">
                      {project.description}
                    </p>

                  </div>
                  <div className="mt-auto">
                    <div className="m-2">
                      {project.tags.map((tag, index) => (
                        <li className="inline-flex mr-2 p-1 bg-blue-100 rounded-md" key={index}>{tag}</li>
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
