import React from "react";
import Button from "@mui/material/Button";
import image1 from "../assets/casa-1.jpg";
import "./Sesion.css";

const imagen = {
  imag: image1,
};

function Inicio() {
  return (
    <>
      <div
        className="Inicio"
        style={{
          marginLeft: "50px",
        }}
      >
        <img
          src={imagen.imag}
          alt="Venta"
          style={{
            width: "730px",
            height: "430px",
          }}
        />
      </div>
      <div
        className="Texto"
        style={{
          marginTop: "-400px",
          marginLeft: "850px",
        }}
      >
        <h1 style={{ width: "180%" }}>Vende tu casa de inmediato</h1>
        <p style={{ width: "190%" }}>
          Olvídate del estrés de vender una casa, nosotros te ayudamos en todo
          para que disfrutes del cambio de forma fácil, rápida y segura. <br />
          Te pagamos tu vivienda en días y nos encargamos del resto.
        </p>
        <div style={{ marginLeft: "120px", marginTop: "1px" }}>
          <Button type="submit" variant="contained">
            Postularme
          </Button>
        </div>
      </div>
    </>
  );
}

export default Inicio;
