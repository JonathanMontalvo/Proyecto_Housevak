import React from "react";
import './Sesion.css';
import Button from "@mui/material/Button";
import { FormHelperText } from "@mui/material";
import {Link } from 'react-router-dom';

function Escoger(){
    return(
    <>
    <div className="conteiner2"><h1>Quieres iniciar sesion o registrarte</h1></div>
<div className="conteiner">
<div>
<Link to="iniciosesion">
<Button  
 type="submit" variant="contained" sx={{ mt: 2 }}>
Ingresar usuario
</Button>
</Link>
</div>
<div>
    <Link to="Registro">
    <Button  type="submit" variant="contained" sx={{mt:2}}>
Registrar usuario
</Button>
</Link>
</div>
</div>

    </>    
    );
}
export default Escoger