import React from 'react';
import './AuthorizationPage.scss';
import {AuthForm} from "../../components/AuthForm/AuthForm";

export function AuthorizationPage() {
    return (
        <div className="auth-container">
            Auth
            <AuthForm title={'Авторизация'}/>
        </div>
    );
}
