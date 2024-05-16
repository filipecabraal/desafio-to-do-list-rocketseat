import './Header.module.scss';

import logo from '../assets/logo.svg'

export function Header() {
    return(
        <>
            <header>
                <img src={logo} alt="Logotipo rocket to-do list desafio Rocketseat" />
            </header>
        </>
    );
}