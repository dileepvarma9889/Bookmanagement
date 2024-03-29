import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loginservice from '../service/Loginservice';

// ... (import statements)

const UserAllBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/available_books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToMyBooks = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/mylist/${id}`);
      const bookToAdd = response.data;
      await Loginservice.addToMyBooks(id);
      console.log(`Book ID ${id} added to MyBooks`);
      navigate('/mybooks', { state: { book: bookToAdd } });
    } catch (error) {
      console.error('Error adding to MyBooks:', error);
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    console.log('Navigating to /user');
    navigate('/user', { replace: true });
  };

  return (
    <div>
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
      <div className="container mt-3">
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card">
                <Link to={book.bookLink}>
                  <img
                    src={book.imageUrl}
                    className="card-img-top"
                    alt={book.name}
                    onError={(e) => {
                      e.target.src = 'fallback-image.jpg';
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={book.bookLink}>
                      <strong>Title:</strong> {book.name}
                    </Link>
                  </h5>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {book.description}
                  </p>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleAddToMyBooks(book.id)}
                  >
                    Add to MyBooks
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAllBooks;