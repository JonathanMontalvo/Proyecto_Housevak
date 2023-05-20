import React from 'react';
import ReactPlayer from 'react-player'; 
const ItemDetail =({item}) => {
    return(
        <div className="container">
            <div className="inmueble-detalle">
            <img src={item.imagen} alt={item.title}/>
            <div>
                <h3 className="titulo">{item.title}</h3>
                <p className="descripcion">{item.descriptionlarge}</p>
                <p className="precio">${item.price}</p>
                <ReactPlayer url={item.urls}
                width='90%'
                height='130%'
                controls
                />
            </div>
            </div>
        </div>
    )
}

export default ItemDetail