import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,   BrowserRouter as Router}  from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from "react"
//Redux
import store from './redux/Store';

store.subscribe(() => 
console.log('State has Changed', store.getState())
)

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
      < BrowserRouter>
              <Router>
                   <App/>
              </Router>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
