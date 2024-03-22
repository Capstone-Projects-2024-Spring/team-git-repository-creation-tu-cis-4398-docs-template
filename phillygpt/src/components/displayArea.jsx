import React from 'react';
import ResponseBox from "./responsebox.jsx";
import {useLocation} from 'react-router-dom';

const DisplayArea = () => {

  const route = useLocation().pathname;

  return (
    <div className="display-area-container mx-8 mt-8 mb-4">
      <div className="display-area flex justify-center items-center">
        <div className="map-container w-1/2 h-full bg-gray-200 mr-4 rounded-lg overflow-hidden"> 
          <img src="https://via.placeholder.com/300x200" alt="Default Map" className="w-full h-full object-cover" />
        </div>
        {(route === '/' || route === '/home') ? <p>Suggestions</p> : route ==='/response' && <ResponseBox />}
      </div>
    </div>
  );
}

export default DisplayArea;
