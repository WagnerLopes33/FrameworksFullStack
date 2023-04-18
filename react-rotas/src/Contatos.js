import React from 'react';
import { Link } from 'react-router-dom'

export default function Usuario(){
    return(
        <div>
            <h1>Home</h1>
            <Link to='/'>Retornar a página inicial</Link>

            <h1>Sobre</h1>
            <Link to='/sobre/aula'>Ir para sobre</Link>

            <h1>Usuario</h1>
            <Link to='/usuario'>Usuario</Link>

            <h1>Contatos</h1>
            <p> 
                <p>E-mail: teste@teste.com.br</p>
                <p>Telefone: (xx)xxxx-xxxx</p>
                <p>Whatsapp: (zz)zzzz-zzzz</p>
                <p>Instagram: teste.teste</p>
            </p>
        </div>
    );
}