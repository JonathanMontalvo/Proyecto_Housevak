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

export default function Registro() {
  return (
    <>
      <h1>Registro</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" />
        </div>
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
          <TextField
            id="outlined-basic"
            label="Confirmación"
            type="password"
            variant="outlined"
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
              <FormControlLabel value="O" control={<Radio />} label="Otro" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Registrarte
          </Button>
        </div>
      </Box>
    </>
  );
}
