import React from "react";
import { useState } from "react";
import About from "./InsideEvent/About";
// import Events from "./InsideEvent/Events";
import Calender from "../Calender/Calender";

import CounterContainer from "../Hero/CounterContainer";
import Tilt from "react-parallax-tilt";
import Description from "./InsideEvent/About_card/Description";

const CheckEvent = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  const [upperdata, setUpperdata] = useState({
    location: "Mumbai",
    Members: 5,
    Since: 2018,
    "Organised-by": "Ayesha Chhapra",
  });
  return (
    <>
      <div>
        <div className="dark:bg-gry-900 p-10">
          <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div className="md:mt-3">
                <p className="text-gry-800 dark:text-black lg:text-4xl text-3xl font-extrabold leading-9">
                  Newyorks biggest travelling community
                </p>
              </div>

              <div className="grid grid-cols-2 mt-8 gap-y-6">
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Location:{" "}
                    <span className="font-semibold md:font-medium">
                      {upperdata.location}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Members:{" "}
                    <span className="font-semibold md:font-medium">
                      {upperdata.Members}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Since:{" "}
                    <span className="font-semibold md:font-medium">
                      {upperdata.Since}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gry-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Organised by:{" "}
                    <span className="font-semibold md:font-medium">
                      {upperdata["Organised-by"]}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <Tilt>
                <img
                  className="w-full"
                  src="https://media.istockphoto.com/id/1330784998/photo/group-of-people-listening-to-a-presentation.jpg?s=612x612&w=is&k=20&c=5mKScNuIRrSE7etL6zXBzqCrMbRo6dMlGnZoZTjR1m0="
                  alt="laptops"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sm:hidden relative w-11/12 mx-auto rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select
            aria-label="Selected tab"
            className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
          >
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option selected className="text-sm text-gray-600">
              Active{" "}
            </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
          </select>
        </div>
        <div className=" ml-10 sm:mt-0">
          {/* <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p className="text-sm font-medium  leading-none text-white">
              Join Event
            </p>
          </button> */}
          <button className=" navbutton text-xl p-4 text-white font-extrabold bg-blue-600 rounded-2xl">
            <span>Join Us!</span>
          </button>
        </div>
        <div className=" text-center">
          <br /> <br />
          <CounterContainer />
          <br />
          <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Follow Us on Instagram
          </h2>
          <p className=" font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on instagram @
            <span className="underline cursor-pointer">followuspleaseee</span>{" "}
            and tag us to get featured on our timeline
          </p>
        </div>
        <div className="justify-center items-center w-full flex-wrap hidden sm:block bg-white rounded shadow">
          <div className="xl:w-full flex justify-center items-center mt-10 xl:mx-0 pl-5 pr-5 h-12">
            <ul className="flex">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus == 1
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus == 1 ? "About" : "About"}
                </span>
                {activeStatus == 1 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus == 2
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus == 2 ? "Our Members" : "Our Members"}
                </span>
                {activeStatus == 2 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus == 3
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus == 3 ? "Calendar" : "Calendar"}
                </span>
                {activeStatus == 3 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(4)}
                className={
                  activeStatus == 4
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus == 4 ? "Discussion" : "Discussion"}
                </span>
                {activeStatus == 4 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {activeStatus == 1 && <About />}
      {activeStatus == 2 && <Description />}
      {activeStatus == 3 && <Calender />}
      {/* {activeStatus == 4 && <Discussion />} */}
    </>
  );
};

export default CheckEvent;
