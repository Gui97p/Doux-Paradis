import React from 'react';
import './Welcome.css';

import { Link } from 'react-router-dom';

function Welcome() {
    return <section className="area_welcome">
        <div className="container normal_width2">
            <div className="align">
                <h1>Bem-Vindo</h1>
                <Link to="products"><button type="button">Faça já sua reserva!</button></Link>
            </div>
        </div>
    </section>;
}

export default Welcome;
