import './App.css';
//import Registro from "./components/Registro"
//import InicioSesion from "./components/InicioSesion"
//import Recuadros from "./components/Recuadros"
import Recuadro from './components/Recuadro';
//import React,{useState} from 'react';
//import {BrowserRouter,Link,Route } from 'react-router-dom'
//import { Switch } from '@mui/material';
//import InicioSesion from './InicioSesion';

///const Home = () => <h1>InicioSesion</h1>

//const Notes = () =><h1>Registro</h1>

//const Users = () => <h1>Recuadro</h1>

//const inlineStyles = { 
//  padding: 5
//}
/*
const App = ()=> {
  return (
    <BrowserRouter>
    <header>
      <Link to='/'  style={inlineStyles}>
        Home
        </Link>
    <Link  to ='/notes' style={inlineStyles}>
      notes
    </Link>
    <Link to ='/users' style={inlineStyles}>
      users
    </Link>
    </header>
    <Switch>
    <Route path ='/notes' >
      <Notes/>
    </Route>
    <Route path ='/users'>
      <Users/>
      </Route>
      <Route path ='/'>
        <Home/>
      </Route>
    </Switch>
    </BrowserRouter>

  );
}
*/
function App()
{
  return(
    <div className='App'>
      <Recuadro/>
    </div>
  );
}
export default App;
