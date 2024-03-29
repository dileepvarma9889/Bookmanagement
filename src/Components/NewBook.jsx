import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NewBook = () => {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    price: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    window.location.replace('/admin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/saveBook', bookData);
      if (response.status === 201) {
        console.log('Book registered successfully:', response.data);
        setSuccessMessage('Book registered successfully!');
        navigate('/adminallbooks');
      } else {
        console.error('Failed to register book:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering book:', error);
    }
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
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">New Book Registration</div>
              <div className="card-body">
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Book Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={bookData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      name="author"
                      value={bookData.author}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={bookData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">
                      ImageUrl
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      name="imageUrl"
                      value={bookData.imageUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookLink" className="form-label">
                      Book Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bookLink"
                      name="bookLink"
                      value={bookData.bookLink}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register Book
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
