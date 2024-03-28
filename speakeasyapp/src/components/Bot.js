import React from 'react';
import ChatBot from 'react-simple-chatbot';

// Steps for the chatbot conversation
const steps = [
    {
        id: '1',
        message: 'What is your name?', // Initial message
        trigger: '2', // Next step ID
    },
    {
        id: '2',
        user: true, // User input
        trigger: '3', // Next step ID
    },
    {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!', // Response message
        end: true, // End the conversation
    },
];

// Chatbot theme
const theme = {
    background: '#f7bc75' // Background color
};

// Chatbot component
const Bot = () => (
    <ChatBot 
        steps={steps} // Pass the defined steps
        floating={true} // Enable floating mode
        floatingStyle={theme} // Apply theme to the floating style
        bubbleStyle={theme} // Apply theme to the chat bubbles
        submitButtonStyle={theme} // Apply theme to the submit button
    />
);

export default Bot;
