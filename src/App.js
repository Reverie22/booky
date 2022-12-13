
import { BrowserRouter as Router, Switch, Route, Link, Routes,} from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/LoginScreen" element={<LoginScreen/>}/>
        <Route path="/HomeScreen" element={<HomeScreen/>}/>
        <Route path="/RegisterScreen" element={<RegisterScreen/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
