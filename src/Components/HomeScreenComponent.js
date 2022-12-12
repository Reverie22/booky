import React from 'react'
import '../Css/HomeScreenCSS.css';
import ImagenBanner from '../Imagenes/ImagenBanner.jpg';

const HomeScreenComponent = () => {
  return (
    <div className='Contenedor'>
    <header>
    
      <h1 className='TituloBar'>¡Booky!</h1>
      <div className='Navbar'>
      <a href='/LoginScreen'>Opciones</a>
      <a href='/Login'>Cursos</a>
      <a href='/Login'>Inicio</a>
    </div>
    </header>
    <div className='Cuerpo'>
    <img src={ImagenBanner} className='Banner' alt="Banner" />
    <div className='Info'>
      <p>Bienvenido a Booky!</p>
      <p>Booky es una app </p>
    </div>
    </div>
    
    </div>
  )
}

export default HomeScreenComponent
