
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import './Css/App.css';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import firebase from './firebase/firebase';
import {auth} from "firebase/auth";




function App() {
  // firebase.auth().onAuthStateChanged(user => {
  //   console.log(user);
    
  //   user ? console.log('tu vieja gato') : console.log('tu mama') ;
  // });
  
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact>
      <SplashScreen/>

      </Route>
      <Route path="/RegisterScreen">
      <RegisterScreen/>
      </Route>

      <Route path="/LoginScreen">
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
