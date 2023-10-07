import React from "react";
import { useState } from "react";
const Individual_description = () => {
  const [event_desc, setevent_desc] = useState({
    location: "Mumbai",
    "Duration ": 5,
    country: "India",
    State: "Maharashtra",
    Event_Name: "Seekeers",
    Description: "We aim at providing fun and learning to the senior citizens",
    type: "Social cause",
    count: 77,
  });

  return (
    <>
      <div className="w-max bg-gray-200 p-3 rounded-xl my-5">
        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center  w-full ">
          <div className="pb-4 md:pb-8 w-full ">
            <img
              className=" h-40 w-60 rounded-md hidden md:block"
              src="https://media.istockphoto.com/id/533341382/photo/we-want-you-to-join-our-team.jpg?s=612x612&w=is&k=20&c=FjHpjlYXxEQhpvB9uFMULxgAJ1tDOVjUXDyqxYWLbgY="
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src="https://i.ibb.co/L039qbN/Rectangle-10.png"
              alt="dress"
            />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start  w-full  p-8 ">
            <div className="w-full flex flex-col justify-start items-start ">
              <h3 className="text-xl xl:text-2xl font-semibold  text-gray-800">
                {event_desc.Event_Name}
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm leading-none whitespace-nowrap  text-gray-800">
                  <span className="text-gray-30 font-bold">Description: </span>
                  {"  "}
                  {event_desc.Description}
                </p>
                <p className="text-sm leading-none text-gray-800">
                  <span className="text-gray-00 font-bold">Location: </span>
                  {"  "}
                  {event_desc.location}
                </p>
                <p className="text-sm leading-none text-gray-800">
                  <span className="text-gray-00 font-bold">Type: </span>
                  {"  "}
                  {event_desc.type}
                </p>
                <p className="text-sm leading-none text-gray-800">
                  <span className="text-gray-30 font-bold">Duration: </span>
                  {"  "}
                  {event_desc["Duration "]} hrs
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base xl:text-lg leading-6">
                {" "}
                <span className="text-red-300 line-through"> </span>
              </p>
              <p className="text-base xl:text-lg leading-6 text-gray-800"></p>
              <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                {event_desc.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual_description;
