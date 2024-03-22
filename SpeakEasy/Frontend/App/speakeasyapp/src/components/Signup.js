import React, { useState } from 'react'; // Import React and useState hook
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './styles/Style.css'; // Import CSS styles

const Signup = () => { // Define Signup functional component
  // Define state variables and their setter functions using useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Event handler functions to update state based on input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Event handler function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Log form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  // JSX markup for the Signup component
  return (
    <div className="signup-container"> {/* Container for Signup form */}
      <h2>Sign Up</h2> {/* Signup heading */}
      <form onSubmit={handleSubmit} className="signup-form"> {/* Signup form */}
        <div> {/* Form field for name */}
          <label>Name:</label> {/* Label for name input */}
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          /> {/* Input field for name */}
        </div>
        <div> {/* Form field for email */}
          <label>Email:</label> {/* Label for email input */}
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          /> {/* Input field for email */}
        </div>
        <div> {/* Form field for password */}
          <label>Password:</label> {/* Label for password input */}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          /> {/* Input field for password */}
        </div>
        <div> {/* Form field for confirming password */}
          <label>Confirm Password:</label> {/* Label for confirming password input */}
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          /> {/* Input field for confirming password */}
        </div>
        <button type="submit">Sign Up</button> {/* Submit button */}
      </form>
      <div> {/* Additional text for navigating to login page */}
        <p>Already have an account? <Link to="/">Login</Link></p> {/* Link to login page */}
      </div>
    </div>
  );
};

export default Signup; // Export Signup component