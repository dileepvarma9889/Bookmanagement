import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Student/getAllUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/Student/deleteUser/${id}`);
      if (response.status === 200) {
        console.log(`User with ID ${id} deleted successfully`);
        fetchUsers();
      } else {
        console.error(`Failed to delete user with ID ${id}. Server response: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        console.error(`Error deleting user with ID ${id}. Server response:`, error.response.data);
      } else if (error.request) {
        console.error(`Error deleting user with ID ${id}. No response received from the server.`);
      } else {
        console.error(`Error deleting user with ID ${id}. Request setup error:`, error.message);
      }
    }
  };
  
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    window.location.replace('/admin');
  };

  return (
    <div>
    <div className="container-fluid mt-3">
        <h2>Welcome Admin</h2>
        <div className="d-flex mt-3">
          <Link className="btn btn-primary me-4" to="/adminallbooks">
            All Books
          </Link>
          <Link className="btn btn-primary me-4" to="/newbook">
            Add Book
          </Link>
          <Link className="btn btn-primary me-4" to="/allusers">
            All Users
          </Link>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">All Users</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.emailId}</td>
                      <td>{user.phoneNumber}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => handleDelete(user.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllUsers;
