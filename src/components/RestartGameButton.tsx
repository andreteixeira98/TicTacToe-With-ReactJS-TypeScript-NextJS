import { memo, useContext } from 'react';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import styles from '../styles/components/RestartGameButton.module.css';


function RestartGameButton() {
    const {
        restartGame
    } = useContext(ticTacToeContext);
    return (
        <button
            className={styles.restartGameButton}
            onClick={restartGame}
        >
            Restart
        </button>
    );
} 
export default memo(RestartGameButton);