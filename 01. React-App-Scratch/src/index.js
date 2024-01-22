import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'

console.log("Hello World from index.js");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)