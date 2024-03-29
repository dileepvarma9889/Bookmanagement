import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loginservice from '../service/Loginservice';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminAllBooks = () => {
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

  const handleEdit = (id) => {
    navigate(`/editBook/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await Loginservice.deleteBook(id);
      console.log(`Book ID ${id} deleted`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.clear();
    navigate('/admin', { replace: true });
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
          {books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card">
                <Link to={book.bookLink}>
                  <img src={book.imageUrl} className="card-img-top" alt={book.name} />
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
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(book.id)}
                    >
                      <i className="fas fa-pencil-alt"></i> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(book.id)}
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
  );
};

export default AdminAllBooks;
