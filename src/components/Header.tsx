import styles from './Header.module.scss';

import logo from '../assets/logo.svg'

export function Header() {
    return(
        <>
            <header className={styles.header}>
                <img src={logo} alt="Logotipo rocket to-do list desafio Rocketseat" />
            </header>
        </>
    );
}