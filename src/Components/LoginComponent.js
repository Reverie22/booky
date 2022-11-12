
import '../Css/LoginScreenCSS.css';
import React from 'react';

const Formulario = () => {
	return (
		
    <div className='fondo'>
			<form>
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre'name='nombre' placeholder='Su nombre aqui...'/>
        </div>
        <div>
          <label htmlFor='Apellido'>Apellido</label>
          <input type='text' id='Apellido'name='Apellido' placeholder='Su apellido aqui...'/>
        </div>
        <div>
          <label htmlFor='correo'>correo</label>
          <input type='email' id='correo'name='correo' placeholder='Su@correoaqui.com'/>
        </div>
        <div>
          <label htmlFor='contraseña'>Contraseña</label>
          <input type='password' id='contraseña'name='contraseña' placeholder='Su contraseña aqui...'/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
      </div>
	);
}
 
export default Formulario;
