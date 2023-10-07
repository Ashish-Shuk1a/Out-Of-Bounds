import React from "react";
import Page1 from "./Insidecreateevent/Page1";
import Page2 from "./Insidecreateevent/Page2";
import axios from "axios";
import { useState } from "react";
import Page3 from "./Insidecreateevent/Page3";
const CreateEvent = () => {
  const [next, setNext] = useState(0);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    scope: "",
    location: {
      region: "",
      city: "",
      state: "",
      country: "",
    },
    req_volunteers: 0,
    type: "",
    start_date: "",
    end_date: "",
    time: "",
    open: true,
    res_req: false,
    clip_req: false,
  })

  const handleCreateEvent = () => {
  let data = JSON.stringify(eventData);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://hackmania-hackathon.vercel.app/api/admin/65202b969638221c01da122e/event/create",
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
}

  return (
    <>
      <div className="flex items-center justify-center">
        <div class="xl:w-10/12 w-full px-8">
          <div class="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
            <div class="w-52 h-16 relative md:mt-0 mt-4">
              <img
                src="https://i.ibb.co/DwNs7zG/Steps.png"
                alt="step1"
                class="w-full h-full"
              />
              <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p class="w-full text-sm font-medium leading-4 text-white">
                  Event Info 1
                </p>
                <p class="w-full text-xs mt-1 leading-none text-white">
                  Description of info 1
                </p>
              </div>
            </div>
            <div class="w-52 h-16 relative md:mt-0 mt-4">
              <img
                src="https://i.ibb.co/wNZ4nzy/Steps2.png"
                alt="step2"
                class="w-full h-full"
              />
              <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p class="w-full text-sm font-medium leading-4 text-indigo-800">
                  Event Info 2
                </p>
                <p class="w-full text-xs mt-1 leading-none text-indigo-800">
                  Description of info 2
                </p>
              </div>
            </div>
            <div class="w-52 h-16 relative md:mt-0 mt-4">
              <img
                src="https://i.ibb.co/wNZ4nzy/Steps2.png"
                alt="step2"
                class="w-full h-full"
              />
              <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p class="w-full text-sm font-medium leading-4 text-indigo-800">
                  Event Info 3
                </p>
                <p class="w-full text-xs mt-1 leading-none text-indigo-800">
                  Description of info 3
                </p>
              </div>
            </div>
          </div>

          <div class="xl:px-24">
            <div class="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>

                <p class="text-sm text-gray-800 pl-3">
                  We take privacy issues seriously. You can be sure that your
                  personal data is securely protected.
                </p>
              </div>
              <button class="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                <svg
                  aria-label="Close this banner"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                    fill="#79808F"
                  />
                </svg>
              </button>
            </div>
            {next == 0 ? (
              <Page1 setNext={setNext} eventData={eventData} setEventData={setEventData} next={next} />
            ) : next == 1 ? (
              <Page2 setNext={setNext} eventData={eventData} setEventData={setEventData} next={next} />
            ) : (
              <Page3 setNext={setNext} eventData={eventData} handleCreateEvent={handleCreateEvent} setEventData={setEventData} next={next} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
