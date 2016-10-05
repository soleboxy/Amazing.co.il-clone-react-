// client.js
import React from 'react';
import ReactDom from 'react-dom';

import Bootstrap from './vendor/bootstrap.min';
import Layout from './components/Layout';
var app = document.getElementById('app');

ReactDom.render(<Layout />, app);