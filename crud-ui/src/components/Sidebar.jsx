import React, { useState } from 'react'
import '../css/ComponentsCss/Sidebar.css'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/circle-logo-turbine-png.png'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => setSidebar(!sidebar)

    return (
        <div className='Container'>

            <ul className='Mobile-Sidebar' style={{ display: !sidebar ? 'none' : 'flex' }}>
                <li>
                    <Link to="Create">
                        <div>prueba</div>
                    </Link>
                </li>
                <li>
                    <Link to="Edit">
                        <div>hola</div>
                    </Link>
                </li>
            </ul>

            <figure>
                <img
                    className='Logo'
                    src={logo}
                />
            </figure>


            {/* Hamburguer */}
            <div onClick={handleClick} className='MenuIcon'>
                {!sidebar ? <FaBars /> : <FaTimes />}
            </div>


            <ul className='Breakpoint-Sidebar'>
                <li>
                    <Link to="Create">
                        <div>prueba</div>
                    </Link>
                </li>
                <li>
                    <Link to="Edit">
                        <div>hola</div>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar