import React, { useState, useRef } from "react";

function Dropdownmenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const inputRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here using inputRef.current.value
  };

  return (
    <form>
      <div className="flex light">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  dark:text-whie "
          type="button"
        >
          {selectedCategory}{" "}
          <svg
            className={`w-2.5 h-2.5 ml-2.5 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            isDropdownOpen ? "block" : "hidden"
          } bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gr0`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gry-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                onClick={() => selectCategory("1 mil")}
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-ray-600 dark:hover:text-whte"
              >
                1 mil
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => selectCategory("5 mil")}
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gra-600 dark:hover:text-whie"
              >
                5 mil
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => selectCategory("10 mil")}
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gry-600 dark:hover:text-wite"
              >
                10 mil
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => selectCategory("15 mil")}
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gry-600 dark:hover:text-whie"
              >
                15 mil
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            ref={inputRef}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 md:w-[300px] bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gra-700 dark:border-lgray-700  dark:border-gra-600 dark:placeholder-gry-400 dark:text-whie dark:focus:border-blue-500"
            placeholder="Search Events, Destinations..."
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Dropdownmenu;
