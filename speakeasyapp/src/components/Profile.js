import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Profile.css'; 

import Logo from './assets/Logo.png'; 
import Help from './assets/Help.png'; 
import Book from './assets/Book.png'; 
import User from './assets/User.png'; 
import Settings from './assets/Settings.png'; 
import MaleUser from './assets/MaleUser.png';
import Search from './assets/Search.png';
import Fire from './assets/Fire.png';
import Sleep from './assets/Sleep.png';
import SpainFlag from './assets/SpainFlag.png';


// Profile component
const Profile = () => {
    return (
        <div className='mainpage-container'> {/* Main container */}
            <div className='white-rectangle-container'> {/* Container for top section */}
                <img src={Logo} alt="SpeakEasy" /> {/* Logo */}
                <h1>Welcome, _________!</h1> {/* Welcome message */}
            </div>
            <div className='light-orange-rectangle'/>
            <div className='bottom-container'> {/* Container for bottom section */}
                <div className='navbar-container bottom-section'> {/* Navbar container */}
                    <ul>
                        <li>
                            <img src={Book} alt="Learn" /> {/* Learn icon */}
                            <Link to="/mainpage">Learn</Link> {/* Learn link */}
                        </li>
                        <li>
                            <img src={User} alt="Profile" /> {/* Profile icon */}
                            <Link to="/profile">Profile</Link> {/* Profile link */}
                        </li>
                        <li>
                            <img src={Settings} alt="Settings" /> {/* Settings icon */}
                            <Link to="/settings">Settings</Link> {/* Settings link */}
                        </li>
                        <li>
                            <img src={Help} alt="Help" /> {/* Help icon */}
                            <Link to="/help">Help</Link> {/* Help link */}
                        </li>
                    </ul>
                </div>
                <div className='profile-container bottom-section'> {/* Profile container */}
                    <div className='large-white-container'> {/* Large white container for profile section */}
                        <div className='profile-content-container'> {/* Container for profile content */}
                            <div className='profile-orange-square'>
                                <img src={MaleUser} alt="User" /> {/* Male user icon */}
                                <h3>John Doe</h3>
                                <h4>johndoe@gmail.com</h4>
                                <h4>Currently Studying: Spanish</h4>
                                <img src={SpainFlag} alt="Spain" /> {/* Spain flag igon*/}
                            </div>
                            <h3>Badges</h3> {/* Badges heading */}
                            <div className='profile-orange-rectangle'> {/* Container for the first badge */}
                                <img src={Fire} alt="Fire" /> {/* Fire icon */}
                                <h5>John is currently on a 100 day streak!</h5> {/* Badge description */}
                            </div>
                            <div className='profile-orange-rectangle'> {/* Container for the second badge */}
                                <img src={Sleep} alt="Sleep" /> {/* Sleep icon */}
                                <h5>John frequently learns past 7PM!</h5> {/* Badge description */}
                            </div>
                            <div className='profile-orange-rectangle'> {/* Container for the third badge */}
                                <img src={Search} alt="Search" /> {/* Search icon */}
                                <h5>John has searched over 500 words!</h5> {/* Badge description */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;