import logo from './Imagenes/logo.png';
import './Css/App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



const Conteo=function() {
  setTimeout(function(){
    CambiarPantalla();


  }, 3000);
};

function App() {
  Conteo();

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
