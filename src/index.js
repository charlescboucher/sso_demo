import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserService from "./services/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = () => ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App />
);

UserService.initKeycloak(root);
