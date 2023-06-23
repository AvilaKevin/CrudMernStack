import { useState } from 'react';
import Styles from '../css/componentsCss/Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import logo from '../images/circle-logo-turbine-png.png';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    // Open and close the sidebar
    const handleClick = () => setSidebar(!sidebar);

    return (
        <div className={Styles.Container}>
            {/* Mobile menu */}
            <ul className={Styles.MobileSidebar} style={{ display: !sidebar ? 'none' : 'flex' }}>
                <li className={Styles.li}>
                    <Link to='/' onClick={() => setSidebar(false)} className={Styles.Link}>
                        Customers
                    </Link>
                </li>
                <li className={Styles.li}>
                    <Link to='Create' onClick={() => setSidebar(false)} className={Styles.Link}>
                        Create
                    </Link>
                </li>
            </ul>

            {/* Hamburguer */}
            <div onClick={handleClick} className={Styles.MenuIcon}>
                {!sidebar ? <FaBars className={Styles.prueba} /> : <FaTimes />}
            </div>

            <div className={Styles.ContainerLogoMobile}>
                <figure>
                    <img alt='Company Logo' className={Styles.Logo} src={logo} />
                </figure>
            </div>

            {/* Desktop menu */}
            <div className={Styles.BreakpointSidebar}>
                <div className={Styles.ContainerLogoDesktop}>
                    <figure>
                        <img alt='Company Logo' className={Styles.Logo} src={logo} />
                    </figure>
                    <div>
                        <h1 className={Styles.h1}>COMPANY</h1>
                        <h2 className={Styles.h2}>SLOGAN</h2>
                    </div>
                </div>
                <h1 className={Styles.H1Menu}>Main Menu</h1>
                <ul>
                    <li className={Styles.li}>
                        <Link to='/' className={Styles.Link}>
                            <i className={Styles.i}>
                                <HiOutlineUsers />
                            </i>{' '}
                            Customers
                        </Link>
                    </li>
                    <li className={Styles.li}>
                        <Link to='Create' className={Styles.Link}>
                            <i className={Styles.i}>
                                <MdOutlineCreateNewFolder />
                            </i>{' '}
                            Create
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
