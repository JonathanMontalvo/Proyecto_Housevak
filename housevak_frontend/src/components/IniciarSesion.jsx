import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Sesion.css";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const errorMessage = validate(user, email, password);
  const errorUsuario = validateUs(user);
  const errorEmail = validateEm(email);
  const errorPas = validatePas(password);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <div
        className="conteiner"
        style={{
          marginTop: "-50px",
          marginLeft: "10px",
        }}
      >
        <Box
          onSubmit={(ev) => {
            ev.preventDefault();
            login(user, email, password);
          }}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              width: "200px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              fontSize: "2rem",
              marginTop: "-100px",
              marginLeft: "110px",
            }}
          >
            Inicio Sesión
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Usuario"
              variant="outlined"
              name="user"
              value={user}
              onChange={(ev) => setUser(ev.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Correo electrónico"
              type="email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Contraseña"
              type="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            disabled={errorMessage}
            sx={{ mt: 3 }}
          >
            <Link to="/usuario/inicio">Ingresar</Link>
          </Button>
        </Box>
      </div>
    </div>
  );
};
const login = (user, email, password) => {
  if (
    user === "JONATHAN._.MP" &&
    email === "L20280711@TOLUCA.TECNM.MX" &&
    password === "1q2W3E4R5t6"
  )
    <Link to="/usuario/inicio"></Link>;
  else alert("Login incorrecto");
};
const validate = (user, email, password) => {
  if (user.length < 13) return "Usuario incorrecto";
  if (!email.includes("@")) return "Email incorrecto";
  if (password.length < 11) return "Contraseña incorrecta";
};
const validateUs = (user) => {
  if (user.length < 13) return "Usuario incorrecto";
};
const validateEm = (email) => {
  if (!email.includes("@")) return "Email incorrecto";
};
const validatePas = (password) => {
  if (password.length < 11) return "Contraseña incorrecta";
};
export default IniciarSesion;
