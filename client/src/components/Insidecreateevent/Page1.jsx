import React, { useState } from "react";

const Page1 = ({ setNext, next, eventData, setEventData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    console.log(eventData);
  };
  const submits = () => {
    setNext(!next);
  };
  return (
    <div>
      <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
        <div class="w-80">
          <div class="flex items-center">
            <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">
              Event Information
            </h1>
          </div>
          <p class="mt-4 text-sm leading-5 text-gray-600">
            Information about the section could go here and a brief description
            of how this might be used.
          </p>
        </div>
        <div>
          <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
            <div class="md:w-64">
              <label class="text-sm leading-none text-gray-800" id="EventName">
                Event Name
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="Event Name"
                placeholder="Event Name"
                name="title"
                onChange={handleChange}
                value={eventData.title}
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-800" id="lastName">
                Event Description
              </label>
              <textarea
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="lastName"
                placeholder="The event aim at.."
                name="description"
                onChange={handleChange}
                value={eventData.description}
              />
            </div>
          </div>
          <div class="md:flex items-center lg:ml-24 mt-8">
            <div class="md:w-64">
              <label
                class="text-sm leading-none text-gray-800"
                id="emailAddress"
              >
                Scope
              </label>
              <input
                type="text"
                name="scope"
                onChange={handleChange}
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="emailAddress"
                value={eventData.scope}
                placeholder="youremail@example.com"
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-800" id="location">
                Location
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="location"
                placeholder="Location"
                name="location"
                onChange={handleChange}
                value={eventData.location}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="inline-flex sm:ml-10 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
        onClick={submits}
      >
        <p className="text-sm font-medium leading-none text-white">Next</p>
      </button>
    </div>
  );
};

export default Page1;
