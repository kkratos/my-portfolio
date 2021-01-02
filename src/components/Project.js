import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

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
    <main className="w-9/12 mx-auto p-12">
      <section className="container mx-auto">
        <h1 className="flex text-4xl font-bold justify-center p-10">
          Projects
        </h1>
        <div className="flex flex-col items-start">

          {projectData &&
            projectData.map((project, index) => (
              <div className="flex mx-auto mb-5 shadow-lg p-5">

                <div class="max-w-sm mx-auto rounded-md overflow-hidden">
                  <div className="flex justify-center py-3">
                    <h3 className="text-2xl inline-block uppercase">{project.title}</h3>
                  </div>
                  <div className="flex justify-end w-full h-56 bg-cover">
                    <img src={urlFor(project.pimage).url()} alt="projects" />
                  </div>
                </div>

                <div className="w-96 mx-10">
                  <div className="flex flex-col space-y-6">
                    <div className=" inline-block">
                      <h2 className="text-2xl">Technology Used</h2>
                    </div>
                    <div className="text-lg ">
                      <ul>
                        {project.tags.map((tag, index) => (
                          <li className="bg-blue-50 my-1" key={index}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="">{project.description}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main >
  );
}
