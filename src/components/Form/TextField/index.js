import React from 'react';
import TextField from '@material-ui/core/TextField';
import './styles.scss';

export default function index(props) {
    return (
        <div id="container">
            <TextField
                className={props.className}
                label={props.label}
                placeholder={props.placeholder}
                margin="normal"
                variant="outlined"
                required={props.required}
            />
        </div>
    )
}
