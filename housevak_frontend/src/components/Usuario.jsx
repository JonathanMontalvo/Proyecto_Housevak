import React from 'react';
import UsuarioI from '../assets/Usuario.png';
import './Sesion.css';
const imagne='https://i.pinimg.com/originals/d4/73/1c/d4731c7e712f6f01c7ec5fb1b491a810.png';
function Usuario()
{
    return(
        <>
        <div className='datos'>           
            <img src={UsuarioI} alt='Usuario' height="200"/>
            <div>
            <h1>Nombre de usuario: JONATHAN._.MP</h1>
            <h1>Nombre : JONATHAN</h1>
            <h1>Apellidos : MONTALVO PÉREZ </h1>
            <h1>Fecha nacimiento : 09/08/02 </h1>
            <h1>Sexo : Hombre </h1>
            <h1>Correo :L20280711@TOLUCA.TECNM.MX</h1>
            <h1>Número : +52-729-765-4321 </h1>
            <h1>Codigo postal : 52149 </h1>
            <h1>Pais : México</h1>
            <h1>Estado :Estado de Mexico</h1>
            <h1>Ciudad : Metepec</h1>
            <h1>Direccion : Av Tecnológico 100-s/n, AGRÍCOLA</h1>

            </div>
            
        </div>
        </>        
    )
}

export default Usuario