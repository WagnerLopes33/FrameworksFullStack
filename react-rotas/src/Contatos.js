import React from 'react';
import { Link } from 'react-router-dom'

export default function Usuario(){
    return(
        <div>
           <nav>
                <ul>
                    <li>
                    <Link to='/'>Retornar a página inicial</Link>
                    </li>
                    <li>
                    <Link to='/sobre/aula'>Ir para sobre</Link>
                    </li>
                    <li>
                    <Link to='/usuario'>Usuario</Link>
                    </li>
                </ul>
           </nav>

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