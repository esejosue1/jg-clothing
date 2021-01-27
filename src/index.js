import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';


ReactDOM.render(
    // provider allows to put all code into redux object
    <Provider store={store}>
    {/* //provide the routing components to the app */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
