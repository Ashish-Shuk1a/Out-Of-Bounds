import React from 'react'
import {useState} from 'react'
import Individual_description from './Individual_description';

const Description = () => {
     const [event_desc, setevent_desc] = useState({
       location: "Mumbai",
       "Duration ": 5,
       country: "India",
       State: "Maharashtra",
       Event_Name: "Seekeers",
       Description:
         "We aim at providing fun and learning to the senior citizens",
       type: "Social cause",
       count: 77,
     });
  return (
    <div>
      <div className="py-1">
        <div className="mt-1 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full ">
          <div className="flex flex-col justify-start items-start w-full ">
            <div className="flex flex-col justify-start items-start bg-gray-50  py-4 md:py-6 md:p-6 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Upcoming Events
              </p>
              <Individual_description />
              <Individual_description />
              <Individual_description />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description