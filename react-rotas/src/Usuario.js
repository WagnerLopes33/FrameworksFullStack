import React from 'react';
import { Link } from 'react-router-dom'

export default function Usuario(){
    return(
        <div>
            <h1>Home</h1>
            <Link to='/'>Retornar a página inicial</Link>

            <h1>Usuario</h1>
            <Link to='/usuario'>Ir para a página de usuário</Link>
        </div>
    );
}