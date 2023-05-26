import { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("Inmuebles");
  useEffect(() => {
    pedirProductos().then((res) => {
      if (categoria) {
        setInmuebles(res.filter((inme) => inme.categoria === categoria));
        setTitulo(categoria);
      } else {
        setInmuebles(res);
        setTitulo("Inmuebles");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList inmuebles={inmuebles} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
