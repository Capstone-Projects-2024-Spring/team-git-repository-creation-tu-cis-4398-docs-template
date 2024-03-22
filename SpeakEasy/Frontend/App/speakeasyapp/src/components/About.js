import React from 'react'; // Import React library
import './styles/About.css'; // Import custom CSS stylesheet
import Logo from './assets/Logo.png'; // Import logo image

const About = () => { 
    return( // JSX markup for About component
        <div className="about-container"> {/* Outer container for About section */}
            <div className="text-container"> {/* Container for text content */}
                <div className='logo'> {/* Container for logo image */}
                    <img src = {Logo} alt ="SpeakEasy"/> {/* Render logo image */}
                </div>
                <h3>Learn any language easily.</h3> {/* Header with text */}
                <h3>Chat naturally.</h3> {/* Header with text */}
                <h3>Anywhere really.</h3> {/* Header with text */}
            </div>
            <div className="rectangle"/> {/* Render rectangle element */}
        </div>
    );
};

export default About; // Export About component