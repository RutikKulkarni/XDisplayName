import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`${firstName} ${lastName}`);
    }
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
            name="firstName"
            required
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
            name="lastName"
            required
          />
        </label>
        <br />
        <button type="submit" data-testid="submitBtn">Submit</button>
      </form>

      {fullName && (
        <div>
          <p data-testid="fullNameDisplay">Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
