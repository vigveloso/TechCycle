import React, {Component} from 'react';

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import { parseJwt } from '../services/auth';

import '../assets/css/padrao.css';
import '../assets/css/listausuario.css';

import {Link} from "react-router-dom"
// import console = require('console');

class ListarUsuarios extends Component {


    render(){
        return(
            <div>
                <CabecalhoAdm/>

                <main>

                    <section className="titulo_usuario">
                        <h1>Lista de Usuario</h1>
                        <hr></hr>
                    </section>

                    <section>
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>Id Usuario</th>
                                    <th>Login Usuario</th>
                                    <th>Senha</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Foto</th>
                                    <th>Departamento</th>
                                    <th>Tipo Usuario</th>
                                    <th>Comentario</th>
                                    <th>Interesses</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                                    
                            </tbody>
                        </table>
                    </section>


                </main>

                <Rodape/>
            </div>
        );
    }
}

export default ListarUsuarios;
    