import { memo, useContext } from 'react';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import styles from '../styles/components/OptionsButtonsRestartExit.module.css';

function OptionsButtonsRestartExit() {
    const {
        restartGame,
        exitGame
    } = useContext(ticTacToeContext);
    return (
        <div className={styles.optionsButtonsRestartExit}>
            <button
                className={styles.buttonRestart}
                onClick={restartGame}
            >
                Restart
                </button>

            <button
                className={styles.buttonExit}
                onClick={exitGame}
            >
                Exit
                </button>
        </div>
    );
}

export default memo(OptionsButtonsRestartExit);