import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import SearchBar from './components/searchbar.jsx';
import DisplayArea from './components/displayWithMap.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
      {/* Navbar*/}
      <Navbar />

      {/*Title*/}
      <div className="text-white text-center p-4 font-extrabold text-4xl">PhillyGPT</div>
      <div className="text-white text-center mb-4">This is a temporary description for PhillyGPT</div>
      <div className="flex justify-center items-center mb-4"> </div>

      {/*SearchBar + Button*/}
      <SearchBar
        userInput = {userInput}
        handleInputChange = {handleInputChange}
        handleButtonClick = {handleButtonClick}/>

      {/*Display area + Response Box*/}
      <div className="display-area-container">
        <DisplayArea />
      </div>
    </div>
  );
}

export default App;
