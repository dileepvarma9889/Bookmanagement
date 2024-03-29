import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    navigate('/admin', { replace: true });
  };

  return (
    <>
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
    </>
  );
};

export default AdminNavbar;
