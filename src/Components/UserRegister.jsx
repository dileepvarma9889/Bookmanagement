import React, { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    emailId: '',
    phoneNumber: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/Student/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Server Response:', response.data);
      setRegistrationStatus('Registration Successful');
    } catch (error) {    
      console.error('Error:', error);
      setRegistrationStatus('Registration Failed');
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>User Register</h2>
        {registrationStatus && <p style={{ color: registrationStatus === 'Registration Successful' ? 'green' : 'red' }}>{registrationStatus}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'purple', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
