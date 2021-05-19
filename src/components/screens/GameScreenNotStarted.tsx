

import { memo } from 'react';
import imageTicTacToe from '../../images/TicTacToe.png';
import styles from '../../styles/components/screens/GameScreenNotStarted.module.css';
import StartGameButton from '../StartGameButton';

function GameScreenNotStarted() {
    return (
        <div className={styles.gameScreenNotStarted}>
            <img
                src={imageTicTacToe}
                alt="Tic Tac Toe Image"
                width={300}
                height={300}
            />
            <StartGameButton />
        </div>
    );
}
export default memo(GameScreenNotStarted);