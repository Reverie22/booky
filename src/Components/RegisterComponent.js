import logo from '../Imagenes/logo.png';
import { useState } from 'react';
import '../Css/RegisterScreenCSS.css';
import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';



const Formulario = () => {
  const [formularioenviado, cambiarformularioenviado] = useState(false); 
	return (
    <Formik
    initialValues={{
      nombre:'Tu nombre',
      correo: 'Tucorreo@algo.com'
    }}



   
    onSubmit={(valores)=>{

      
      console.log(valores);
      console.log('form enviado');
      cambiarformularioenviado(true);
      console.log(cambiarformularioenviado);
      


    }}
    
    >
		{( values,handleSubmit,handleChange, handleBlur)=> (
 <div className='fondo'>
 <Form>
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
   {formularioenviado && <p className='Enviado'>Formulario enviado con exito!</p>}
 </Form>
 <div class="LinkLogin">
 <p>¿Ya registrado?</p><a href='/LoginScreen' class="Registrado">¡Booky!</a>
 </div>
 </div>
    )}
   
      </Formik>
	);
}
 
export default Formulario;