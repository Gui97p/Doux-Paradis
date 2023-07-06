import React from 'react';
import './Welcome.css';

function Welcome() {
    return <section className="area_welcome">
        <div className="container normal_width2">
            <div className="align">
                <h1>Bem-Vindo</h1>
                <a href="#"><button type="button">Faça já sua reserva!</button></a>
            </div>
        </div>
    </section>;
}

export default Welcome;
