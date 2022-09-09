import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css'

const Persona404 = () => {
  return (
    <div className='persona404'>
      <h4>Selamat datang di Persona</h4>
      <p>Situs ini merupakan situs standar <i>general-purpose</i> dan juga akan berfungsi sebagai RESTful API...</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Persona404 />
  </React.StrictMode>
);
