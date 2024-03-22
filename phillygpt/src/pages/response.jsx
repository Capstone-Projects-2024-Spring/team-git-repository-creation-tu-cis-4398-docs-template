import React from 'react';
import { useLocation } from 'react-router-dom';

const ResponsePage = () => {
  const location = useLocation();
  const userInput = new URLSearchParams(location.search).get('input');

  return (
    <div>
      <h1>Response Page</h1>
      <p>User Input: {userInput}</p>

    </div>
  );
}

export default ResponsePage;
