import React from "react";
import ReactPlayer from "react-player";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const ItemDetail = ({ item }) => {
  const phoneNumber = "527225953273"; // Reemplaza con el número de teléfono de WhatsApp al que deseas enviar mensajes
  const message =
    "¡Hola! Estoy interesado en este inmueble. ¿Podemos hablar al respecto?"; // Mensaje predefinido para el chat de WhatsApp
  const email = "ejemplo@example.com"; // Reemplaza con la dirección de correo electrónico a la que deseas enviar mensajes

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const recipient = "l20281438@toluca.tecnm.mx"; // Correo electrónico
    const subject = "Consulta sobre el inmueble"; // Asunto del correo electrónico
    const body = `Hola, estoy interesado en el inmueble "${item.title}". ¿Podrías brindarme más información al respecto?`; // Cuerpo del correo electrónico
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl);
  };

  return (
    <div className="container1" style={{ marginLeft: "45px" }}>
      <div
        className="Titulo"
        style={{ display: "flex", justifyContent: "normal" }}
      >
        <h3
          className="titulo"
          style={{
            marginTop: "20px",
            marginLeft: "40px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
          }}
        >
          {item.title}
        </h3>
      </div>
      <div
        className="imagenMap"
        style={{
          width: "320px",
          height: "300px",
          marginTop: "30px",
          marginLeft: "40px",
        }}
      >
        <img
          src={item.imagen}
          alt={item.title}
          style={{
            width: "310px",
            height: "300px",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "10px",
          marginLeft: "70px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.29591074641!2d-99.58812743425365!3d19.257389989755684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b100600c98d%3A0x50062df6247fdfb3!2sTecNM%20-%20Instituto%20Tecnol%C3%B3gico%20de%20Toluca!5e0!3m2!1ses-419!2smx!4v1685025999305!5m2!1ses-419!2smx"
          width="400"
          height="300"
          style={{
            width: "310px",
            height: "300px",
            marginTop: "70px",
            marginLeft: "-30px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="detalle-video">
        <div>
          <p
            className="descripcion"
            style={{
              width: "700px",
              height: "300px",
              marginTop: "-690px",
              marginLeft: "400px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            {item.descriptionlarge}
          </p>
          <p
            className="precio"
            style={{
              marginLeft: "400px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            Precio: ${item.price}
          </p>
          <div>
            <ReactPlayer
              url={item.urls}
              width="50%"
              height="400px"
              controls
              style={{
                marginTop: "25px",
                marginLeft: "400px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "-70px",
            marginLeft: "40px",
          }}
        >
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon style={{ fontSize: 40, color: "#25D366" }} />
          </a>
          <button onClick={handleWhatsAppClick}>Contactar por WhatsApp</button>
          <br />
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <EmailIcon
              style={{
                fontSize: 40,
                color: "#FF0000",
              }}
            />
          </a>
          <button onClick={handleEmailClick} style={{ marginTop: "20px" }}>
            Contactar por correo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
