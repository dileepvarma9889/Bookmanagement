import React from 'react';

const BookStore = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '200px', 
  };

  const imageStyle = {
    maxWidth: '200%', 
    marginBottom: '40px', 
  };

  const headingStyle = {
    fontSize: '3em', 
    color: '#4CAF50', 
  };

  return (
    <div className="container" style={containerStyle}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.P4eZUdiU5i4hXNTdgMV0vwHaHa&pid=Api&P=0&h=180" 
        alt="Book Store Cover"
        style={imageStyle}
      />
      <h1 style={headingStyle}>WELCOME TO BOOK STORE</h1>
    </div>
  );
};

export default BookStore;
