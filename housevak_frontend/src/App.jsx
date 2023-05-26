import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Escoger from "./components/Escoger";
import Registro from "./components/Registro";
import DescripCard from "./components/DescripCard";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import IniciarSesion from "./components/IniciarSesion";
import "./main.css";
import ConNav from "./components/ConNav";
import ConNavUsuarios from "./components/ConNavUsuarios";
import ConNavItm from "./components/ConNavItm";
import ConNavItmUsuarios from "./components/ConNavItmUsuarios";
import Usuario from "./components/Usuario";
import Registroo from "./components/Registroo";
import ConNavUs from "./components/ConNavUs";
import ConNavInc from "./components/ConNavInc";
import ConNavIncUsuarios from "./components/ConNavIncUsuarios";
import Agregar from "./components/Agregar";
import Registro2 from "./components/Registro2";
import ConNavNosotros from "./components/ConNavNosotros";
import ConNavNosotrosUsuarios from "./components/ConNavNosotrosUsuarios";

const cam = 1;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registro2 />} />
          <Route path="/invitado/inicio" element={<ConNavInc />} />
          <Route path="/usuario/inicio" element={<ConNavIncUsuarios />} />
          <Route path="/invitado/nosotros" element={<ConNavNosotros />} />
          <Route
            path="/usuario/nosotros"
            element={<ConNavNosotrosUsuarios />}
          />
          <Route path="catalogo/item/:id" element={<ConNavItm />} />
          <Route path="catalogo/item/:id" element={<ConNavItmUsuarios />} />
          <Route path="/invitado/catalogo/:categoria" element={<ConNav />} />
          <Route
            path="/usuario/catalogo/:categoria"
            element={<ConNavUsuarios />}
          />
          <Route path="/invitado/iniciosesion" element={<IniciarSesion />} />
          <Route path="/invitado/registro" element={<Registroo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
