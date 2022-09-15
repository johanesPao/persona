import React from 'react';
import ReactDOM from 'react-dom/client';
import { PenyediaAplikasi } from './konteks/konteks';

import './css/index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PenyediaAplikasi>
      <App />
    </PenyediaAplikasi>
  </React.StrictMode>,
);
