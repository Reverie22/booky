import React from 'react'
import '../Css/LoginScreenCSS.css';


const LoginComponent = () => {
  return ( 
    
    <div className='fondo'>
      <form onSubmit={ev => {ev.preventDefault();  console.log(ev.target.search.value)}}>
        <input type='text' name='Tuki' autoComplete='off'></input>
        <button type='submit'>Buscar</button>
      </form>
      </div>



  )
}

export default LoginComponent