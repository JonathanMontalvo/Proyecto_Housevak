import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () =>{
    return(
        <nav className='navbar'>
            <Link to='/iniciosesion/inicio' className='logo'><h1>Housevak</h1></Link>
            <ul className='menu'>
                <li><Link className='menu-link' to='/iniciosesion/Inicio'>Inicio</Link></li>
                <li><Link className='menu-link' to='/iniciosesion/inicio/Catelog'>Inmuebles</Link></li>
                <li><Link className='menu-link' to='/iniciosesion/inicio/Catelog/Renta'>Renta</Link></li>
                <li><Link className='menu-link' to='/iniciosesion/inicio/Catelog/Venta'>Venta</Link></li>
                <li><Link className='menu-link' to='#'>Nosotros</Link></li>
                <li><Link className='menu-link' to='/iniciosesion/home/perfil'>Perfil</Link></li>
            </ul>
        </nav>
    )
}


export default NavBar