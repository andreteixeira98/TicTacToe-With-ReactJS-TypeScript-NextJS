import { memo, useContext } from 'react';
import styles from '../styles/components/StartButton.module.css';
import { ticTacToeContext } from '../contexts/TicTacToeContext';


function StartButton() {
    const {
        startGame
    } = useContext(ticTacToeContext);
    return (
        <button
            className={styles.startButton}
            onClick={startGame}
        >
            Start Game
        </button>
    );
}
export default memo(StartButton);