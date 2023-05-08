import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserService from "./services/UserService";
function App() {
  
  return (
    <div className="App">
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogout()}>
          Logout
        </button>
                 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
  
    </div>
  );
}

export default App;
