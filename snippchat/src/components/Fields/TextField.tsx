import React from 'react';
import './TextField.scss';

interface textFieldProps {
    placeholder: string,
    type: string
}

export function TextField(props: textFieldProps) {
    return (
        <input className="text-field" placeholder={props.placeholder} type={props.type} />
    );
}
