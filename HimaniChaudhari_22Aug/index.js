import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App2 from './components/App';
import Vehicle from './components/Vehicle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
    <Vehicle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
