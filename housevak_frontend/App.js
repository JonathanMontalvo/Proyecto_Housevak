import React from 'react'
import  Cards from './components/Cards'
import  "./App.css"
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Escoger from './components/Escoger'
import InicioSesion from './components/Escoger'
import Registro from './components/Registro'
function App(){
  return(
    <div > 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Escoger/>} />
      <Route path="/iniciosesion" element={<InicioSesion/>} />
      <Route path="/Registro" element={<Registro/>} />
       <Route path="/Catalogo" elements={<Cards/>}/> 
    </Routes>
    <NavBar/>
      
    </BrowserRouter>
      
    </div>
  )
}

export default App