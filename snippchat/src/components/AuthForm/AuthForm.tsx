import React from 'react';
import './AuthForm.scss';
import {EmailField} from "../Fields/EmailField";
import {PasswordField} from "../Fields/PasswordField";

interface AuthFormProps {
    title: string
}

export function AuthForm(props: AuthFormProps) {
    return (
        <div className="auth-form">
            <span className={"auth-form__title"}>
                {props.title}
            </span>
            <EmailField />
            <PasswordField />
        </div>
    );
}
