import React from 'react';

const Mode = ({ isDarkMode, handleToggle }) => {
  return (
    <div className="">
      <label className="flex items-center cursor-pointer">
        <div
          className={`relative inline-block w-12 h-6 transition duration-200 ease-linear ${
            isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
          } rounded-full`}
        >
          <input
            type="checkbox"
            className="absolute opacity-0 w-full h-full cursor-pointer"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span
            className={`absolute left-0 top-0 h-6 w-6 bg-white border-2 rounded-full transform transition-transform duration-200 ease-linear ${
              isDarkMode ? 'translate-x-6' : ''
            }`}
          >
            {isDarkMode ? (
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.485-8.485h1m-16.97 0h1m12.728 4.243l-.707-.707m-12.02 0l-.707-.707m12.728-8.486l-.707-.707m-12.02 0l-.707-.707M12 5a7 7 0 000 14"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.485-8.485h1m-16.97 0h1m12.728 4.243l-.707-.707m-12.02 0l-.707-.707m12.728-8.486l-.707-.707m-12.02 0l-.707-.707M12 5a7 7 0 000 14 7 7 0 007-7h-7z"
                />
              </svg>
            )}
          </span>
        </div>
      </label>
    </div>
  );
};

export default Mode;
