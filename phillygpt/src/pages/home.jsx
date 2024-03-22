import React from 'react';
import SearchBar from '../components/searchbar.jsx';
import DisplayArea from '../components/displayArea.jsx';
import Title from '../components/title.jsx';

const Home = ({ userInput, handleInputChange, handleButtonClick }) => {
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

export default Home;
