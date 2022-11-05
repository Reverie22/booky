import logo from '../Imagenes/logo.png';
import React from 'react'
import '../Css/App.css';

export default function SplashScreenComponent() {
  return (
    

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <h3 class="Titulo-Booky">¡Booky!</h3>
      </body>
    </div>
  )
}