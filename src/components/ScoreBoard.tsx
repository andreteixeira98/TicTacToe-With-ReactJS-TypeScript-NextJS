import { ChangeEvent, memo, useContext } from 'react';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import styles from '../styles/components/scoreBoard.module.css';

function ScoreBoard() {
    const {
        player1,
        player2
    } = useContext(ticTacToeContext);

    function handleGetNamePlayer1(event: ChangeEvent<HTMLInputElement>) {
        player1.name = event.target.value;
    }

    function handleGetNamePlayer2(event: ChangeEvent<HTMLInputElement>) {
        player2.name = event.target.value;
    }
    return (
        <form className={styles.scoreBoard}>
            <input
                type="text"
                placeholder={player1.name}
                autoFocus
                onChange={event => handleGetNamePlayer1(event)}
            />
            <span> {player1.score} X {player2.score} </span>
            <input
                type="text"
                placeholder={player2.name}
                onChange={event => handleGetNamePlayer2(event)}
            />
        </form>
    );
}

export default memo(ScoreBoard);