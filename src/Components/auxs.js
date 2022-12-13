import logo from '../Imagenes/logo.png';
import { useState } from 'react';
import '../Css/RegisterScreenCSS.css';
import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import RegistrarUsuario from '../FuncionesEspeciales/RegistrarUsuario';








const Formulario = () => {
  const [formularioenviado, cambiarformularioenviado] = useState(false); 
	return (
    <Formik
    initialValues={{
      nombre:'Tu nombre',
      correo: 'Tucorreo@algo.com'
    }}



   
    onSubmit={(valores)=>{
      
      function formularioenviado() {
        //obtener info del formulario
        const Nombre = document.getElementById('Nombre').value;
        const Apellido = document.getElementById('Apellido').value;
        const Contraseña = document.getElementById('Contraseña').value;
        const Correo = document.getElementById('Correo').value;
        //enviar informacion a firebase
        const valores = { Nombre, Apellido, Contraseña, Correo,};
        RegistrarUsuario(valores);

        console.log(valores)
      
      }
      
      console.log('form enviado');
      cambiarformularioenviado(true);
      console.log(cambiarformularioenviado);


    }}
    
    >
		{( values,handleChange, handleBlur)=> (
 <div className='fondo'>
 <Form>
 <img src={logo} className='logo' alt="logo" />
   <div className='campos'>
     <label className='labels' htmlFor='nombre'>Nombre</label>
     <Field 
     className='inputs' 
     type='text' 
     id='Nombre'
     name='Nombre'
      placeholder='Su nombre aqui...'
      />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='Apellido'>Apellido</label>
     <Field 
     className='inputs' 
     type='text' 
     id='Apellido'
     name='Apellido' 
     placeholder='Su apellido aqui...'
     />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='correo'>correo</label>
     <Field 
     className='inputs' 
     type='email' 
     id='Correo'
     name='Correo' 
     placeholder='Su@correoaqui.com'
     />
   </div>
   <div className='campos'>
     <label className='labels' htmlFor='contraseña'>Contraseña</label>
     <Field 
     className='inputs' 
     type='password' 
     id='Contraseña'
     name='Contraseña' 
     placeholder='Su contraseña aqui...'
     />
   </div>
   <div className='Genero'>
      <Field name="Genero" as="select">
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Non">Sin definir</option>

      </Field>

   </div>
   <button type='submit'>Enviar</button>
   {formularioenviado && <p className='Enviado'>Formulario enviado con exito!</p>}
 </Form>
 </div>
    )}
   
      </Formik>
	);
}
 
export default Formulario;
//   "react-router": "5.2.0",
//"react-router-dom": "^5.3.4",
