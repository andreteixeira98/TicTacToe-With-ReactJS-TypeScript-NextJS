import { memo } from 'react';
import styles from '../styles/components/Header.module.css';



function Header() {
    return (

        <header className={styles.Header}>
            <h1 style={{ color: 'var(--blue)' }}>Tic</h1>
            <h1 style={{ color: 'var(--red)' }}>Tac</h1>
            <h1 style={{ color: 'var(--green)' }}>Toe</h1>
        </header>
    );
}

export default memo(Header);