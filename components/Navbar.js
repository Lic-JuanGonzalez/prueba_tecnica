// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Inicio</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link">Acerca</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/interests">
                        <a className="nav-link">Intereses</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact">
                        <a className="nav-link">Contacto</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
