import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function FormPersonalDetails({ step, setStep }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const socialWellnessEventTypes = [
    { value: "charity", label: "Charity Event" },
    { value: "community_service", label: "Community Service" },
    { value: "yoga_workshop", label: "Yoga Workshop" },
    { value: "meditation_session", label: "Meditation Session" },
    { value: "self_care_workshop", label: "Self-Care Workshop" },
    // Add more event types as needed
  ];
  const animatedComponents = makeAnimated();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const handleNext = async () => {
    try {
      setStep(3);
    } catch (error) {
      console.log(error.message);
      alert("Google sign in failed. Please try again later.");
    }
  };

  return (
    <div
      className="flex justify-center items-center align-middle h-screen "
      style={{
        // backgroundImage: `url('https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif')`,
        backgroundSize: "cover ",
      }}
    >
      <div
        className="flex flex-col w-10/12 xl:w-4/12 lg:w-5/12 md:w-6/12 p-10 justify-center
         text-white rounded-2xl  bg-blue-300 bg-opacity-20 backdrop-blur-lg drop-shadow-lg
        height-40 font-semibold "
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="m-1 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
        />
        <input
          type="text"
          className="m-1 mt-5 p-1 text-black ring ring-offset-2  hover:ring-green-400 outline-none rounded-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Location"
        />
        <Select 
        className="text-black ring mt-4  hover:ring-green-400 outline-none rounded-sm"
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[
            socialWellnessEventTypes[4],
            socialWellnessEventTypes[5],
          ]}
          isMulti
          options={socialWellnessEventTypes}
        />

        <button
          className="p-1 mt-6 m-1 font-semibold bg-blue-500 
              w-5/12 hover:bg-green-500
              hover:text-white rounded-lg text-xl "
          onClick={handleNext}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormPersonalDetails;
