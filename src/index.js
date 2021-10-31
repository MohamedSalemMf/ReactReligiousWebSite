import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  //bootstrap
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"; //fontawesome
import "../node_modules/jquery/dist/jquery.min.js" //jquery
import "../node_modules/popper.js/dist/umd/popper.min.js" //popper
import "bootstrap/dist/js/bootstrap.min" //bootstrap
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/ReactReligiousWebSite/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);