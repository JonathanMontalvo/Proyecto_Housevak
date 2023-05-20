
import { pedirItemPorId } from "./pedirProductos";
import IteamDetail from "./ItemDetail"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer =() =>{

    const [item,setItem]=useState(null);
    const id =useParams().id;

    useEffect(()=> {
        pedirItemPorId(Number(id))
        .then((res)=>{
            setItem(res);
        })
    },[id])

    return(
        <div>
            {item && <IteamDetail item={item} />}
        </div>
    )

}

export default ItemDetailContainer