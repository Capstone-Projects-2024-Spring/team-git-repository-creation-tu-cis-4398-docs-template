import React from 'react';
import SearchBar from '../components/searchbar.jsx';
import DisplayArea from '../components/displayArea.jsx';
import Title from '../components/title.jsx';
import { useState } from 'react';

const HomePage = () => {

  const [userInput, setUserInput] = useState('');
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
  };

  return (
    <div>
      {/*Title*/}
      <Title route={'/'} />

      {/*SearchBar + Button*/}
      <SearchBar
        userInput={userInput}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />

      {/*Display area + Response Box*/}
      <div className="display-area-container">
        <DisplayArea route = {'/'}/>
      </div>
    </div>
  );
};

export default HomePage;
