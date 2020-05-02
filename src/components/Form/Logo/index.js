import React from 'react';
import logo from '../../../img/logoprontmed.png';
import './styles.scss';

export default function index(props) {
    return (
        <div id="logo">
            <img src={logo} alt="Celke" width={props.width} height={props.height} />
            <h1>Área Restrita</h1>
        </div>
    )
}
