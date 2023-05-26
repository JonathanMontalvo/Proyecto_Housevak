import React from "react";
import image1 from "../assets/Ejemplo nostros.jpeg";
import image2 from "../assets/Logo_Casa.jpeg";
import image3 from "../assets/logo.png";

const imagen = {
  imag1: image1,
  imag2: image2,
  imag3: image3,
};

function Nosotros() {
  return (
    <>
      <div>
        <div
          className="Texto"
          style={{
            marginTop: "20px",
            marginLeft: "740px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1
            style={{
              width: "200%",
              fontSize: "43px",
              fontWeight: "bold",
              fontFamily: "Impact, Charcoal, sans-serif",
            }}
          >
            HOUSEVAK
          </h1>
          <p style={{ width: "290%", fontSize: "18px" }}>
            HOUSEVAK es una plataforma en línea dedicada a la facilitación de
            venta, renta y compra de propiedades inmobiliarias.
          </p>
          <h2
            style={{
              width: "200%",
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "Impact, Charcoal, sans-serif",
              marginTop: "40px",
            }}
          >
            Misión
          </h2>
          <p style={{ width: "290%", fontSize: "18px" }}>
            Nuestra misión es conectar a compradores y vendedores de manera
            eficiente y segura, ofreciendo una amplia gama de inmuebles en
            diferentes ubicaciones y precios.
          </p>
          <h3
            style={{
              width: "200%",
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "Impact, Charcoal, sans-serif",
              marginTop: "40px",
            }}
          >
            Visión
          </h3>
          <p style={{ width: "290%", fontSize: "18px" }}>
            Nuestra visión es ser la plataforma digital líder en el mercado
            inmobiliario, conectando de manera eficiente a compradores,
            vendedores y arrendadores. Nos esforzamos por ofrecer una
            experiencia sencilla, segura y confiable, donde los usuarios puedan
            encontrar y realizar transacciones de venta, renta y compra de
            propiedades inmobiliarias de manera rápida y efectiva.
          </p>
        </div>
        <div className="Imagen">
          <img
            src={imagen.imag1}
            alt="Venta"
            style={{
              marginTop: "205px",
              marginLeft: "50px",
              width: "630px",
              height: "400px",
            }}
          />
          <h2
            style={{
              width: "200%",
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "Impact, Charcoal, sans-serif",
              marginTop: "40px",
              marginLeft: "50px",
            }}
          >
            Objetivo
          </h2>
          <p
            style={{
              marginTop: "20px",
              marginLeft: "50px",
              width: "290%",
              fontSize: "18px",
            }}
          >
            Facilitar y agilizar el proceso de búsqueda, selección y transacción
            <br />
            de propiedades inmobiliarias para compradores, vendedores y
            arrendadores, <br /> ofreciendo una plataforma confiable, intuitiva
            y segura.
          </p>
        </div>
        <div className="Imagen2">
          <img
            src={imagen.imag2}
            alt="Venta"
            style={{
              marginTop: "-893px",
              marginLeft: "855px",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className="Imagen2.1">
          <img
            src={imagen.imag2}
            alt="Venta"
            style={{
              marginTop: "-1243px",
              marginLeft: "930px",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className="Imagen2.2">
          <img
            src={imagen.imag2}
            alt="Venta"
            style={{
              marginTop: "-650px",
              marginLeft: "855px",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className="Imagen2.3">
          <img
            src={imagen.imag2}
            alt="Venta"
            style={{
              marginTop: "-460px",
              marginLeft: "190px",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className="Imagen3">
          <img
            src={imagen.imag3}
            alt="Logo"
            style={{
              marginTop: "-80px",
              marginLeft: "755px",
              width: "500px",
              height: "500px",
            }}
          />
          <h2
            style={{
              width: "200%",
              fontSize: "126px",
              fontWeight: "bold",
              fontFamily: "Impact, Charcoal, sans-serif",
              marginTop: "-380px",
              marginLeft: "60px",
            }}
          >
            BIENVENIDO <br /> A HOUSEVAK.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
