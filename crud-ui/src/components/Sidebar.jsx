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

            {/* Mobile menu */}
            <ul className={Styles.MobileSidebar} style={{ display: !sidebar ? 'none' : 'flex' }}>
                <li className={Styles.li}>
                    <Link to="/" onClick={() => setSidebar(false)} className={Styles.Link}>
                        Customers
                    </Link>
                </li>
                <li className={Styles.li}>
                    <Link to="Create" onClick={() => setSidebar(false)} className={Styles.Link} >
                        Create
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


            {/* Desktop menu */}
            <ul className={Styles.BreakpointSidebar}>
                <li className={Styles.li}>
                    <Link to="/" className={Styles.Link} >
                        Customers
                    </Link>
                </li>
                <li className={Styles.li}>
                    <Link to="Create" className={Styles.Link} >
                        Create
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar