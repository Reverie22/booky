import logo from '../Imagenes/logo.png';
import { useState } from 'react';
import '../Css/LoginScreenCSS.css';
import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { getAuth } from 'firebase/auth';


const auth = getAuth(appFirebase)
const Formulario = ({Correousuario}) => {
	const valorinicial = {
    Nombre: '',
    Apellido: '',
    Contraseña: '',
    Mail: '',
  }
  const {user, setUser} = useState(valorinicial)

  const capturarInputs = (e) => {
    const {nombre, value} = e.target;
    setUser({...user, [nombre]:value})
  }

  const guardarDatos = async(e)=>{
    e.preventDefault();
    console.log(user);
    setUser({...valorinicial});
  }
  
  
  return (
     
    <div className='container'>
 <div className='fondo'>
 <form onSubmit={guardarDatos}>
 <img src={logo} className='logo' alt="logo" />
   <div className='campos'>
     <label className='labels' htmlFor='nombre'>Nombre</label>
     <input 
     className='inputs' 
     type='text' 
     id='nombre'
     name='nombre'
      placeholder='Su nombre aqui...'
      onChange={capturarInputs} value={user.nombre}
      />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='Apellido'>Apellido</label>
     <input 
     className='inputs' 
     type='text' 
     id='Apellido'
     name='Apellido' 
     placeholder='Su apellido aqui...'
     onChange={capturarInputs} value={user.Apellido}
     />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='correo'>correo</label>
     <input 
     className='inputs' 
     type='email' 
     id='correo'
     name='correo' 
     placeholder='Su@correoaqui.com'
     onChange={capturarInputs} value={user.Mail}
     />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='contraseña'>Contraseña</label>
     <input 
     className='inputs' 
     type='password' 
     id='contraseña'
     name='contraseña' 
     placeholder='Su contraseña aqui...'
     />
   </div>
   <button type='submit'>Enviar</button>
 </form>
 </div>
    
   
      </div>
	);
}
 
export default Formulario;
