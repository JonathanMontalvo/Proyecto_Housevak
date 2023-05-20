import React from 'react'

function Imagen({imageSource}){
    return(
        <div>
            <img src={imageSource} alt="" className="card-img-top"  height="200"/> 
        </div>
    )
}
Imagen.prototype = {
    imageSource:PropTypes.string
}
export default Imagen