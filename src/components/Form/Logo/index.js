import React from 'react';
import logo from '../../../img/logoprontmed.png';
import './styles.scss';

export default function index(props) {
    return (
        <div className="logo">
            <img src={logo} alt="Celke" width={props.width} height={props.height} />
        </div>
    )
}
