import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'

import { getToken } from './utils/utils'

axios.interceptors.request.use(config => {
    const token = getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
