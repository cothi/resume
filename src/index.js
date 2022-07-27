import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux'
// import reducer from "./reducers"

// const s = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider >
      <App />
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
