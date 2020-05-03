import React from 'react';
import Link from '@material-ui/core/Link';
import './styles.scss';

export default function index(props) {
    return (
        <div id="container">
            <Link href={props.href} className={props.className} >
                {props.text}
            </Link>
        </div>
    )
}
