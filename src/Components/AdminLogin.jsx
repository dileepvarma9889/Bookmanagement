import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/Login/AdminLogin/${username}/${password}`, {
        withCredentials: true,
      });

      if (response.data === 'Login Successful.....') {
        console.log('Login successful!');
    
        navigate('/admin/navbar');
      } else {
        console.log('Login failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;






