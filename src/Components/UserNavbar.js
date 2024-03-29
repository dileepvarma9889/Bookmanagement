import React from 'react';
import { Link} from 'react-router-dom';

const UserNavbar = () => {
  

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    window.location.replace('/user');
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <h2>Welcome User</h2>
        <div className="d-flex mt-3">
          <Link className="btn btn-primary me-4" to="/userallbooks">
            All Books
          </Link>
          <Link className="btn btn-primary me-4" to="/mybooks">
            My Books
          </Link>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
