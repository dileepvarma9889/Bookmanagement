import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { book } = location.state || {};

  const fetchMyBooks = async () => {
    try {
      const myBooksResponse = await axios.get('http://localhost:8080/my_books');
      setMyBooks(myBooksResponse.data);
    } catch (error) {
      console.error('Error fetching My Books:', error);
    }
  };

  const handleDelete = async (id) => {
    if (id) {
      try {
        const response = await axios.delete(`http://localhost:8080/deleteMyList/${id}`);
        if (response.status === 200) {
          console.log(`Book with ID ${id} deleted successfully`);
          fetchMyBooks();
        } else {
          console.error('Failed to delete book:', response.data);
        }
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    } else {
      console.warn('Invalid book ID:', id);
    }
  };

  useEffect(() => {
    fetchMyBooks();
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    navigate('/user');
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
          {book && (
            <div className="col-md-12 mb-4">
              <div className="card">
                <div className="card-header fs-3 text-center">Book added to MyBooks:</div>
                <div className="card-body">
                  <p>ID: {book.id}</p>
                  <p>Name: {book.name}</p>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                  <hr />
                </div>
              </div>
            </div>
          )}
         <div className="container mt-3">
                     <div className="row">
                {myBooks.map((myBook) => (
                  <div key={myBook.id} className="col-md-4 mb-4">
                    <div className="card">
                      <Link to={myBook.bookLink}>
                        <img src={myBook.imageUrl} className="card-img-top" alt={myBook.name} />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          <Link to={myBook.bookLink}>
                            <strong>Title:</strong> {myBook.name}
                          </Link>
                        </h5>
                        <p className="card-text">
                          <strong>Author:</strong> {myBook.author}
                        </p>
                        <p className="card-text">
                          <strong>Description:</strong> {myBook.description}
                        </p>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(myBook.id)}
                        >
                          <i className="fas fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>                                  
                ))}
                 </div>
                  </div>
              </div>
            </div>
          </div>
      
    
  );
};

export default MyBooks;
