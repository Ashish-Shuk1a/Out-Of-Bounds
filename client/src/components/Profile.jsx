import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [image, setimage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  const getUserIdFromLocalStorage = () => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  };

  // Initialize the userId from localStorage on component mount
  useEffect(() => {
    getUserIdFromLocalStorage();

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://hackmania-hackathon.vercel.app/api/user/${userId}/profile`,
      headers: {},
    };

    console.log(userId);
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data?.data));
        setUser(response.data?.data);
        const temp = response.data?.data;

        setVal({
          username: temp?.name,
          about: temp?.about,
          email: temp?.email,
          region: temp?.location.region,
          city: temp?.location.city,
          country: temp?.location.country,
          zip_code: temp?.location.zip_code,
          state: temp?.location.state,
        });
        setIsChecked2(temp?.notification.on_email)
        setIsChecked1(temp?.notification.on_num)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const [val, setVal] = useState({
    username: user?.name,
    about: "",
    email: user?.email,
    region: user?.region,
    city: user?.city,
    country: user?.country,
    zip_code: 0,
    state: user?.state,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    console.log(val);
  };

  const handleToggle = (e) => {
    setIsChecked((prev) => !prev);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleToggle1 = (e) => {
    setIsChecked1((prev) => !prev);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleToggle2 = (e) => {
    setIsChecked2((prev) => !prev);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  useEffect(() => {
    setIsChecked(false);
    setIsChecked1(false);
    setIsChecked2(false);
  }, []);

  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });

    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  console.log(user?.name);
  console.log(val.username);
  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white md:px-40 pl-10 ">
        <div className="container mx-auto  rounded">
          <div className="xl:w-full border-b border-gray-300 border-gray-0 py-5 bg-white ">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 text-ray-100 font-bold">
                Profile
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 text-gra-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className=" mx-auto xl:mx-0">
              <div className="rounded flex justify-center items-center relative mt-8 h-60">
                <div className="w-60 h-60 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                    alt
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    <p className="text-xs text-black"></p>
                    <div className="relative text-black bottom-0 mt-60 right-0">
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setimage(e.target.files[0])}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 text-gra-100"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={val.username}
                  required
                  className="border border-gray-300 border-gray-00 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder="@example"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 text-gry-100"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  onChange={handleChange}
                  value={val.about}
                  required
                  className="bg-transparent border border-gray-300 border-gry-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder="Let the world know who you are"
                  rows={5}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 textgray-400">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white bg-gry-800 mt-10 rounded px-4">
          <div className="xl:w-full border-b border-gray-300 border-gray-700 py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 text-gray-100 font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto  pt-4">
            <div className="container grid grid-cols-2 mx-auto">
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <label
                  htmlFor="Email"
                  className="pb-2 text-sm font-bold text-gray-800 text-gray-100"
                >
                  Email
                </label>
                <div className="border border-green-400 shadow-sm rounded flex">
                  <div className="px-4 py-3 text-gray-100 flex items-center border-r border-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="black"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    onChange={handleChange}
                    value={val.email}
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 text-gray-400"
                    placeholder="example@gmail.com"
                  />
                </div>
                {/* <div className="flex justify-between px-6 col-span-1 items-center pt-1 text-green-400">
                  <p className="text-xs">Email submission success!</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                  0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                      stroke="currentColor"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                    />
                  </svg>
                </div> */}
              </div>
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <label
                  htmlFor="region"
                  className="pb-2 text-sm font-bold text-gray-800 text-gay-100"
                >
                  Region
                </label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  onChange={handleChange}
                  value={val.region}
                  required
                  className="border border-gray-300 border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder
                />
              </div>
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <label
                  htmlFor="City"
                  className="pb-2 text-sm font-bold text-gray-800 text-gray-100"
                >
                  City
                </label>
                <div className="border border-gray-300 border-gray-700 shadow-sm rounded flex">
                  <input
                    type="text"
                    id="City"
                    name="city"
                    onChange={handleChange}
                    value={val.city}
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 text-gray-400"
                    placeholder="Los Angeles"
                  />
                  <div className="px-4 flex items-center border-l border-gray-300 border-gray-700 flex-col justify-center text-gray-500 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-up"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <label
                  htmlFor="State/Province"
                  className="pb-2 text-sm font-bold text-gray-800 text-gray-100"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  id="State/Province"
                  name="state"
                  onChange={handleChange}
                  value={val.state}
                  required
                  className="border border-gray-300 border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder="California"
                />
              </div>
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <label
                  htmlFor="Country"
                  className="pb-2 text-sm font-bold text-gray-800 text-gray-100"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="Country"
                  name="country"
                  onChange={handleChange}
                  value={val.country}
                  required
                  className="border bg-transparent border-gray-300 border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder="United States"
                />
              </div>
              <div className="px-6 col-span-1 flex flex-col mb-6">
                <div className="flex items-center pb-2">
                  <label
                    htmlFor="ZIP"
                    className="text-sm font-bold text-gray-800 text-gray-100"
                  >
                    ZIP/Postal Code
                  </label>
                  <div className="ml-2 cursor-pointer text-gray-600 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="zip_code"
                  required
                  onChange={handleChange}
                  value={val.zip_code}
                  id="ZIP"
                  className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 text-gray-400"
                  placeholder={86745}
                />
                {/* <div className="flex justify-between items-center pt-1 text-red-400">
                  <p className="text-xs">Incorrect Zip Code</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x-circle"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={15} y1={9} x2={9} y2={15} />
                    <line x1={9} y1={9} x2={15} y2={15} />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 rounded bg-gray-100 bg-gry-700 w-11/12 xl:w-full">
          <div className="xl:w-full py-5 px-8">
            <div className="flex items-center mx-auto">
              <div className="container mx-auto">
                <div className="mx-auto xl:w-full">
                  <p className="text-sm text-gray-500 text-gray-400 pt-1">
                    Get updates of any new activity or features. Turn on/off
                    your preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto pb-6">
            <div className="flex items-center pb-4 border-b border-gray-300 border-gray-700 px-8 text-gray-800 text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              {/* <p className="text-sm font-bold ml-2 text-gray-800 text-gray-100">
                Via Email
              </p> */}
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center mb-8 mt-4">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Mobile
                  </p>
                  <p className="text-sm text-gray-500 text-gray-400">
                    Get notified when a post or comment is made via SMS
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isChecked}
                      className="sr-only peer"
                      name="tog1"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Email
                  </p>
                  <p className="text-sm text-gray-500 text-gray-400">
                    Get notified when a post or comment is made via Email
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isChecked1}
                      name="tog2"
                      className="sr-only peer"
                      checked={isChecked1}
                      onChange={handleToggle1}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Product Updates
                  </p>
                  <p className="text-sm text-gray-500 text-gray-400">
                    Get notifitied when there is a new product feature or
                    upgrades
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isChecked2}
                      name="tog3"
                      className="sr-only peer"
                      checked={isChecked2}
                      onChange={handleToggle2}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-4 border-b border-gray-300 border-gray-700 px-8">
              <div className="flex items-center text-gray-800 text-gray-100">
                {/* <p className="text-sm font-bold ml-2 text-gray-800 text-gray-100">
                  Push Notifications
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-11/12 xl:w-full">
          <div className="w-full py-4 sm:px-0 bg-white bg-gay-800 flex justify-end">
            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 bg-gray-00 rounded text-indigo-600 text-indigo-600 px-6 py-2 text-xs mr-4">
              Cancel
            </button>
            <button
              className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
