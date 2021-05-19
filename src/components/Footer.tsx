import { memo } from 'react';
import styles from '../styles/components/Footer.module.css';
function Footer() {
    return (
        <footer className={styles.footer}>

            Copyright &copy;&nbsp;
            <a
                href="https://www.github.com/andreteixeira98"
                target="_blank"
                rel="noopener noreferrer"
            >
                André Teixeira
            </a>
        </footer>
    );
}

export default memo(Footer);