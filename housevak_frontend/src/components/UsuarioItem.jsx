import React from "react";
import { Link } from "react-router-dom";

const ItemUsuarios = ({ inmueble }) => {
  return (
    <div className="inmueble">
      <img src={inmueble.imagen} title="example image" />
      <div>
        <h2>{inmueble.title}</h2>
        <p>Precio: ${inmueble.price}</p>
        <p>{inmueble.description}</p>
        <Link className="ver-mas" to={`/usuario/catalogo/item/${inmueble.id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
