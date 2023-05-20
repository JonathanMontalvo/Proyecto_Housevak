import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from  './ItemDetailContainer'

export default function ConNav(){
    return(
        <div>
            <NavBar/>
        <ItemListContainer/>
        </div>
        
    )
    }