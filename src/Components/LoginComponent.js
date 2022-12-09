import logo from '../Imagenes/logo.png';
import '../Css/LoginScreenCSS.css';
import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	return (
    <Formik
    initialValues={{
      nombre:'Tu nombre',
      correo: 'Tucorreo@algo.com'
    }}



    validate ={(valores) => {
      let errores = {};
      if (!valores.nombre){
        errores.nombre = 'porfavor ingrese un nombre'
      }
    return errores;
    }}

    onSubmit={(valores)=>{

      
      console.log(valores);
      console.log('form enviado');
      console.log(errors);


    }}
    
    >
		{( values, errors, handleSubmit,handleChange, handleBlur)=> (
 <div className='fondo' onSubmit={handleSubmit}>
 <form>
 <img src={logo} className='logo' alt="logo" />
   <div className='campos'>
     <label className='labels' htmlFor='nombre'>Nombre</label>
     <input 
     className='inputs' 
     type='text' 
     id='nombre'
     name='nombre'
      placeholder='Su nombre aqui...'
      value={values.nombre}
      onChange={handleChange}
      onBlur={handleBlur}
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
     value={values.nombre}
     onChange={handleChange}
     onBlur={handleBlur}
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
     value={values.correo}
     onChange={handleChange}
     onBlur={handleBlur}
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
     value={values.nombre}
     onChange={handleChange}
     onBlur={handleBlur}
     />
   </div>
   <button type='submit'>Enviar</button>
 </form>
 </div>
    )}
   
      </Formik>
	);
}
 
export default Formulario;
