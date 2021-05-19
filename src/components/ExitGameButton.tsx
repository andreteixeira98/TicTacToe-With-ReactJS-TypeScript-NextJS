import { memo, useContext } from 'react';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import styles from '../styles/components/ExitGameButton.module.css';

function ExitGameButton() {
    const {
        exitGame
    } = useContext(ticTacToeContext);
    return (
        <button
            className={styles.exitGameButton}
            onClick={exitGame}
        >
            Exit
        </button>
    );
}
export default memo(ExitGameButton);