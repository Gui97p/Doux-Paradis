import React from 'react';
import './Contact.css';
import Input from '../../../components/Input/Input';
import Textarea from '../../../components/Textarea/Textarea';

function Contact() {
    return <section className="area_contact">
        <form className="form normal_width2" action="">
            <h1>Entre em contato</h1>
            <div className="inputs">
                <Input type="text"
                    name="name"
                    text="Nome *"
                    placeholder="Insira seu nome"
                />
                <Input type="text"
                    name="email"
                    text="Email *"
                    placeholder="Insira seu email"
                />
                <Input type="text"
                    name="sbuject"
                    text="Assunto *"
                    placeholder="Insira o assunto"
                />
                <Textarea name="msg" text="Mensagem"/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </section>;
}

export default Contact;
