
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store'
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session'

console.log("Entered app!!!")
const store = configureStore();

if (process.env.NODE_ENV !== 'production'){
  console.log('NOT Production')
  restoreCSRF();
  
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
