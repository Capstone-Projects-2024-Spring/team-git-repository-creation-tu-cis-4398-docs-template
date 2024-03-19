import React from 'react';

const SearchBar = ({ userInput, handleInputChange, handleButtonClick }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="text-black rounded-l-md p-2 w-2/5 h-12"
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
