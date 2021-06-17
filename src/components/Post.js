import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
        },
        publishedAt
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-full">
      <section className="container mx-auto">
        <div className="flex flex-col">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <div className="flex flex-col md:flex-row mb-3 mx-3 py-2 md:mx-0 hover:bg-gray-100 hover:text-black">
                    <time className="text-sm md:text-md flex items-end md:w-32 text-gray-500 ">{new Date(post.publishedAt).toDateString()}</time>
                    <h3 className=" text-lg md:text-xl">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}