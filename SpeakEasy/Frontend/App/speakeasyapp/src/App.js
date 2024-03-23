import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import MainPage from './components/MainPage';
import Bot from './components/Bot';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Route for the login page */}
                <Route path="/" element={<AboutWithLogin />} /> 
                {/* Route for the signup page */}
                <Route path="/signup" element={<AboutWithSignup />} /> 
                {/* Route for the main page */}
                <Route path="/mainpage" element={<MainPageWithBot />} />    
            </Routes>
        </Router>
    );
};

/* Component for the login page */
const AboutWithLogin = () => {
    return (
        <div className='full-page-container'>
            <About /> {/* Render the About component */}
            <Login /> {/* Render the Login component */}
        </div>
    );
};

/* Component for the signup page */
const AboutWithSignup = () => {
    return (
        <div className='full-page-container'>
            <About /> {/* Render the About component */}
            <Signup /> {/* Render the Signup component */}
        </div>
    );
};

/* Component for the main page */
const MainPageWithBot = () => {
    return (
        <div className='full-page-container'>
            <MainPage /> {/* Render the MainPage component */}
            <Bot /> {/* Render the Bot component */}
        </div>
    );
};

export default App;