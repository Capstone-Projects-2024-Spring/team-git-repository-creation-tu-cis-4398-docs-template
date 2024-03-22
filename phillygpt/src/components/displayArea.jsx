import React from 'react';
import ResponseBox from "./responsebox.jsx";
import Examples from './examples';

const shouldShowResponseBox = (route) => {
  return route === '/response';
};

const DisplayArea = ({ route }) => {
  const showResponseBox = shouldShowResponseBox(route);

  const exampleQuestions = [
    "What farmers markets will happen this weekend?",
    "What time is the Head House square farmers market open?",
    "How many farmers markets will there be on the weekdays?",
    "What time does the Rittenhouse Square farmers market end?",
  ];

  const handleQuestionClick = (questionText) => {
    // Implement more logic for when an example question is clicked
    // For now a console log is okay
    console.log(`Question clicked: ${questionText}`);
  };

  return (
    <div className="display-area-container mx-8 mt-8 mb-4">
      <div className="display-area flex justify-center items-center">
        <div className="map-container w-1/2 h-full bg-gray-200 mr-4 rounded-lg overflow-hidden"> 
          <img src="https://via.placeholder.com/300x200" alt="Default Map" className="w-full h-full object-cover" />
        </div>
        {route === '/' ? <p>Suggestions</p> : showResponseBox && <ResponseBox />}
      </div>
      {/* Rendering the example questions using the Examples component */}
      <div className="example-questions-container flex flex-wrap justify-center items-center gap-10 mx-10 my-10">
        {exampleQuestions.map((question, index) => (
          <Examples
            key={index} 
            text={question}
            onClick={() => handleQuestionClick(question)}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayArea;
