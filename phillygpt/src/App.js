import React, { useState } from 'react'; // Import useState hook
import './App.css';
import Navbar from './components/navbar.jsx';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
  };

  return (
    <div className="bg-darkgray min-h-screen">
      <Navbar />
      <div className="text-white text-center p-4 font-extrabold text-4xl">PhillyGPT</div>
      <div className="text-white text-center mb-4">This is a temporary description for PhillyGPT</div>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="text-black rounded-l-md p-2 w-3/5 h-12"
          placeholder="Ask me something..."
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} // Remove right border-radius
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white p-2 rounded-r-md w-28 h-12"
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} // Remove left border-radius
        >
          Enter
        </button>
      </div>
      <div className="display-area-container mx-8 mt-8 mb-4">
        <div className="display-area flex justify-center items-center">
          <div className="map-container w-1/2 h-full bg-gray-200 mr-4 rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Default Map" className="w-full h-full object-cover" />
          </div>
          <div className="response-container w-1/2 h-full bg-gray-navbar rounded-lg border border-gray-400 p-4 text-white">
            <div className="response-section mb-4">
              <h2 className="text-xl mb-2">Response</h2>
              <div className="text-display bg-darkgray p-2 rounded-lg">
                <p>Text for the response should be put here.</p>
              </div>
            </div>
            <hr className="border-white my-4" /> {/* White line between sections */}
            <div className="sql-query-section mb-4">
              <h2 className="text-xl mb-2">SQL Query</h2>
              <div className="text-display bg-darkgray p-2 rounded-lg">
                <p>Text for SQL Query should be put here.</p>
              </div>
            </div>
            <hr className="border-white my-4" /> {/* White line between sections */}
            <div className="tables-accessed-section">
              <h2 className="text-xl mb-2">Tables Accessed</h2>
              <div className="text-display bg-darkgray p-2 rounded-lg">
                <p>Text for Tables Accessed should be put here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
