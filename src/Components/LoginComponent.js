import logo from '../Imagenes/logo.png';
import { useState } from 'react';
import '../Css/LoginScreenCSS.css';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../firebase/firebase';


const auth = getAuth(firebaseApp)
const Formulario = ({Correousuario}) => {
	const valorinicial = {
    nombre: '',
    apellido: '',
    contraseña: '',
    mail: '',
  }
  const [user, setUser] = useState(valorinicial)

  const capturarInputs = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const guardarDatos = async(e)=>{
    e.preventDefault();
    console.log(user);
    setUser({...valorinicial})
  }
  
  
  return (
     

 <div className='fondo'>
 <form onSubmit={guardarDatos}>
 <img src={logo} className='logo' alt="logo" />
   <div className='campos'>
     <label className='labels' htmlFor='nombre'>Nombre</label>
     <input 
     className='inputs' 
     type='text' 
     name="nombre"
      placeholder='Su nombre aqui...'
      onChange={capturarInputs} value={user.nombre}
      />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='apellido'>Apellido</label>
     <input 
     className='inputs' 
     type='text' 
     name='apellido' 
     placeholder='Su apellido aqui...'
     onChange={capturarInputs} value={user.apellido}
     />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='correo'>correo</label>
     <input 
     className='inputs' 
     type='email' 
     id='mail'
     name='mail' 
     placeholder='Su@correoaqui.com'
     onChange={capturarInputs} value={user.mail}
     />
   </div>
   <div className='campos'>
     <label className='labels'>Contraseña</label>
     <input 
     className='inputs' 
     type='password' 
     name='contraseña' 
     placeholder='Su contraseña aqui...'
     onChange={capturarInputs} value={user.contraseña}
     />
   </div>
   <button type='submit'>Enviar</button>
 </form>
 </div>
	);
}
 
export default Formulario;
