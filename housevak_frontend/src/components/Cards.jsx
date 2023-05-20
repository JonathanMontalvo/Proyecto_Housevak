import React from 'react'
import Card from './Card'
import image1 from '../assets/casa-1.jpg' 
import image2 from '../assets/Casa 7.jpg'
import image3 from '../assets/Casa2.png'

const  cards= [
    {
        id:1,
        title:'Casa 1',
        image: image1,
        url:'https',
        text:'Casa Moderna de color azul'
    },
    {
        id:2,
        title:'Casa 2',
        image: image2,
        url:'https'
    },
    {
        id:3,
        title:'Casa 3',
        image:image3,
        url:'https'
    },
    {
        id:4,
        title:'Casa 4',
        image:image2,
        url:'jfe'
    },
    {
        id:5,
        title:'Casa 5',
        image:image3,
        url:'jgr'
    },
    {
        id:6,
        title:'Casa 6',
        image:image1,
        url:'jsw'
    }
]
function Cards()
{
    return(
        
        <div className='container d-flex justify-content-center  align-items-center h-100 '>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                <Card title={card.title} imageSource={card.image} text={card.text}/>
                
                </div>
                    ))
                }           
            </div>
        </div>
    )
}
export default Cards