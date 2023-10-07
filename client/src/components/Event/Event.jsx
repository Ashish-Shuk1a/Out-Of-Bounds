import React from "react";
import Card from "./Card";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/globe.png";
import Typewriter from "typewriter-effect";

const Event = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
          <div class="flex-1 text-center lg:text-left">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest Events{" "}
              <Typewriter
                options={{
                  strings: ["Around you!", "Around the world!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="hidden lg:flex lg:items-center lg:space-x-3">
            <button
              type="button"
              class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button
            type="button"
            class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
          <img src={Atom} />
        </div>
        <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
          <img src={Globe} />
        </div>
        <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
          <img src={Maqam} />
        </div>
      </div>
    </section>
  );
};

export default Event;
