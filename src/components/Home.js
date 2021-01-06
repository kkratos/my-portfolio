import React from "react";
import image from "../assets/nyc.jpeg";
import Post from "./Post";

function Home() {
  return (
    <main className="lg:w-11/12 max-w-screen-lg m-auto min-h-screen p-4 my-7">
      <section className="md:flex mt-10">
        <div className="flex justify-center">
          <img src={image} alt="profile" className="w-48 rounded-full my-5 md:m-0" />
        </div>

        <div className="md:flex md:flex-col justify-center">
          <div className="md:mx-7">
            <h1 className="text-xl md:text-2xl text-blue-700 text-center md:text-left">Hello, I'm Kamal</h1>
            <h3 className="text-md md:text-2xl text-gray-500 text-center md:text-left">Mechanical Engineer / Self-taught Developer.</h3>
            <p className="text-md md:text-2xl text-gray-500 text-center md:text-left">who is willing to learn and create outstanding applications!</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-10">
        <h3 className="text-center md:text-left text-xl md:text-3xl font-bold my-5">Articles</h3>
        <Post />
      </section>
    </main>
  );
}

export default Home;
