import React from 'react'
import {useState} from 'react'

const Page2 = ({ setNext, next,eventData,setEventData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    console.log(eventData);
  };
const submits = () => {
  setNext(2);
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
                Type of Event
              </label>
              <input
                type="name"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="Event Type"
                placeholder="Event Type"
                name="type"
                value={eventData.type}
                onChange={handleChange}
              />
            </div>

            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-800" id="lastName">
                Start Date
              </label>
              <input
                type="date"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="Start Date"
                placeholder="The event aims to start at.."
                name="start_date"
                value={eventData.start_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="md:flex items-center lg:ml-24 mt-8">
            <div class="md:w-64">
              <label class="text-sm leading-none text-gray-800" id="end_date">
                End Date
              </label>
              <input
                type="date"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="End date"
                placeholder=""
                name="end_date"
                value={eventData.end_date}
                onChange={handleChange}
              />
            </div>
            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
              <label class="text-sm leading-none text-gray-800" id="location">
                Time
              </label>
              <input
                type="number"
                tabindex="0"
                class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="Time"
                placeholder="Time"
                name="time"
                value={eventData.time}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="inline-flex sm:ml-10 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded" onClick={submits}>
        <p className="text-sm font-medium leading-none text-white">Next</p>
      </button>
    </div>
  );
};

export default Page2