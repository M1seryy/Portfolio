import React from "react";
import webStudio from "../assets/webStudio.png";
import mimino from "../assets/mimino.png";
import sneakers from "../assets/react-sneakers.png";
import test from "../assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
  const projects = [
    { id: 1, src: mimino },
    { id: 2, src: sneakers },
    { id: 3, src: webStudio },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((item) => {
            return (
              <div key={item.id} className="shadow-md shadow-gray-600 ">
                <img
                  className="rounded-lg duration-200 hover:scale-105"
                  src={item.src}
                  alt=""
                />
                <div className="flex justify-center items-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
