{/*import React from 'react';

const DropDown = ({ options, title, func }) => {
  return (
    <select 
      className="p-2 bg-[#1F124] w-[10%] text-white border-none" 
      onChange={(e) => func(e.target.value)}
      defaultValue="" // Default value set
    >
      <option value="" disabled>{title}</option>
      {options.map((option, index) => (
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
*/}
import React from 'react';

const DropDown = ({ options, title, func }) => {
  return (
     <div className="sm:flex sm:justify-between sm:items-center sm:gap-10">
       <div className="w-full flex justify-center my-4">
      <select
        className="p-2 bg-[#1F1E24] w-[100%] sm:w-[90%] text-white border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => func(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
     </div>
    
  );
};

export default DropDown;


