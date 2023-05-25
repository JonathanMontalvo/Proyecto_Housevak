import data from "../data/usuarios.json";
import React, { useState } from 'react';
function Agregar() {
    const [jsonData, setJsonData] = useState(data);
    
    const agregarNuevoDato = () => {
      // Genera un nuevo dato con id y nombre
      const nuevoDato = {
        id: '3',
        nombre: 'nuevo-nombre'
      };
      
      // Agrega el nuevo dato al arreglo de datos
      const newData = [...jsonData, nuevoDato];
      
      // Actualiza los datos del archivo JSON utilizando setJsonData
      setJsonData(newData);
    };
    
    return (
      <div>
        <h2>Data{jsonData} perro
        </h2>
        <button onClick={agregarNuevoDato}>Agregar Nuevo Dato</button>
      </div>
    );
  }
  
export default Agregar