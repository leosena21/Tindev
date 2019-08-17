import React from 'react';
import './Login.css';

import logo from '../assets/tindevLogo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="TIndev Logo"/>
                <input placeholder="Digite seu usuario do GitHub"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}