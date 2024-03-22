import React, { useState} from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import HomePage from './pages/home.jsx';
import ResponsePage from './pages/response.jsx';
import RepromptPage from './pages/reprompt.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
    <Router>
      <div className={`bg-${isDark ? 'darkgray' : 'white'} min-h-screen`}>
        <Navbar />
        <HomePage/>
        <Routes>
          <Route exact path="/" render={() => <HomePage userInput={userInput} handleInputChange={handleInputChange} handleButtonClick={handleButtonClick} />} />
          <Route path="/response" component={ResponsePage} />
          <Route path="/reprompt" component={RepromptPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
