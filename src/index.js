import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    //provide the routing components to the app
    <BrowserRouter>
    <App />
    </BrowserRouter>,
     document.getElementById('root'));
