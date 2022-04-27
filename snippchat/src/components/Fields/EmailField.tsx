import React from 'react';
import './TextField.scss';
import {TextField} from "./TextField";

export function EmailField() {
    return (
        <TextField placeholder={'email'} type={"email"}/>
    );
}
