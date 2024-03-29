import axios from 'axios';

const baseURL = 'http://localhost:8080';

const apiService = {
  registerStudent: async (studentData) => {
    try {
      const response = await axios.post(`${baseURL}/Student/register`, studentData);
      return response.data;
    } catch (error) {
      console.error('Error registering student:', error);
      throw error;
    }
  },

  addBookToMyList: async (id) => {
    try {
      const response = await axios.post(`${baseURL}/mylist/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error adding book to MyBooks:', error);
      throw error;
    }
  },

  deleteBook: async (id) => {
    try {
      const response = await axios.delete(`${baseURL}/deleteBook/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  },
};

export default apiService;
