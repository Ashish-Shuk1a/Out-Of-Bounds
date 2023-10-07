import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

function FormPersonalDetails({ step, setStep, user, setUser }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [val, setVal] = useState({
    city: "",
    country: "",
    state: "",
    region: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    console.log(val);
  };

  const socialWellnessEventTypes = [
    { value: "charity", label: "Charity Event" },
    { value: "community_service", label: "Community Service" },
    { value: "yoga_workshop", label: "Yoga Workshop" },
    { value: "meditation_session", label: "Meditation Session" },
    { value: "self_care_workshop", label: "Self-Care Workshop" },
    // Add more event types as needed
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedValues) => {
    setSelectedOptions(
      selectedValues.map((value, index) => {
        return value.value;
      })
    );
    console.log(selectedValues[0].value);
  };
  const saveUserIdToLocalStorage = () => {
    // localStorage.setItem('userId', userId);
  };

  const animatedComponents = makeAnimated();

  const handleNext = async () => {
    try {
      setUser((prev) => ({
        ...prev,
        name: name,
        location: val,
        area_of_interest: selectedOptions,
      }));

      console.log(user);
      let data = JSON.stringify(user);
      console.log(data);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://hackmania-hackathon.vercel.app/api/user/create/profile",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      // setStep(3);
    } catch (error) {
      console.log(error.message);
      alert("Google sign in failed. Please try again later.");
    }
  };
  console.log(user);
  return (
    <div
      className="flex justify-center flex-col items-center align-middle h-screen "
      style={{
        // backgroundImage: `url('https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif')`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold "
      >
        <label
          htmlFor="City"
          className="pb-2 text-sm font-bold pl-3 text-gray-800 text-gray-100"
        >
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="pl-3 py-3 w-full text-sm focus:outline-none border border-black focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 text-gray-400"
        />
        <div className="grid grid-cols-2">
          <div className="pr-3 col-span-1 flex flex-col mb-6">
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
          <div className="pl-3 col-span-1 flex flex-col mb-6">
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
          <div className="pr-3 col-span-1 flex flex-col mb-6">
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
          <div className="pl-3 col-span-1 flex flex-col mb-6">
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
              name="region"
              required
              onChange={handleChange}
              value={val.zip}
              id="ZIP"
              className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 text-gray-400"
              placeholder={86745}
            />
            <div className="flex justify-between items-center pt-1 text-red-400">
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
            </div>
          </div>
        </div>
        <Select
          className="text-black ring mt-4  hover:ring-green-400 outline-none rounded-sm"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={socialWellnessEventTypes}
          onChange={handleSelectChange}
        />
      </div>

      <button
        className="p-1 mt-6 m-1 font-semibold bg-blue-500 
              w-5/12 hover:bg-green-500
              hover:text-white rounded-lg text-xl "
        onClick={handleNext}
      >
        Submit
      </button>
    </div>
  );
}

export default FormPersonalDetails;
