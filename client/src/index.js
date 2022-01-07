import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import client from './Utils/Conectec'

import './index.css';
import App from './App';
import "./App.css"



ReactDOM.render(
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
 ,
  document.getElementById('root')
);

