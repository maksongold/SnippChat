import React from 'react';
import './TextField.scss';
import {TextField} from "./TextField";

export function PasswordField() {
    return (
        <TextField placeholder={'PasswordField'} type={"password"}/>
    );
}
