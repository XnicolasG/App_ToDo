import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Routes/App.js';
import { Router } from './Routes/Router.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


/*

*/