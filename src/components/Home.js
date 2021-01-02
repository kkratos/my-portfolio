import React from "react";
import image from "../assets/nyc.jpeg";
import Post from "./Post";

function Home() {
  return (
      <main className="w-9/12 m-auto min-h-screen">
        <section className="flex mt-10">
          <div>
            <img src={image} alt="profile" className="w-48 rounded-full" />
          </div>

          <div className="flex flex-col justify-center mx-7">
            <h1 className="text-3xl text-blue-700">Hello, I'm Kamal</h1>
            <h3 className="mt-4 text-2xl text-gray-500 ">
              Mechanical Engineer - Self-taught Developer.
          </h3>
            <p className="text-2xl text-gray-500">who is willing to learn and create outstanding applications!</p>
          </div>
        </section>

        <section className="flex flex-col mt-10">
          <h3 className="text-3xl font-bold mb-6">Articles</h3>
          <Post />
        </section>
      </main>
  );
}

export default Home;
