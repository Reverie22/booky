
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import SplashScreenComponent from './Components/SplashScreenComponent';
import HomeScreenComponent from './Components/HomeScreenComponent';
import './Css/App.css';
import LoginComponent from './Components/LoginComponent';
const Conteo = function() {
  setTimeout(function(){
    // CambiarPantalla();
  }, 3000);
};





function App() {
  return (

    
    <Router>
      <Switch>
        <Route path="/" exact>
      <SplashScreenComponent/>
      </Route>

      <Route path="/Login">
      <LoginComponent/>
      </Route>

      <Route path="/HomeScreen">
      <HomeScreenComponent/>
      </Route>
      </Switch>
      
    </Router>
    
  );
}

export default App;
