import React from 'react';
import CheckClass from './DarkMode/checkClass';

const SearchBar = ({ userInput, handleInputChange, handleButtonClick }) => {

  const isDark = CheckClass();
  
  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className={`p-2 w-2/5 h-12 rounded-l-md ${isDark ? 'text-black bg-white' : 'text-white bg-gray-300'}`}
        placeholder="Ask me something..."
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white p-2 rounded-r-md w-28 h-12"
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
