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
          style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}} // Remove right border-radius
        />
        <button 
          onClick={handleButtonClick} 
          className="bg-blue-500 text-white p-2 rounded-r-md w-28 h-12"
          style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} // Remove left border-radius
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default App;
