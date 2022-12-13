import logo from '../Imagenes/logo.png';
import { useState } from 'react';
import '../Css/RegisterScreenCSS.css';
import { Link, Redirect, useNavigate } from 'react-router-dom';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../firebase/firebase';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
import HomeScreen from '../Screens/HomeScreen';

//funciones

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const Formulario = ({Correousuario}) => {
	const valorinicial = {
    nombre: '',
    apellido: '',
    contraseña: '',
    mail: '',
  }
  const [user, setUser] = useState(valorinicial)
  const CambiarPantalla = () => {
    console.log('hpla');
    useNavigate(HomeScreen)
  
  
  }
  
  const capturarInputs = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const guardarDatos = async(e)=>{
    e.preventDefault();
    // console.log(user);
    try {
      await addDoc(collection(db,'users'),{
        ...user
    })
    } catch (error) {
      console.log(error)
      
    }
    setUser({...valorinicial})
  }
  
  
let navigate = useNavigate();
  return (
    <div>
    {
   !user &&


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
   <button onClick={() => navigate("/HomeScreen")} type='submit'>Enviar</button>
 </form>
 </div>
 }
 {user && <button className='Cerrarsesion'>Cerrar sesion</button>}
 </div>

	);
}
 
export default Formulario;
