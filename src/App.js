
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import './Css/App.css';
import LoginScreen from './Screens/LoginScreen';
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
      <SplashScreen/>
      </Route>

      <Route path="/Login">
      <LoginScreen/>
      </Route>

      <Route path="/HomeScreen">
      <HomeScreen/>
      </Route>
      </Switch>
      
    </Router>
    
  );
}

export default App;
