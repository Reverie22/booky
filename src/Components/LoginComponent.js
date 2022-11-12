import logo from '../Imagenes/logo.png';
    
import '../Css/LoginScreenCSS.css';
import React from 'react';

const Formulario = () => {
	return (
		
    <div className='fondo'>
    
			<form>
      <img src={logo} className='App-logo' alt="logo" />
        <div className='campos'>
          <label className='labels' htmlFor='nombre'>Nombre</label>
          <input className='inputs' type='text' id='nombre'name='nombre' placeholder='Su nombre aqui...'/>
        </div>
        <div className='campos'>
          <label className='labels' htmlFor='Apellido'>Apellido</label>
          <input className='inputs' type='text' id='Apellido'name='Apellido' placeholder='Su apellido aqui...'/>
        </div>
        <div className='campos'>
          <label className='labels' htmlFor='correo'>correo</label>
          <input className='inputs' type='email' id='correo'name='correo' placeholder='Su@correoaqui.com'/>
        </div>
        <div className='campos'>
          <label className='labels' htmlFor='contraseña'>Contraseña</label>
          <input className='inputs' type='password' id='contraseña'name='contraseña' placeholder='Su contraseña aqui...'/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
      </div>
	);
}
 
export default Formulario;
