import { memo, useContext } from 'react';
import styles from '../styles/components/StartGameButton.module.css';
import { ticTacToeContext } from '../contexts/TicTacToeContext';


function StartGameButton() {
    const {
        startGame
    } = useContext(ticTacToeContext);
    return (
        <button
            className={styles.startGameButton}
            onClick={startGame}
        >
            Start Game
        </button>
    );
}
export default memo(StartGameButton);