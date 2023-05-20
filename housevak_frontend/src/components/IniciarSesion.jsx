import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import './Sesion.css';

const IniciarSesion = ()=>
{
    const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[user,setUser]=useState('');
const errorMessage = validate(user,email,password);
const errorUsuario = validateUs(user);
const errorEmail= validateEm(email);
const errorPas=validatePas(password);
return(
    <>
    <div className="conteiner2">
    <h1>Inicio Sesion</h1>
    </div>
    <div className="conteiner">
    <Box 
    onSubmit={ev => {
        ev.preventDefault();
        login(user,email,password);
        }}
    component="form"
    sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        >
        <div >
<TextField 
id="outlined-basic" 
label="Usuario" 
variant="outlined" 
name="user"
value={user}
onChange={ev=> setUser(ev.target.value)}
/>
<p>{errorUsuario}</p>
</div>    
<div>
<TextField
id="outlined-basic"
label="Correo electrónico"
type="email"
variant="outlined"
name="email"
value={email}
onChange={ev=> setEmail(ev.target.value)}
/>
</div>
<p>{errorEmail}</p>
<div>
<TextField
id="outlined-basic"
label="Contraseña"
type="password"
variant="outlined"
name='password'
value={password}
onChange={ev=> setPassword(ev.target.value)}
/>
<p>{errorPas}</p>
</div>
<Button type="submit" variant="contained" disabled={errorMessage} sx={{ mt: 2 }}>
<Link to='Inicio'>
Ingresar
</Link>
</Button>
        </Box>
    </div>
        
    </>
)
}
const login=(user,email,password)=>{
    if(user ==='JONATHAN._.MP' && email==='L20280711@TOLUCA.TECNM.MX' && password==='1q2W3E4R5t6')
    <Link to="/Catalogo"></Link>
    else alert('Login incorrecto');
    };
const validate=(user,email,password)=>{
    if(user.length<13) return 'Usuario incorrecto';
    if(!email.includes('@')) return 'Email incorrecto';
    if(password.length<11) return 'Contraseña incorrecta';
    }
const validateUs=(user)=>{
        if(user.length<13) return 'Usuario incorrecto';
    }
const validateEm=(email)=>{
    if(!email.includes('@')) return 'Email incorrecto';
}
const  validatePas=(password)=>{
    if(password.length<11) return 'Contraseña incorrecta';
}
export default IniciarSesion
