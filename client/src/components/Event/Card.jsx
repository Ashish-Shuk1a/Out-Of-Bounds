import React from "react";

const Card = () => {
  return (
    <div class="overflow-hidden bg-white rounded-xl shadow hover:scale-[101%] hover:transition-all hover:duration-300">
      <div class="p-5">
        <div class="relative">
          <a href="#" title="" class="block aspect-w-4 aspect-h-3">
            <img
              class="object-cover rounded-xl w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
              alt=""
            />
          </a>

          <div class="absolute top-4 left-4">
            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
              {" "}
              Productivity{" "}
            </span>
          </div>
        </div>
        <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {" "}
          May 12, 2020{" "}
        </span>
        <p class="mt-5 text-2xl font-semibold">
          <a href="#" title="" class="text-black">
            {" "}
            5 Productivity tips to write faster at morning.{" "}
          </a>
        </p>
        <p class="mt-4 text-base text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <a
          href="/check-events"
          title=""
          class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
        >
          Continue Reading
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
