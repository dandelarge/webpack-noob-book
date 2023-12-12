import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
