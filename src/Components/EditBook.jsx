import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    price: '',
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mylist/${id}`);
        setBookData({
          name: response.data.name,
          author: response.data.author,
          description: response.data.description,
          imageUrl: response.data.imageUrl,
          bookLink: response.data.bookLink,
        });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  

    try {
      const response = await axios.post(`http://localhost:8080/editBook/${id}`, bookData);

      if (response.status === 200) {
        console.log('Book updated successfully:', response.data);
        navigate('/adminallbooks'); 
      } else {
        console.error('Failed to update book:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  
  return (
    
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Book</div>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
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
                  Update Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default EditBook;
