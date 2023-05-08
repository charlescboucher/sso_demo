import './App.css';
import React from 'react';
import UserService from "./services/UserService";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Layout from './components/Layout';
import Contact from './components/Contact';
function App() {
  
  return (
    <div className="App">
         <header className="App-header">
        <h1>SSO Demo</h1>
        <h2>Logged in User: {UserService.getUsername()}</h2>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <p>
        <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogout()}>
          Logout
        </button>
                 
        </p>
       
      </header> 
  
    </div>
  );
}

export default App;
