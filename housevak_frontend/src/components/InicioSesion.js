import React from "react";
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

export default function InicioSesion(){
    return(
    <>
    <h1>Inicio Sesion</h1>
    <Box
component="form"
sx={{
"& .MuiTextField-root": { m: 1, width: "25ch" },
}}
noValidate
autoComplete="off"
>
<div>
<TextField id="outlined-basic" label="Usuario" variant="outlined" />
</div>    
<div>
<TextField
id="outlined-basic"
label="Correo electrónico"
type="email"
variant="outlined"
/>
</div>
<div>
<TextField
id="outlined-basic"
label="Contraseña"
type="password"
variant="outlined"
/>
</div>
<div>
<Button type="submit" variant="contained" sx={{ mt: 2 }}>
Ingresar
</Button>
</div>
</Box>
    </>    
    );
}