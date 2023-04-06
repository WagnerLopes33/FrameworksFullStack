import React from 'react';
import { Link } from 'react-router-dom'

export default function Usuario(){
    return(
        <div>
            <h1>Home</h1>
            <Link to='/'>Retornar a página inicial</Link>

            <h1>Sobre</h1>
            <Link to='/sobre/aula'>Ir para sobre</Link>
        </div>
    );
}