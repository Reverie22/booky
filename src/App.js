import logo from './Imagenes/logo.png';
import './Css/App.css';

function App() {
  setTimeout(CambiarPantalla() => {
    
  }, timeout);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <h3 class="Titulo-Booky">¡Booky!</h3>
      </body>
    </div>
  );
}

export default App;
