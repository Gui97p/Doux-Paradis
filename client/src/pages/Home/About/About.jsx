import React from 'react';
import aboutImage from '../../../imgs/Brownies2.png';
import './About.css';

function About() {
    return <section className="area_about">
        <div className="container normal_width">
            <img className="normal_width2" src={aboutImage} alt="brownies image" />
            <div className="about normal_width2">
                <h1>Sobre</h1>
                <div className="texts">
                    <p>Essa é a sua página Sobre. Esse espaço é uma ótima oportunidade
                    de dar uma visão completa sobre quem é você, o que você faz e o
                    que o site tem a oferecer. Os seus visitantes estão realmente
                    interessados em saber mais sobre você. Portanto, não tenha medo
                    de compartilhar histórias pessoais para criar um ambiente maisamigável.
                    </p>
                    <p>Se você for uma empresa, fale sobre como começou e compartilhe
                    sua jornada profissional. Explique seus valores, o comprometimento
                    com os clientes e como se destaca da concorrência. Adicione uma
                    imagem, galeria ou vídeo para ainda mais engajamento dos
                    usuários.
                    </p>
                </div>  
            </div>
        </div>
    </section>;
}

export default About;
