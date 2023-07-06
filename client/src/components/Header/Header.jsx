import React from 'react';
import './Header.css';

function Header() {
    return <header className="header">
        <div className="container normal_width">
            <a href="#"><h1>Doux Paradis</h1></a>
            <nav className="nav">
                <a href="#">Página inicial</a>
                <a href="#">Produtos</a>
                <a href="#">Reservas</a>
            </nav>
        </div>
    </header>;
}

export default Header;
