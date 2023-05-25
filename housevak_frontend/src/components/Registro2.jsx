import React from "react";
import { useState } from "react";
import Registroo from "./Registroo";
import { useEffect } from "react"
import { helpHttp } from "../helpers/helperHttp";



const  Registro2 = ()=>{
    const[db,setDb]=useState([]);
    const[dataToEdit,setDataToEdit]=useState(null);
    
    let api= helpHttp();
    let url="http://localhost:5000/perfiles";

    useEffect(()=> {
      helpHttp().get(url).then((res)=> {
        console.log(res);
        if(!res.err) {
          setDb(res);
        }else{
          setDb(null);
        }
       });
    },[url])

    const createData =(data) => {
      data.id= Date.now();
      setDb({...db,data});
    }

   

    const updateData =(data)=> {
      let newData =db.map((el)=>(el.id===data.id?data:el));
      setDb(newData)
    };

    const deleteData =(id)=> {
      let isDelete = window.confirm(
        `¿Estas seguro de eliminar el registro con el id'${id}'?`); 
        if(isDelete){
            let newData =db.filter((el)=> el.id!==id);
            setDb(newData);
          }else{
            return;
          }
    }
   
    return(
        <div>
            <Registroo  createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit} />
        </div>
    )
};
export default Registro2