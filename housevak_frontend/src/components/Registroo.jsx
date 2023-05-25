import  "./Estilos.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";
import {Link } from 'react-router-dom';
import { useState } from "react";
import './Regis.css';
import { SettingsSuggestSharp } from '@mui/icons-material';


const estados_mexico = [
    { value: "Aguascalientes", label: "Aguascalientes" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California Sur" },
    { value: "Campeche", label: "Campeche" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Colima", label: "Colima" },
    { value: "Durango", label: "Durango" },
    { value: "Estado de México", label: "Estado de México" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo León" },
    { value: "Oaxaca", label: "Oaxaca" },
    { value: "Puebla", label: "Puebla" },
    { value: "Querétaro", label: "Querétaro" },
    { value: "Quintana Roo", label: "Quintana Roo" },
    { value: "San Luis Potosí", label: "San Luis Potosí" },
    { value: "Sinaloa", label: "Sinaloa" },
    { value: "Sonora", label: "Sonora" },
    { value: "Tabasco", label: "Tabasco" },
    { value: "Tamaulipas", label: "Tamaulipas" },
    { value: "Tlaxcala", label: "Tlaxcala" },
    { value: "Veracruz", label: "Veracruz" },
    { value: "Yucatán", label: "Yucatán" },
    { value: "Zacatecas", label: "Zacatecas" }
  ];  
const pais =[{value: "Mexico", label:"Mexico"}];
const days = [];
for (let i = 1; i <= 31; i++) {
days.push({
value: i.toString(),
label: i.toString(),
});
}

const months = [
{
value: "1",
label: "Enero",
},
{
value: "2",
label: "Febrero",
},
{
value: "3",
label: "Marzo",
},
{
value: "4",
label: "Abril",
},
{
value: "5",
label: "Mayo",
},
{
value: "6",
label: "Junio",
},
{
value: "7",
label: "Julio",
},
{
value: "8",
label: "Agosto",
},
{
value: "9",
label: "Septiembre",
},
{
value: "10",
label: "Octubre",
},
{
value: "11",
label: "Noviembre",
},
{
value: "12",
label: "Diciembre",
},
];
const initailForm = {
  id: null,
  name: "",
};
const max = new Date().getFullYear();
const min = 1930;
const years = [];
for (let i = max; i >= min; i--) {
const year = i.toString();
years.push({
value: year.slice(-2),
label: year,
});
}

const Registroo = ({createData,updateData,datatoEdit,setDataToEdit})  => {
  const [form, setForm] = useState(initailForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };


    const[nombre,setNombre]=useState('');
    const[apellido,setApellido]=useState('');
    const[usuarior,setUsuarior]=useState('');
    const[contrasenia,setContrasenia]=useState('');
    const[contrasenia2,setContrasenia2]=useState('');
    const[dir,setDir]=useState('');
    const[num,setNum]=useState('');
    const[city,setCity]=useState('');
    const[cp,setCp]=useState('');
    const[correo,setCorreo]=useState('');
    const errorMessage = validate(usuarior,correo,contrasenia,contrasenia2,dir,num,city,cp);
    return(
        <>
        <div className="conteiner2">
        <h1>Registro</h1>
        </div>
        <div className="conteiner">
<Box 
 onSubmit={ev => {
  ev.preventDefault();

  if (!form.name ) {
    alert("Datos incompletos");
    return;
  }

  if (form.id === null) {
    createData(form);
  } else {
    updateData(form);
  }
    }}
component="form"
sx={{
"& .MuiTextField-root": { m: 1, width: "25ch" },
}}
noValidate
autoComplete="off">
<div>
<TextField id="outlined-basic" label="Nombre" variant="outlined" name='nombre' value={nombre} onChange={handleChange} />
<TextField id="outlined-basic" label="Apellido" variant="outlined"  name='apellido' value={apellido} onChange={ev=> setApellido(ev.target.value)} />
</div>
<div>
<TextField id="outlined-basic" label="Usuario" variant="outlined" name='usuarior' value={usuarior} onChange={ev=> setUsuarior(ev.target.value)} />
</div>
<div>
<TextField
id="outlined-basic"
label="Correo electrónico"
type="email"
variant="outlined"
name='correo' 
value={correo} 
onChange={ev=> setCorreo(ev.target.value)}
/>
</div>
<div>
<TextField
id="outlined-basic"
label="Contraseña"
type="password"
variant="outlined"
name='contrasenia' 
value={contrasenia} 
onChange={ev=> setContrasenia(ev.target.value)}
/>
<TextField
id="outlined-basic"
label="Confirmación"
type="password"
variant="outlined"
name='confirmacion'
value={contrasenia2} 
onChange={ev=> setContrasenia2(ev.target.value)}
/>
<FormHelperText sx={{ m: 1, width: "75ch" }}>
Usa 8 o más caracteres con una combinación de letras, <br></br>
números y símbolos
</FormHelperText>
</div>
<div>
<TextField
id="outlined-select-currency"
select
label="Dia"
defaultValue="1"
>
{days.map((option) => (
<MenuItem key={option.value} value={option.value}>
{option.label}
</MenuItem>
))}
</TextField>
<TextField
id="outlined-select-currency"
select
label="Mes"
defaultValue="1"
>
{months.map((option) => (
<MenuItem key={option.value} value={option.value}>
{option.label}
</MenuItem>
))}
</TextField>
<TextField
id="outlined-select-currency"
select
label="año"
defaultValue="23"
>
{years.map((option) => (
<MenuItem key={option.value} value={option.value}>
{option.label}
</MenuItem>
))}
</TextField>
</div>
<div>
<FormControl>
<FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel value="M" control={<Radio />} label="Mujer" />
<FormControlLabel value="H" control={<Radio />} label="Hombre" />
</RadioGroup>
</FormControl>
</div>
<div>
<TextField id="outlined-basic" label="Direccion" variant="outlined" 
name="dir" 
value={dir} onChange={ev=> setDir(ev.target.value)} />
<TextField id="outlined-basic" label="Telefono" variant="outlined" name="num" value={num} onChange={ev=> setNum(ev.target.value)} />
</div>
<div>
<TextField id="outlined-basic" label="Ciudad" variant="outlined" name="city" value={city} onChange={ev=> setCity(ev.target.value)}/>
<TextField id="outlined-basic" label="Codigo Postal" variant="outlined"name="cp" value={cp} onChange={ev=> setCp(ev.target.value)} />
</div>
<TextField
id="outlined-select-currency"
select
label="Estado"
defaultValue="Aguascalientes"
>
{estados_mexico.map((option) => (
<MenuItem key={option.value} value={option.value}>
{option.label}
</MenuItem>
))}
</TextField>
<TextField
id="outlined-select-currency"
select
label="Pais"
defaultValue="Mexico"
>
{pais.map((option) => (
<MenuItem key={option.value} value={option.value}>
{option.label}
</MenuItem>
))}
</TextField>
<div>
<Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={handleReset}>
Registrarte
</Button>
</div>
</Box>
        </div> 
        </>
               
    )
}
const login2=(usuarior,correo,contrasenia)=>{
    if(usuarior !=='' && correo !=='' && contrasenia!=='')
    <Link to="Registro/home"></Link>
    else alert('creacion incorrecta');
    };
    const validate=(usuarior,correo,contrasenia,contrasenia2,dir,num,city,cp)=>{
        if(usuarior.length<13) return 'Usuario no aceptado';
        if(!correo.includes('@')) return 'Email no aceptado';
        if(contrasenia.length<11) return 'Contraseña no aceptado';
        if(contrasenia2!==contrasenia) return 'la Contraseña no coinciden';
        if(dir.length<20) return 'direccion no valida';
        if(num.length<20 && num.includes('a')) return'numero no valido';
        if(city==='') return 'poner una ciudad'; 
        if (cp.length>6) return 'poner bien el codigo postal';
        }

export default Registroo