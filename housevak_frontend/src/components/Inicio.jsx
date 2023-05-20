import React from "react";
import Button from "@mui/material/Button";
import image1 from '../assets/casa-1.jpg' 
import './Sesion.css';
const imagen=
{
    imag:image1
}    
function Inicio()
{
    return(
        <>
        <div className="Inicio">
        <img src={imagen.imag} alt='a' height={500}/>
        </div>
        <div  className="Texto">
        <h1>Vende tu casa de inmediato</h1>
        <p>Te pagamos tu vivienda en dias y nos encargamos del resto</p>
        <Button  type="submit" variant="contained" sx={{mt:2}}>Click</Button>
        </div>
        
        </>
    )
}

export default Inicio