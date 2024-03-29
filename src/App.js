import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginNavbar from './Components/LoginNavbar';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import BookStore from './Components/BookStore';
import AdminNavbar from './Components/AdminNavbar';
import UserNavbar from './Components/UserNavbar';
import WelcomeAdmin from './Components/WelcomeAdmin';
import MyBooks from './Components/MyBooks';
import NewBook from './Components/NewBook';
import EditBook from './Components/EditBook';
import AllUsers from './Components/AllUsers';
import AdminAllBooks from './Components/AdminAllBooks';
import UserAllBooks from './Components/UserAllBooks';




function App() {
  return (
    <>
      <LoginNavbar />
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/bookStore" element={<BookStore />} />
        <Route path="/admin/navbar" element={<AdminNavbar/>} />
        <Route path="/user/navbar" element={<UserNavbar/>} />
        <Route path="/welcome/navbar" element={<WelcomeAdmin/>} />
        <Route path="/adminallbooks" element={<AdminAllBooks/>} />
        <Route path="/userallbooks" element={<UserAllBooks/>} />
        <Route path="/mybooks" element={<MyBooks/>} />
        <Route path="/newbook" element={<NewBook/>} />
        <Route path="/editbook/:id" element={<EditBook/>} />
        <Route path="/allusers" element={<AllUsers/>} />
      </Routes>
    
    </>
  );
}

export default App;

