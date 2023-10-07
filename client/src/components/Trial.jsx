import React, { useEffect,useState } from "react";
import html2pdf from "html2pdf.js";

const Trail = () => {
     const [userSelection, setUserSelection] = useState("");

     
     const [val,setVal]=useState({
      "scope":"",
      "story":"",
      "phone":"",
      "type":"",
      "city":"",
      "count":" ",
      "img":""


     })

      const handleChange = (e) => {
        const { name, value } = e.target;
        setVal((prevVal) => ({
          ...prevVal,
          [name]: value,
        }));
        console.log(val);
      };
  useEffect(() => {
    const handlePrint = () => {
      const element = document.getElementById("container_content");

      const options = {
        margin: 1,
        filename: petition_${generateRandomCode()}.pdf,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(options).from(element).save();
    };

    const generateRandomCode = () => {
      return Math.random().toString(36).substring(7);
    };

    const button = document.getElementById("rep");
    if (button) {
      button.addEventListener("click", handlePrint);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handlePrint);
      }
    };
  }, []);

  return (
    <>
      <div className="text-center" style={{ padding: "20px" }}>
        <input type="button" id="rep" value="Print" className="btn btn-info" />
      </div>
      <div className="container_content" id="container_content">
        <div className="invoice-box">
          {/* Rest of the HTML content */}
          <div>
            <div className="w-full bg-white p-10 ">
              <h1
                tabIndex={0}
                role="heading"
                aria-label="profile information"
                className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
              >
                Petition Form
              </h1>

              <h2
                role="heading"
                aria-label="enter Personal data"
                className="text-xl font-semibold leading-7 text-gray-800 mt-10"
              >
                Personal data
              </h2>
              <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
                Your details
              </p>
              <div className="mt-8 md:flex items-center">
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Scope
                  </label>
                  <select
                    aria-label="Select option"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                    onChange={handleChange}
                    name="scope"
                  >
                    <option value="local">Local</option>
                    <option value="national">National</option>
                    <option value="global">Global</option>
                  </select>
                </div>

                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <div className="flex flex-col">
                    <label className="mb-3 text-sm leading-none text-gray-800">
                      Type
                    </label>
                    <select
                      name="type"
                      aria-label="Select option"
                      className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                      onChange={handleChange}
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Phone number
                  </label>
                  <input
                    type="ref"
                    tabIndex={0}
                    aria-label="Enter phone number"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                    defaultValue="+81 839274"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-12 md:flex items-center">
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Story
                  </label>
                  <textarea
                    name="story"
                    onChange={handleChange}
                    tabIndex={0}
                    aria-label="Enter title"
                    className="w-64 h-32 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    City
                  </label>
                  <input
                    name="city"
                    onChange={handleChange}
                    type="text"
                    tabIndex={0}
                    aria-label="Enter city"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Count
                  </label>
                  <input
                    type="number"
                    name="count"
                    onChange={handleChange}
                    tabIndex={0}
                    aria-label="Enter count"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>

              <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <div className="mt-12 md:flex items-center">
                  <div className="flex flex-col">
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                      <label className="mb-3 text-sm leading-none text-gray-800">
                        Upload Image (optional)
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        tabIndex={0}
                        name="img"
                        onChange={handleChange}
                        aria-label="Upload an image"
                        className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                      />
                    </div>
                  </div>
                  {/* {userSelection === "National" && (
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                      <label className="mb-3 text-sm leading-none text-gray-800">
                        City
                      </label>
                      <input
                        type="text"
                        tabIndex={0}
                        aria-label="Enter city"
                        className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                      />
                    </div>
                  )} */}
                </div>
              </div>
              <div className="mt-12">
                <div className="py-4 flex items-center">
                  <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="checkbox"
                      tabIndex={0}
                      aria-label="I agree with the terms of service"
                      defaultChecked
                      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                    />
                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-none ml-2">
                    I agree with the{" "}
                    <span className="text-indigo-700">terms of service</span>
                  </p>
                </div>
              </div>
              <button
                role="button"
                aria-label="Next step"
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-gray-800 capitalize">
                  Next Step
                </span>
                <svg
                  className="mt-1 ml-3"
                  width={12}
                  height={8}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                </svg>
              </button>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trail;