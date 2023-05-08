import React, { useState } from 'react'
import Styles from '../css/componentsCss/Sidebar.module.css'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/circle-logo-turbine-png.png'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => setSidebar(!sidebar)

    return (
        <div className={Styles.Container}>

            <ul className={Styles.MobileSidebar} style={{ display: !sidebar ? 'none' : 'flex' }}>
                <li>
                    <Link to="Create" onClick={() => setSidebar(false)} >
                        <div>prueba</div>
                    </Link>
                </li>
                <li>
                    <Link to="Edit" onClick={() => setSidebar(false)} >
                        <div>hola</div>
                    </Link>
                </li>
            </ul>


            {/* Hamburguer */}
            <div onClick={handleClick} className={Styles.MenuIcon}>
                {!sidebar ? <FaBars className={Styles.prueba} /> : <FaTimes />}
            </div>

            <figure>
                <img
                    alt='Company Logo'
                    className={Styles.Logo}
                    src={logo}
                />
            </figure>


            <ul className={Styles.BreakpointSidebar}>
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