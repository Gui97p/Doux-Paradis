import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return <header className="header">
        <div className="container normal_width">
            <Link to="/"><h1>Doux Paradis</h1></Link>
            <nav className="nav">
                <Link to="/">Página inicial</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/reservations">Reservas</Link>
            </nav>
        </div>
    </header>;
}

export default Header;
