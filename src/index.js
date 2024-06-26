import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()} basename={window.location.pathname || ''}>
        <App />
    </Router>
  </React.StrictMode>
);

