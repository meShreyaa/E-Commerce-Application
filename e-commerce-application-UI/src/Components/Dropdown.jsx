import React, { useState } from 'react';

const DropDown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="cursor-pointer">New Customer?</span>
        <svg
          className={`fill-current w-4 h-4 ml-2 ${isHovered ? 'text-gray-500' : 'text-gray-800'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </button>
      <ul className={`absolute ${isHovered ? 'block' : 'hidden'} bg-white text-gray-800 pt-1 shadow-md rounded-lg`}>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Sign up</li>
      </ul>
    </div>
  );
};
export default DropDown;