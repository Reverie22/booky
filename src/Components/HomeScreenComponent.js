import React from 'react'
import '../Css/HomeScreenCSS.css';
import programador from '../Imagenes/programador.png';

const HomeScreenComponent = () => {
  return (
   
   
    <div className='Contenedor'>
    <header>
    
      <h1 className='TituloBar'>¡Booky!</h1>
      <div className='Navbar'>
      <a href='/LoginScreen'>Opciones</a>
      <a href='/Login'>Cursos</a>
      <a href='/Login'>Inicioo</a>
    </div>
    </header>
    <div className='Cuerpo'>
    <img src={programador} className='Banner' alt="Banner" />
  
    <div className='Info'>
      <h2>Bienvenido!</h2>
      
    </div>
    <div className='Info2'>
    <p>Esta es una Aplicacion para poder facilitar el medio de comunicacion entre los padres y los profesores!</p>
    </div>
    </div>
    
    </div>
  
  )
  
}

export default HomeScreenComponent