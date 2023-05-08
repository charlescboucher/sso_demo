import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserService from "./services/UserService";

const _axios = axios.create();
_axios.interceptors.request.use((config) => {
  if (UserService.isLoggedIn()) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${UserService.getToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  }
});

const root = () => ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App />
);

UserService.initKeycloak(root);
