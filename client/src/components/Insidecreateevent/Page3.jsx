import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import UploadImage from "../UploadImage";
import UploadVideo from "../UploadVideo";

const Page3 = ({ setNext, next ,eventData,setEventData,handleCreateEvent}) => {
 

  const [questions, setQuestions] = useState([""]);

  const [isQuestion, setIsQuestion] = useState(false);
  const [isClip, setIsClip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageurl,setImageurl] = useState("");
  const [videourl,setVideourl] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
    console.log(eventData);
  };


  const submits = () => {
    setEventData((prevVal) => ({...prevVal, open: isOpen, res_req: isQuestion, clip_req: isClip }));
    handleCreateEvent();
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
          <div class="md:flex items-center lg:mr-40 lg:mt-0 mt-4">
            <div className="flex flex-col">
            {imageurl && <img src={imageurl} className="h-[200px] "  alt=''></img>}
          <p className="text-sm text-gray-800 text-gray-100 pb-1">
            Upload Cover Image for Your Event!
                  </p>
          <UploadImage setImageurl={setImageurl}/>
          {videourl && <img src={videourl} className="h-[200px] "  alt=''></img>}
          <p className="text-sm text-gray-800 text-gray-100 pb-1">
            Upload Intro Video for Your Event!
                  </p>
          <UploadVideo setVideourl={setVideourl}/>
              <div className="flex  justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Want to Ask Questions to volunteers ?
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isQuestion}
                      name="tog3"
                      className="sr-only peer"
                      checked={isQuestion}
                      onChange={() => setIsQuestion((prev) => !prev)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              {isQuestion && (
                <QuestionForm
                  questions={questions}
                  setQuestions={setQuestions}
                />
              )}
            </div>
          </div>
          <div class="md:flex items-center lg:mr-40 lg:mt-0 mt-4">
            <div className="flex flex-col">
              <div className="flex  justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Want to Ask Video from volunteers ?
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isClip}
                      name="tog3"
                      className="sr-only peer"
                      checked={isClip}
                      onChange={() => setIsClip((prev) => !prev)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex items-center lg:mr-40 lg:mt-0 mt-4">
            <div className="flex flex-col">
              <div className="flex  justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 text-gray-100 pb-1">
                    Is it an Open Event Volunteers ?
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <label className="relative inline-flex justify-between items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={!isOpen}
                      name="tog3"
                      className="sr-only peer"
                      checked={isOpen}
                      onChange={() => setIsOpen((prev) => !prev)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
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

export default Page3;
