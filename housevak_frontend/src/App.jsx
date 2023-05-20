import React from 'react'
import  Cards from './components/Cards'
import  "./App.css"
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Escoger from './components/Escoger'
import Registro from './components/Registro'
import DescripCard from './components/DescripCard'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from  './components/ItemDetailContainer'
import IniciarSesion from './components/IniciarSesion'
import "./main.css"
import ConNav from './components/ConNav'
import ConNav2 from './components/ConNavItm'
import Usuario from './components/Usuario'
import Registroo from './components/Registroo'
import ConNavUs from './components/ConNavUs'
import ConNavInc from './components/ConNavInc'
const cam=1;
function App(){
  return(
    
    <div className='App' > 
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Escoger/>} />
      <Route path="iniciosesion/inicio/Catelog" element={<ConNav/>} />
      <Route path="iniciosesion/inicio" element={<ConNavInc/>} />
      <Route path="iniciosesion/Catelog/perfil" element={<ConNavUs/>} />
      <Route path="Registro/Catelog" element={<ConNav/>} />
      <Route path="Registro/Inicio" element={<ConNavInc/>} />
      <Route path="/Usuario" element={<Usuario/>} />
      <Route path="/iniciosesion" element={<IniciarSesion/>} />
      <Route path="/Registro" element={<Registroo/>} />
       <Route path="/Catalogo" element={<Cards/>}/>
       <Route path="/item/:id" element={<ConNav2/>}/>
       <Route path="iniciosesion/inicio/Catelog/:categoria" element={<ConNav/>}/> 
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}
export default App