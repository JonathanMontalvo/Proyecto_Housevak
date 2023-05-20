import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'
function Card({title,imageSource,text})
{
    return(
        <div className="card text-center bg-dark ">
           <div className="overflow">
           <img src={imageSource} alt="" className="card-img-top"  height="200"/>
           </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className='card-text text-secondary'>{
                    text ? text: 'Texto para la descripcion de las casas'
                } </p>
                <a href='#!' className='btn  btn-outline-secondary rounded-0'>
                    Go to this website
                </a>
            </div>
        </div>
    )
}
Card.propTypes = {
     title:PropTypes.string.isRequired,
     url:PropTypes.string,
     imageSource:PropTypes.string,
     text:PropTypes.string
}
export default Card