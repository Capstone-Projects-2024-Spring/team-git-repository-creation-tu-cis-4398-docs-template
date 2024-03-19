import React, { useState} from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import SearchBar from './components/searchbar.jsx';
import DisplayArea from './components/displayWithMap.jsx';
import Title from './components/title.jsx';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import CheckClass from './components/DarkMode/checkClass.jsx';

function App() {
  const [userInput, setUserInput] = useState('');
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
  };

  const isDark = CheckClass(); //This is to check for dark mode vs not
  
  return (
    <div className={`bg-${isDark ? 'darkgray' : 'white'} min-h-screen`}>
      {/* Navbar*/}
      <Navbar />

      {/*Title*/}
      <Title route = {'/'}/>

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
