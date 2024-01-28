import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateForm();
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(firstName.trim() !== '' && lastName.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter first name"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter last name"
          />
        </label>
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      {fullName && (
        <div>
          <h2>Full Name:</h2>
          <p>{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
