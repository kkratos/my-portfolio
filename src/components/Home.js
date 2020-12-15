import React from "react";
import image from "../me.jpg";

function Home() {
  return (
    <main>
      <section className="flex justify-center mt-10">
        <div>
          <img src={image} alt="profile" className="w-48" />
        </div>
      </section>

      <section className="relative flex justify-center px-8">
        <h1 className="text-4xl text-blue-800 font-bold cursive leading-none lg:leading-snug home-name">
          Hi, I'm Kamal.
        </h1>
      </section>
      <section className="flex flex-col justify-center">
        <h3 className="text-green-700 text-2xl text-center">
          Mechanical Engineer, Self-motivated Developer.
        </h3>
        <p className="text-center text-xl">who is willing to learn and create outstanding applications!</p>
      </section>
    </main>
  );
}

export default Home;
