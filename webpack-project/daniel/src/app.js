import React from 'react';
import {say} from 'cowsay-browser';
import img from './img/baby-calf.webp';
import './app.css';

export default function App() {

  const cow = say({text: 'Hello, world!'});

  return (
    <>
      <h1>React + Cowsay</h1>
      <img src={img} className='cowImg'/>
      <pre>{cow}</pre>
    </>
  );
}
