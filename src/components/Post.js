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
                  <div className="flex py-3 hover:bg-gray-100">
                    <time className="flex items-end w-36">{new Date(post.publishedAt).toDateString()}</time>
                    <h3 className="text-xl rounded">
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