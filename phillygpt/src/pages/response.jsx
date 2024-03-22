import React from 'react';
import { useLocation } from 'react-router-dom';
import DisplayArea from '../components/displayArea';
import Title from '../components/title';
import SearchBar from '../components/searchbar';

const ResponsePage = () => {
  const location = useLocation();
  const userInput = new URLSearchParams(location.search).get('input');

  return (
    <div>
      <p>User Input: {userInput}</p> {/*THIS IS FOR TESTING PURPOSES. REMOVE WHEN DONE BEFORE DEMO.*/}
      <Title route = {'/response'}/>
      <SearchBar/>
      <div className="display-area-container">
        <DisplayArea/>
      </div>

    </div>
  );
}

export default ResponsePage;
