import React from 'react';
import Button from '@material-ui/core/Button';
import './styles.scss';

export default function index(props) {
    return (
        <div id="container">
            <Button variant="contained" className={props.className} color="primary" onClick={() => props.onClick()}>
                {props.text}
            </Button>
        </div>
    )
}
