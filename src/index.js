import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { Provider } from 'react-redux';
import store from './redux/Store';

store.subscribe(() => console.log('State has Changed', store.getState()));

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
