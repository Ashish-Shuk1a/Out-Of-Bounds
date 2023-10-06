import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoimagewhite from "./Hirecruit.png";
import logoimageblack from "./Hirecruitblack.png";
import Dropdownmenu from "./Dropdownmenu";

const Navbar = ({ isTopOfpage }) => {
  // console.log(user?.email)
  const [sidebar, setSidebar] = useState(false);
  const user = {};
  return (
    <div
      className="sticky top-0 left-0  z-50 rounded-2xl  
    height-40 font-semibold "
    >
      <div
        className={`${
          isTopOfpage
            ? "bg-white text-black"
            : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
        } drop-shadow-lg shadow-2xl  p-1`}
      >
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="font-extrabold text-2xl cursor-pointer  underline decoration-indigo-500  ml-3 ">
              <Link to="/" className="font-serif">
                <img
                  className="h-[25px]"
                  src={isTopOfpage ? logoimageblack : logoimagewhite}
                  alt="HireVerse"
                />
              </Link>
            </h1>
          </div>
<Dropdownmenu/>
          {user?.email ? (
            <div>
              <div className="hidden md:block">
                <button className=" hover:scale-105  mx-3 ">
                  <Link to="/">Home</Link>
                </button>
                <button className=" hover:scale-105  mx-3 ">
                  <Link to="/postjob">Post a Job</Link>
                </button>
                <button className=" hover:scale-105  mx-3 ">
                  <Link to="/search">Search</Link>
                </button>
                <button className=" font-bold mx-1 mr-2 p-1 hover:scale-105">
                  <Link to="/profile">{/* {user.displayName} */}</Link>
                </button>
                <button
                  onClick={() => {}}
                  className="navbutton p-2 rounded-xl"
                  // className='text-white bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold mx-1 p-2 rounded-3xl px-3 hover:scale-105 '
                >
                  <span className="text-white">SignOut</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <button className=" hover:scale-105  mx-3 ">
                <Link to="/">Home</Link>
              </button>
              <button className=" hover:scale-105  mx-3 ">Post a Job</button>
              <button className=" hover:scale-105  mx-3 ">
                <Link to="/search">Search</Link>
              </button>
              <button className=" font-bold mx-1 mr-2 hover:scale-105  p-2 rounded-xl">
                <Link to="/signup">Sign Up</Link>
              </button>
              <button
                className="navbutton p-2 rounded-xl"
                // className='text-white bg-gradient-to-r from-indigo-500 to-purple-500   font-semibold mx-1 py-2 my-1 rounded-3xl px-3 hover:scale-105'
              >
                <Link to="/signin">
                  <span className="text-white">Sign In</span>
                </Link>
              </button>
            </div>
          )}
          <div
            onClick={() => setSidebar(!sidebar)}
            className="text-xl rounded-full drop-shadow-lg shadow-2xl bg-white p-2 cursor-pointer md:hidden"
          >
            {sidebar ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div
        className={
          sidebar
            ? "md:hidden fixed left-0 top-15 flex flex-col items-center justify-between w-full h-[95%] bg-white ease-in duration-300 z-10 p-4 "
            : "fixed left-[-100%] top-15 flex flex-col h-[95%] items-center justify-between ease-in duration-300 z-10"
        }
      >
        <ul className="w-full">
          <li className="font-bold my-2 py-2  px-3 drop-shadow-md shadow-md ">
            <h1 className="hover:scale-105 w-min">
              <Link onClick={() => setSidebar(false)} to="/">
                Home
              </Link>
            </h1>
          </li>
          <li className="font-bold my-2 py-2 px-3 drop-shadow-md shadow-md">
            <h1
              className="hover:scale-105 w-min"
              onClick={() => setSidebar(false)}
            >
              {user?.email ? (
                <Link to="/account">Account</Link>
              ) : (
                <Link to="/">Account</Link>
              )}
            </h1>
          </li>
        </ul>
        <div className="w-full">
          {user?.email ? (
            <div>
              <div className="flex flex-col mb-6 w-full border-b">
                <button
                  onClick={() => {}}
                  className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold  p-2 rounded-md drop-shadow-lg shadow-2xl hover:scale-105 hover:ease-in hover:duration-300"
                >
                  SignOut
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col my-3 w-full border-b ">
              <button className="text-black font-bold bg-white p-2 drop-shadow-lg shadow-2xl my-3 rounded-md hover:scale-105 hover:ease-in hover:duration-300">
                <Link onClick={() => setSidebar(false)} to="/signup">
                  Sign Up
                </Link>
              </button>
              <button className="text-white bg-black font-semibold p-2 rounded-md drop-shadow-lg shadow-2xl hover:scale-105 hover:ease-in hover:duration-300">
                <Link onClick={() => setSidebar(false)} to="/signin">
                  Sign In
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
